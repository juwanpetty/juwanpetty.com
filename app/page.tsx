import type { Metadata } from "next";
import { MainLayout } from "@components/MainLayout";
import { getPosts } from "@utilities/get-posts";
import { groupPostsByYear } from "@utilities/group-posts-by-desc";

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
    <a
      className="group flex flex-row items-center gap-4 truncate font-normal text-inherit no-underline transition-colors"
      href={`/writing/${slug}`}
    >
      <p className="m-0 truncate text-neutral-700 transition-colors group-hover:text-red-500">
        {title}
      </p>
      <hr className="m-0 block min-w-7 flex-1 transition-colors group-hover:border-red-400" />
      <p className="m-0 shrink-0 font-mono text-sm text-neutral-400 transition-colors group-hover:text-red-400">
        {date}
      </p>
    </a>
  );
}

async function Home() {
  const posts = await getPosts();
  const groupedPosts = groupPostsByYear(posts);

  return (
    <MainLayout>
      <div className="mx-auto w-full max-w-screen-sm px-4 pb-32 pt-16 sm:pt-32">
        <header className="space-y-2">
          <h1 className="m-0 text-3xl font-semibold text-neutral-800">
            Writing
          </h1>
          <p className="m-0 text-lg text-neutral-600">
            Thoughts, ideas, and opinions.
          </p>
        </header>
        {groupedPosts.map((group) => (
          <div key={group.year} className="space-y-4">
            <div className="mt-8 flex items-center justify-start font-medium">
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
