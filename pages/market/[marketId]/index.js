import { withAuth } from "../../../src/commons/hooks/withAuth";
import MarketDetail from "../../../src/components/units/market/detail/MarketDetail.container";

function MarketDetailPage() {
  return <MarketDetail />;
}

export default withAuth(MarketDetailPage);
