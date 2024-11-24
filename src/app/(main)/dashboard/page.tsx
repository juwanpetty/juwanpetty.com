import { PageLayout } from "@/shared/components/page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardIndex() {
  return <PageLayout>Dashboard</PageLayout>;
}
