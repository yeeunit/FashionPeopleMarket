import { gql } from "@apollo/client";

// export const FETCH_USED_ITEMS = gql`
//   query fetchUseditems($isSoldout: Boolean, $search: String, $page: Int) {
//     fetchUseditems(isSoldout: $isSoldout, search: $search, page: $page) {
//       _id
//       name
//       remarks
//       contents
//       price
//       tags
//       images
//       createdAt
//     }
//   }
// `;

export const FETCH_USED_ITEMS = gql`
  query fetchUseditems($page: Int) {
    fetchUseditems(page: $page) {
      _id
      name
      images
      price
      createdAt
    }
  }
`;
