import { ImageResponse } from "next/og";

export const alt = "My site";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div tw="flex w-full h-full p-20 flex-col bg-neutral-50 justify-end">
        <h1 tw="text-neutral-900 text-6xl font-bold leading-[1.2] text-balance">
          Juwan Petty
        </h1>
      </div>
    ),
    { ...size }
  );
}
