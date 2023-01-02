import { withAuth } from "../../../src/commons/hooks/withAuth";
import MarketWrite from "../../../src/components/units/market/write/MarketWrite.container";

function MarketWritePage() {
  return (
    <>
      <MarketWrite isEdit={false} />
    </>
  );
}
export default withAuth(MarketWritePage);
