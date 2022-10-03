import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
      likeCount
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
      user {
        email
        name
      }
      createdAt
    }
  }
`;
