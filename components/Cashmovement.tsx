import Totalbalanceandcashmovement from "./Totalbalanceandcashmovement";

const Cashmovement = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center align-middle sm:w-1/2 border-[0.7px] border-solid border-[#2E2E1F1F] sm:m-0 p-2 rounded-md sm:pr-36">
      <div className="">
        <Totalbalanceandcashmovement
          title="Cash Movement"
          amount={
            <>
              $132,000.<span className="text-sm">13</span>
            </>
          }
          percentage="2.5%"
          previous="$102,917"
        />
      </div>
      <div className="flex flex-col gap-2 text-center sm:text-left">
        <p className="text-[#74746A] text-xs">Opening Balance</p>
        <p className="text-[#2E2E27] text-sm">$9,968,817</p>
        <p className="text-[#74746A] text-xs">Closing Balance</p>
        <p className="text-[#2E2E27] text-sm">$10,587,900</p>
      </div>
    </div>
  );
}
export default Cashmovement