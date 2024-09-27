import { Metadata } from "next";
import { formatDate } from "@utilities/format-date";
import { MainLayout } from "@features/layout/components/MainLayout";
import Link from "next/link";
import { getPosts } from "@utilities/get-posts";
import { groupPostsByYear } from "@utilities/group-posts-by-desc";
import { cn } from "@utilities/merge-classnames";

export const metadata: Metadata = {
  title: "Article Title — Juwan Petty",
};

type PostItemProps = {
  title: string;
  date: string;
  slug: string;
};

function PostItem({ title, date, slug }: PostItemProps) {
  return (
    <Link
      className="group flex flex-row items-center gap-4 truncate font-normal text-inherit no-underline transition-colors"
      href={`/writing/${slug}`}
    >
      <p className="m-0 truncate text-neutral-700 transition-colors group-hover:text-neutral-900">
        {title}
      </p>
      <hr className="m-0 block min-w-7 flex-1 border-neutral-200 transition-colors group-hover:border-neutral-400" />
      <p className="m-0 shrink-0 text-neutral-700 transition-colors group-hover:text-neutral-900">
        {formatDate(date)}
      </p>
    </Link>
  );
}

async function Writing() {
  const posts = await getPosts();
  const groupedPosts = groupPostsByYear(posts);

  const {
    frontmatter: { title: firstPostTitle, publishedAt: firstPostPublishedAt },
    slug: firstPostSlug,
  } = posts[0];

  return (
    <MainLayout>
      <div className="mx-auto w-full max-w-screen-sm px-4 pb-32 pt-16 sm:pt-32">
        <header className="mb-8 space-y-1">
          <h1 className="m-0 text-2xl font-semibold text-sand-12">Writing</h1>
          <p className="m-0 text-lg text-sand-9">
            Some cool projects I&apos;ve worked on.
          </p>
        </header>

        <article>
          <h1 className="mb-3 text-lg font-medium">
            Concise explanations accelerate progress
          </h1>
          <div className="mb-3 flex items-center justify-start gap-2 text-base text-neutral-500">
            <time>August 20, 2023</time>
            <span>•</span>
            <span>1 minute read</span>
          </div>
          <p className="max-w-[65ch] text-base text-neutral-500">
            I’ve been thinking a lot about how to accelerate progress in the
            design industry. There’s a lot of content out there, but it’s mostly
            focused on the end result, not the process. I want to help people
            get better at design by sharing my thought process, not just my
            final designs.
          </p>
        </article>

        <hr className="my-12 border-neutral-200" />

        {groupedPosts.map((group, index) => (
          <div key={group.year} className="space-y-4">
            <div
              className={cn(
                "mt-8 flex items-center justify-start font-medium text-neutral-900 dark:text-neutral-100",
                { "mt-16": index === 0 }
              )}
            >
              <span>{group.year}</span>
            </div>
            <div className="grid gap-4">
              {group.posts.map(({ frontmatter, slug }) => (
                <PostItem
                  key={slug}
                  slug={slug}
                  title={frontmatter.title}
                  date={frontmatter.publishedAt}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
}

export default Writing;
