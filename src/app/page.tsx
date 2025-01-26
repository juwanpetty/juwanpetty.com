import { getAllPosts } from "@/features/post/utilities";
import { PostList } from "@/features/post/post-list";
import { TopicList } from "@/features/topic/topic-list";

const topics = [
  { name: "personal", count: 22 },
  { name: "photography", count: 16 },
  { name: "technology", count: 16 },
  { name: "societal", count: 8 },
  { name: "travel", count: 7 },
  { name: "design", count: 7 },
  { name: "overlanding", count: 6 },
  { name: "running", count: 3 },
];

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div>
      <div className="h-12 xl:hidden" />

      <div className="space-y-24">
        <section>
          <h2 className="mb-4 text-balance text-base font-normal text-neutral-500">
            Topics
          </h2>

          <TopicList topics={topics} />
        </section>

        <PostList posts={posts} />
      </div>
    </div>
  );
}
