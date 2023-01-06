import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { withAuth } from "../../../../src/components/commons/hocs/withAuth";
import MarketWrite from "../../../../src/components/units/market/write/MarketWrite.container";

const FETCH_USED_ITEM = gql`
  query fetchUseditem($useditemId: ID!) {
    fetchUseditem(useditemId: $useditemId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      useditemAddress {
        zipcode
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

function EditPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_USED_ITEM, {
    variables: {
      useditemId: router.query.marketId,
    },
  });

  return <MarketWrite isEdit={true} data={data} />;
}

export default withAuth(EditPage);
