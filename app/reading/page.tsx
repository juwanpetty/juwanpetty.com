import React from "react";
import { Page } from "@/shared/Page";
import { Text } from "@/shared/Text";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

const getBooks = async () => {
  const response = await fetch(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cljsoc86w0dpt01t85tdr4uxn/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `{
          books {
            id
            title
            author
            readingStatus
            finishedReading
          }
        }`,
      }),
    }
  );

  const { data } = await response.json();

  return data.books;
};

type BookListItemProps = {
  title: string;
  author: string;
};

function BookListItem({ title, author }: BookListItemProps) {
  return (
    <li className="list-decimal text-base">
      <a
        href="/"
        className="relative bg-[url('/images/external-icon.svg')] bg-[length:16px] bg-[center_right] bg-no-repeat pr-4 text-stone-800 underline"
      >
        {title}
      </a>
      <span className="text-stone-500"> by {author}</span>
    </li>
  );
}

async function Reading() {
  const books = await getBooks();

  const bookItemMarkup = (
    <div className="flex flex-col gap-3">
      <a href="https://google.com">
        <ImagePlaceholder className="aspect-[3/4] max-w-64" />
        <span className="sr-only">Text</span>
      </a>
      <div className="px-4">
        <a href="https://google.com">
          <Text variant="headingSm">Book Title</Text>
        </a>
        <Text variant="bodyMd" className="text-balance">
          by Random Author
        </Text>
      </div>
    </div>
  );

  return (
    <Page
      title="Reading"
      subtitle="Each year, I select ten books that stuck with me most and place them here, where you'll find the last three years running. Every book listed here links to either my recommendation on my blog and newsletter, Trema, or to its corresponding page on Oku."
    >
      <section className="mb-16">
        <Text variant="headingMd" className="mb-3">
          2024
        </Text>

        <div className="grid grid-cols-2 gap-x-4 gap-y-12">
          {bookItemMarkup}
          {bookItemMarkup}
          {bookItemMarkup}
        </div>
      </section>
    </Page>
  );
}

export default Reading;
