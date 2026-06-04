import { Page } from "@/components/page";
import { Section } from "@/components/section";
import { WorksList } from "@/components/works-list";

export default function WorkIndex() {
  return (
    <Page.Root className="max-w-6xl">
      <div className="space-y-24">
        <Page.Header>
          <Page.Title>Work</Page.Title>
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
            <WorksList />
          </Section.Root>
        </Page.Content>
      </div>
    </Page.Root>
  );
}
