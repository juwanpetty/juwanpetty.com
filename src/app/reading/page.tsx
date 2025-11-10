import { BackButton } from "@/components/back-button";
import readingList from "@/data/reading-list.json";

export default function ReadingIndex() {
  return (
    <div>
      <div className="mb-6">
        <BackButton href="/">Home</BackButton>
      </div>

      <div className="mb-12">
        <h1 className="text-base font-medium">Reading</h1>
        <p className="text-neutral-500">Here are the books I've read</p>
      </div>

      <div className="space-y-16">
        {readingListGroupedByYear.map(({ year, books }) => (
          <section key={year}>
            <div className="mb-6">
              <h2 className="text-base font-medium text-neutral-500">{year}</h2>
            </div>
            <div className="flex flex-col gap-y-3">
              {books.map((book) => (
                <a
                  key={book.title}
                  href={book.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4"
                >
                  <span className="truncate text-base font-medium underline-offset-3 hover:underline">
                    {book.title}
                  </span>

                  <span className="flex flex-1 shrink border-t border-dashed border-neutral-200" />

                  <span className="text-base text-nowrap text-neutral-500">
                    {book.author}
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

const readingListGroupedByYear = Object.entries(
  readingList.reduce<Record<number, typeof readingList>>((groups, book) => {
    const year = new Date(book.finishedOn).getFullYear();

    if (!groups[year]) {
      groups[year] = [];
    }

    groups[year].push(book);

    return groups;
  }, {})
)
  .map(([year, books]) => ({
    year: Number(year),
    books,
  }))
  .sort((a, b) => b.year - a.year);
