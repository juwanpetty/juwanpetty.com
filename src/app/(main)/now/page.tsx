import { PageLayout } from "@/shared/components/page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Now",
};

export default function NowIndex() {
  return <PageLayout>Now</PageLayout>;
}
