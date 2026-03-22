import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconUTurnToLeftOutline18 } from "nucleo-ui-outline-18";

type PageBackLinkProps = {
  href: string;
  label: string;
};

export function PageBackLink({ href, label }: PageBackLinkProps) {
  return (
    <Button variant="ghost" size="sm" asChild>
      <Link href={href} className="text-secondary-foreground -ml-2">
        <IconUTurnToLeftOutline18 className="size-4.5" />
        <span>{label}</span>
      </Link>
    </Button>
  );
}
