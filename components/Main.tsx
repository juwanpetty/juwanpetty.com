import { Header } from "@components/Header";

type Props = {
  children: React.ReactNode;
};

export function Main({ children }: Props) {
  return (
    <div className="pl:0 relative flex min-h-dvh flex-col items-center justify-start overflow-auto bg-white md:m-2 md:ml-72 md:min-h-[calc(100dvh-1rem)] md:rounded-2xl md:border md:border-solid md:border-neutral-200">
      <Header />
      <div className="flex w-full max-w-screen-md grow flex-col p-6 px-4">
        <main role="main" className="grow">
          {children}
        </main>
      </div>
    </div>
  );
}
