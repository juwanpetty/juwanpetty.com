import { PostList } from "@/features/blog/components/post-list";
import { getAllPosts } from "@/features/blog/utilities/get-blog-data";
import type { Post } from "@/features/blog/types";
import { PageLayout } from "@/shared/components/page-layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
};

const breadcrumbLinks = [
  { href: "/", name: "Explore" },
  { href: "/blog", name: "Writing" },
];

export default async function WritingIndex() {
  const posts = await getAllPosts();

  return (
    <PageLayout
      title="Writing"
      subtitle="Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."
      breadcrumbLinks={breadcrumbLinks}
    >
      <PostList posts={posts as Post[]} />
    </PageLayout>
  );
}
