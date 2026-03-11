import { JobsList } from "@/components/jobs-list";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderTitle,
} from "@/components/page-header";
import {
  PageSection,
  PageSectionContent,
  PageSectionTitle,
} from "@/components/page-section";

export default function WorkIndex() {
  return (
    <div className="mx-auto max-w-2xl py-14">
      <div className="space-y-16">
        <PageHeader>
          <PageHeaderTitle>Work</PageHeaderTitle>

          <PageHeaderDescription>
            <p>
              Design-minded dev and dev-minded designer. I obsess over the
              details that make digital products feel <i>just right</i>—bridging
              design and engineering to build interfaces that simply work and
              quietly delight.
            </p>
          </PageHeaderDescription>

          {/* TODO: Add link to resume and LinkedIn */}
        </PageHeader>

        <PageSection>
          <PageSectionTitle>Experience</PageSectionTitle>

          <PageSectionContent>
            <div className="mt-8">
              <JobsList />
            </div>
          </PageSectionContent>
        </PageSection>
      </div>
    </div>
  );
}
