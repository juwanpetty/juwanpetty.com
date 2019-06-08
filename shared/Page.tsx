import PageControls from "../components/PageControls";
import { PageHeader } from "../components/PageHeader";
import { Aside } from "./Aside";

type PageProps = {
  title?: string;
  subtitle?: string;
  breadcrumbs: { label: string; href: string }[];
  aside?: React.ReactNode;
  children: React.ReactNode;
};

function Page({ title, subtitle, breadcrumbs, aside, children }: PageProps) {
  return (
    <div className="relative flex w-full gap-4">
      <div
        id="page-wrapper"
        className="relative flex h-[calc(100vh-76px)] flex-grow flex-col overflow-hidden overflow-y-auto bg-stone-50 pt-12 md:rounded-lg md:border md:border-stone-200 md:pt-0"
      >
        <PageControls breadcrumbs={breadcrumbs} />

        <article
          id="page"
          className="mx-auto w-full max-w-screen-sm px-4 pt-12 md:pt-10"
        >
          <PageHeader title={title} subtitle={subtitle} />
          {children}
        </article>
      </div>
      <Aside>{aside}</Aside>
    </div>
  );
}

export { Page };
