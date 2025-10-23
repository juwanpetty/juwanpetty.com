import { createMDXSource } from "fumadocs-mdx/runtime/next";
import { loader } from "fumadocs-core/source";
import { blogPosts, projectPosts } from "@/.source";

export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts),
});

export const projects = loader({
  baseUrl: "/projects",
  source: createMDXSource(projectPosts),
});
