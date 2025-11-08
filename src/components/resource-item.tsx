import Link from "next/link";

type ResourceItemProps = {
  resource: {
    title: string;
    href: string;
    description: string;
  };
};

export function ResourceItem({ resource }: ResourceItemProps) {
  const { title, href, description } = resource;

  return (
    <Link href={href} className="flex items-center gap-4">
      <span className="truncate text-base font-medium underline-offset-3 hover:underline">
        {title}
      </span>

      <span className="flex flex-1 shrink border-t border-dashed border-neutral-200" />

      <span className="text-base text-nowrap text-neutral-500">
        {description}
      </span>
    </Link>
  );
}
