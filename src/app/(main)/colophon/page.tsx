import { PageLayout } from "@/shared/components/page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Colophon",
};

export default function ColophonIndex() {
  return <PageLayout>Colophon</PageLayout>;
}
