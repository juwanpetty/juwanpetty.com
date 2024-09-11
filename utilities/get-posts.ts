import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { Post } from '@/types/types';

const PATH_TO_CONTENT = 'app/content/posts';

const contentDir = path.join(process.cwd(), PATH_TO_CONTENT);

export async function getPostBySlug(slug: string): Promise<Post> {
  const fileName = `${slug}.mdx`;
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { frontmatter, content } = await compileMDX<{
    title: string;
    publishedAt: string;
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}

export async function getPosts(): Promise<Post[]> {
  const files = fs.readdirSync(contentDir);
  const posts = await Promise.all(
    files.map(async (file) => getPostBySlug(path.parse(file).name))
  );

  return posts;
}

export function getAllPostSlugs(): { slug: string; }[] {
  const files = fs.readdirSync(contentDir)
  const slugs = files.map((file) => ({ slug: path.parse(file).name }))
  return slugs;
}