import glob from "fast-glob";

interface Article {
  title: string;
  description: string;
  date: string;
}

export interface ArticleWithSlug extends Article {
  slug: string;
}

async function importArticle(
  articleFilename: string
): Promise<ArticleWithSlug> {
  const { article } = (await import(`../app/blog/${articleFilename}`)) as {
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
    cwd: "./src/app/blog",
  });

  const articles = await Promise.all(articleFilenames.map(importArticle));

  return articles.sort((a, z) => +new Date(z.date) - +new Date(a.date));
}
