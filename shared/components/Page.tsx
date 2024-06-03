import { PageHeader } from "@/components/PageHeader";
import { Aside } from "@/components/Aside";

type PageProps = {
  title?: string;
  subtitle?: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
};

function Page({ title, subtitle, aside, children }: PageProps) {
  return (
    <div className="relative flex w-full gap-4 md:pl-72">
      <div
        id="page-wrapper"
        className="relative flex min-h-[calc(100vh-3.5rem)] flex-grow flex-col pt-6"
      >
        <article id="page" className="mx-auto w-full max-w-screen-sm grow px-4">
          <PageHeader title={title} subtitle={subtitle} />
          {children}
        </article>
        <footer className="mx-auto w-full max-w-screen-sm px-4">
          <div className="flex justify-start py-6 text-sm">
            &copy; {new Date().getFullYear()} All rights reserved.
          </div>
        </footer>
      </div>
      <Aside>{aside}</Aside>
    </div>
  );
}

export { Page };
