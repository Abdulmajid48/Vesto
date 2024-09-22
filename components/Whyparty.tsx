import {
  FlagTriangleRight,
  Globe,
  Link,
  MoveRight,
  Timer,
  TrendingUp,
  Worm,
} from "lucide-react";

const Whyparty = () => {
  return (
    <>
      <Whyvesto />
      <Multiparty />
    </>
  );
};

const Whyvesto = () => {
  return (
    <div className="bg-white font-['SF_Pro_Text'] mt-5 sm:mt-10 mb-5">
      <div className="text-[#2E2E27] font-semibold text-2xl ml-6 sm:ml-10">
        Why Vesto
      </div>
      <div className="m-6 sm:ml-10 sm:mr-20 sm:grid sm:grid-cols-6 sm:grid-rows-2 sm:gap-5 flex flex-col gap-3 text-[#2E2E27]">
        <div className="flex flex-col gap-5 p-5 h-[200px] bg-[#00000005] rounded-md border border-[#2E2E1F1F] col-span-3">
          <div className="rounded-full h-7 w-7 border-2 flex justify-center items-center">
            <Timer size={16} strokeWidth={1.5} />
          </div>
          <p className="font-semibold text-sm sm:text-xl">
            Save time and reduce errors
          </p>
          <p className="text-xs sm:text-sm">
            Get rid of manual tracking and spreadsheets, and get an accurate,
            and real-time view of your cash.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-5 h-[200px] bg-[#00000005] rounded-md border border-[#2E2E1F1F] col-span-3">
          <div className="rounded-full h-7 w-7 border-2 flex justify-center items-center">
            <Worm size={16} strokeWidth={1.5} />
          </div>
          <p className="font-semibold text-sm sm:text-xl">
            Discover and invest excess cash
          </p>
          <p className="text-xs sm:text-sm">
            Uncover all of your idle cash and securely put it to work, on
            autopilot.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-5 h-[200px] bg-[#00000005] rounded-md border border-[#2E2E1F1F] col-span-2">
          <div className="rounded-full h-7 w-7 border-2 flex justify-center items-center">
            <Globe size={16} strokeWidth={1.5} />
          </div>
          <p className="font-semibold text-sm sm:text-xl">One global login</p>
          <p className="text-xs sm:text-sm">
            Skip the login nightmare for all your different accounts, instead,
            see everything from one login.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-5 h-[200px] bg-[#00000005] rounded-md border border-[#2E2E1F1F] col-span-2">
          <div className="rounded-full h-7 w-7 border-2 flex justify-center items-center">
            <Link size={16} strokeWidth={1.5} />
          </div>
          <p className="font-semibold text-sm sm:text-xl">Real-time link</p>
          <p className="text-xs sm:text-sm">
            Go from delayed and inaccurate information to one, real time
            dashboard.
          </p>
        </div>
        <div className="flex flex-col gap-5 p-5 h-[200px] bg-[#00000005] rounded-md border border-[#2E2E1F1F] col-span-2">
          <div className="rounded-full h-7 w-7 border-2 flex justify-center items-center">
            <FlagTriangleRight size={16} strokeWidth={1.5} />
          </div>
          <p className="font-semibold text-sm sm:text-xl">Reporting, solved</p>
          <p className="text-xs sm:text-sm">
            Easily create beautiful, custom reports on your balances, cash-flows
            and transactions.
          </p>
        </div>
      </div>
    </div>
  );
};

const Multiparty = () => {
  return (
    <div className="font-['SF_Pro_Text'] text-[#2E2E27] ml-6 sm:ml-10 mb-5">
      <ol className="text-xl sm:text-3xl mb-5">
        <li>1. Multi-bank cash visibility</li>
        <li>2. Yield on your idle cash</li>
      </ol>
      <div className="flex flex-col sm:flex-row gap-3 sm:pr-20 justify-center items-center mr-7 sm:mr-0">
        <div className="bg-[#2E2E1F0D] flex flex-col gap-5 p-2 pl-7 pt-5 pb-5 rounded-md">
          <div className="h-8 w-24 gap-2 px-2 rounded-3xl flex flex-row justify-center items-center bg-[#2E2E1F1F]">
            <Globe size={16} strokeWidth={1.5} />
            <p className="text-sm">Positioning</p>
          </div>
          <p>Global cash positioning</p>
          <p>
            Skip the login nightmare for all your different accounts, instead,
            see everything from one login.
          </p>
          <div>
            <button className="h-10 w-24 rounded-md bg-[#0B3721] text-[#FFFFFF] text-xs flex flex-row items-center justify-center gap-2 hover:scale-x-110">
              <p>Learn More </p> <MoveRight size={16} strokeWidth={0.5} />
            </button>
          </div>
        </div>
        <div className="bg-[#F2F1E8] flex flex-col gap-5 p-2 pl-7 pt-5 pb-5 rounded-md">
          <div className="h-8 w-24 gap-2 px-2 rounded-3xl flex flex-row justify-center items-center bg-[#2E2E1F1F] text-xs">
            <TrendingUp size={16} strokeWidth={1.5} />
            <p className="text-sm">Yield</p>
          </div>
          <p>Idle cash management</p>
          <p>
            Earn yield on your reserve cash with Treasuries, MMFs, and cash
            sweeps to help you make the most of every dollar.
          </p>
          <div>
            <button className=" h-10 w-24 rounded-md bg-[#0B3721] text-[#FFFFFF] text-xs flex flex-row items-center justify-center gap-2 hover:scale-110">
              <p>Learn More </p> <MoveRight size={16} strokeWidth={0.5} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Whyparty;
export { Multiparty, Whyvesto };
