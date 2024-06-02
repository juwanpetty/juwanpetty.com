import React from "react";
import Markdown from "react-markdown";
import { Page } from "@/shared/Page";
import { TableOfContents } from "@/components/TableOfContents";

const getPost = async (params: { slug: any }) => {
  const response = await fetch(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cljsoc86w0dpt01t85tdr4uxn/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `{
              post(where: {slug: "${params.slug}"}) {
                  id
                  title
                  content {
                    markdown
                  }
              }
          }`,
        variables: {
          slug: params.slug,
        },
      }),
    }
  );
  const { data } = await response.json();
  return data.post;
};

async function WritingDetail({ params }: { params: any }) {
  const post = await getPost(params);

  const { title, content } = post;

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Writing", href: "/writing" },
    { label: title, href: `/writing/${params.slug}` },
  ];

  return (
    <Page
      breadcrumbs={breadcrumbs}
      aside={<TableOfContents label="On this page" />}
    >
      <div className="prose-ston prose">
        <h1 className="text-xl font-medium">{title}</h1>
        <Markdown>{content.markdown}</Markdown>
      </div>
    </Page>
  );
}

export default WritingDetail;
