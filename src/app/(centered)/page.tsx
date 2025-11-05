import { PageSection } from "@/components/page-section";
import { ResourceCard } from "@/components/resource-card";
import { BlogItem } from "@/features/blog/components/blog-item";
import { postsSortedByDate } from "@/features/blog/utilities";
import { projectsSortedByDate } from "@/features/projects/utilities";
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
      <div className="space-y-16">
        <section>
          {/* <div className="mb-4">
            <div className="size-16 rounded-full border border-neutral-200 bg-neutral-100" />
          </div> */}

          <h1 className="text-base font-medium">Juwan Petty</h1>
          <p className="text-neutral-500">Software design & engineering</p>

          <div>
            <p className="mt-5 text-base leading-relaxed text-neutral-600">
              Obsessed with the details that make digital products feel{" "}
              <i>just</i> right. Design-minded dev and dev-minded designer.
            </p>
          </div>
        </section>

        <PageSection label="Latest projects">
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            {projectsSortedByDate.map(
              ({ url, data: { title, date, thumbnail } }) => (
                <ResourceCard
                  key={url}
                  title={title}
                  subtitle={formatDate(
                    date.toDateString(),
                    SHORTHAND_DATE_FORMAT
                  )}
                  slug={url}
                  thumbnail={thumbnail}
                />
              )
            )}
          </div>
        </PageSection>

        <PageSection label="Latest Posts">
          <div className="space-y-4">
            {postsSortedByDate
              .slice(0, 3)
              .map(({ url, data: { title, date, description } }) => (
                <BlogItem
                  key={url}
                  title={title}
                  slug={url}
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
