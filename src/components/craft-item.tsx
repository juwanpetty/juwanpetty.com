import { Icon, IconName } from "@/components/icon";
import { buttonVariants } from "@/components/ui/button";
import { Craft } from "@/data/crafts";

type CraftItemProps = {
  craft: Craft;
};

export function CraftItem({ craft }: CraftItemProps) {
  const { id, previewUrl, repositoryUrl } = craft;

  const fileSrc = `/crafts/${craft.id}.mp4`;

  return (
    <div className="border-border bg-muted flex flex-col rounded-xl border p-2 pt-0">
      <div className="flex h-11 w-full items-center justify-between px-2 pr-0 font-mono text-sm">
        <span className="text-muted-foreground font-medium">{id}</span>

        <div className="flex gap-1">
          {repositoryUrl ? (
            <ExternalIconLink
              href={repositoryUrl}
              icon="github"
              label="Repository URL"
            />
          ) : null}

          {previewUrl ? (
            <ExternalIconLink
              href={previewUrl}
              icon="share-up-right"
              label="Preview URL"
            />
          ) : null}
        </div>
      </div>

      <video
        playsInline
        autoPlay
        muted
        loop
        className="border-border rounded-md border"
      >
        <source src={fileSrc} type="video/mp4" />
      </video>
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
