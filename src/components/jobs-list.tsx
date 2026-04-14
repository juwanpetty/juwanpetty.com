import { getSortedJobs } from "@/lib/content";
import { JobsItem } from "@/components/jobs-item";

export function JobsList() {
  const jobs = getSortedJobs();

  return (
    <div className="space-y-12">
      {jobs.map((job) => (
        <JobsItem key={job._meta.path} job={job} />
      ))}
    </div>
  );
}
