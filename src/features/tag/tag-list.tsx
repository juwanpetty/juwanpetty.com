import { TagLink } from "@/features/tag/tag-link";

type Props = {
  tags: {
    name: string;
    count: number;
  }[];
};

export function TagList({ tags }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <TagLink key={tag.name} tag={tag} />
      ))}
    </div>
  );
}
