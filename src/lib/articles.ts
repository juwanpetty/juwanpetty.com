import glob from "fast-glob";

interface Article {
  title: string;
  description: string;
  date: string;
  thumbnail: {
    src: string;
  };
}

export interface ArticleWithSlug extends Article {
  slug: string;
}

const WORKING_DIRECTORY = "blog";

async function importArticle(
  articleFilename: string
): Promise<ArticleWithSlug> {
  const { article } = (await import(
    `../app/${WORKING_DIRECTORY}/${articleFilename}`
  )) as {
    default: React.ComponentType;
    article: Article;
  };

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ""),
    ...article,
  };
}

export async function getAllArticles() {
  const articleFilenames = await glob("*/page.mdx", {
    cwd: `./src/app/${WORKING_DIRECTORY}`,
  });

  const articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
