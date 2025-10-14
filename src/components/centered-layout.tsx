import { PropsWithChildren } from "react";

export function CenteredLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 py-32">
        <div className="mx-auto w-full max-w-173 px-6">{children}</div>
      </main>
    </div>
  );
}
