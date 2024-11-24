import { ProjectList } from "@/features/projects/components/project-list";
import { Project } from "@/features/projects/types";
import { getAllProjects } from "@/features/projects/utilities/get-project-data";
import { PageLayout } from "@/shared/components//page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
};

const breadcrumbLinks = [
  { href: "/", name: "Explore" },
  { href: "/projects", name: "Projects" },
];

export default async function ProjectIndex() {
  const projects = await getAllProjects();

  return (
    <PageLayout
      title="Projects"
      subtitle="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."
      breadcrumbLinks={breadcrumbLinks}
    >
      <ProjectList projects={projects as Project[]} />
    </PageLayout>
  );
}
