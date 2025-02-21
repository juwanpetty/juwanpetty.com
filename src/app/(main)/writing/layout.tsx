import { Fragment, ReactNode } from "react";
import { PageWrapper } from "@/components/page-wrapper";
import { SiteSidebar } from "@/components/site-sidebar";
import { Link } from "next-view-transitions";
import { url } from "@/utilities/url";
import { Icons } from "@/components/icons";

type Props = {
  children: ReactNode;
};

export default function WritingLayout({ children }: Props) {
  return (
    <Fragment>
      <SiteSidebar>
        {/* <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
            {section.title}
          </h4> */}
        <Link
          href={url.home()}
          className="flex w-full items-center rounded-md px-2 py-1 text-sm text-neutral-900 transition-colors"
        >
          <Icons.arrowTurnLeft2 className="mr-2 h-3 w-3" />
          <span>Go back</span>
        </Link>
      </SiteSidebar>
      <PageWrapper>{children}</PageWrapper>
    </Fragment>
  );
}
