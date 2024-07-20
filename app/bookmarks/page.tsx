import { Metadata } from "next";
import { MainLayout } from "@components/MainLayout";

export const metadata: Metadata = {
  title: "Bookmarks — Juwan Petty",
};

async function Bookmarks() {
  return <MainLayout>Bookmarks</MainLayout>;
}

export default Bookmarks;
