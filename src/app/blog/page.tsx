import { Breadcrumb } from "@/components/breadcrumb";
import { PostCard } from "@/components/post-card";
import { SiteHeader } from "@/components/site-header";
import { BLOG_DIRECTORY } from "@/constants";
import { getAllPosts, type PostMetadata } from "@/utilities/get-mdx-data";
import { Metadata } from "next";
import { Link } from "next-view-transitions";

const breadcrumbLinks = [{ name: "Home", href: "/" }, { name: "Blog" }];

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogIndex() {
  const posts = await getAllPosts(BLOG_DIRECTORY);
  const sortedAndGroupedPosts = groupPostsByYear(posts);

  return (
    <div className="flex min-h-screen flex-col">
      <main className="grow">
        <div className="mx-auto max-w-3xl px-5 pt-15 pb-15 md:pb-32 lg:px-0">
          <nav aria-label="breadcrumb">
            <ol className="text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5">
              <li>
                <Link
                  href="/"
                  className="block size-6 rounded-full bg-[#08C6FF]"
                />
              </li>
              <li
                className="text-xs font-semibold text-neutral-500"
                role="presentation"
                aria-hidden="true"
              >
                /
              </li>
              <li className="inline-flex items-center gap-1.5">
                <a
                  data-slot="breadcrumb-link"
                  className="text-neutral-500"
                  href="#"
                >
                  Components
                </a>
              </li>
              <li
                className="text-xs font-semibold text-neutral-500"
                role="presentation"
                aria-hidden="true"
              >
                /
              </li>

              <li className="inline-flex items-center gap-1.5">
                <button
                  type="button"
                  id="radix-«r0»"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  data-state="closed"
                  data-slot="dropdown-menu-trigger"
                  className="cursor-pointer text-neutral-500"
                >
                  <span
                    data-slot="breadcrumb-ellipsis"
                    role="presentation"
                    aria-hidden="true"
                    className="flex size-5 items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-ellipsis"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                    <span className="sr-only">More</span>
                  </span>
                  <span className="sr-only">Toggle menu</span>
                </button>
              </li>
              <li
                className="text-xs font-semibold text-neutral-500"
                role="presentation"
                aria-hidden="true"
              >
                /
              </li>
              <li className="inline-flex items-center gap-1.5">
                <span
                  data-slot="breadcrumb-page"
                  role="link"
                  aria-disabled="true"
                  aria-current="page"
                  className="font-normal text-neutral-900"
                >
                  Blog
                </span>
              </li>
            </ol>
          </nav>

          <header className="mb-12 flex flex-col justify-between gap-6">
            <div className="space-y-2">
              <h1 className="my-5 mt-16 text-base font-semibold">Blog</h1>
              <p className="max-w-[635px] text-base text-pretty text-neutral-500">
                Lorem ipsum, dolor sit amet consectetuer adipiscing, elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat, in uno loco.
              </p>
            </div>
          </header>

          <div className="my-10 mb-20 md:my-15">
            <div className="mb-5 flex items-center gap-4">
              <h2 className="text-base font-semibold">Topics</h2>
              <div className="my-5 h-px grow bg-neutral-200" />
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="flex items-center gap-2 rounded-full bg-neutral-100 px-2.5 py-1 pr-1.5 text-sm font-medium text-neutral-500">
                <span>Jony Ive</span>
                <span className="flex size-5 items-center justify-center rounded-full bg-white">
                  3
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-neutral-100 px-2.5 py-1 pr-1.5 text-sm font-medium text-neutral-500">
                <span>David Gal</span>
                <span className="flex size-5 items-center justify-center rounded-full bg-white">
                  1
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-neutral-100 px-2.5 py-1 pr-1.5 text-sm font-medium text-neutral-500">
                <span>Robert J. Carroll</span>
                <span className="flex size-5 items-center justify-center rounded-full bg-white">
                  6
                </span>
              </div>
            </div>
          </div>

          <div className="my-10 md:my-15">
            <div className="mb-5 flex items-center gap-4">
              <h2 className="text-base font-semibold">Posts</h2>
              <div className="my-5 h-px grow bg-neutral-200" />
            </div>

            <section className="mb-8">
              {sortedAndGroupedPosts.map((group) => (
                <section key={group.year} className="mb-8">
                  <h3 className="mb-2 text-sm font-medium text-neutral-500 uppercase">
                    {group.year}
                  </h3>

                  <div className="flex flex-col gap-2">
                    {group.posts.map((post) => (
                      <PostCard key={post.slug} post={post} />
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
