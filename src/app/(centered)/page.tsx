import { PageSection } from "@/components/page-section";
import { ResourceCard } from "@/components/resource-card";
import Welcome from "@/content/welcome.mdx";
import { BlogItem } from "@/features/blog/components/blog-item";
import { postsSortedByDate } from "@/features/blog/utilities";
import { projectsSortedByDate } from "@/features/projects/utilities";
import { projectPath } from "@/lib/paths";
import { formatDate, SHORTHAND_DATE_FORMAT } from "@/lib/utils";
import { ArrowUpRightIcon } from "lucide-react";
import { ComponentProps } from "react";

function ExternalLink({ href, children, ...props }: ComponentProps<"a">) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-8 cursor-pointer items-center gap-0.5 rounded-[0.625rem] bg-neutral-100 px-2.5"
      {...props}
    >
      <span className="text-sm font-medium">{children}</span>
      <ArrowUpRightIcon className="size-4 text-neutral-600" />
    </a>
  );
}

export default async function Home() {
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
            {projectsSortedByDate.map(({ title, date, slug, thumbnail }) => (
              <ResourceCard
                key={slug}
                title={title}
                subtitle={formatDate(
                  date.toDateString(),
                  SHORTHAND_DATE_FORMAT
                )}
                slug={projectPath(slug)}
                thumbnail={thumbnail}
              />
            ))}
          </div>
        </PageSection>

        <PageSection
          label="Latest Posts"
          link={{ href: "/blog", label: "See all posts" }}
        >
          <div className="space-y-4">
            {postsSortedByDate
              .slice(0, 3)
              .map(({ title, date, slug, description }) => (
                <BlogItem
                  key={slug}
                  title={title}
                  slug={slug}
                  date={formatDate(date.toDateString(), SHORTHAND_DATE_FORMAT)}
                  description={description}
                />
              ))}
          </div>
        </PageSection>

        <PageSection label="Let's Connect">
          <p className="mb-5 text-base leading-relaxed text-neutral-600">
            If you want to get in touch with me about something or just to say
            hi, reach out on social media or send me an email.
          </p>
          <div className="flex flex-wrap items-center gap-3 gap-y-2">
            <ExternalLink href="mailto:jchpetty@gmail.com">Mail</ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/juwanpetty/">
              LinkedIn
            </ExternalLink>
            <ExternalLink href="https://github.com/juwanpetty">
              Github
            </ExternalLink>
          </div>
        </PageSection>
      </div>
    </div>
  );
}
