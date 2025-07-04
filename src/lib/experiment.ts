import glob from "fast-glob";

interface Experiment {
  title: string;
  description: string;
  image: {
    blurDataURL: string;
    blurHeight: number;
    blurWidth: number;
    height: number;
    src: string;
    width: number;
  };
  date: string;
}

export interface ExperimentWithSlug extends Experiment {
  slug: string;
}

async function importExperiment(
  experimentFilename: string
): Promise<ExperimentWithSlug> {
  const { experiment } = (await import(
    `../app/experiments/${experimentFilename}`
  )) as {
    default: React.ComponentType;
    experiment: Experiment;
  };

  return {
    slug: experimentFilename.replace(/(\/page)?\.mdx$/, ""),
    ...experiment,
  };
}

export async function getAllExperiments() {
  const experimentFilenames = await glob("*/page.mdx", {
    cwd: "./src/app/experiments",
  });

  const experiments = await Promise.all(
    experimentFilenames.map(importExperiment)
  );

  return experiments.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
