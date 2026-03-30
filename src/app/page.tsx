import { PatternList } from "@/components/pattern-list";
import {
  PageSection,
  PageSectionContent,
  PageSectionTitle,
} from "@/components/page-section";
import { ProfileHeader } from "@/components/profile-header";

export default function HomeIndex() {
  return (
    <div className="mx-auto grid grid-cols-[16px_minmax(0,672px)_16px] space-y-16 pt-0 pb-24 min-[720px]:pt-10 sm:grid-cols-[24px_minmax(0,672px)_24px]">
      <ProfileHeader />

      <div className="col-start-2">
        <PageSection>
          <PageSectionTitle>Patterns</PageSectionTitle>

          <PageSectionContent>
            <div className="mt-8">
              <PatternList />
            </div>
          </PageSectionContent>
        </PageSection>
      </div>
    </div>
  );
}
