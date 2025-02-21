import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PageWrapper({ children }: Props) {
  return (
    <main className="relative px-4 py-6 md:px-8 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px] xl:px-0">
      {children}
    </main>
    // <div className="px-4 py-6 md:gap-6 md:px-0 lg:py-8">
    //   <div className="flex justify-center lg:gap-10">{children}</div>
    // </div>
    // <div className="px-4 md:px-0">
    //<div className="mx-auto w-full max-w-2xl min-w-0">{children}</div> */}
    // </div>
  );
}
