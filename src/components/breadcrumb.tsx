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
    <div className="flex items-center space-x-1.5 text-base leading-none">
      {links.map((link, index) => {
        const { name, href } = link;

        const isLast = index === links.length - 1;
        const hasLink = href && href !== "";

        const content = hasLink ? (
          <Link href={href!} className="font-medium text-neutral-900">
            {name}
          </Link>
        ) : (
          <span className="text-neutral-500">{name}</span>
        );

        return (
          <Fragment key={name}>
            {content}
            {!isLast && (
              <Icons
                icon="chevronRightSmall"
                className="h-2.5 w-2.5 text-neutral-500"
              />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
