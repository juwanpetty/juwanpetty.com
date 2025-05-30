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
          className="flex size-8 items-center justify-center rounded-lg bg-white transition-colors ease-[ease] hover:bg-neutral-100"
        >
          <Icons icon={icon} className="size-4 text-neutral-500" />
          <span className="sr-only">{accessibilityLabel}</span>
        </a>
      ))}
    </div>
  );
}
