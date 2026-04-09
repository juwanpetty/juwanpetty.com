import { IconEnvelopeFill18 } from "nucleo-ui-fill-18";
import { IconGithub } from "nucleo-social-media";
import { ComponentProps } from "react";
import Image from "next/image";

export function ProfileHeader() {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex flex-col gap-8">
        <div className="flex items-center gap-4">
          <div className="relative size-15 overflow-hidden rounded-full">
            <Image
              src="/assets/images/profile.png"
              width={60}
              height={60}
              alt="Picture of the author"
              preload
            />
          </div>

          <div>
            <h1 className="text-base font-semibold">Juwan Petty</h1>
            <p className="text-muted-foreground text-base">Design Engineer</p>
          </div>
        </div>

        <div className="text-muted-foreground flex flex-col gap-4 text-base leading-relaxed text-pretty">
          <p>
            Design-minded dev and dev-minded designer. I obsess over the details
            that make digital products feel <i>just right</i>
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
