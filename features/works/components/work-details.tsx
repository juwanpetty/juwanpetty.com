import { Icon } from "@/components/icon";
import { formatDate } from "@/lib/utils";
import { ReactNode } from "react";

type DetailRowProps = {
  label: string;
  children: ReactNode;
};

function DetailRow({ label, children }: DetailRowProps) {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-[7.5rem_1fr]">
      <span className="text-neutral-500">{label}</span>
      {children}
    </div>
  );
}

type DetailLinkProps = {
  href: string;
  label: string;
};

function DetailLink({ href, label }: DetailLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-x-1.5 justify-self-start"
    >
      <span className="underline decoration-neutral-200 underline-offset-3">
        {label}
      </span>
      <Icon name="arrow-up-right" className="size-4.5 text-neutral-500" />
    </a>
  );
}

type WorkDetailsProps = {
  date: string;
  repository?: string;
  website?: string;
};

export function WorkDetails({ date, repository, website }: WorkDetailsProps) {
  return (
    <div className="mb-15">
      <div className="space-y-6 text-base md:space-y-4">
        <DetailRow label="Year">
          <span>{formatDate(date, "yyyy")}</span>
        </DetailRow>

        {repository && (
          <DetailRow label="Repository">
            <DetailLink href={repository} label="Repository" />
          </DetailRow>
        )}

        {website && (
          <DetailRow label="Website">
            <DetailLink href={website} label="Website" />
          </DetailRow>
        )}
      </div>
    </div>
  );
}
