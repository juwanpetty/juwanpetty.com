import { BlogItem } from "@/components/blog-item";
import { postsSortedByDate } from "@/features/blog/utilities";

export function BlogList() {
  const posts = postsSortedByDate.slice(0, 5);

  return (
    <div className="flex flex-col gap-y-3">
      {posts.map((post) => (
        <BlogItem
          key={post.url}
          slug={post.url}
          title={post.data.title}
          date={post.data.date.toISOString()}
        />
      ))}
    </div>
  );
}
