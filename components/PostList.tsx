import { format } from "date-fns";
import Link from "next/link";
import React from "react";

type Props = {
  year: string;
  posts: {
    id: string;
    title: string;
    slug: string;
    published: string;
  }[];
};

function PostList({ year, posts }: Props) {
  function formatPublishedDate(date: string) {
    return format(new Date(date), "MM/yy");
  }

  return (
    <section className="mb-16">
      <h3 className="mb-2 text-base font-medium text-stone-900 transition-colors dark:text-stone-100">
        {year}
      </h3>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/writing/${post.slug}`}
            className="flex items-center gap-4 font-normal"
          >
            <span className="sm:truncate">{post.title}</span>
            <hr className="hidden min-w-7 flex-1 sm:block" />
            <span className="m-0 hidden shrink-0 font-mono text-sm transition-colors sm:block">
              {formatPublishedDate(post.published)}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PostList;
