import { ComponentProps } from "react";
import { Page } from "@/components/page";
import { Section } from "@/components/section";
import { JobsList } from "@/components/jobs-list";
import { IconGithub, IconLinkedin } from "nucleo-social-media";
import { IconEnvelopeFill18 } from "nucleo-ui-fill-18";
import Link from "next/link";
import { LucideChevronRight } from "lucide-react";
import { ImageMarquee } from "@/components/image-marquee";

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

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <ExternalLink href="mailto:jchpetty@gmail.com">
                    <IconEnvelopeFill18 />
                    Email
                  </ExternalLink>

                  <ExternalLink href="https://github.com/juwanpetty">
                    <IconGithub />
                    GitHub
                  </ExternalLink>

                  <ExternalLink href="https://linkedin.com/in/juwanpetty">
                    <IconLinkedin />
                    LinkedIn
                  </ExternalLink>
                </div>
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
            <Section.Content>
              <div className="border-gray-4 bg-gray-2 flex aspect-square w-full flex-col items-start justify-between rounded-xl border sm:aspect-video">
                <div className="py-6">
                  <ImageMarquee />
                </div>

                <div className="space-y-5 p-6">
                  <div className="space-y-1">
                    <h3 className="text-gray-12 max-w-3xl text-lg font-semibold text-balance">
                      Work
                    </h3>
                    <div className="text-gray-11 max-w-3xl text-base/relaxed">
                      <p className="max-w-11/12 text-pretty sm:max-w-3/5">
                        A collection of designs and prototypes that I&apos;ve
                        crafted to explore new ideas and push my skills.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/work"
                    className="text-gray-12 border-gray-4 dark:bg-gray-4 dark:border-gray-6 inline-flex h-10 items-center gap-1 rounded-xl border bg-white px-3.5 text-sm font-medium shadow-xs [&_svg]:size-4.5"
                  >
                    <span>View work</span>
                    <LucideChevronRight className="text-gray-9" />
                  </Link>
                </div>
              </div>
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
      className="bg-gray-3 text-gray-11 hover:bg-gray-4 inline-flex h-8 items-center gap-1 rounded-full px-2.5 text-sm font-medium transition-colors [&_svg]:size-4"
      {...props}
    >
      {children}
    </a>
  );
}
