import { Link } from "next-view-transitions";
import { Tag } from "@/features/tag/types";
import { createTagSlug } from "@/features/tag/utilities";
import { url } from "@/utilities/url";

type Props = {
  tag: Tag;
};

export function TagLink({ tag }: Props) {
  const { name, count } = tag;
  const tagSlug = createTagSlug(name);

  return (
    <Link key={name} href={url.tagDetail(tagSlug)} className="group text-base">
      <span className="text-neutral-900">{name}</span>
      <sup className="text-neutral-500 transition-colors group-hover:text-blue-500">
        {count}
      </sup>
    </Link>
  );
}
