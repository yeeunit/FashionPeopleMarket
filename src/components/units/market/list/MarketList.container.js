import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketListUI from "./MarketList.presenter";
import { FETCH_USED_ITEMS } from "./MarketList.queries";

export default function MarketList() {
  const { data, refetch } = useQuery(FETCH_USED_ITEMS);
  console.log("data: ", data);
  const router = useRouter();

  const onClickMoveToBoardDetail = (event) => {
    console.log("id: ", event.currentTarget.id);
    router.push(`/market/${event.currentTarget.id}`);
  };

  return (
    <>
      <MarketListUI
        data={data}
        refetch={refetch}
        onClickMoveToBoardDetail={onClickMoveToBoardDetail}
      />
    </>
  );
}
