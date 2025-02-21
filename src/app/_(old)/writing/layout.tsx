export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto min-h-dvh w-full max-w-2xl py-12 sm:py-16 sm:pt-32">
      <div className="px-4 md:px-0">{children}</div>
    </main>
  );
}
