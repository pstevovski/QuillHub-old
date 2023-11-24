export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="grid grid-cols-2">
      <section className="hidden md:flex flex-col justify-center items-center col-span-2 md:col-span-1 border-r w-full h-screen">
        <h1 className="text-5xl font-bold mb-1">QuillHub</h1>
        <p>Unfold Your Imagination, Share Your Universe</p>
      </section>

      <section className="h-screen col-span-2 md:col-span-1 flex flex-col justify-center items-center">
        {children}
      </section>
    </main>
  );
}
