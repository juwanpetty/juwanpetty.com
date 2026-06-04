import { NotesItem } from "@/components/notes-item";
import { getSortedNotes } from "@/lib/content";

export function NotesList() {
  const notes = getSortedNotes();

  return (
    <div className="space-y-12">
      {notes.map((note) => (
        <NotesItem key={note._meta.path} note={note} />
      ))}
    </div>
  );
}
