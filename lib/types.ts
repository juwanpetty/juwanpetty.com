export interface NestedHeading {
  id: string;
  title: string;
  items: {
    id: string;
    title: string;
  }[];
}