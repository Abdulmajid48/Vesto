import {
  FlagTriangleRight,
  Globe,
  Link,
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
    <div className="font-['SF_Pro_Text'] text-[#2E2E27] ml-6 sm:ml-10">
      <ol className="text-xl sm:text-3xl">
        <li>1. Multi-bank cash visibility</li>
        <li>2. Yield on your idle cash</li>
      </ol>
      <div>
        <div className="bg-[#2E2E1F0D] flex flex-col gap-2">
          <div className="h-8 w-24 gap-2 px-2 rounded-3xl flex flex-row justify-center items-center bg-[#2E2E1F1F]">
            <Globe size={16} strokeWidth={1.5} />
            <p className="text-sm">Positioning</p>
          </div>
          <p>Global cash positioning</p>
          <p>
            Skip the login nightmare for all your different accounts, instead,
            see everything from one login.
          </p>
          <div className="w-10">
            <button className=" h-2">Accent</button>
          </div>
        </div>
        <div className="bg-[#2E2E1F0D] flex flex-col gap-2">
          <div className="h-8 w-24 gap-2 px-2 rounded-3xl flex flex-row justify-center items-center bg-[#2E2E1F1F]">
            <TrendingUp size={16} strokeWidth={1.5} />
            <p className="text-sm">Yield</p>
          </div>
          <p></p>
          <p></p>
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Whyparty;
export { Multiparty, Whyvesto };
