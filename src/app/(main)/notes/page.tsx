import { NotesList } from "@/components/notes-list";
import { Page } from "@/components/page";

export default function NotesIndex() {
  return (
    <Page.Root className="max-w-xl">
      <div className="space-y-24">
        <Page.Header>
          <Page.Title>Notes</Page.Title>
          <Page.Description className="space-y-4">
            <p>
              Notes on engineering, developer experience, design systems, news,
              and tips.
            </p>
          </Page.Description>
        </Page.Header>

        <Page.Content className="space-y-16">
          <NotesList />
        </Page.Content>
      </div>
    </Page.Root>
  );
}
