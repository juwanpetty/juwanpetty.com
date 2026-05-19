import { Page } from "@/components/page";
import { Section } from "@/components/section";
import { getSortedWorks } from "@/lib/content";
import Image from "next/image";
import { IconShareUpRightOutline18 } from "nucleo-ui-outline-18";

export default function WorkIndex() {
  const works = getSortedWorks();

  return (
    <Page.Root className="max-w-6xl">
      <div className="space-y-24">
        <Page.Header className="space-y-1">
          <Page.Title>Works</Page.Title>
          <Page.Description>
            <p>
              A collection of designs and prototypes that I&apos;ve crafted to
              explore new ideas and push my skills.
            </p>
          </Page.Description>
          {/* <Page.Actions>
            <div className="bg-gray-3 text-gray-11 inline-flex h-8 items-center gap-1 rounded-full px-2.5 text-sm font-medium">
              <IconCodeFill18 className="size-4" />
              CodePen
            </div>

            <div className="bg-gray-3 text-gray-11 inline-flex h-8 items-center gap-1 rounded-full px-2.5 text-sm font-medium">
              <IconDribbble className="size-4" />
              Dribbble
            </div>
          </Page.Actions> */}
        </Page.Header>

        <Page.Content className="space-y-16">
          <Section.Root>
            <div className="columns-1 gap-4 sm:columns-2 md:columns-3">
              {works.map((work) => (
                <div
                  key={work._meta.path}
                  className="mb-4 flex break-inside-avoid flex-col gap-3"
                >
                  <Image
                    src={work.image}
                    alt={work.title}
                    className="dark:bg-gray-2 border-black-a2 dark:border-white-a2 rounded-xl border"
                  />

                  <div className="text-gray-12 flex items-center gap-x-2 px-1 font-medium">
                    <h3 className="flex-1">{work.title}</h3>

                    {work.previewUrl && (
                      <div className="border-gray-4 dark:bg-gray-1 flex size-10 items-center justify-center rounded-full border bg-white">
                        <IconShareUpRightOutline18 className="text-gray-12 size-4.5" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Section.Root>
        </Page.Content>
      </div>
    </Page.Root>
  );
}
