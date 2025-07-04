import {
  BreadcrumbHome,
  BreadcrumbSeparator,
  Breadcrumbs,
  Breadcrumb,
} from "@/components/breadcrumbs";
import { CenteredPageLayout } from "@/components/centered-layout";
import { getAllExperiments } from "@/lib/experiment";
import { Metadata } from "next";
import { Link } from "next-view-transitions";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "A collection of interactive coding snippets and experiments showcasing various programming concepts and techniques.",
};

function ExperimentCard({
  slug,
  title,
  image,
}: {
  slug: string;
  title: string;
  image: {
    blurDataURL: string;
    blurHeight: number;
    blurWidth: number;
    height: number;
    src: string;
    width: number;
  };
}) {
  return (
    <Link href={`/experiments/${slug}`}>
      <div className="aspect-4/3 w-full rounded-lg border border-black/15 bg-neutral-50 dark:border-white/15 dark:bg-neutral-950">
        <Image
          src={image.src}
          alt={title}
          width={image.width}
          height={image.height}
          placeholder="blur"
          blurDataURL={image.blurDataURL}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <h3 className="mt-4 text-base font-medium text-neutral-950 dark:text-white">
        {title}
      </h3>
    </Link>
  );
}

export default async function ExperimentIndex() {
  const experiments = await getAllExperiments();

  return (
    <CenteredPageLayout
      breadcrumbs={
        <Breadcrumbs>
          <BreadcrumbHome />
          <BreadcrumbSeparator />
          <Breadcrumb>Experiments</Breadcrumb>
        </Breadcrumbs>
      }
    >
      <div className="mx-auto max-w-3xl">
        <header className="mt-10 space-y-1">
          <h2 className="text-base font-medium">Experiments</h2>
          <span className="text-base/7 text-neutral-700 dark:text-white/70">
            A collection of interactive coding snippets and experiments
            showcasing various programming concepts and techniques.
          </span>
        </header>

        <div>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 pb-32 sm:grid-cols-2">
            {experiments.map((experiment) => (
              <ExperimentCard
                key={experiment.slug}
                slug={experiment.slug}
                title={experiment.title}
                image={experiment.image}
              />
            ))}
          </div>
        </div>
      </div>
    </CenteredPageLayout>
  );
}
