export type Craft = {
  id: string;
  title: string;
  date: string;
  draft?: boolean;
};

export const crafts: Craft[] = [
  {
    id: "snooze-dropdown",
    title: "Snooze Dropdown",
    date: "2025-11-12",
    draft: false,
  },
  {
    id: "empty-state",
    title: "Empty State",
    date: "2025-11-13",
    draft: false,
  },
  {
    id: "floating-toolbar",
    title: "Floating Toolbar",
    date: "2025-11-18",
    draft: false,
  },
];

export const getSortedCrafts = (): Craft[] => {
  return crafts.sort((a, b) => (a.date < b.date ? 1 : -1));
};

export const getPublishedCrafts = (): Craft[] => {
  return getSortedCrafts().filter((craft) => !craft.draft);
};
