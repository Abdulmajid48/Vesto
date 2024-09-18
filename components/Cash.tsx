import { Plus } from "lucide-react";
import Balanceboxes from "./Balanceboxes";

const Cash = () => {
  return (
    <div className=" px-2">
      <div className="flex flex-row justify-between items-center sm:px-5 px-5">
        <h1 className="text-[#2E2E27] text-xl sm:text-3xl">Cash Positioning</h1>
        <button className=" flex flex-row items-center justify-center rounded-md h-8 w-24 text-xs hover:scale-110 bg-[#3E7B52] text-[#FFFFFF] shadow-[#22220614] shadow-[0px_1.41px_4.22px_0px]">
          <Plus size={16} color="#ffffff" strokeWidth={1.25} />
          <p>Add Account</p>
        </button>
      </div>
      <TotalCash />
      <Balanceboxes />
    </div>
  );
};
export default Cash;





export const TotalCash = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:pr-5 my-3">
      <div className="ml-5">
        <span className="text=[#74746A]">Total Cash and Money for</span> last
        Week
      </div>
      <div className="flex flex-row text-[9px] sm:text-xs justify-center items-center gap-1 sm:gap-5 sm:max-w-[640px] px-5 sm:px-0">
        <div className="flex flex-row">
          <button className="text-[#74746A] h-6 w-auto px-[0.1rem] sm:px-2 border-[#2E2E1F1F] border">
            FX Rate
          </button>
          <button className="text-[#2E2E27] h-6 w-auto px-[0.1rem] sm:px-2 border-[#2E2E1F1F] border">
            Daily
          </button>
        </div>
        <div className="flex flex-row">
          <button className="text-[#74746A] h-6 w-auto px-[0.1rem] sm:px-2 border-[#2E2E1F1F] border">
            Cash Movement
          </button>
          <button className="text-[#2E2E27] h-6 w-auto px-[0.1rem] sm:px-2 border-[#2E2E1F1F] border">
            Week to Date
          </button>
        </div>
        <div className="flex flex-row">
          <button className="text-[#74746A] h-6 w-auto px-[0.1rem] sm:px-2 border-[#2E2E1F1F] border">
            Unified Curency
          </button>
          <button className="text-[#2E2E27] h-6 w-auto px-[0.1rem] sm:px-2 border-[#2E2E1F1F] border">
            USD
          </button>
        </div>
      </div>
    </div>
  );
};
