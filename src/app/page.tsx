import { Icon, IconName } from "@/components/icon";
import { ComponentProps } from "react";

export default function HomeIndex() {
  return (
    <div className="mx-auto max-w-2xl py-14">
      <div className="space-y-16">
        <div className="space-y-6">
          <h1 className="text-primary text-3xl tracking-tight">Welcome</h1>
          <p className="text-primary text-base/7">
            Design-minded dev and dev-minded designer. I obsess over the details
            that make digital products feel <i>just right</i>—bridging design
            and engineering to build interfaces that simply work and quietly
            delight.
          </p>

          <div className="flex items-center gap-4">
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
          </div>
        </div>
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
      className="bg-secondary text-secondary-foreground flex h-8 items-center gap-0.5 rounded-lg px-2.5"
      {...props}
    >
      <Icon name={icon} className="size-4" />
      <span className="px-1 text-sm font-medium">{label}</span>
    </a>
  );
}
