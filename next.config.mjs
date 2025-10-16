import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import { withContentCollections } from "@content-collections/next";

/** @type {import('rehype-pretty-code').Options} */
const options = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-mdx-remote"],
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = nextMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options]],
  },
});

export default withContentCollections(withMDX(nextConfig));
