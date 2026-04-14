import { formatDate } from "@/lib/dates";
import { Job } from "content-collections";

const FORMAT_STRING = "yyyy";

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

  const formattedEndDate = endDate
    ? formatDate(endDate.toDateString(), FORMAT_STRING)
    : null;

  return (
    <div className="grid grid-cols-1 gap-y-2 md:grid-cols-[9.375rem_1fr]">
      <div>
        <span className="text-gray-11">
          {formattedStartDate} — {formattedEndDate ?? "Curent"}
        </span>
      </div>

      <div>
        <h2 className="mb-2 font-medium text-balance">
          {title} at {company}
        </h2>

        {hasContent ? (
          <p className="text-gray-11 text-base/relaxed">{content}</p>
        ) : null}

        {hasProjects && (
          // <ul className="mt-5 list-disc ps-6">
          <ul className="mt-5">
            {projects.map((project, index) => (
              <li key={index} className="not-first:mt-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-12 decoration-gray-11/25 font-medium underline underline-offset-3"
                >
                  {project.title}
                </a>
              </li>
            ))}
          </ul>
        )}

        {hasTools && (
          <p className="text-gray-11 mt-5 text-pretty">{tools.join(", ")}</p>
        )}
      </div>
    </div>
  );
}
