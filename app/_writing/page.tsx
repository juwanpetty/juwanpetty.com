import React from "react";
import orderBy from "lodash.orderby";
import groupBy from "lodash.groupby";
import mapValues from "lodash.mapvalues";
import { Page } from "@/shared/Page";
import { PostList } from "@/components/PostList";

const getWritingPosts = async () => {
  const response = await fetch(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cljsoc86w0dpt01t85tdr4uxn/master",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: `{
          posts(orderBy: publishedAt_ASC) {
            id
            title
            slug
            published
          }
        }`,
      }),
    }
  );

  const { data } = await response.json();

  return data.posts;
};

async function Writing() {
  const posts = await getWritingPosts();

  const postsGroupedByYear = groupBy(posts, (post) =>
    new Date(post.published).getFullYear()
  );

  const sortedPosts = Object.entries(
    mapValues(postsGroupedByYear, (yearGroup) =>
      orderBy(yearGroup, ["published"], ["desc"])
    )
  ).reverse();

  // eslint-disable-next-line @typescript-eslint/no-shadow
  const postsMarkup = sortedPosts.map(([year, posts]) => (
    <PostList key={year} year={year} posts={posts} />
  ));

  return (
    <Page
      title="Writing"
      subtitle="Writing allows me to express myself, learn, reflect, share my perspectives and build connections. I often write about design, product development, personal growth, and career experiences."
    >
      {postsMarkup}
    </Page>
  );
}

export default Writing;
