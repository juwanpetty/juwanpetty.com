export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-100 py-6 text-neutral-500 md:py-0">
      <div className="container px-6 py-4">
        <div className="text-center text-sm text-balance md:text-left">
          Built by{" "}
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Juwan Petty
          </a>
          . The source code is available on{" "}
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
