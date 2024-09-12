import Link from "next/link";
import { Metadata } from "next";
import { MainLayout } from "@components/MainLayout";
import { getPostBySlug, getAllPostSlugs } from "@utilities/get-posts";
import { format } from "date-fns";

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export const metadata: Metadata = {
  title: "Article Title — Juwan Petty",
};

type Props = {
  params: {
    slug: string;
  };
};

async function WritingDetail({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  const {
    frontmatter: { title, publishedAt },
    content,
  } = post;

  return (
    <MainLayout>
      <div className="mx-auto w-full max-w-screen-sm px-4 pb-32 pt-16 sm:pt-32">
        <header className="space-y-2">
          <h1 className="text-sand-11 m-0 text-3xl font-semibold">{title}</h1>
          <div>
            <p className="text-sand-9 text-base">
              Filed under{" "}
              <Link href="/" className="text-sand-11 font-medium underline">
                JavaScript
              </Link>{" "}
              on{" "}
              <span className="text-sand-11 font-medium">
                {format(new Date(publishedAt), "MMMM do, yyyy")}
              </span>
              .
            </p>
          </div>
        </header>

        <div className="text-sand-11 prose mt-8">
          {/* <p className="text-base leading-[30px] text-sand-9">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt
            accusamus quos ratione fugiat, voluptatem illum deleniti ut nostrum
            magni quia dolorem optio fugit ab quis. Distinctio ad delectus
            tempora?
          </p> */}
          {content}
        </div>
      </div>
    </MainLayout>
  );
}

export default WritingDetail;
