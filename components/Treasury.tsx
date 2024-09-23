import { TrendingUp } from "lucide-react";
import Barchart from "./Barchart";
import Chartcomponent, { Chartlist } from "./Chartcomponent";
import { CardFooter } from "./ui/card";
import Areacharts from "./Areachart";
const Treasury = () => {
  return (
    <div>
      <div className="text-center text-xl sm:text-3xl text-[#2E2E27] mt-5">
        Meet your new treasury partner
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-5">
        <div className="flex flex-col sm:w-[35%]">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
            <div className="w-[85%] sm:w-[95%] lg:w-[65%] m-auto sm:m-0">
              <Chartcomponent />
            </div>
            <div className="m-auto sm:m-0 max-[640px]:block max-[1180px]:hidden text-center align-middle">
              <Chartlist />
            </div>
          </div>
          <CardFooter className="flex-col items-start gap-2 text-sm mt-5 sm:mt-0">
            <div className="flex gap-2 font-medium leading-none">
              Group-wide cash visibility <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground">
              Instantly know your cash position across all accounts, entities
              and countries in real-time.
            </div>
          </CardFooter>
        </div>
        <div className="sm:w-[28%]">
          <Barchart />
        </div>
        <div className="sm:w-[28%]">
          <Areacharts />
        </div>
      </div>
    </div>
  );
};
export default Treasury;
