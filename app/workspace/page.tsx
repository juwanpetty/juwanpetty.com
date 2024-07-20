import { Metadata } from "next";
import { MainLayout } from "@components/MainLayout";

export const metadata: Metadata = {
  title: "Workspace — Juwan Petty",
};

async function Workspace() {
  return <MainLayout>Workspace Page</MainLayout>;
}

export default Workspace;
