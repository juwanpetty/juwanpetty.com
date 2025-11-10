import { BackButton } from "@/components/back-button";
import { BlogItem } from "@/components/blog-item";
import { postsGroupedByYear } from "@/features/blog/utilities";

export default function BlogIndex() {
  return (
    <div>
      <div className="mb-6">
        <BackButton href="/">Home</BackButton>
      </div>

      <div className="mb-12">
        <h1 className="text-base font-medium">Blog</h1>
        <p className="text-neutral-500">
          Occasionally, I write about design or what&apos;s going on in my life
        </p>
      </div>

      <div className="space-y-16">
        {postsGroupedByYear.map(({ year, posts }) => (
          <section key={year}>
            <div className="mb-6">
              <h2 className="text-base font-medium text-neutral-500">{year}</h2>
            </div>
            <div className="flex flex-col gap-y-3">
              {posts.map((post) => (
                <BlogItem
                  key={post.url}
                  slug={post.url}
                  title={post.data.title}
                  date={post.data.date.toISOString()}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
