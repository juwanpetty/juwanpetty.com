import { PostsItem } from "@/components/posts-item";
import { getSortedPosts } from "@/lib/content";

export function PostsList() {
  const posts = getSortedPosts();

  return (
    <div className="group/list flex flex-col justify-between">
      {posts.map((post) => (
        <PostsItem key={post._meta.path} post={post} />
      ))}
    </div>
  );
}
