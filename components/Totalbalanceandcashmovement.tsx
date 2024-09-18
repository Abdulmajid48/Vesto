import { ArrowUp, DollarSign } from "lucide-react";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { type ReactNode, type FC } from "react";

interface TotalBalanceAndCashMovementProps {
  title: string;
  amount: string | ReactNode;
  percentage: string;
  previous: string;
}

const Totalbalanceandcashmovement: FC<TotalBalanceAndCashMovementProps> = (
  props: TotalBalanceAndCashMovementProps
) => {
  const { title, amount, percentage, previous } = props;

  return (
    <div className="">
      <CardHeader className="flex flex-row items-center justify-center gap-0 sm:justify-between space-y-0 pb-2">
        <CardTitle className="text-xs font-medium text-[#74746A]">
          {title}
        </CardTitle>
        <DollarSign className="h-4 mx-0 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-row justify-center items-center gap-3">
          <div className="text-lg font-bold text-[#2E2E27]">{amount}</div>
          <div className="flex flex-row justify-center items-center h-5 w-11 border-[0.18px] border-solid border-[#2E2E1F3B]  px-1 text-[#3F8043] bg-emerald-300 rounded-sm text-xs">
            <ArrowUp size={16} color="#065607" strokeWidth={0.75} />
            <p>{percentage} </p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground sm:text-left text-center">
          was <span className="text-[#55AC5B]">{previous}</span>- 1 week ago
        </p>
      </CardContent>
    </div>
  );
};
export default Totalbalanceandcashmovement;
