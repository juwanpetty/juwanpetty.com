import { allNotes } from "content-collections";
import { notFound } from "next/navigation";
import { Page } from "@/components/page";
import { NotesItem } from "@/components/notes-item";

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
        <NotesItem note={note} />
      </Page.Content>
    </Page.Root>
  );
}
