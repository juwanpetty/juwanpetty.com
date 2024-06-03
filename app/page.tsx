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

  return (
    <Page aside={asideMarkup}>
      <Text variant="headingLg" className="mb-2">
        Intro
      </Text>
      <Text variant="bodyMd" className="mb-6">
        Welcome to my corner of the internet.
      </Text>

      <Text variant="headingMd" className="mb-2">
        Test Heading 2
      </Text>
      <Text variant="bodyMd" className="mb-6">
        Test paragraph
      </Text>

      <Text variant="headingSm" className="mb-2">
        Test Heading 3
      </Text>
      <Text variant="bodyMd">Test paragraph</Text>
    </Page>
  );
}

export default Home;
