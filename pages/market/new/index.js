import MarketWrite from "../../../src/components/units/market/write/MarketWrite.container";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
function MarketWritePage() {
  const [isEdit, setEdit] = useState(false);

  return (
    <>
      <MarketWrite isEdit={isEdit} />
    </>
  );
}
export default withAuth(MarketWritePage);
