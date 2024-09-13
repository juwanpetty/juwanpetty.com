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
      <p className="text-sand-12 m-0 truncate transition-colors group-hover:text-red-500">
        {title}
      </p>
      <hr className="border-sand-4 m-0 block min-w-7 flex-1 transition-colors group-hover:border-red-400" />
      <p className="text-sand-9 m-0 shrink-0 transition-colors group-hover:text-red-400">
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
            className="text-sand-12 m-0 text-3xl font-semibold transition-colors hover:text-red-500"
          >
            {firstPostTitle}
          </Link>
          <p className="text-sand-9 m-0 text-base">
            {formatDate(firstPostPublishedAt)}
          </p>

          <div className="text-sand-11 prose mt-8">
            <p className="text-base leading-[30px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt
              accusamus quos ratione fugiat, voluptatem illum deleniti ut
              nostrum magni quia dolorem optio fugit ab quis. Distinctio ad
              delectus tempora?
            </p>
          </div>

          <Link
            href={`/writing/${firstPostSlug}`}
            className="text-sand-12 mt-4 inline-flex items-center gap-2 text-base no-underline transition-colors hover:text-red-500"
          >
            <span>Read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
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

        <div className="mt-16 space-y-2">
          <div className="text-sand-12 mt-8 flex items-center justify-start font-medium">
            <span>Topics</span>
          </div>

          <div className="flex flex-wrap gap-x-3 gap-y-1">
            <div>
              <span>personal</span>
              <sup>18</sup>
            </div>
            <div>
              <span>technology</span>
              <sup>9</sup>
            </div>
            <div>
              <span>internet</span>
              <sup>15</sup>
            </div>
            <div>
              <span>social media</span>
              <sup>7</sup>
            </div>
          </div>
        </div>

        {groupedPosts.map((group, index) => (
          <div key={group.year} className="space-y-4">
            <div
              className={cn(
                "text-sand-12 mt-8 flex items-center justify-start font-medium",
                {
                  "mt-16": index === 0,
                }
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
