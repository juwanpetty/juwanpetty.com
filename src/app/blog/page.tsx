import { Breadcrumb } from "@/components/breadcrumb";
import { PostCard } from "@/components/post-card";
import { SiteHeader } from "@/components/site-header";
import { BLOG_DIRECTORY } from "@/constants";
import { getAllPosts, type PostMetadata } from "@/utilities/get-mdx-data";

const breadcrumbLinks = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

export default async function BlogIndex() {
  const posts = await getAllPosts(BLOG_DIRECTORY);
  const sortedAndGroupedPosts = groupPostsByYear(posts);

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="grow">
        <div className="mx-auto max-w-3xl px-5 pt-15 pb-15 md:pb-32 lg:px-0">
          <Breadcrumb links={breadcrumbLinks} />

          <header className="mb-12 flex flex-col justify-between gap-6">
            <div className="space-y-2">
              <h1 className="my-5 text-4xl font-bold tracking-tight">Blog</h1>
              <p className="max-w-[635px] text-base text-pretty text-neutral-500 md:text-lg">
                Lorem ipsum, dolor sit amet consectetuer adipiscing, elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat, in uno loco.
              </p>
            </div>
          </header>

          <div className="my-10 h-px bg-neutral-200 md:my-15" />

          <div className="flex flex-col gap-15">
            <section>
              {sortedAndGroupedPosts.map((group) => (
                <section key={group.year} className="mb-8">
                  <h3 className="mb-2 text-sm font-medium text-neutral-500 uppercase">
                    {group.year}
                  </h3>

                  <div className="flex flex-col gap-5">
                    {group.posts.map((post) => (
                      <PostCard
                        key={post.slug}
                        post={post}
                        className="lg:grid-cols-2"
                      />
                    ))}
                  </div>
                </section>
              ))}
            </section>
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
