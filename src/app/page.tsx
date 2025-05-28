import { Icons } from "@/components/icons";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { BLOG_DIRECTORY, PROJECTS_DIRECTORY } from "@/constants";
import { getAllPosts, getAllProjects } from "@/utilities/get-mdx-data";
import { sortPostsByDateThenTitle } from "@/utilities/format-post-data";
import { sortProjectsByDateThenTitle } from "@/utilities/format-project-data";
import { PageSection, SectionHeader } from "@/components/page-section";
import { PostCard } from "@/components/post-card";
import { ProjectCard } from "@/components/project-card";
import { ContactButton } from "@/components/contact-button";

export default async function Page() {
  const posts = await getAllPosts(BLOG_DIRECTORY, 3);
  const sortedPosts = sortPostsByDateThenTitle(posts);

  const projects = await getAllProjects(PROJECTS_DIRECTORY, 3);
  const sortedProjects = sortProjectsByDateThenTitle(projects);

  return (
    <div className="flex min-h-screen flex-col">
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
                      <span className="sr-only">GitHub</span>
                    </a>
                    <a
                      href="https://bsky.app/profile/juwanpetty.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-8 items-center justify-center rounded-full bg-transparent hover:bg-white/15"
                    >
                      <Icons icon="bluesky" className="size-4.5 text-white" />
                      <span className="sr-only">BlueSky</span>
                    </a>
                    <a
                      href="https://www.youtube.com/@juwanpetty"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex size-8 items-center justify-center rounded-full bg-transparent hover:bg-white/15"
                    >
                      <Icons icon="youtube" className="size-4.5 text-white" />
                      <span className="sr-only">YouTube</span>
                    </a>
                  </div>
                  <ContactButton />
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
            <PageSection className="space-y-5">
              <SectionHeader title="About" icon="circleUser" />

              <div className="text-neutral-700">
                <p className="text-base tracking-[-0.2px]">
                  Hello, I&apos;m Juwan, a Frontend Engineer based in the US.
                  This is my little corner of the internet where you can explore
                  some of my latest creations, experiments, and reflections.
                </p>

                <p className="mt-5 text-base tracking-[-0.2px]">
                  Previously at <a href="https://www.shopify.com">Shopify</a>
                </p>
              </div>
            </PageSection>

            <PageSection>
              <SectionHeader title="Latest works" icon="boltLightning" />

              <div className="flex flex-col gap-12">
                {sortedProjects.map((project) => (
                  <ProjectCard
                    key={project.link}
                    title={project.title}
                    description={project.description}
                    href={project.link}
                    images={project.images}
                  />
                ))}
              </div>
            </PageSection>

            <PageSection>
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
            </PageSection>

            <PageSection>
              <SectionHeader title="Latest video" icon="circlePlay" />

              <div>
                <ImagePlaceholder className="aspect-video" />
              </div>
            </PageSection>
          </div>
        </div>
      </main>
    </div>
  );
}
