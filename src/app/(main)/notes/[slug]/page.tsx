import { allNotes } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { notFound } from "next/navigation";
import { components as mdxComponents } from "@/../mdx-components";
import { Page } from "@/components/page";
import { IconLink4Outline18, IconMsgOutline18 } from "nucleo-ui-outline-18";

export async function generateStaticParams() {
  return allNotes.map((note) => ({
    slug: note._meta.path,
  }));
}

type NotesDetailProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function NotesDetail({ params }: NotesDetailProps) {
  const { slug } = await params;
  const note = allNotes.find((note) => note._meta.path === slug);

  if (!note) {
    return notFound();
  }

  return (
    <Page.Root className="max-w-xl">
      <Page.Content className="mt-20">
        <div className="flex flex-col gap-4">
          <div className="prose">
            <MDXContent components={mdxComponents} code={note.mdx} />
          </div>
          <div className="text-gray-11 -ml-2.5 flex gap-1 text-sm">
            <a
              href="#"
              className="hover:bg-gray-2 flex size-9 items-center justify-center rounded-full transition-colors"
            >
              <IconLink4Outline18 className="rotate-45" />
            </a>
            <a
              href="#"
              className="hover:bg-gray-2 flex size-9 items-center justify-center rounded-full transition-colors"
            >
              <IconMsgOutline18 />
            </a>
          </div>
        </div>
      </Page.Content>
    </Page.Root>
  );
}
