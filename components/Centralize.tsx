import { MoveRight } from "lucide-react";
import Image from "next/image";

const Centralize = () => {
  return (
    <div className="flex flex-col gap-4 pb-6 pt-10 bg-[#0B3721] font-['SF_Pro_Text'] text-center">
      <div className="text-white text-3xl sm:text-[45px] w-5/6 m-auto sm:w-1/2 leading-10">
        Centralize your treasury, the modern way.
      </div>
      <div className="mt-4 m-auto">
        <button className="flex flex-row justify-center items-center gap-1 h-8 w-32 rounded-md hover:scale-110 ease-in-out bg-white text-[#0B3721] text-xs">
          <p>Schedule a Demo</p> <MoveRight />
        </button>
      </div>
      <div className="flex flex-row items-center justify-center gap-5 flex-wrap sm:gap-28 mt-28 mx-4 m-auto">
        <Image src="/treecard.svg" alt="" height={100} width={100} />
        <Image src="/tiny.svg" alt="" height={50} width={50} />
        <Image src="/mercantile.svg" alt="" height={100} width={100} />
        <Image src="/assemble.svg" alt="" height={100} width={100} />
        <Image src="/nucleus.svg" alt="" height={100} width={100} />
      </div>
    </div>
  );
};
export default Centralize;
