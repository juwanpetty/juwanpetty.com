import path from "path";

export const BLOG_DIRECTORY = path.join(
  process.cwd(),
  "src",
  "content",
  "blog"
);

export const PROJECTS_DIRECTORY = path.join(
  process.cwd(),
  "src",
  "content",
  "projects"
);

export const SOCIAL_LINKS = [
  {
    href: "https://github.com/juwanpetty",
    icon: "github",
    label: "GitHub",
    accessibilityLabel: "Go to GitHub profile",
  },
  {
    href: "https://bsky.app/profile/juwanpetty.com",
    icon: "bluesky",
    label: "BlueSky",
    accessibilityLabel: "Go to BlueSky profile",
  },
  {
    href: "https://www.youtube.com/@juwanpetty",
    icon: "youtube",
    label: "YouTube",
    accessibilityLabel: "Go to YouTube channel",
  },
] as const;

export const EMAIL_ADDRESS = "jchpetty@gmail.com";
