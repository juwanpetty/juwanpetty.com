import type { Metadata } from "next";
import { MainLayout } from "@components/MainLayout";

export const metadata: Metadata = {
  title: "Juwan Petty",
};

async function Home() {
  return <MainLayout>Home Page</MainLayout>;
}

export default Home;
