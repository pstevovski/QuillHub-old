import AuthService from "../../_services/auth";

export async function POST(request: Request) {
  try {
    const user = await request.json();
    await AuthService.register(user);
    return Response.json(
      { message: "User registered successfully!" },
      { status: 200 }
    );
  } catch (error) {
    // todo: handle the different possible error scenarios
    return Response.json(
      { error: "Failed creating new user!" },
      { status: 400 }
    );
  }
}
