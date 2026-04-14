import { IconEnvelopeFill18 } from "nucleo-ui-fill-18";
import { IconGithub } from "nucleo-social-media";
import { ComponentProps } from "react";

export function ProfileHeader() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-heading text-base font-semibold">Juwan Petty</h1>
        <p className="text-gray-11 text-base/relaxed">UI Engineer</p>
      </div>

      <div className="text-gray-11 max-w-3xl space-y-4 text-base/relaxed">
        <p>
          Design-minded dev and dev-minded designer. I obsess over the details
          that make digital products feel <i>just right</i>
          —bridging design and engineering to build interfaces that simply work
          and quietly delight.
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
      className="text-gray-12 decoration-gray-11/25 font-medium underline underline-offset-3"
      {...props}
    >
      {children}
    </a>
  );
}
