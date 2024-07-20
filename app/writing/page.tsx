import { Metadata } from "next";
import { MainLayout } from "@components/MainLayout";

export const metadata: Metadata = {
  title: "Writing — Juwan Petty",
};

async function Writing() {
  return <MainLayout>Writing Page</MainLayout>;
}

export default Writing;
