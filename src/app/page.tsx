import { PatternList } from "@/components/pattern-list";
import { ProfileHeader } from "@/components/profile-header";
import { Page } from "@/components/page";
import { Section } from "@/components/section";

export default function HomeIndex() {
  return (
    <Page.Root>
      <div className="space-y-16">
        <ProfileHeader />

        <Page.Content className="space-y-16">
          <Section.Root>
            <Section.Header>
              <Section.Title>Components</Section.Title>
            </Section.Header>

            <Section.Content>
              <PatternList />
            </Section.Content>
          </Section.Root>
        </Page.Content>
      </div>
    </Page.Root>
  );
}
