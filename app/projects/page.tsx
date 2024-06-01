import { Metadata } from "next";
import Link from "next/link";

import { ImagePlaceholder } from "../../shared/ImagePlaceholder";
import { Page } from "../../shared/Page";

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
      breadcrumbs={[{ label: "Projects", href: "/projects" }]}
    >
      <section className=" lex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <Link href="/projects/">
            <ImagePlaceholder className="aspect-video" />
          </Link>
          <div className="px-4">
            <Link href="/projects/" className="text-base font-medium">
              GitHub Icons
            </Link>
            <p className="text-balance text-base text-stone-500">
              A GitHub file icon theme for Visual Studio Code.
            </p>
          </div>
        </div>
      </section>
    </Page>
  );
}

export default Projects;
