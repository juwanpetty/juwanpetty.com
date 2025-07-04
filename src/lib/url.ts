export const url = {
  home: () => "/",
  blogIndex: () => "/blog",
  blogDetail: (id: string) => `/blog/${id}`,
  experimentIndex: () => "/experiments",
  experimentDetail: (id: string) => `/experiments/${id}`,
};
