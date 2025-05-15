import { Breadcrumb } from "@/components/breadcrumb";
import { PostCard } from "@/components/post-card";
import { SiteHeader } from "@/components/site-header";
import { BLOG_DIRECTORY } from "@/constants";
import { getAllPosts, type PostMetadata } from "@/utilities/get-mdx-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const breadcrumbLinks = [{ name: "Home", href: "/" }, { name: "Digests" }];

export default async function BlogIndex() {
  const posts = await getAllPosts(BLOG_DIRECTORY);
  const sortedAndGroupedPosts = groupPostsByYear(posts);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="grow">
        <div className="mx-auto max-w-3xl px-5 pt-5 pb-15 md:pt-15 md:pb-32 lg:px-0">
          <div className="mb-4">
            <Breadcrumb links={breadcrumbLinks} />
          </div>
          <header className="space-y-1 md:space-y-2">
            <h1 className="text-2xl leading-8 font-semibold tracking-[-0.3px]">
              Craftwork Design Digests
            </h1>
            <p className="max-w-[635px] text-base tracking-[-0.2px] text-neutral-500">
              Every week, we curate a selection of the latest news, tutorials,
              resources, tools, and new products in the design world. Stay up to
              date with everything that matters, all in one place.
            </p>
          </header>
          <div className="my-10 h-px bg-neutral-200 md:my-15" />
          <div className="space-y-20">
            <div className="my-10 md:my-15">
              <section className="mb-8">
                {sortedAndGroupedPosts.map((group) => (
                  <section key={group.year} className="mb-8">
                    <h3 className="mb-3 text-sm font-medium tracking-[-0.1px] text-neutral-500">
                      {group.year}
                    </h3>
                    <div className="flex flex-col gap-10 sm:gap-5">
                      {group.posts.map((post) => (
                        <PostCard
                          className="sm:grid-cols-2"
                          key={post.slug}
                          post={post}
                        />
                      ))}
                    </div>
                  </section>
                ))}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

interface GroupedPosts {
  year: string;
  posts: PostMetadata[];
}

function groupPostsByYear(posts: PostMetadata[]): GroupedPosts[] {
  const sorted = posts.sort((a, b) => {
    const dateA = new Date(a.datePublished).getTime();
    const dateB = new Date(b.datePublished).getTime();

    if (dateA !== dateB) {
      return dateB - dateA;
    }

    return a.title.localeCompare(b.title);
  });

  const grouped: Record<string, PostMetadata[]> = {};

  for (const post of sorted) {
    const year = new Date(post.datePublished).getFullYear().toString();
    grouped[year] = grouped[year] || [];
    grouped[year].push(post);
  }

  return Object.entries(grouped)
    .sort(([a], [b]) => Number(b) - Number(a)) // sort years desc
    .map(([year, posts]) => ({ year, posts }));
}
