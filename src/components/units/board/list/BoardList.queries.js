import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
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

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount(
    $endDate: DateTime
    $startDate: DateTime
    $search: String
  ) {
    fetchBoardsCount(endDate: $endDate, startDate: $startDate, search: $search)
  }
`;
