import { MoveRight } from "lucide-react";

const Headersection = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center gap-5 text-center align-middle w-[89.5%] sm:w-[60%] md:w-[45%] m-auto py-9 font-['SF_Pro_Text'] text-[#2E2E27]">
        <p className="font-medium text-4xl sm:m-2">
          All of your company financial accounts in one view
        </p>
        <p className="text-sm sm:mx-20">
          Connect and control all of your global business accounts from one
          dashboard. Automatically earn on your idle cash.
        </p>
        <button className="flex flex-row justify-center items-center gap-1 h-8 w-32 rounded-md hover:scale-110 ease-in-out bg-[#0B3721] text-[#FFFFFF] text-xs">
          <p>Schedule a Demo</p> <MoveRight />
        </button>
      </div>
    </div>
  );
};
export default Headersection;
