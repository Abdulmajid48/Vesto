import Headersection from "@/components/Headersection";
import Navbar from "../components/Navbar";
import { Dashboard } from "@/components/Transactions";
import Cash from "@/components/Cash";
import Sponsors from "@/components/Sponsors";
import Treasury from "@/components/Treasury";

const page = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Headersection />
    <Cash/>
      <Dashboard />
      <Sponsors/>
      <Treasury/>
    </div>
  );
};
export default page;
