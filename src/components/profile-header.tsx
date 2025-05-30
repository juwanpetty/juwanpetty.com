import { Icons } from "@/components/icons";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ProfileSocialLinks } from "@/components/profile-social-links";

export function ProfileHeader() {
  return (
    <header className="relative pt-40 pb-8 sm:pt-64">
      <ImagePlaceholder className="absolute -top-6 -left-5 h-40 w-[calc(100%+40px)] rounded-none border-none border-neutral-900/10 sm:top-0 sm:left-0 sm:h-64 sm:w-full sm:rounded-lg sm:border sm:border-solid" />

      <div className="mx-auto flex w-full max-w-[730px] flex-col gap-4">
        <div className="flex w-full items-start justify-between">
          {/* Avatar */}
          <div className="relative">
            <ImagePlaceholder className="-mt-10 size-20 ring-4 ring-white sm:-mt-14 sm:size-28" />

            {/* Profile status dot */}
            <div className="absolute -right-1 -bottom-1 size-3 rounded-full bg-neutral-200 ring-4 ring-white" />
          </div>

          <div className="flex items-center justify-between gap-4 sm:pt-6 sm:pr-6">
            <ProfileSocialLinks />

            {/* Contact Button */}
            <button
              type="button"
              className="flex h-8 items-center gap-1.5 rounded-[10px] border border-neutral-900/10 px-2.5"
            >
              <Icons icon="copy" className="size-4 text-neutral-500" />
              <span className="text-sm font-medium">Contact</span>
            </button>
          </div>
        </div>

        {/* Profile details */}
        <div className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold tracking-tight">Juwan Petty</h1>
          <p className="text-base text-neutral-500">
            Frontend Engineer / Design Engineer
          </p>
        </div>
      </div>
    </header>
  );
}
