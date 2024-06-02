import React from "react";
import { Text } from "@/shared/Text";

type Props = {
  title?: string;
  subtitle?: string;
};

export function PageHeader({ title, subtitle }: Props) {
  const renderPageHeader = Boolean(title || subtitle);

  return renderPageHeader ? (
    <section className="group mb-12 has-[p]:mb-24">
      <Text variant="headingMd" className="group-has-[p]:mb-4">
        {title}
      </Text>
      {subtitle ? (
        <Text variant="bodyMd" className="text-pretty ">
          {subtitle}
        </Text>
      ) : null}
    </section>
  ) : null;
}
