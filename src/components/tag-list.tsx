"use client";

import { cn } from "@/utilities/merge-classnames";
import { Link } from "next-view-transitions";
import { useSearchParams } from "next/navigation";

interface TagListProps {
  tags: TagProps[];
}

export function TagList({ tags }: TagListProps) {
  const searchParams = useSearchParams();

  const selectedTagsFromUrl = searchParams.get("t");
  const selectedTags = selectedTagsFromUrl
    ? selectedTagsFromUrl.split(",")
    : [];

  if (tags.length === 0) {
    return <div className="text-neutral-500">No tags available</div>;
  }

  console.log("Selected tags from URL:", selectedTags);

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Tag
          key={tag.name}
          name={tag.name}
          count={tag.count}
          isSelected={selectedTags.includes(tag.name)}
        />
      ))}
    </div>
  );
}

interface TagProps {
  name: string;
  count: number;
  isSelected?: boolean;
}

export function Tag({ name, count, isSelected }: TagProps) {
  return (
    <Link
      href={`/?t=${name}`}
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-full bg-neutral-100 px-2.5 py-1 pr-1.5 text-sm font-medium text-neutral-500",
        {
          "bg-neutral-200 text-neutral-900": isSelected,
        }
      )}
    >
      <span>{name}</span>
      <span className="flex size-5 items-center justify-center rounded-full bg-white">
        {count}
      </span>
    </Link>
  );
}
