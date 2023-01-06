import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";

function MarketDetailPage() {
  return <MarketDetail />;
}

export default withAuth(MarketDetailPage);
