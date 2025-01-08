import { SidebarLink } from "@/shared/components/sidebar-link";

type Props = {
  heading: string;
  links: { href: string; name: string }[];
};

export function SidebarSection({ heading, links }: Props) {
  return (
    <div>
      <h4 className="mb-2 rounded-md px-2 py-0 text-sm font-semibold">
        {heading}
      </h4>
      <div className="flex flex-col gap-0.5 text-sm">
        {links.map((link) => (
          <SidebarLink key={link.href} href={link.href}>
            {link.name}
          </SidebarLink>
        ))}
      </div>
    </div>
  );
}
