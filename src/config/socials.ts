import { Icons } from "@/components/icons";

export interface SocialItem {
  title: string;
  url: string;
  icon: keyof typeof Icons;
}

export interface SocialsConfig {
  github: SocialItem;
  youtube: SocialItem;
  bluesky: SocialItem;
}

export const socialsConfig: SocialsConfig = {
  github: {
    title: "GitHub",
    url: "https://github.com/juwanpetty",
    icon: "github",
  },
  youtube: {
    title: "YouTube",
    url: "https://www.youtube.com/@JuwanPetty",
    icon: "youtube",
  },
  bluesky: {
    title: "Bluesky",
    url: "https://bsky.app/profile/juwanpetty.com",
    icon: "bluesky",
  },
};
