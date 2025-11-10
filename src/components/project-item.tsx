type ProjectItemProps = {
  project: {
    title: string;
    url: string;
  };
};

export function ProjectItem({ project }: ProjectItemProps) {
  const { title, url } = project;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4"
    >
      <span className="truncate text-base font-medium underline-offset-3 hover:underline">
        {title}
      </span>

      <span className="flex flex-1 shrink border-t border-dashed border-neutral-200" />
    </a>
  );
}
