export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex h-22 items-center">
      <div className="mx-auto w-full max-w-173 px-6">
        <div className="text-sm text-neutral-500">
          &copy; {currentYear} • Juwan Petty
        </div>
      </div>
    </footer>
  );
}
