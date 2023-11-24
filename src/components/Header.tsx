import Link from "next/link";

export default function Header() {
  // todo: Read current authentication status and render
  // different UI based on it.
  // If user is not signed in - display "Sign In" link
  // If user is signed in - display notifications icon and user dropdown menu
  return (
    <header className="flex justify-between content-center px-10 py-4 border-b">
      <Link href="/">QuillHub</Link>
      <Link href="/auth/signin">Sign In</Link>
    </header>
  );
}
