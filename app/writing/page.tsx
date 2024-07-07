import React from "react";
import Link from "next/link";
import { Page } from "@/shared/Page";

async function Writing() {
  return (
    <Page>
      <section className="mb-16">
        <h2 className="mb-3 text-base font-medium">July&apos;s Thoughts</h2>

        <div className="flex flex-col gap-1">
          <Link
            href="/writing/on-the-state-of-the-web"
            className="flex items-baseline gap-2 text-base"
          >
            <h3 className="truncate text-sand-12">
              Creating Accessible Web Applications
            </h3>
            <div className="h-px min-w-4 grow border-b border-dotted border-sand-8" />
            <span className="w-[4ch] font-mono text-sand-11">19th</span>
          </Link>

          <Link
            href="/writing/on-the-state-of-the-web"
            className="flex items-baseline gap-2 text-base"
          >
            <h3 className="truncate text-sand-12">
              Tips for Optimizing Web Performance
            </h3>
            <div className="h-px min-w-4 grow border-b border-dotted border-sand-8" />
            <span className="w-[4ch] font-mono text-sand-11">12th</span>
          </Link>

          <Link
            href="/writing/on-the-state-of-the-web"
            className="flex items-baseline gap-2 text-base"
          >
            <h3 className="truncate text-sand-12">
              Exploring Modern JavaScript Frameworks
            </h3>
            <div className="h-px min-w-4 grow border-b border-dotted border-sand-8" />
            <span className="w-[4ch] font-mono text-sand-11">5th</span>
          </Link>
        </div>
      </section>
    </Page>
  );
}

export default Writing;
