import glob from "fast-glob";

interface Craft {
  title: string;
  description: string;
  video: string;
  date: string;
}

export interface CraftWithSlug extends Craft {
  slug: string;
}

async function importCraft(craftFilename: string): Promise<CraftWithSlug> {
  const { craft } = (await import(`../app/crafts/${craftFilename}`)) as {
    default: React.ComponentType;
    craft: Craft;
  };

  return {
    slug: craftFilename.replace(/(\/page)?\.mdx$/, ""),
    ...craft,
  };
}

export async function getAllCrafts() {
  const craftFilenames = await glob("*/page.mdx", {
    cwd: "./src/app/crafts",
  });

  const crafts = await Promise.all(craftFilenames.map(importCraft));

  return crafts.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
