import { Icons } from "@/components/icons";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ProfileSocialLinks } from "@/components/profile-social-links";
// import Image from "next/image";

export function ProfileHeader() {
  return (
    <header className="relative pt-40 pb-8 sm:pt-64">
      {/* Banner */}
      <ImagePlaceholder className="border-neutral-12/10 absolute -top-6 -left-5 h-40 w-[calc(100%+40px)] rounded-none border-none sm:top-0 sm:left-0 sm:h-64 sm:w-full sm:rounded-lg sm:border sm:border-solid" />
      {/* <Image
        src="/banner.jpeg"
        alt="Banner Image"
        width="10000"
        height="5625"
        objectFit="cover"
        className="absolute -top-6 -left-5 h-40 w-[calc(100%+40px)] rounded-none border-none border-neutral-900/10 sm:top-0 sm:left-0 sm:h-64 sm:w-full sm:rounded-lg sm:border sm:border-solid"
      /> */}

      <div className="mx-auto flex w-full max-w-[730px] flex-col gap-4">
        <div className="flex w-full items-start justify-between">
          <div className="relative">
            {/* Avatar */}
            <ImagePlaceholder className="-mt-10 size-20 ring-4 ring-white sm:-mt-14 sm:size-28" />

            {/* Profile status dot */}
            {/* <span className="absolute -right-1 -bottom-1 flex size-3 rounded-full ring-4 ring-white">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex size-3 rounded-full bg-red-500"></span>
            </span> */}
          </div>

          <div className="flex items-center justify-between gap-4 sm:pt-6 sm:pr-6">
            <ProfileSocialLinks />

            {/* Contact Button */}
            <button
              type="button"
              className="border-neutral-12/10 hover:bg-neutral-4 flex h-8 items-center gap-1.5 rounded-[10px] border px-2.5 transition ease-[ease]"
            >
              <Icons icon="copy" className="text-neutral-11 size-4" />
              <span className="text-sm font-medium">Contact</span>
            </button>
          </div>
        </div>

        {/* Profile details */}
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold tracking-tight">Juwan Petty</h1>
          <p className="text-neutral-11 text-base">
            Frontend Engineer / Design Engineer
          </p>
        </div>
      </div>
    </header>
  );
}
