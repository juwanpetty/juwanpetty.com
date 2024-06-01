import React from "react";
import { ImagePlaceholder } from "../../shared/ImagePlaceholder";
import { Page } from "../../shared/Page";

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

  return (
    <Page
      title="Reading"
      subtitle="Each year, I select ten books that stuck with me most and place them here, where you'll find the last three years running. Every book listed here links to either my recommendation on my blog and newsletter, Trema, or to its corresponding page on Oku."
      breadcrumbs={[{ label: "Reading", href: "/reading" }]}
    >
      <section className="mb-16">
        <h3 className="mb-2 text-base font-medium text-stone-900 transition-colors dark:text-stone-100">
          2024
        </h3>
        <div className="grid grid-cols-2 gap-x-4 gap-y-12">
          <div className="flex flex-col gap-3">
            <a href="https://google.com">
              <ImagePlaceholder className="aspect-[3/4] max-w-64" />
              <span className="sr-only">Text</span>
            </a>
            <div className="px-4">
              <a href="https://google.com" className="text-base font-medium">
                Book Title
              </a>
              <p className="text-balance text-base text-stone-500">
                by Random Author
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a href="https://google.com">
              <ImagePlaceholder className="aspect-[3/4] max-w-64" />
              <span className="sr-only">Text</span>
            </a>
            <div className="px-4">
              <a href="https://google.com" className="text-base font-medium">
                Book Title
              </a>
              <p className="text-balance text-base text-stone-500">
                by Random Author
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <a href="https://google.com">
              <ImagePlaceholder className="aspect-[3/4] max-w-64" />
              <span className="sr-only">Text</span>
            </a>
            <div className="px-4">
              <a href="https://google.com" className="text-base font-medium">
                Book Title
              </a>
              <p className="text-balance text-base text-stone-500">
                by Random Author
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="mb-16 flex gap-6">
          <ImagePlaceholder className="aspect-[3/4] max-w-20" />
          <div className="flex w-full flex-col justify-between py-5">
            <p className="mb-1 text-base font-medium">Manage Your Day-to-Day</p>
            <div>
              <p className="my-3 text-sm text-stone-500">
                by Jocelyn K. Glei &amp; Scott Belsky
              </p>
              <ProgressBar initialProgress={50} />
            </div>
          </div>
        </div> */}
      {/* <section className="mb-16">
          <h3 className="mb-2 text-base font-medium text-stone-900 transition-colors dark:text-stone-100">
            2024
          </h3>
          <ol className="flex list-decimal flex-col gap-4 pl-4">
            <BookListItem title="The Road to Roswell" author="Connie Willis" />
            <BookListItem title="Sagittarius Rising" author="Cecil Lewis" />
            <BookListItem
              title="The Sisterhood: The Secret History of Women at the CIA"
              author="Liza Mundy"
            />
            <BookListItem
              title="Tomorrow, and Tomorrow, and Tomorrow"
              author="Gabrielle Zevin"
            />
          </ol>
        </section>
        <section className="mb-16">
          <h3 className="mb-2 text-base font-medium text-stone-900 transition-colors dark:text-stone-100">
            2023
          </h3>
          <ol className="flex list-decimal flex-col gap-4 pl-4">
            <BookListItem title="The Road to Roswell" author="Connie Willis" />
            <BookListItem title="Sagittarius Rising" author="Cecil Lewis" />
            <BookListItem
              title="The Sisterhood: The Secret History of Women at the CIA"
              author="Liza Mundy"
            />
            <BookListItem
              title="Tomorrow, and Tomorrow, and Tomorrow"
              author="Gabrielle Zevin"
            />
          </ol>
        </section> */}
    </Page>
  );
}

export default Reading;
