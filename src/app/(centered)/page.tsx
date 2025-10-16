import { Icon } from "@/components/icon";
import { PageSection } from "@/components/page-section";
import { ResourceCard } from "@/components/resource-card";
import { BlogItem } from "@/features/blog/components/blog-item";
import { getBlogs } from "@/features/blog/utilities";
import { getProjects } from "@/features/projects/utilities";
import { projectPath } from "@/lib/paths";
import { formatDate, SHORTHAND_DATE_FORMAT } from "@/lib/utils";
import Welcome from "@/content/welcome.mdx";

export default async function Home() {
  const blogPosts = await getBlogs();
  const projects = await getProjects();

  return (
    <div>
      <section>
        <h1 className="text-base font-medium">
          Welcome to my corner of the web.
        </h1>
      </section>

      <div className="space-y-16">
        <section>
          <article className="space-y-4">
            <Welcome />
          </article>
        </section>

        <PageSection label="Latest projects">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {projects.map(({ title, date, slug, thumbnail }) => (
              <ResourceCard
                key={slug}
                title={title}
                subtitle={formatDate(date, SHORTHAND_DATE_FORMAT)}
                slug={projectPath(slug)}
                thumbnail={thumbnail}
              />
            ))}
          </div>
        </PageSection>

        <PageSection label="Latest Posts">
          <div className="space-y-8">
            {blogPosts.map(({ slug, title, description }) => (
              <BlogItem
                key={slug}
                slug={slug}
                title={title}
                description={description}
              />
            ))}
          </div>
        </PageSection>

        <PageSection label="Elsewhere">
          <div className="mt-4 flex flex-wrap items-center gap-3 gap-y-2">
            <a
              href="mailto:jchpetty@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 cursor-pointer items-center gap-0.5 rounded-[0.625rem] bg-neutral-100 px-2.5"
            >
              <span className="text-sm font-medium">Mail</span>
              <Icon name="arrow-up-right" className="size-4 text-neutral-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/juwanpetty/"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 cursor-pointer items-center gap-0.5 rounded-[0.625rem] bg-neutral-100 px-2.5"
            >
              <span className="text-sm font-medium">LinkedIn</span>
              <Icon name="arrow-up-right" className="size-4 text-neutral-600" />
            </a>
            <a
              href="https://github.com/juwanpetty"
              target="_blank"
              rel="noreferrer"
              className="flex h-8 cursor-pointer items-center gap-0.5 rounded-[0.625rem] bg-neutral-100 px-2.5"
            >
              <span className="text-sm font-medium">Github</span>
              <Icon name="arrow-up-right" className="size-4 text-neutral-600" />
            </a>
          </div>
        </PageSection>
      </div>
    </div>
  );
}
