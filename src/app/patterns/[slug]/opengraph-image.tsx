import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { allPatterns } from "content-collections";

export const alt = "Juwan Petty";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const interBold = await readFile(
    join(process.cwd(), "public/assets/fonts/Inter-Bold.ttf")
  );

  const { slug } = await params;
  const pattern = allPatterns.find((pattern) => pattern._meta.path === slug);

  return new ImageResponse(
    (
      <div tw="flex w-full h-full p-20 py-22.5 flex-col bg-neutral-50 justify-end">
        <h1 tw="font-sans text-neutral-900 text-7xl font-bold leading-[1.2] text-balance">
          {pattern?.title || "Juwan Petty"}
        </h1>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Inter",
          data: interBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
