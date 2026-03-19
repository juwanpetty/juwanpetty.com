import { Icon, IconName } from "@/components/icon";
import { buttonVariants } from "@/components/ui/button";
import type { Craft } from "content-collections";
import Image from "next/image";

type CraftItemProps = {
  craft: Craft;
};

export function CraftItem({ craft }: CraftItemProps) {
  const { title, previewURL, repositoryURL } = craft;
  const path = craft._meta.path;
  const fileSrc = `/crafts/${path}.png`;

  return (
    <div className="border-border bg-muted relative aspect-[4/3] rounded-lg border p-1 pb-0">
      <div className="bg-background relative h-full w-full rounded-md">
        <Image
          src={fileSrc}
          alt={title}
          width={800}
          height={600}
          className="rounded-md border border-black/10 object-cover dark:border-white/10"
        />
      </div>

      <div className="flex items-center justify-between px-3 py-2.5">
        <h3 className="text-foreground text-base font-medium tracking-tight">
          {title}
        </h3>

        <div className="flex gap-1">
          {repositoryURL ? (
            <ExternalIconLink
              href={repositoryURL}
              icon="github"
              label="Repository URL"
            />
          ) : null}

          {previewURL ? (
            <ExternalIconLink
              href={previewURL}
              icon="globe"
              label="Preview URL"
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

type ExternalIconLink = {
  href: string;
  icon: IconName;
  label: string;
};

function ExternalIconLink({ href, icon, label }: ExternalIconLink) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonVariants({ variant: "ghost", size: "icon" })}
    >
      <Icon name={icon} className="text-muted-foreground" />
      <span className="sr-only">{label}</span>
    </a>
  );
}
