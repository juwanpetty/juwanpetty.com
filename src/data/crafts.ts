export type Craft = {
  id: string;
  title: string;
  date: string;
  previewUrl?: string;
  repositoryUrl?: string;
  draft?: boolean;
};

export const crafts: Craft[] = [
  {
    id: "snooze-dropdown",
    title: "Snooze Dropdown",
    date: "2025-11-12",
    previewUrl: "https://crafts-ten.vercel.app/snooze-dropdown",
    repositoryUrl:
      "https://github.com/juwanpetty/crafts/blob/main/src/components/snooze-dropdown.tsx",
    draft: false,
  },
  {
    id: "empty-state",
    title: "Empty State",
    date: "2025-11-13",
    previewUrl: "https://crafts-ten.vercel.app/empty-state",
    repositoryUrl:
      "https://github.com/juwanpetty/crafts/blob/main/src/components/empty-state.tsx",
    draft: false,
  },
  {
    id: "floating-toolbar",
    title: "Floating Toolbar",
    date: "2025-11-18",
    previewUrl: "https://crafts-ten.vercel.app/floating-toolbar",
    repositoryUrl:
      "https://github.com/juwanpetty/crafts/blob/main/src/components/floating-toolbar.tsx",
    draft: false,
  },
];

export const getSortedCrafts = (): Craft[] => {
  return crafts.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPublishedCrafts = (): Craft[] => {
  return getSortedCrafts().filter((craft) => !craft.draft);
};
