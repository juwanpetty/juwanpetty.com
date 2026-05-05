import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { allExperiments } from "content-collections";

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
  const [interBold, bgImage] = await Promise.all([
    readFile(join(process.cwd(), "public/assets/fonts/Inter-Bold.ttf")),
    readFile(join(process.cwd(), "public/assets/images/og-image.png")),
  ]);

  const bgImageSrc = `data:image/png;base64,${bgImage.toString("base64")}`;

  const { slug } = await params;
  const experiment = allExperiments.find(
    (experiment) => experiment._meta.path === slug
  );

  return new ImageResponse(
    (
      <div tw="flex w-full h-full relative">
        <img
          src={bgImageSrc}
          tw="absolute inset-0 w-full h-full object-cover"
          alt={experiment?.title || "Juwan Petty"}
        />

        <div tw="flex w-full h-full p-17.5 pb-22.5 flex-col justify-end relative">
          <h1 tw="font-sans text-white text-7xl font-bold leading-[1.2] text-balance">
            {experiment?.title || "Juwan Petty"}
          </h1>
        </div>
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
