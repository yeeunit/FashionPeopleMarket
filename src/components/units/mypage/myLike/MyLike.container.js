import { useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN } from "../../board/detail/BoardDetail.queries";
import MyLikeUI from "./MyLike.presenter";

export default function MyLike() {
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  return <MyLikeUI />;
}
