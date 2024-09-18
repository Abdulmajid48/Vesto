import Headersection from "@/components/Headersection";
import Navbar from "../components/Navbar";
import { Dashboard } from "@/components/Transactions";
import Cash from "@/components/Cash";

const page = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Headersection />
    <Cash/>
      <Dashboard />
    </div>
  );
};
export default page;
