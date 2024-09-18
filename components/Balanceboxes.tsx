import Cashmovement from "./Cashmovement";
import Totalbalance from "./Totalbalance";

const Balanceboxes = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-7 px-5 ">
      <Totalbalance/>
      <Cashmovement />
    </div>
  );
};
export default Balanceboxes;
