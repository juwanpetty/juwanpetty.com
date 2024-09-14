import { Metadata } from "next";
import { MainLayout } from "@components/MainLayout";
import { getPostBySlug, getAllPostSlugs } from "@utilities/get-posts";
import { formatDate } from "@utilities/format-date";

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
        <header>
          <h1 className="m-0 text-2xl font-semibold text-sand-12">{title}</h1>
          <p className="m-0 text-base text-sand-9">{formatDate(publishedAt)}</p>
        </header>

        <div className="prose mt-8 text-sand-11">
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
