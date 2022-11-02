import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MarketDetailUI from "./MarketDetail.presenter";

export default function MarketDetail() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: { useditemId: router.query.id },
  });
  console.log(data);

  return (
    <>
      <MarketDetailUI data={data} />
    </>
  );
}
