export const url = {
  blogIndex: () => "/blog",
  blogDetail: (id: string) => `/blog/${id}`,
  experimentIndex: () => "/experiments",
  experimentDetail: (id: string) => `/experiments/${id}`,

  // new urls
  home: () => "/",
  about: () => "/about",
  reading: () => "/reading",
  workspace: () => "/workspace",
  projectIndex: () => "/projects",
  projectDetail: (id: string) => `/projects/${id}`,
  componentsIndex: () => "/components",
  componentsDetail: (id: string) => `/components/${id}`,
  feedIndex: () => "/feed",
  feedDetail: (id: string) => `/feed/${id}`,
  thoughtsIndex: () => "/thoughts",
  thoughtsDetail: (id: string) => `/thoughts/${id}`,
  stackIndex: () => "/stack",
  stackDetail: (id: string) => `/stack/${id}`,
};
