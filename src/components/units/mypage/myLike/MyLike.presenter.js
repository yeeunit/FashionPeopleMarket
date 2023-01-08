import * as B from "../Mypage.styles";
import * as S from "./MyLike.styles";
import { v4 as uuidv4 } from "uuid";

export default function MyLikeUI(props) {
  return (
    <>
      <B.Wrapper>
        {/* <LayoutSidebar /> */}
        <S.Body>
          <B.StayMenu>찜목록</B.StayMenu>
          <B.Line />
          <S.LikeWrapper key={uuidv4()}>
            {/* {props.favoriteData?.fetchUserFavoriteCafe?.map((el) => (
              <>
                <S.CafeWrapper>
                  {el.cafeList?.cafeListImage?.[0]?.url ? (
                    <S.CafeImage
                      src={`https://storage.googleapis.com/team04-storage/${el.cafeList?.cafeListImage?.[0]?.url}`}
                    />
                  ) : (
                    <S.CafeImage src="/Rectangle 3118.png" />
                  )}

                  <S.CafeName>{el.cafeList?.title}</S.CafeName>
                  <S.CafeDetail>{el.cafeList?.address}</S.CafeDetail>
                </S.CafeWrapper>
              </>
            ))} */}
          </S.LikeWrapper>
          <S.PaginationWrapper>
            {/* {props.count?.fetchFavoriteCafeNumber > 0 && (
              <PaginationContainer
                refetch={props.refetch}
                count={props.count?.fetchFavoriteCafeNumber}
              />
            )} */}
          </S.PaginationWrapper>
        </S.Body>
      </B.Wrapper>
    </>
  );
}
