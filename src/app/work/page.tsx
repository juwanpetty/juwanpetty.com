import { JobsList } from "@/components/jobs-list";
import { Page } from "@/components/page";
import { Section } from "@/components/section";

export default function WorkIndex() {
  return (
    <Page.Root>
      <div className="space-y-24">
        <Page.Header className="space-y-1">
          <Page.Title>Juwan Petty</Page.Title>
          <Page.Description>
            <p>Design Engineer in Atlanta, GA</p>
          </Page.Description>
        </Page.Header>

        <Page.Content className="space-y-16">
          <Section.Root>
            <Section.Header>
              <Section.Title>About</Section.Title>
            </Section.Header>

            <Section.Content>
              <p className="text-gray-11 text-base/relaxed">
                Building thoughtful interfaces at scale. Focused on design
                systems, component architecture, and accessible UI. My work
                centers on translating product and design intent into reusable
                patterns that help teams ship consistent, high-quality
                experiences.
              </p>
            </Section.Content>
          </Section.Root>

          <Section.Root>
            <Section.Header>
              <Section.Title>Experience</Section.Title>
            </Section.Header>

            <Section.Content>
              <JobsList />
            </Section.Content>
          </Section.Root>

          <Section.Root>
            <Section.Header>
              <Section.Title>Education</Section.Title>
            </Section.Header>

            <Section.Content>
              <div className="grid grid-cols-1 gap-y-2 md:grid-cols-[9.375rem_1fr]">
                <div>
                  <span className="text-gray-11">2015 — 2020</span>
                </div>

                <div>
                  <h2 className="mb-2 font-medium">
                    B.S. in Interactive Design at Kennesaw State University
                  </h2>
                </div>
              </div>
            </Section.Content>
          </Section.Root>
        </Page.Content>
      </div>
    </Page.Root>
  );
}
