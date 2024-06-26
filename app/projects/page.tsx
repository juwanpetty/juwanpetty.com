import { Metadata } from "next";
import Link from "next/link";
import { Page } from "@/shared/Page";
import { Text } from "@/shared/Text";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Projects | Juwan Petty",
};

const getProjects = async () => {
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
          projects {
            id
            name
            description
            url
            logo {
              width
              height
              url
            }
            coverImage {
              width
              height
              url
            }
          }
        }`,
      }),
    }
  );

  const { data } = await response.json();

  return data.projects;
};

async function Projects() {
  const projects = await getProjects();

  return (
    <Page
      title="Projects"
      subtitle="Listed below are the projects in which I have participated, dedicating
         significant time and effort towards their creation, maintenance, and
         enhancement."
    >
      <section className=" lex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <Link href="/projects/">
            <ImagePlaceholder className="aspect-video" />
          </Link>
          <div className="flex flex-col gap-1 px-4">
            <Link href="/projects/">
              <Text variant="headingMd" className="font-medium">
                GitHub Icons
              </Text>
            </Link>
            <Text variant="bodyMd" className="text-balance">
              A GitHub file icon theme for Visual Studio Code.
            </Text>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Projects;
