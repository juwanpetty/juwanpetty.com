import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, if needed
});

export default withContentCollections(withMDX(nextConfig));
