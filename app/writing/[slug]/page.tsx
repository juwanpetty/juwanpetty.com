import { Metadata } from "next";
import { MainLayout } from "@components/MainLayout";

export const metadata: Metadata = {
  title: "Article Title — Juwan Petty",
};

async function WritingDetail() {
  return <MainLayout>Writing Detail Page</MainLayout>;
}

export default WritingDetail;
