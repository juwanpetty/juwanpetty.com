import { Fragment } from "react";
import { Link } from "next-view-transitions";
import { Icons } from "@/components/icons";

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
    <nav
      aria-label="breadcrumb"
      className="flex items-center gap-2 text-sm font-medium"
    >
      {links.map((link, index) => {
        const { name, href } = link;
        const isLast = index === links.length - 1;

        const content =
          !isLast || href ? (
            <Link href={href!} className="tracking-[-0.1px] text-neutral-900">
              {name}
            </Link>
          ) : (
            <span className="truncate tracking-[-0.1px] text-neutral-500">
              {name}
            </span>
          );

        return (
          <Fragment key={name}>
            {content}
            {!isLast && (
              <span
                className="text-xs text-neutral-500"
                role="presentation"
                aria-hidden="true"
              >
                <Icons icon="arrowRight" className="h-4 w-4" />
              </span>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
