import { Icons } from "@/components/icons";
import { SOCIAL_LINKS } from "@/constants";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-1">
      {SOCIAL_LINKS.map(({ href, icon, accessibilityLabel }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-neutral-4 flex size-8 items-center justify-center rounded-lg bg-white transition-colors ease-[ease]"
        >
          <Icons icon={icon} className="text-neutral-11 size-4" />
          <span className="sr-only">{accessibilityLabel}</span>
        </a>
      ))}
    </div>
  );
}
