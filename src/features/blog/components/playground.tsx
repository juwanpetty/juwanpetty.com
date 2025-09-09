import { Fragment, PropsWithChildren } from "react";

type PlaygroundProps = PropsWithChildren & {
  caption?: string;
};

export function Playground({ caption, children }: PlaygroundProps) {
  return (
    <Fragment>
      <div className="-mx-6 my-8 w-[calc(100%+3rem)] sm:mx-0 sm:w-full">
        <div className="flex h-[320px] items-center justify-center gap-1 overflow-hidden rounded-none border-y border-neutral-200 bg-white shadow-none ring-0 ring-neutral-200 sm:rounded-xl sm:border-y-0 sm:shadow-sm sm:ring-1">
          {children}
        </div>
      </div>

      {caption && (
        <p className="-mt-4 mb-8 text-center text-sm text-neutral-500">
          {caption}
        </p>
      )}
    </Fragment>
  );
}
