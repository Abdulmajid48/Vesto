import Headersection from "@/components/Headersection";
import Navbar from "../components/Navbar";
import { Dashboard } from "@/components/Blocks";
import Transactions from "@/components/Transactions";

const page = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Headersection />
      <Transactions />
      <Dashboard />
    </div>
  );
};
export default page;
