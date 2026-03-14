import { PageSection } from "@/components/page-section";

export default function ArticlesDetail() {
  return (
    <div className="mx-auto max-w-2xl py-14">
      <div></div>

      <div className="space-y-16">
        <div className="flex w-full flex-col gap-1.5 sm:w-auto">
          {/* <h1 className="inline-flex items-center gap-1 text-2xl font-medium"> */}
          <h1 className="text-secondary-foreground text-base font-medium">
            How I built a Next.js MDX table of contents
          </h1>
          <div className="text-muted-foreground -mt-0.5 -ml-px flex items-center gap-2 text-sm font-medium">
            <span>Nov 2025</span>
          </div>
        </div>

        <PageSection>
          <div className="space-y-5">
            <p className="text-muted-foreground text-base/7">
              I tested a number of different table of contents solutions before
              finding one that actually worked well with Turbopack. The winner
              was{" "}
              <code className="rounded-md border border-black/10 bg-white/90 px-1.5 py-0.5 font-mono text-[13px] leading-5 font-semibold text-black/80 !not-italic before:content-none after:content-none dark:border-white/10 dark:bg-white/5 dark:text-white/80">
                @stefanprobst/rehype-extract-toc
              </code>
              , which generates TOCs at build time with zero client JavaScript.
            </p>

            <p className="text-muted-foreground text-base/7">
              The{" "}
              <a
                className="text-secondary-foreground decoration-border hover:decoration-secondary-foreground font-medium underline underline-offset-3 transition-colors"
                href="https://github.com/stefanprobst/rehype-extract-toc#readme"
              >
                official documentation
              </a>{" "}
              helped with the basics, but it didn&apos;t cover Next.js 16&apos;s
              app router or address the Turbopack serialization issues I ran
              into. This guide walks through my complete setup so you can skip
              the trial and error.
            </p>
          </div>
        </PageSection>
      </div>
    </div>
  );
}
