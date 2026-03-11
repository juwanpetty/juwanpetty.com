import { Fragment } from "react";
import { allJobs } from "content-collections";
import { JobsItem } from "@/components/jobs-item";

export function JobsList() {
  const jobs = getSortedJobs();

  return (
    <div className="space-y-10">
      {jobs.map((job, index) => (
        <Fragment key={job._meta.path}>
          {index !== 0 && <div className="border-separator border-t" />}
          <JobsItem job={job} />
        </Fragment>
      ))}
    </div>
  );
}

function getSortedJobs() {
  return allJobs.sort((a, b) => (a.startDate < b.startDate ? 1 : -1));
}
