import React from "react";
import Image from "next/image";

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  logo: {
    width: number;
    height: number;
    url: string;
  };
  coverImage: {
    width: number;
    height: number;
    url: string;
  };
}

type Props = {
  projectData: Project;
};

export function ProjectItem({
  projectData: { name, description, url, coverImage },
}: Props) {
  return (
    <div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Image
          className="mb-4 mt-4 flex w-full items-center justify-center rounded-lg border  border-solid border-stone-200 bg-stone-50"
          src={coverImage.url}
          width={coverImage.width}
          height={coverImage.height}
          alt={`Featured image for ${name}`}
        />
      </a>

      <a href={url} target="_blank" rel="noopener noreferrer">
        <h2 className="mb-1 text-base font-medium">{name}</h2>
      </a>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <p className="text-base text-stone-500">{description}</p>
      </a>
    </div>
  );
}
