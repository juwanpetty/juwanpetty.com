import {
  Breadcrumb,
  BreadcrumbHome,
  Breadcrumbs,
  BreadcrumbSeparator,
} from "@/components/breadcrumbs";
import { CenteredPageLayout } from "@/components/centered-layout";
import { BadgeCheckIcon } from "@/icons/BadgeCheckIcon";
import { BoltIcon } from "@/icons/BoltIcon";
import { CircleUserIcon } from "@/icons/CircleUserIcon";
import { PenWritingIcon } from "@/icons/PenWritingIcon";
import { getAllArticles } from "@/lib/articles";
import { getAllExperiments } from "@/lib/experiment";
import {
  PageSection,
  PageSectionContent,
  PageSectionHeader,
  PageSectionLabel,
} from "@/components/page-section";
import { ProjectCard } from "@/components/project-card";
import { ArticleCard } from "@/components/article-card";
import { ExperimentCard } from "@/components/experiment-card";
import { WindowCodeIcon } from "@/icons/WindowCodeIcon";
import { Fragment } from "react";
import { url } from "@/lib/url";

export default async function Page() {
  const experiments = await getAllExperiments();
  const articles = await getAllArticles();

  return (
    <CenteredPageLayout
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbHome />
          <BreadcrumbSeparator />
          <Breadcrumb>Overview</Breadcrumb>
        </Breadcrumbs>
      }
    >
      <div className="mx-auto max-w-3xl">
        <header className="py-10">
          <div className="flex flex-col gap-4">
            <div className="relative size-16 rounded-full border border-solid border-black/10 bg-neutral-50 dark:border-white/10 dark:bg-neutral-950" />

            <div className="flex flex-col">
              <h1 className="flex items-center gap-1 text-base font-medium">
                <span>Juwan Petty</span>
                <BadgeCheckIcon className="size-4 text-blue-500 dark:text-blue-600" />
              </h1>
              <p className="text-base text-neutral-600 dark:text-white/70">
                Design Engineer
              </p>
            </div>
          </div>
        </header>

        <PageSection>
          <PageSectionHeader>
            <PageSectionLabel>
              <CircleUserIcon className="size-4.5 text-neutral-500 dark:text-white/50" />
              <span>About</span>
            </PageSectionLabel>
          </PageSectionHeader>
          <PageSectionContent>
            <p className="text-base/7.5 text-neutral-600 dark:text-white/70">
              Hello, and welcome to my corner of the Internet. I&apos;m Juwan, a
              Design Engineer based in the US. Here you can explore some of my
              latest creations, experiments, and thoughts.
            </p>
          </PageSectionContent>
        </PageSection>

        <PageSection>
          <PageSectionHeader>
            <PageSectionLabel>
              <BoltIcon className="size-4.5 text-neutral-500 dark:text-white/50" />
              <span>Latest Projects</span>
            </PageSectionLabel>
          </PageSectionHeader>
          <PageSectionContent>
            <div className="grid grid-cols-1 gap-x-2.5 gap-y-5 sm:grid-cols-2 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <ProjectCard key={index} />
              ))}
            </div>
          </PageSectionContent>
        </PageSection>

        <PageSection>
          <PageSectionHeader>
            <PageSectionLabel slug={url.blogIndex()}>
              <PenWritingIcon className="size-4.5 text-neutral-500 dark:text-white/50" />
              <span>Latest Articles</span>
            </PageSectionLabel>
          </PageSectionHeader>
          <PageSectionContent>
            <div className="flex flex-col sm:space-y-3">
              {articles.map(({ slug, title, date }) => (
                <Fragment key={slug}>
                  <ArticleCard slug={slug} title={title} date={date} />
                  <hr className="my-5 border-t border-dashed border-black/15 sm:hidden dark:border-white/15" />
                </Fragment>
              ))}
            </div>
          </PageSectionContent>
        </PageSection>

        <PageSection>
          <PageSectionHeader>
            <PageSectionLabel slug={url.experimentIndex()}>
              <WindowCodeIcon className="size-4.5 text-neutral-500 dark:text-white/50" />
              <span>Latest Experiments</span>
            </PageSectionLabel>
          </PageSectionHeader>
          <PageSectionContent>
            <div className="grid grid-cols-1 gap-x-2.5 gap-y-5 sm:grid-cols-2 md:grid-cols-3">
              {experiments.map((experiment) => (
                <ExperimentCard
                  key={experiment.slug}
                  slug={experiment.slug}
                  title={experiment.title}
                  image={experiment.image}
                />
              ))}
            </div>
          </PageSectionContent>
        </PageSection>
      </div>
    </CenteredPageLayout>
  );
}
