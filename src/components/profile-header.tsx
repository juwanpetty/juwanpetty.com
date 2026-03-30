import { ImageDithering } from "@paper-design/shaders-react";
import { IconEnvelopeFill18 } from "nucleo-ui-fill-18";
import { IconEnvelopeOutline18 } from "nucleo-ui-outline-18";
import { IconGithub, IconLinkedin } from "nucleo-social-media";
import { ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function ProfileHeader() {
  return (
    <div className="relative isolate col-span-full grid grid-cols-subgrid">
      <ImageDithering
        height={200}
        image="https://images.unsplash.com/uploads/1412026095116d2b0c90e/3bf33993?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        colorBack="#000000"
        colorFront="#616161"
        colorHighlight="#ededed"
        originalColors={false}
        inverted={false}
        type="4x4"
        size={1}
        colorSteps={1}
        fit="cover"
        className="absolute top-0 left-0 z-0 flex h-50 w-full items-center justify-center overflow-hidden rounded-none bg-neutral-100 min-[720px]:rounded-lg"
      />

      <section className="z-1 col-start-2 flex flex-col gap-4 pt-40">
        <div className="flex w-full items-end justify-between">
          <div className="bg-background ring-background size-20 overflow-hidden rounded-lg ring-4">
            <Image
              src="/assets/images/profile.png"
              width={400}
              height={400}
              alt="Picture of the author"
            />
          </div>

          <div className="flex gap-2.5">
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" asChild>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linkedin.com/in/juwanpetty"
                >
                  <IconLinkedin />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/juwanpetty"
                >
                  <IconGithub className="size-6" />
                </a>
              </Button>
            </div>

            <Button asChild>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:jchpetty@gmail.com"
              >
                <IconEnvelopeOutline18 />
                <span>Email</span>
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-secondary-foreground text-base font-[550]">
              Juwan Petty
            </h1>
            <p className="text-muted-foreground text-base/7 text-pretty">
              Design Engineer
            </p>
          </div>

          <div className="text-secondary-foreground/80 flex flex-col gap-6 text-base/7 text-pretty">
            <p>
              Design-minded dev and dev-minded designer. I obsess over the
              details that make digital products feel <i>just right</i>
              —bridging design and engineering to build interfaces that simply
              work and quietly delight.
            </p>

            <p>
              Previously, I worked at Shopify and am currently seeking my{" "}
              <ExternalLink href="https://linkedin.com/in/juwanpetty">
                next opportunity
              </ExternalLink>
              . You can reach me via{" "}
              <ExternalLink href="mailto:jchpetty@gmail.com">
                <IconEnvelopeFill18 className="mr-1 mb-0.5 inline size-4" />
                <span>email</span>
              </ExternalLink>{" "}
              or see my code on{" "}
              <ExternalLink href="https://github.com/juwanpetty">
                <IconGithub className="mr-1 mb-0.5 inline size-4" />
                <span>GitHub</span>
              </ExternalLink>
              .
            </p>
          </div>
        </div>
      </section>
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
