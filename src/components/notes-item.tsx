import { Note } from "content-collections";
import { MDXContent } from "@content-collections/mdx/react";
import { components as mdxComponents } from "@/../mdx-components";
import { formatDate, FULL_DATE_FORMAT } from "@/lib/dates";
import { IconLink4Outline18, IconMsgOutline18 } from "nucleo-ui-outline-18";
import Link from "next/link";

type NotesItemProp = {
  note: Note;
};

export function NotesItem({ note }: NotesItemProp) {
  const {
    published,
    _meta: { path },
  } = note;

  const formmattedDate = formatDate(published, FULL_DATE_FORMAT);

  const href = `/notes/${path}`;

  return (
    <article className="flex flex-col gap-2">
      <div>
        <Link
          href={href}
          className="text-gray-12 inline-flex text-[0.9375rem] font-semibold underline-offset-3 hover:underline"
        >
          {formmattedDate}
        </Link>
      </div>

      <div className="prose">
        <MDXContent components={mdxComponents} code={note.mdx} />
      </div>

      <div className="text-gray-11 -ml-2.5 flex gap-1 text-sm">
        <button className="hover:bg-gray-2 flex size-9 items-center justify-center rounded-full transition-colors">
          <IconLink4Outline18 className="rotate-45" />
        </button>
        <a
          href={`mailto:jchpetty@gmail.com?subject=Reply: Note ${path}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-gray-2 flex size-9 items-center justify-center rounded-full transition-colors"
        >
          <IconMsgOutline18 />
        </a>
      </div>
    </article>
  );
}
