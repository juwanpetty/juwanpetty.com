export const url = {
  index: () => "/",
  about: () => "/about",
  blogIndex: () => "/blog",
  blogDetail: (id: string) => `/blog/${id}`,
  craftIndex: () => "/crafts",
  craftDetail: (id: string) => `/crafts/${id}`,
};
