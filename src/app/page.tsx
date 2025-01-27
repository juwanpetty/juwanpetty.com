import { getAllPosts } from "@/features/post/utilities";
import { PostList } from "@/features/post/post-list";
import { TopicList } from "@/features/topic/topic-list";
import { getPostTopicsAndCount } from "@/features/topic/utilities";

export default async function Home() {
  const posts = await getAllPosts();
  const topics = getPostTopicsAndCount(posts);

  return (
    <div>
      <div className="h-12 xl:hidden" />

      <div className="space-y-24">
        <section>
          <h2 className="mb-4 text-base font-normal text-balance text-neutral-500">
            Topics
          </h2>

          <TopicList topics={topics} />
        </section>

        <PostList posts={posts} />
      </div>
    </div>
  );
}
