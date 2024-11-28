import { Project } from "@/features/projects/types";
import {
  getAllProjectSlug,
  getProjectBySlug,
} from "@/features/projects/utilities/get-project-data";
import { PageLayout } from "@/shared/components/page-layout";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return await getAllProjectSlug();
}

export async function generateMetadata({ params }: Props) {
  const project = (await getProjectBySlug((await params).slug)) as Project;

  return {
    title: project.frontmatter.title,
  };
}

export default async function ProjectsDetail({ params }: Props) {
  const project = (await getProjectBySlug((await params).slug)) as Project;

  if (!project) {
    notFound();
  }

  const { frontmatter, content } = project;

  return (
    <PageLayout>
      <article className="prose prose-neutral">
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.summary}</p>

        {content}
      </article>
    </PageLayout>
  );
}
