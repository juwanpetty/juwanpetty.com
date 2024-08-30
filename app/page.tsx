import type { Metadata } from "next";
import { MainLayout } from "@components/MainLayout";

export const metadata: Metadata = {
  title: "Juwan Petty",
};

const postLinks2024 = [
  {
    title: "Post title",
    date: "Jun 14",
  },
];

const postLinks2023 = [
  {
    title: "Post title",
    date: "Nov 25",
  },
];

type PostItemProps = {
  title: string;
  date: string;
};

function PostItem({ title, date }: PostItemProps) {
  return (
    <a
      className="group flex flex-row items-center gap-4 truncate font-normal text-inherit no-underline transition-colors"
      href="/writing/oauth-next-rsc"
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
        <div className="space-y-4">
          <div className="mt-8 flex items-center justify-start font-medium">
            <span>2024</span>
          </div>
          <div className="grid gap-4">
            {postLinks2024.map((post) => (
              <PostItem key={post.title} title={post.title} date={post.date} />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="mt-8 flex items-center justify-start font-medium">
            <span>2023</span>
          </div>
          <div className="grid gap-4">
            {postLinks2023.map((post) => (
              <PostItem key={post.title} title={post.title} date={post.date} />
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Home;
