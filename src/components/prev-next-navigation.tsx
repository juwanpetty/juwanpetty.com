import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  IconArrowLeftOutline18,
  IconArrowRightOutline18,
} from "nucleo-ui-outline-18";

type NavigableItem = {
  title: string;
  _meta: { path: string };
};

type PrevNextNavigationProps = {
  baseUrl: string;
  previous?: NavigableItem;
  next?: NavigableItem;
};

export function PrevNextNavigation({
  baseUrl,
  previous,
  next,
}: PrevNextNavigationProps) {
  return (
    <div className="flex items-center justify-between gap-2">
      {previous && (
        <Button variant="ghost" size="sm" asChild>
          <Link
            href={`${baseUrl}/${previous._meta.path}`}
            className="text-secondary-foreground -ml-2"
          >
            <IconArrowLeftOutline18 className="size-4" />
            <span>{previous.title}</span>
          </Link>
        </Button>
      )}

      {next && (
        <Button variant="ghost" size="sm" asChild className="ml-auto">
          <Link
            href={`${baseUrl}/${next._meta.path}`}
            className="text-secondary-foreground -mr-2"
          >
            <span>{next.title}</span>
            <IconArrowRightOutline18 className="size-4" />
          </Link>
        </Button>
      )}
    </div>
  );
}
