import React from "react";
import { Metadata } from "next";
import { Page } from "@/shared/Page";
import { Text } from "@/shared/Text";
import { TableOfContents } from "@/components/TableOfContents";

export const metadata: Metadata = {
  title: "Juwan Petty",
};

async function Home() {
  const asideMarkup = <TableOfContents label="On this page" />;

  const breadcrumbs = [{ label: "Home", href: "/" }];

  return (
    <Page breadcrumbs={breadcrumbs} aside={asideMarkup}>
      <Text variant="headingLg" className="mb-4">
        Intro
      </Text>
      <Text variant="bodyMd" className="mb-4">
        Welcome to my corner of the internet.
      </Text>

      <h2>Test Heading 2</h2>
      <p>Test paragraph</p>

      <h3>Test Heading 3</h3>
      <p>Test paragraph</p>
    </Page>
  );
}

export default Home;
