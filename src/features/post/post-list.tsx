import { Post } from "@/features/post/types";
import { PostLink } from "@/features/post/post-link";
import { sortAndGroupPostsByYear } from "@/features/post/utilities";

type Props = {
  posts: Post[];
};

export function PostList({ posts }: Props) {
  const sortedAndGrouped = sortAndGroupPostsByYear(posts);

  return (
    <section className="space-y-8">
      {sortedAndGrouped.map((group) => (
        <section key={group.year} className="mb-8">
          <h2 className="mb-4 text-balance text-base font-normal text-neutral-500">
            {group.year}
          </h2>

          <div className="grid gap-2">
            {group.posts.map((post) => (
              <PostLink key={post.slug} post={post} />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
