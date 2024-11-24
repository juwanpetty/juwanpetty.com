import { PageLayout } from "@/shared/components/page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
};

export default function ChangelogIndex() {
  return <PageLayout>Changelog</PageLayout>;
}
