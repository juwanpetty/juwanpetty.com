import Link from "next/link";
import { Page } from "@/shared/Page";
import { Icon } from "@iconify/react";

async function WritingDetail() {
  return (
    <Page pageTitle="Creating Accessible Web Applications">
      <div className="relative mb-12 mt-8 flex flex-col">
        <h1 className="text-pretty pr-10 text-base font-medium text-sand-12">
          Creating Accessible Web Applications
        </h1>
        <p className="text-base text-sand-11">September 27, 2021</p>

        <div className="absolute -top-1 right-0 flex gap-2 text-sand-11">
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-full border border-solid border-sand-7 transition-colors hover:bg-sand-3 active:bg-sand-4"
          >
            <span className="sr-only">Copy link</span>
            <Icon icon="tabler:copy" className="size-4" />
          </button>
        </div>
      </div>

      <p className="text-base leading-7 text-sand-12">
        The data fetching library swr uses a clever technique to drastically
        reduce the number of React re-renders in components that share state. I
        call it hook getters, and just like state selectors, it stems from this
        idea: if you never use a certain value, why re-render when that value
        changes?
      </p>

      <div className="mt-12 border-t border-solid border-sand-6 pt-12">
        <Link href="/" className="flex flex-col items-end text-base">
          <span className="text-sand-11">Next</span>
          <span className="font-medium text-sand-12">Family Wallet</span>
        </Link>
      </div>
    </Page>
  );
}

export default WritingDetail;
