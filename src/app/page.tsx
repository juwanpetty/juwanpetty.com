import { Icons } from "@/components/icons";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { PostCard } from "@/components/post-card";
import { SiteHeader } from "@/components/site-header";
import { BLOG_DIRECTORY } from "@/constants";
import { getAllPosts, PostMetadata } from "@/utilities/get-mdx-data";
import { Link } from "next-view-transitions";

export default async function Home() {
  const posts = await getAllPosts(BLOG_DIRECTORY);
  const sortedPosts = sortPostsByDateAndTitle(posts, 4);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="grow">
        <div className="mx-auto max-w-6xl px-5 pt-15 pb-15 md:pb-32 xl:px-0">
          <section className="mb-8">
            <div className="mt-15 mb-2 flex items-center justify-between sm:mt-20 sm:mb-4">
              <h3 className="text-xl leading-7 font-semibold tracking-[-0.2px]">
                Latest Projects
              </h3>

              <Link
                href="/projects"
                className="flex cursor-pointer items-center justify-center gap-1 rounded-[10px] border border-neutral-900/10 px-2.5 py-1.5 shadow-xs"
              >
                <span className="text-sm font-medium tracking-[-0.1px]">
                  Explore projects
                </span>
                <Icons
                  icon="chevronRightSmall"
                  className="size-3 text-neutral-500"
                />
              </Link>
            </div>

            <div className="mt-[30px] grid grid-cols-1 gap-[30px] lg:grid-cols-2 lg:grid-rows-1">
              <div>
                <ImagePlaceholder className="mb-6 aspect-[1.3] rounded-2xl" />

                <div className="flex flex-col items-start gap-5">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg leading-6.5 font-medium tracking-[-0.2px]">
                      Medium length headline
                    </h3>
                    <p className="text-sm tracking-[-0.1px] text-neutral-500">
                      Design better and spend less time without restricting
                      creative freedom.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-[10px] border border-neutral-900/10 px-3.5 py-1.5 shadow-xs md:w-fit"
                  >
                    <span className="text-sm font-medium tracking-[-0.1px]">
                      Button
                    </span>
                    <Icons
                      icon="arrowUpRight"
                      className="size-4 text-neutral-500"
                    />
                  </button>
                </div>
              </div>

              <div>
                <ImagePlaceholder className="mb-6 aspect-[1.3] rounded-2xl" />

                <div className="flex flex-col items-start gap-5">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg leading-6.5 font-medium tracking-[-0.2px]">
                      Medium length headline
                    </h3>
                    <p className="text-sm tracking-[-0.1px] text-neutral-500">
                      Design better and spend less time without restricting
                      creative freedom.
                    </p>
                  </div>
                  <button
                    type="button"
                    className="flex w-full cursor-pointer items-center justify-center gap-1 rounded-[10px] border border-neutral-900/10 px-3.5 py-1.5 shadow-xs md:w-fit"
                  >
                    <span className="text-sm font-medium tracking-[-0.1px]">
                      Button
                    </span>
                    <Icons
                      icon="arrowUpRight"
                      className="size-4 text-neutral-500"
                    />
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <div className="mt-15 mb-2 flex items-center justify-between sm:mt-20 sm:mb-4">
              <h3 className="text-xl leading-7 font-semibold tracking-[-0.2px]">
                Latest Posts
              </h3>

              <Link
                href="/blog"
                className="flex cursor-pointer items-center justify-center gap-1 rounded-[10px] border border-neutral-900/10 px-2.5 py-1.5 shadow-xs"
              >
                <span className="text-sm font-medium tracking-[-0.1px]">
                  Explore posts
                </span>
                <Icons
                  icon="chevronRightSmall"
                  className="size-3 text-neutral-500"
                />
              </Link>
            </div>

            <div className="mt-[30px] grid grid-cols-1 gap-[30px] lg:grid-cols-2 lg:grid-rows-2">
              {sortedPosts.map((post) => (
                <PostCard
                  key={post.slug}
                  post={post}
                  className="sm:grid-cols-2"
                />
              ))}
            </div>
          </section>
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
