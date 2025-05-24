import { Icons, IconsMap } from "@/components/icons";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { cn } from "@/utilities/merge-classnames";
import { Link } from "next-view-transitions";
import { ReactNode } from "react";
import { BLOG_DIRECTORY, PROJECTS_DIRECTORY } from "@/constants";
import { getAllPosts, getAllProjects } from "@/utilities/get-mdx-data";
import { sortPostsByDateThenTitle } from "@/utilities/format-post-data";
import { sortProjectsByDateThenTitle } from "@/utilities/format-project-data";

export default async function Page() {
  const posts = await getAllPosts(BLOG_DIRECTORY, 3);
  const sortedPosts = sortPostsByDateThenTitle(posts);

  const projects = await getAllProjects(PROJECTS_DIRECTORY, 3);
  const sortedProjects = sortProjectsByDateThenTitle(projects);

  return (
    <div className="flex min-h-screen flex-col">
      <nav className="fixed top-4 left-0 z-50 mx-auto flex w-full justify-center px-7 sm:top-6">
        <div className="flex h-12 w-full max-w-md items-center justify-between rounded-full bg-stone-800 py-1 pr-1 pl-3 shadow-xl">
          <Link href="/">
            <Icons icon="logo" className="size-7 text-white" />
          </Link>
        </div>
      </nav>

      <main className="grow">
        <div className="mx-auto w-full max-w-screen-2xl grow px-3 pt-12 pb-8 md:px-5 lg:px-8">
          <header className="relative -mx-3 -mt-12 h-min px-3 pt-[160px] sm:m-0 md:pt-[200px] lg:pt-[240px] xl:pt-[280px]">
            <div className="relative z-10 mx-auto flex max-w-xl flex-col gap-4 pb-8 sm:px-0">
              <div className="flex w-full items-start justify-between">
                <div className="size-20 rounded-[8px] bg-orange-600 ring-4 ring-white" />
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/juwanpetty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-8 items-center justify-center rounded-full bg-transparent hover:bg-white/15"
                    >
                      <Icons icon="github" className="size-4.5 text-white" />
                    </a>
                    <a
                      href="https://bsky.app/profile/juwanpetty.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-8 items-center justify-center rounded-full bg-transparent hover:bg-white/15"
                    >
                      <Icons icon="bluesky" className="size-4.5 text-white" />
                    </a>
                    <a
                      href="https://www.youtube.com/@juwanpetty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-8 items-center justify-center rounded-full bg-transparent hover:bg-white/15"
                    >
                      <Icons icon="youtube" className="size-4.5 text-white" />
                    </a>
                  </div>
                  <button
                    type="button"
                    className="flex h-8 items-center rounded-full bg-white px-2.5 text-sm font-medium"
                  >
                    Contact
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <h1 className="text-xl font-semibold tracking-[-0.2px]">
                  Juwan Petty
                </h1>
                <p className="text-sm tracking-[-0.1px] text-neutral-700">
                  Frontend Engineer / Design Engineer
                </p>
              </div>
            </div>

            <div className="absolute top-0 left-0 flex h-[200px] w-full flex-col items-center gap-y-4 overflow-hidden rounded-none border-0 border-stone-900/10 bg-orange-600 px-4 py-6 sm:rounded-2xl sm:border md:h-[240px] md:flex-row md:items-end md:px-8 lg:h-[280px] xl:h-[320px]" />
          </header>

          <div className="mx-auto flex max-w-xl flex-col">
            <Section className="space-y-5">
              <SectionHeader title="About" icon="circleUser" />

              <div>
                <p className="text-base tracking-[-0.2px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque quasi natus culpa sapiente saepe magnam quisquam porro
                  nesciunt, obcaecati iure nemo cupiditate autem exercitationem!
                  Accusamus quis recusandae eos adipisci culpa!
                </p>
              </div>
            </Section>

            <Section>
              <SectionHeader title="Latest works" icon="boltLightning" />

              <div className="flex flex-col gap-12">
                {sortedProjects.map((project) => (
                  <ProjectCard
                    key={project.link}
                    title={project.title}
                    description={project.description}
                    href={project.link}
                  />
                ))}
              </div>
            </Section>

            <Section>
              <SectionHeader title="Latest writings" icon="penWriting2" />

              <div className="flex flex-col gap-5">
                {sortedPosts.map((post) => (
                  <PostCard
                    key={post.slug}
                    title={post.title}
                    datePublished={post.datePublished}
                    slug={post.slug}
                  />
                ))}
              </div>
            </Section>

            <Section>
              <SectionHeader title="Latest video" icon="circlePlay" />

              <div>
                <ImagePlaceholder className="aspect-video" />
              </div>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}

interface SectionProps {
  children: ReactNode;
  className?: string;
}

function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("space-y-7 py-8", className)}>{children}</section>
  );
}

interface SectionHeaderProps {
  title: string;
  icon: keyof typeof IconsMap;
}

function SectionHeader({ title, icon }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-2.5">
      <Icons icon={icon} className="size-5 text-neutral-500" />
      <h3 className="text-sm font-medium tracking-[-0.1px] text-neutral-500">
        {title}
      </h3>
      <div className="h-px grow bg-neutral-900/5" />
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
}

function ProjectCard({ title, description, href }: ProjectCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 grid-rows-1 gap-3">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <ImagePlaceholder />
        </a>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <ImagePlaceholder />
        </a>
        <a href={href} target="_blank" rel="noopener noreferrer">
          <ImagePlaceholder />
        </a>
      </div>

      <div className="flex flex-col items-start gap-1 pl-2">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-medium tracking-[-0.2px]"
        >
          {title}
        </a>
        <p className="text-base tracking-[-0.2px] text-neutral-700">
          {description}
        </p>
      </div>
    </div>
  );
}

interface PostCardProps {
  title: string;
  datePublished: string;
  slug: string;
}

function PostCard({ title, datePublished, slug }: PostCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="flex items-center gap-4">
      <ImagePlaceholder className="size-12" />

      <div className="flex flex-col">
        <h3 className="text-base font-medium tracking-[-0.2px]">{title}</h3>
        <p className="text-sm font-medium tracking-[-0.1px] text-neutral-500">
          {datePublished}
        </p>
      </div>
    </Link>
  );
}
