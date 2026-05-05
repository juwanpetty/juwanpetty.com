import { JobsList } from "@/components/jobs-list";
import { Page } from "@/components/page";
import { ExperimentsList } from "@/components/experiments-list";
import { Section } from "@/components/section";
import Link from "next/link";
import { IconGithub } from "nucleo-social-media";
import { IconEnvelopeFill18 } from "nucleo-ui-fill-18";
import { IconShapeCircleOutline18 } from "nucleo-ui-outline-18";
import { ComponentProps } from "react";

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
              <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                <Card
                  title="Illustrations"
                  description="Dimensional elements"
                />
                <Card
                  title="Framer Templates"
                  description="Easy-to-edit websites"
                />
                <Card title="3D Assets" description="Immersive elements" />
                <Card
                  title="Webflow Templates"
                  description="Perfect looking websites"
                />
                <Card title="Figma Templates" description="User interfaces" />
                <Card title="UX / UI Kits" description="Design with purpose" />
              </div>
            </Section.Content>
          </Section.Root>
        </Page.Content>
      </div>
    </Page.Root>
  );
}

type CardProps = {
  title: string;
  description: string;
};

function Card({ title, description }: CardProps) {
  return (
    <Link
      href="/work"
      className="hover:bg-gray-2 flex items-center gap-x-3 rounded-lg p-1 transition-colors"
    >
      <div className="bg-gray-1 dark:bg-gray-2 flex size-12.5 shrink-0 items-center justify-center rounded-md border border-black/10 dark:border-white/10">
        <IconShapeCircleOutline18 className="text-gray-11 size-6" />
      </div>

      {/*<div className="flex flex-col gap-y-0.5"> */}
      <div className="flex flex-col">
        <h3 className="text-gray-12 text-base font-medium">{title}</h3>
        <p className="text-gray-11 text-sm">{description}</p>
        {/*<p className="text-gray-11 text-base">{description}</p>*/}
      </div>
    </Link>
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
