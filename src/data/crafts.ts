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
];

export const getPublishedCrafts = (): Craft[] => {
  return crafts.filter((craft) => !craft.draft);
};
