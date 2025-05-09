import { Fragment } from "react";
import { Link } from "next-view-transitions";

export type BreadcrumbLink = {
  name: string;
  href?: string;
};

type Props = {
  links?: BreadcrumbLink[];
};

export function Breadcrumb({ links }: Props) {
  if (!links) {
    return null;
  }

  return (
    // <div className="flex items-center gap-3 text-sm leading-none">
    //   <div className="size-6 rounded-full bg-[#08C6FF]" />
    //   <span className="text-xs font-medium text-neutral-500">/</span>
    //   <span className="text-neutral-500">Design System</span>
    //   <span className="text-xs font-medium text-neutral-500">/</span>
    //   <span>Cultivating Taste</span>
    // </div>
    <div className="flex items-center gap-3 text-sm leading-none">
      <div className="size-6 rounded-full bg-[#08C6FF]" />
      <span className="text-xs font-medium text-neutral-500">/</span>
      {links.map((link, index) => {
        const { name, href } = link;

        const isLast = index === links.length - 1;
        const hasLink = href && href !== "";

        const content = !isLast ? (
          <Link href={href!} className="text-sm text-neutral-500">
            {name}
          </Link>
        ) : (
          <span className="text-sm">{name}</span>
        );

        return (
          <Fragment key={name}>
            {content}
            {!isLast && (
              <span className="text-xs font-medium text-neutral-500">/</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
