export type Projects = {
  id: string;
  title: string;
  description: string;
  url: string;
  image: {
    src: string;
    alt: string;
  };
};

export function getProjects(): Projects[] {
  return projects;
}

const projects = [
  {
    id: "integrated-campaigns",
    title: "Multichannel Marketing Campaigns",
    description:
      "Manage and measure your marketing across channels with Campaigns.",
    url: "https://www.shopify.com/editions/summer2025#measure-multichannel-marketing-with-campaigns",
    image: {
      src: "/images/integrated-campaigns.png",
      alt: "Multichannel Marketing Campaigns",
    },
  },
  {
    id: "github-icons",
    title: "GitHub Icons",
    description: "A GitHub file icon theme for Visual Studio Code",
    url: "https://github.com/juwanpetty/github-icons",
    image: {
      src: "/images/github-icon.png",
      alt: "GitHub Icons",
    },
  },
];
