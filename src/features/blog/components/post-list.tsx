import { PostCard } from "@/features/blog/components/post-card";
import type { Post } from "@/features/blog/types";

type Props = {
  posts: Post[];
};

export function PostList({ posts }: Props) {
  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </section>
  );
}
