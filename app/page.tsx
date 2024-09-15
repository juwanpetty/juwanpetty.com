import Link from "next/link";
import type { Metadata } from "next";
import { MainLayout } from "@components/MainLayout";
import { getPosts } from "@utilities/get-posts";
import { groupPostsByYear } from "@utilities/group-posts-by-desc";
import { cn } from "@utilities/merge-classnames";
import { formatDate } from "@utilities/format-date";

export const metadata: Metadata = {
  title: "Juwan Petty",
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
      <p className="group-hover:text-grass-11 m-0 truncate text-sand-12 transition-colors">
        {title}
      </p>
      <hr className="group-hover:border-grass-4 m-0 block min-w-7 flex-1 border-sand-4 transition-colors" />
      <p className="group-hover:text-grass-11 m-0 shrink-0 text-sand-9 transition-colors">
        {formatDate(date)}
      </p>
    </Link>
  );
}

async function Home() {
  const posts = await getPosts();
  const groupedPosts = groupPostsByYear(posts);

  const {
    frontmatter: { title: firstPostTitle, publishedAt: firstPostPublishedAt },
    slug: firstPostSlug,
  } = posts[0];

  return (
    <MainLayout>
      <div className="mx-auto w-full max-w-screen-sm px-4 pb-32 pt-16 sm:pt-32">
        <div>
          <Link
            href={`/writing/${firstPostSlug}`}
            className="m-0 text-2xl font-semibold text-sand-12 transition-colors"
          >
            {firstPostTitle}
          </Link>
          <p className="m-0 text-base text-sand-9">
            {formatDate(firstPostPublishedAt)}
          </p>

          <div className="prose prose-neutral mt-8 dark:prose-invert">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt
              accusamus quos ratione fugiat, voluptatem illum deleniti ut
              nostrum magni quia dolorem optio fugit ab quis. Distinctio ad
              delectus tempora?
            </p>
          </div>

          <Link
            href={`/writing/${firstPostSlug}`}
            className="mt-4 inline-flex h-7 items-center gap-1 rounded-full border border-solid border-sand-4 px-2 text-sm font-medium text-sand-11 no-underline transition-colors"
          >
            <span>Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              className="size-4"
            >
              <g
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <line x1="15.25" y1="9" x2="2.75" y2="9" />
                <polyline points="11 4.75 15.25 9 11 13.25" />
              </g>
            </svg>
          </Link>
        </div>

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

export default Home;
