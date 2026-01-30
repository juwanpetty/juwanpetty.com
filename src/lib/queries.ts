import { gql, request } from "graphql-request";

export async function getPages() {
  const data = await request(
    process.env.NEXT_HYGRAPH_ENDPOINT || "",
    getAllPagesQueryDocument
  );

  return data;
}

const getAllPagesQueryDocument = gql`
  query Pages {
    pages {
      title
      slug
      body {
        text
      }
    }
  }
`;
