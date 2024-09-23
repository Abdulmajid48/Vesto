import { MoveRight } from "lucide-react";
import Carouselsection from "./Carousel";

const Casestudies = () => {
  return (
    <div className="bg-white flex flex-col sm:flex-row h-auto sm:h-60 justify-center items-center gap-10 ">
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="text-2xl sm:text-3xl text-[#2E2E27]">Case studies</p>
        <button className="flex flex-row justify-center items-center gap-1 h-8 w-32 rounded-md hover:scale-110 ease-in-out bg-[#0B3721] text-[#FFFFFF] text-xs">
          <p>Schedule a Demo</p> <MoveRight />
        </button>
      </div>
      <Carouselsection />
    </div>
  );
};
export default Casestudies;
