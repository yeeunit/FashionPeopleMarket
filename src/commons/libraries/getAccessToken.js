import { gql, GraphQLClient } from "graphql-request";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

export async function getAccessToken() {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend09.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    // const newAccessToken = result.restoreAccessToken.getAccessToken;

    return newAccessToken;
  } catch (error) {
    console.log("getAccessToken", error);
    if (error) console.log("error.message", error.message);
  }
}
