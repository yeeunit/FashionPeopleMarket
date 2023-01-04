import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USED_ITEMS } from "./MarketList.queries";

export default function MarketList() {
  const router = useRouter();

  const { data, refetch } = useQuery(FETCH_USED_ITEMS);
  // console.log("data: ", data);

  const { data: data2, fetchMore } = useQuery(FETCH_USED_ITEMS);

  const onFetchMore = () => {
    if (!data2) return;

    fetchMore({
      variables: { page: Math.ceil(data2?.fetchUseditems.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult.fetchUseditems,
            // 기존꺼랑 추가로 받은 10개 스프레드 합치기
          ],
        };
      },
    });
  };

  const onClickMoveToBoardDetail = (event) => {
    console.log("id: ", event.currentTarget.id);
    router.push(`/market/${event.currentTarget.id}`);
  };

  return (
    <>
      <MarketListUI
        data={data}
        refetch={refetch}
        onFetchMore={onFetchMore}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      />
    </>
  );
}
