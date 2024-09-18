import { Component } from "./Chartcomponent";
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

      <div className="w-[85%] sm:w-[35%]">
        <Component />
      </div>
      <div className="sm:m-0 text-[#2E2E27] text-xs">
        <ul className="flex flex-col gap-1 sm:gap-4">
          <li className="flex flex-row justify-start items-center gap-1">
            <div className="h-3 w-3 bg-[#0f766e] rounded-full"></div>
            <p>Acme Canada</p>
          </li>
          <li className="flex flex-row justify-start items-center gap-1">
            <div className="h-3 w-3 bg-[#f97316] rounded-full"></div>
            <p>Acme US, Inc</p>
          </li>
          <li className="flex flex-row justify-start items-center gap-1">
            <div className="h-3 w-3 bg-[#111827] rounded-full"></div>
            <p>Acme Mexico, SA</p>
          </li>
          <li className="flex flex-row justify-start items-center gap-1">
            <div className="h-3 w-3 bg-[#eab308] rounded-full"></div>
            <p>Acme Italia S.p.A</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Totalbalance