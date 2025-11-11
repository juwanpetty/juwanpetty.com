import { Icon, IconName } from "@/components/icon";
import { PageHeader } from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { ComponentProps } from "react";

export default function HomeIndex() {
  return (
    <div className="mx-auto max-w-2xl py-14">
      <div className="space-y-16">
        <PageHeader>
          <PageHeader.Title>Welcome</PageHeader.Title>
          <PageHeader.Description>
            Design-minded dev and dev-minded designer. I obsess over the details
            that make digital products feel <i>just right</i>—bridging design
            and engineering to build interfaces that simply work and quietly
            delight.
          </PageHeader.Description>
          <PageHeader.Actions>
            <ExternalLink
              href="mailto:jchpetty@gmail.com"
              icon="mail"
              label="Mail"
            />

            <ExternalLink
              href="https://github.com/juwanpetty"
              icon="github"
              label="GitHub"
            />
          </PageHeader.Actions>
        </PageHeader>
      </div>
    </div>
  );
}

type ExternalLinkProps = ComponentProps<"a"> & {
  icon: IconName;
  href: string;
  label: string;
};

export function ExternalLink({
  icon,
  href,
  label,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonVariants({ variant: "secondary", size: "default" })}
      {...props}
    >
      <Icon name={icon} className="size-4" />
      <span className="px-1 text-sm font-medium">{label}</span>
    </a>
  );
}
