import boundleAnalyzer from "@next/bundle-analyzer";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

const withBundleAnalyzer = boundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

// Merge MDX config with Next.js config
export default withBundleAnalyzer(withMDX(nextConfig));
