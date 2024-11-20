import { ImagePlaceholder } from "@/shared/components/image-placeholder";
import { PageLayout } from "@/shared/components/page-layout";

export default function Home() {
  return (
    <PageLayout>
      <ImagePlaceholder className="aspect-auto h-52 w-full" />
    </PageLayout>
  );
}
