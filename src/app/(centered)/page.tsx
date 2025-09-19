import { Icon } from "@/components/icon";
import { PageSection } from "@/components/page-section";
import { ResourceCard } from "@/components/resource-card";
import { BlogItem } from "@/features/blog/components/blog-item";
import { getBlogs } from "@/features/blog/utilities";
import { homePath } from "@/lib/paths";
import { Link } from "next-view-transitions";

export default async function Home() {
  const blogPosts = await getBlogs();

  return (
    <div className="space-y-15">
      <section>
        <Link href={homePath()} className="font-medium">
          Juwan Petty
        </Link>
        <p className="text-neutral-400">Frontend &amp; design engineer.</p>
      </section>

      <PageSection label="About" icon="circle-user">
        <p className="text-base leading-relaxed text-neutral-600">
          Obsessed with the details that make digital products feel <i>just</i>{" "}
          right. Design-minded dev and dev-minded designer.
        </p>
      </PageSection>

      <PageSection label="Latest Works" icon="bolt">
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <ResourceCard
            title="GitHub Icons"
            subtitle="A file icon theme for VS Code"
            href="https://github.com/juwanpetty/github-icons"
            image={{
              src: "/github-icons.png",
              width: 1050,
              height: 660,
              alt: "GitHub Icons Preview",
            }}
          />
        </div>
      </PageSection>

      <PageSection label="Latest Writings" icon="post">
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

      <PageSection label="Elsewhere" icon="envelope">
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
  );
}
