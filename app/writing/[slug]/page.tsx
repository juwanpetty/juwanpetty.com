import { Metadata } from "next";
import { MainLayout } from "@components/MainLayout";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Article Title — Juwan Petty",
};

async function WritingDetail() {
  return (
    <MainLayout>
      <div className="mx-auto w-full max-w-screen-md px-4 pb-32 pt-4 sm:pt-32">
        <Link
          href="/"
          className="mb-8 flex items-center gap-2 text-neutral-500 sm:mb-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            className="size-4 min-w-4"
          >
            <g fill="currentColor">
              <path d="M15.25,8.25H7.561l2.72-2.72c.293-.293,.293-.768,0-1.061s-.768-.293-1.061,0l-4,4c-.293,.293-.293,.768,0,1.061l4,4c.146,.146,.338,.22,.53,.22s.384-.073,.53-.22c.293-.293,.293-.768,0-1.061l-2.72-2.72h7.689c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75Z" />
              <path d="M2.75,2c-.414,0-.75,.336-.75,.75V15.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V2.75c0-.414-.336-.75-.75-.75Z" />
            </g>
          </svg>
          <span className="text-sm font-medium">Back to Writing</span>
        </Link>

        <header className="space-y-2">
          <h1 className="m-0 text-3xl font-semibold text-neutral-800">
            Post title
          </h1>
          <div>
            <p className="text-base text-neutral-600">
              August 6, 2024 / 31 min read
            </p>
          </div>
        </header>

        <div className="mt-8">
          <p className="text-base leading-[30px] text-neutral-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo sunt
            accusamus quos ratione fugiat, voluptatem illum deleniti ut nostrum
            magni quia dolorem optio fugit ab quis. Distinctio ad delectus
            tempora?
          </p>
        </div>
      </div>
    </MainLayout>
  );
}

export default WritingDetail;
