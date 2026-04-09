import { PostItem } from "@/components/post-item";
import { getSortedPosts } from "@/lib/content";

export function PostsList() {
  const posts = getSortedPosts();

  return (
    <div className="group/list flex flex-col justify-between">
      {posts.map((post) => (
        <PostItem key={post._meta.path} post={post} />
      ))}
    </div>
  );
}
