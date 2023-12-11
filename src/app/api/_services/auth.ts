import db from "@/db/connection";
import { eq } from "drizzle-orm";
import { UserNew, users } from "@/db/schemas/users";
import { compare, hash } from "bcrypt";

class Auth {
  private BCRYPT_SALT_ROUNDS: number = 10;

  /** Encrypt the provided password before saving it in the database */
  private async userPasswordHash(password: string): Promise<string> {
    const hashedPassword: string = await hash(
      password,
      this.BCRYPT_SALT_ROUNDS
    );
    return hashedPassword;
  }

  /** Compare the provided password upon signin with the password thats saved in the database */
  private async userPasswordCompare(
    providedPassword: string,
    hashedPassword: string
  ): Promise<boolean> {
    const passwordsMatch: boolean = await compare(
      providedPassword,
      hashedPassword
    );
    return passwordsMatch;
  }

  async signin(email: string, providedPassword: string) {
    // todo: validate the provided values before continuing

    // Try to find the user that tried logging in the application
    const user = await db.select().from(users).where(eq(users.email, email));

    if (!user || !user[0]) throw new Error("Invalid Credentials!");

    // Compare the provided and the saved passwords for the targeted user
    const passwordsMatch: boolean = await this.userPasswordCompare(
      providedPassword,
      user[0].password
    );

    if (!passwordsMatch) throw new Error("Invalid Credentials!");

    // If everything is okay return "true" signaling the user is allowed to enter the application
    return true;
  }

  // todo: finish up this functionality
  async register(user: UserNew) {
    await db.insert(users).values({
      ...user,
      password: await this.userPasswordHash(user.password),
    });
  }
}

const AuthService = new Auth();

export default AuthService;
