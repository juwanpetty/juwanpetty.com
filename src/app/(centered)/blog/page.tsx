import { BackButton } from "@/components/back-button";
import { BlogItem } from "@/features/blog/components/blog-item";
import { postsGroupedByYear } from "@/features/blog/utilities";
import { homePath } from "@/lib/paths";
import { formatDate, FULL_DATE_FORMAT } from "@/lib/utils";

export default function BlogIndexPage() {
  return (
    <div>
      <div className="mb-1">
        <BackButton href={homePath()}>Home</BackButton>
      </div>
      <header className="mb-12 flex flex-col gap-1">
        <h1 className="text-lg font-[550] text-balance text-neutral-800">
          Blog
        </h1>
      </header>

      <div>
        {postsGroupedByYear.map(({ year, posts }) => (
          <section key={year} className="mb-12 space-y-4">
            <h2 className="text-base font-medium">{year}</h2>
            <div className="flex flex-col gap-6">
              {posts.map(({ title, slug, date, description }) => (
                <BlogItem
                  key={slug}
                  title={title}
                  slug={slug}
                  date={formatDate(date.toDateString(), FULL_DATE_FORMAT)}
                  description={description}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
