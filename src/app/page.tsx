import { CraftList } from "@/components/craft-list";
import { PageHeader, PageHeaderDescription } from "@/components/page-header";
import {
  PageSection,
  PageSectionContent,
  PageSectionTitle,
} from "@/components/page-section";
import { ProfileHeader } from "@/components/profile-header";
import { ComponentProps } from "react";

export default function HomeIndex() {
  return (
    <div className="mx-auto max-w-2xl pb-14">
      <ProfileHeader />

      <div className="space-y-16">
        <PageHeader>
          <PageHeaderDescription>
            <p>
              Design-minded dev and dev-minded designer. I obsess over the
              details that make digital products feel <i>just right</i>—bridging
              design and engineering to build interfaces that simply work and
              quietly delight.
            </p>

            <p>
              Previously, I worked at Shopify and am currently seeking my{" "}
              <ExternalLink href="https://linkedin.com/in/juwanpetty">
                next opportunity
              </ExternalLink>
              . You can reach me via{" "}
              <ExternalLink href="mailto:jchpetty@gmail.com">
                email
              </ExternalLink>{" "}
              or see my code on{" "}
              <ExternalLink href="https://github.com/juwanpetty">
                GitHub
              </ExternalLink>
              .
            </p>
          </PageHeaderDescription>
        </PageHeader>

        <PageSection>
          <PageSectionTitle>Crafts</PageSectionTitle>

          <PageSectionContent>
            <div className="mt-8">
              <CraftList />
            </div>
          </PageSectionContent>
        </PageSection>
      </div>
    </div>
  );
}

type ExternalLinkProps = ComponentProps<"a"> & {
  href: string;
};

function ExternalLink({ href, children, ...props }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-secondary-foreground decoration-border hover:decoration-secondary-foreground font-medium underline underline-offset-3 transition-colors"
      {...props}
    >
      {children}
    </a>
  );
}
