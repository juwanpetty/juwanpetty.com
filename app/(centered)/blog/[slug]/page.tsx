import { getBlog, getBlogSlugs } from "@/features/blog/utilities";
import Link from "next/link";

type BlogDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const { slug } = await params;
  const { content: Content } = await getBlog(slug);

  return (
    <div>
      <header className="mb-15">
        <h1 className="mb-5 text-base font-semibold text-neutral-800">
          Code Editing Toolbar
        </h1>

        <p className="mb-5 text-base leading-relaxed text-neutral-800">
          October 2024
        </p>

        <p className="text-base leading-relaxed text-neutral-500">
          We recently shipped{" "}
          <Link
            href="/"
            className="underline decoration-neutral-200 underline-offset-3"
          >
            code editing in v0
          </Link>
          , and I wanted to play around with the way the toolbar moves and
          transitions after you edit and save some code.
        </p>
      </header>

      {/*<Content />*/}
    </div>
  );
}

export async function generateStaticParams() {
  return await getBlogSlugs();
}

export const dynamicParams = false;
