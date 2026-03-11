import { formatDate } from "@/lib/utils";
import { Job } from "content-collections";

const FORMAT_STRING = "LLL yyyy";

type JobsItemProps = {
  job: Job;
};

export function JobsItem({ job }: JobsItemProps) {
  const { title, company, startDate, endDate, tools, projects, content } = job;

  const hasProjects = projects && projects.length > 0;
  const hasTools = tools && tools.length > 0;
  const hasContent = Boolean(content);

  const formattedStartDate = formatDate(
    startDate.toDateString(),
    FORMAT_STRING
  );
  const formattedEndDate =
    endDate && formatDate(endDate.toDateString(), FORMAT_STRING);

  return (
    <div>
      <h2 className="font-medium">{company}</h2>

      <div className="text-muted-foreground flex flex-wrap justify-between gap-x-5">
        <p>{title}</p>
        <span>
          <time dateTime={startDate.toISOString()}>{formattedStartDate}</time>
          {endDate && (
            <>
              {" - "}
              <time dateTime={endDate.toISOString()}>{formattedEndDate}</time>
            </>
          )}
        </span>
      </div>

      <div className="mt-5 text-base text-pretty">
        {hasContent && <p>{content}</p>}

        {hasProjects && (
          <ul className="mt-5 list-disc ps-6">
            {projects.map((project, index) => (
              <li key={index} className="not-first:mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="decoration-underline relative inline-block pr-5 align-top underline decoration-[0.09375rem]"
                >
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      {hasTools && (
        <p className="text-muted-foreground mt-5">{tools.join(", ")}</p>
      )}
    </div>
  );
}
