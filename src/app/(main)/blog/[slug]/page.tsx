import { allPosts } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { components as mdxComponents } from "mdx-components";
import { Metadata } from "next";
import { getAdjacentItems, getSortedPosts } from "@/lib/content";
import { Page } from "@/components/page";
import { formatDate, FULL_DATE_FORMAT } from "@/lib/dates";

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._meta.path,
  }));
}

type MetadataProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { slug } = await params;
  const post = allPosts.find((post) => post._meta.path === slug);

  if (!post) notFound();

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://juwanpetty.com/blog/${slug}`,
      siteName: "Juwan Petty",
      type: "article",
    },
  };
}

type BlogDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function BlogDetail({ params }: BlogDetailProps) {
  const { slug } = await params;
  const post = allPosts.find((post) => post._meta.path === slug);

  const sortedPosts = getSortedPosts();
  const {} = getAdjacentItems(sortedPosts, slug);

  if (!post) {
    return notFound();
  }

  const { title, published } = post;

  const formmattedDate = formatDate(published.toDateString(), FULL_DATE_FORMAT);

  return (
    <Page.Root>
      <Page.Header className="space-y-1">
        <Page.Title>{title}</Page.Title>
        <Page.Description>
          <span>{formmattedDate}</span>
        </Page.Description>
      </Page.Header>

      <Page.Content className="mt-20">
        <div className="prose">
          <MDXContent components={mdxComponents} code={post.mdx} />
        </div>
      </Page.Content>

      {/* <div>
        <header>
          <h1 className="max-w-3xl text-xl font-semibold text-balance">
            Details that make interfaces feel better
          </h1>
          <p className="text-muted-foreground mt-1 text-base">
            October 14, 2024
          </p>
        </header>

        <Page.Content className="mt-20">
          <h2 className="text-secondary-foreground mt-20 mb-5 text-base font-semibold">
            What is Untitled UI React?
          </h2>

          <p className="text-secondary-foreground/65 mb-4 text-base leading-relaxed text-pretty">
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground decoration-muted-foreground/25 font-medium underline underline-offset-3"
            >
              Untitled UI React
            </a>{" "}
            is the world&apos;s largest collection of open-source React
            components built with Tailwind CSS v4.2 and React Aria v1.16. Just
            copy, paste, and build.
          </p>

          <p className="text-secondary-foreground/65 mb-4 text-base leading-relaxed text-pretty">
            Skip months of design and development with pixel-perfect,
            production-ready components. Untitled UI React is built with React
            Aria v1.16 and TypeScript v5.9, and styled with the latest version
            of Tailwind CSS v4.2.
          </p>

          <p className="text-secondary-foreground/65 mb-4 text-base leading-relaxed text-pretty">
            It&apos;s the perfect starting point for any project—everything you
            need to design and build modern, beautiful interfaces and websites.
          </p>

          <h2 className="text-secondary-foreground mt-20 mb-5 text-base font-semibold">
            Accessibility
          </h2>

          <p className="text-secondary-foreground/65 mb-4 text-base leading-relaxed text-pretty">
            Accessibility isn’t optional—it’s the baseline for any modern build.
          </p>

          <p className="text-secondary-foreground/65 mb-4 text-base leading-relaxed text-pretty">
            To ensure every component meets accessibility standards and best
            practices, we built our components based on{" "}
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground decoration-muted-foreground/25 font-medium underline underline-offset-3"
            >
              React Aria
            </a>
            . React Aria is a library of unstyled primitives that make it easy
            to build high-quality and accessible components.
          </p>

          <h2 className="text-secondary-foreground mt-20 mb-5 text-base font-semibold">
            How is this different from a library?
          </h2>

          <p className="text-secondary-foreground/65 mb-4 text-base leading-relaxed text-pretty">
            Unlike traditional component libraries that are installed as a
            dependency, Untitled UI React gives you the source code.
          </p>

          <p className="text-secondary-foreground/65 mb-4 text-base leading-relaxed text-pretty">
            When you select a component, its code is added directly to your
            project. This means no package dependencies to manage and no vendor
            lock-in! You have full control to modify, extend, or adapt the
            components to your specific needs—because you own the code.
          </p>
        </Page.Content>
      </div> */}
    </Page.Root>
  );
}
