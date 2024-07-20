import { Metadata } from "next";
import { MainLayout } from "@components/MainLayout";

export const metadata: Metadata = {
  title: "Projects — Juwan Petty",
};

async function Projects() {
  return <MainLayout>Projects Page</MainLayout>;
}

export default Projects;
