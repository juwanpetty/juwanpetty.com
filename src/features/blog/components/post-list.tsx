import { PostCard } from "@/features/blog/components/post-card";
import type { Post } from "@/features/blog/types";
import { sortAndGroupPostsByYear } from "@/features/blog/utilities/post-utils";

type Props = {
  posts: Post[];
};

export function PostList({ posts }: Props) {
  const sortedAndGrouped = sortAndGroupPostsByYear(posts);

  return (
    <section className="">
      {sortedAndGrouped.map((group) => (
        <section key={group.year} className="mb-10">
          <h2 className="mb-4 text-base font-semibold">{group.year}</h2>
          <section className="grid gap-4">
            {group.posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </section>
        </section>
      ))}
    </section>
  );
}
