import { Fragment } from "react";

export default async function Dashboard() {
  return (
    <Fragment>
      <div className="w-full max-w-2xl">
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">
          Open Case
        </h1>
        <span className="inline-block max-w-[500px] text-base text-neutral-700">
          A set of beautifully-designed, accessible, and customizable components
          to help you build your component library. Open Source.
        </span>
      </div>
      <aside className="hidden w-72 xl:block">aside</aside>
    </Fragment>
  );
}
