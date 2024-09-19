import Chartcomponent, { Chartlist } from "./Chartcomponent";
import Totalbalanceandcashmovement from "./Totalbalanceandcashmovement";

const Totalbalance = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center text-center align-middle sm:w-1/2 border-[0.7px] border-solid border-[#2E2E1F1F] pb-3 rounded-md">
      <div>
        <Totalbalanceandcashmovement
          title="Total Balance (USD)"
          amount={
            <>
              $10,587,900.<span className="text-sm">13</span>
            </>
          }
          percentage="2.5%"
          previous="$9,968,809"
        />
      </div>

      <div className="w-[85%] sm:w-[40%]">
        <Chartcomponent />
      </div>
      <Chartlist/>
    </div>
  );
};
export default Totalbalance;
