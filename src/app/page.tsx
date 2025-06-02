import { PostCard } from "@/components/blog-post-card";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { PageSection, SectionHeader } from "@/components/page-section";
import { ProfileHeader } from "@/components/profile-header";
import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";
import { BLOG_DIRECTORY, PROJECTS_DIRECTORY } from "@/constants";
import { sortPostsByDateThenTitle } from "@/utilities/format-post-data";
import { sortProjectsByDateThenTitle } from "@/utilities/format-project-data";
import { getAllPosts, getAllProjects } from "@/utilities/mdx-utils";

export default async function Page() {
  const posts = await getAllPosts(BLOG_DIRECTORY, 3);
  const sortedPosts = sortPostsByDateThenTitle(posts);

  const projects = await getAllProjects(PROJECTS_DIRECTORY, 3);
  const sortedProjects = sortProjectsByDateThenTitle(projects);

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />

      <main className="grow">
        <div className="mx-auto w-full max-w-[1400px] px-5">
          <div className="py-8 pt-6">
            <ProfileHeader />

            <div className="mx-auto flex w-full max-w-[730px] flex-col">
              {/* About section */}
              <PageSection>
                <SectionHeader title="About" icon="circleUser" />

                <div className="text-neutral-11 px-1">
                  <p className="text-base leading-[1.65rem]">
                    Hello, I&apos;m Juwan, a Frontend Engineer based in the US.
                    This is my little corner of the internet where you can
                    explore some of my latest creations, experiments, and
                    reflections.
                  </p>

                  <p className="mt-5 text-base leading-[1.65rem]">
                    Previously at{" "}
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.shopify.com"
                      className="font-semibold text-blue-400 underline decoration-blue-400/20 decoration-2 underline-offset-4 transition-colors ease-[ease] hover:decoration-blue-400/50"
                    >
                      Shopify
                    </a>
                  </p>
                </div>
              </PageSection>

              {/* Projects section */}
              <PageSection>
                <SectionHeader title="Latest works" icon="boltLightning" />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {sortedProjects.map((project) => (
                    <ProjectCard
                      key={project.link}
                      title={project.title}
                      description={project.description}
                      image={project.image}
                      href={project.link}
                    />
                  ))}
                </div>
              </PageSection>

              {/* Blog sections */}
              <PageSection>
                <SectionHeader title="Latest posts" icon="penWriting2" />

                <div className="flex flex-col gap-6 px-1 sm:gap-8">
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

              {/* Interaction section */}
              <PageSection>
                <SectionHeader title="Latest interaction" icon="circlePlay" />

                <div>
                  <ImagePlaceholder className="aspect-video" />
                </div>
              </PageSection>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
