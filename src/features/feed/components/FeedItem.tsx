import { ImagePlaceholder } from "@components/ImagePlaceholder";
import { getPublishedDate } from "@features/feed/utilities/get-published-date";

export function FeedItem() {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <ImagePlaceholder className="h-10 w-10" />
      <div>
        <div className="mb-2 flex items-center justify-start gap-3 pr-3">
          <h2 className="flex items-center text-base font-medium text-neutral-900">
            Curations
          </h2>
          <span className="text-base font-medium text-neutral-500">
            {getPublishedDate(new Date())}
          </span>
        </div>
        <p className="text-base text-neutral-700">
          A curated collection of the best products on the web
        </p>
        <ImagePlaceholder className="mt-4 aspect-video" />
      </div>
    </div>
  );
}
