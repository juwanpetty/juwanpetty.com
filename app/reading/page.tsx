import { Metadata } from "next";
import { MainLayout } from "@components/MainLayout";

export const metadata: Metadata = {
  title: "Reading — Juwan Petty",
};

async function Reading() {
  return <MainLayout>Reading Page</MainLayout>;
}

export default Reading;
