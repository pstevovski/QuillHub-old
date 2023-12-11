import { NextResponse } from "next/server";
import AuthService from "../../_services/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    await AuthService.signin(email, password);
    return NextResponse.json(
      { message: "Sign In successfull!" },
      { status: 200 }
    );
  } catch (error: any) {
    // todo: extract this in a constant?
    if (error.message.toLowerCase().includes("invalid credentials")) {
      return NextResponse.json({ error: error.message }, { status: 405 });
    } else {
      return NextResponse.json({ error: "Server Error!" }, { status: 500 });
    }
  }
}
