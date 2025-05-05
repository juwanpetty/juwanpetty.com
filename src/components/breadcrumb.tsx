import { Fragment } from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";

export type BreadcrumbLink = {
  name: string;
  href: string;
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
        const isLast = index === links.length - 1;

        return (
          <Fragment key={link.name}>
            {isLast ? (
              <span className="text-neutral-500">{link.name}</span>
            ) : (
              <>
                <Link href={link.href} className="font-medium text-neutral-900">
                  {link.name}
                </Link>
                <Icons.chevronRightSmall className="h-2.5 w-2.5 text-neutral-500" />
              </>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
