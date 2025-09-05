import { Icon } from "@/components/icon";
import { BlogItem } from "@/features/blog/components/blog-item";
import { getBlogs, formatDate } from "@/features/blog/utilities";
import { blogPath } from "@/paths";
import { ComponentProps } from "react";

export default async function Home() {
  const blogPosts = await getBlogs();

  return (
    <div>
      <p className="text-base leading-relaxed text-neutral-600">
        Obsessed with the details that make digital products feel <i>just</i>{" "}
        right. Design-minded dev and dev-minded designer.
      </p>

      <PageSection title="Writing">
        <div>
          {blogPosts.map(({ slug, title, date }) => (
            <BlogItem
              key={slug}
              title={title}
              date={formatDate(date)}
              href={blogPath(slug)}
            />
          ))}
        </div>
      </PageSection>

      <PageSection title="Let's get in touch">
        <div className="mt-4 flex flex-wrap items-center gap-3 gap-y-2">
          <ContactLink href="mailto:jchpetty@gmail.com">Mail</ContactLink>
          <ContactLink href="https://www.linkedin.com/in/juwanpetty/">
            LinkedIn
          </ContactLink>
          <ContactLink href="https://www.youtube.com/@juwanpetty">
            YouTube
          </ContactLink>
          <ContactLink href="https://github.com/juwanpetty">Github</ContactLink>
        </div>
      </PageSection>
    </div>
  );
}

function ContactLink({ href, children, ...props }: ComponentProps<"a">) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-8 cursor-pointer items-center gap-0.5 rounded-[0.625rem] bg-neutral-100 px-2.5"
      {...props}
    >
      <span className="text-sm font-medium">{children}</span>
      <Icon name="arrow-up-right" className="size-4 text-neutral-600" />
    </a>
  );
}

type PageSectionProps = ComponentProps<"section"> & {
  title: string;
};

function PageSection({ children, title, ...props }: PageSectionProps) {
  return (
    <section className="mt-16 w-full sm:mt-32" {...props}>
      <h2 className="mb-5 flex w-full items-center font-medium">{title}</h2>

      {children}
    </section>
  );
}
