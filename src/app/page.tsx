import { getAllPosts } from "@/features/post/utilities";
import { PostList } from "@/features/post/post-list";
import { TopicList } from "@/features/topic/topic-list";
import { getPostTopicsAndCount } from "@/features/topic/utilities";
import { Fragment } from "react";

export default async function Home() {
  const posts = await getAllPosts();
  const topics = getPostTopicsAndCount(posts);

  return (
    <Fragment>
      <div className="h-30 xl:hidden" />

      <header className="mb-12 flex flex-col justify-between gap-6">
        <div>
          <h1 className="text-lg font-medium text-balance">Writing</h1>
          <div className="flex items-center justify-between text-sm">
            <p className="text-neutral-500">Some words here</p>
          </div>
        </div>
      </header>

      <div className="space-y-24">
        <section>
          <h2 className="mb-4 text-base font-normal text-balance text-neutral-500">
            Topics
          </h2>

          <TopicList topics={topics} />
        </section>

        <PostList posts={posts} />
      </div>
    </Fragment>
  );
}
