import { Page } from "@/components/page";
import { ExperimentsList } from "@/components/experiments-list";
import { Section } from "@/components/section";

export default function WorkIndex() {
  return (
    <Page.Root className="max-w-7xl">
      <div className="space-y-24">
        <Page.Header className="space-y-1">
          <Page.Title>Works</Page.Title>
          <Page.Description>
            <p>
              A collection of my work, including projects, components, and more.
            </p>
          </Page.Description>
        </Page.Header>

        <Page.Content className="space-y-16">
          <Section.Root>
            <ExperimentsList className="md:grid-cols-3" />
          </Section.Root>
        </Page.Content>
      </div>
    </Page.Root>
  );
}
