import { JobsList } from "@/components/jobs-list";
import { Page } from "@/components/page";
import { ExperimentsList } from "@/components/experiments-list";
import { Section } from "@/components/section";
import { IconGithub } from "nucleo-social-media";
import { IconEnvelopeFill18 } from "nucleo-ui-fill-18";
import { ComponentProps } from "react";
import { ComponentsList } from "@/components/components-list";

export default function WorkIndex() {
  return (
    <Page.Root>
      <div className="space-y-24">
        <Page.Header className="space-y-1">
          <Page.Title>Juwan Petty</Page.Title>
          <Page.Description>
            <p>UI Engineer in Atlanta, GA</p>
          </Page.Description>
        </Page.Header>

        <Page.Content className="space-y-16">
          <Section.Root>
            <Section.Header>
              <Section.Title>About</Section.Title>
            </Section.Header>

            <Section.Content>
              <div className="text-gray-11 max-w-3xl space-y-4 text-base/relaxed">
                <p>
                  Design-minded dev and dev-minded designer. I obsess over the
                  details that make digital products feel <i>just right</i>
                  —bridging design and engineering to build interfaces that
                  simply work and quietly delight.
                </p>

                <p>
                  Previously, I worked at Shopify and am currently seeking my{" "}
                  <ExternalLink href="https://linkedin.com/in/juwanpetty">
                    next opportunity
                  </ExternalLink>
                  . You can reach me via{" "}
                  <ExternalLink href="mailto:jchpetty@gmail.com">
                    <IconEnvelopeFill18 className="text-gray-9 mr-1 mb-0.5 inline size-4" />
                    <span>email</span>
                  </ExternalLink>{" "}
                  or see my code on{" "}
                  <ExternalLink href="https://github.com/juwanpetty">
                    <IconGithub className="text-gray-9 mr-1 mb-0.5 inline size-4" />
                    <span>GitHub</span>
                  </ExternalLink>
                  .
                </p>
              </div>
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
              <Section.Title>Work</Section.Title>
            </Section.Header>

            <Section.Content>
              <ExperimentsList limit={2} />
            </Section.Content>
          </Section.Root>

          <Section.Root>
            <Section.Header>
              <Section.Title>Components</Section.Title>
            </Section.Header>

            <Section.Content>
              <ComponentsList limit={6} />
            </Section.Content>
          </Section.Root>
        </Page.Content>
      </div>
    </Page.Root>
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
      className="text-gray-12 decoration-gray-11/25 font-medium underline underline-offset-3"
      {...props}
    >
      {children}
    </a>
  );
}
