import { Icons } from "@/components/icons";
import { PostCard } from "@/components/post-card";
import { SiteHeader } from "@/components/site-header";
import { BLOG_DIRECTORY } from "@/constants";
import { getAllPosts, PostMetadata } from "@/utilities/get-mdx-data";
import { Metadata } from "next";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Juwan Petty | Design Engineer",
};

export default async function Home() {
  const posts = await getAllPosts(BLOG_DIRECTORY);
  const sortedPosts = sortPostsByDateAndTitle(posts, 4);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="grow">
        <div className="mx-auto max-w-6xl px-5 pt-15 pb-15 md:pb-32 xl:px-0">
          <header className="mb-12 flex flex-col justify-between gap-6">
            <div className="space-y-2">
              <h1 className="my-5 text-4xl font-bold tracking-tight">
                Design Engineer
              </h1>
              <p className="max-w-[635px] text-base text-neutral-500 md:text-lg">
                Lorem ipsum, dolor sit amet consectetuer adipiscing, elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat, in uno loco.
              </p>
            </div>
          </header>

          <div>
            <div className="mt-15 mb-2 flex items-center justify-between sm:mt-20 sm:mb-4">
              <h3 className="text-xl font-semibold tracking-[-0.66px]">
                Latest Articles
              </h3>

              <Link href="/blog" className="flex items-center text-neutral-700">
                <span className="text-base">View articles</span>
                <Icons
                  icon="chevronRightSmall"
                  className="ml-2 h-3 w-3 text-neutral-500"
                />
              </Link>
            </div>

            <div className="h-px w-full bg-neutral-200" />

            <div className="mt-[30px] grid grid-cols-1 gap-[30px] lg:grid-cols-2 lg:grid-rows-2">
              {sortedPosts.map((post) => (
                <PostCard
                  key={post.slug}
                  post={post}
                  className="sm:grid-cols-2"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function sortPostsByDateAndTitle(
  posts: PostMetadata[],
  limit?: number
): PostMetadata[] {
  const sorted = [...posts].sort((a, b) => {
    const dateA = new Date(a.datePublished).getTime();
    const dateB = new Date(b.datePublished).getTime();

    if (dateA !== dateB) {
      return dateB - dateA;
    }

    return a.title.localeCompare(b.title);
  });

  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}
