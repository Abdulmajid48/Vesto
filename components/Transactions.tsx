import { DollarSign } from "lucide-react";
import { Component } from "./Chartcomponent";
import { CardContent, CardHeader, CardTitle } from "./ui/card";

const Transactions = () => {
  return (
    <div className="flex flex-col sm:flex-row ">
      <div className="flex flex-col sm:flex-row justify-center sm:justify-start sm:items-center text-center align-middle sm:w-1/2">
        <div className="">
          <CardHeader className="flex flex-row items-center justify-center gap-0 sm:justify-between space-y-0 pb-2">
            <CardTitle className="text-xs font-medium text-[#74746A]">
              Total Balance (USD)
            </CardTitle>
            <DollarSign className="h-4 mx-0 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-[#2E2E27]">
              $10,587,900.<span className="text-sm">13</span>
            </div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </div>
        <div className="sm:w-[35%]">
          <Component />
        </div>
        <div className="sm:m-0 text-[#2E2E27] text-xs">
          <ul className="flex flex-col gap-1">
            <li className="flex flex-row justify-start items-center gap-1">
              <div className="h-3 w-3 bg-[#0f766e] rounded-full"></div>Acme
              Canada
            </li>
            <li className="flex flex-row justify-start items-center gap-1">
              <div className="h-3 w-3 bg-[#f97316] rounded-full"></div>Acme US,
              Inc{" "}
            </li>
            <li className="flex flex-row justify-start items-center gap-1">
              <div className="h-3 w-3 bg-[#111827] rounded-full"></div>Acme
              Mexico, SA
            </li>
            <li className="flex flex-row justify-start items-center gap-1">
              <div className="h-3 w-3 bg-[#eab308] rounded-full"></div>Acme
              Italia S.p.A
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Transactions;
