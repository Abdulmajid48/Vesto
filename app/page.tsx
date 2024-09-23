import Headersection from "@/components/Headersection";
import Navbar from "../components/Navbar";
import { Dashboard } from "@/components/Transactions";
import Cash from "@/components/Cash";
import Sponsors from "@/components/Sponsors";
import Treasury from "@/components/Treasury";
import Founder from "@/components/Founder";
import Whyparty from "@/components/Whyparty";
import Safety from "@/components/Safety";
import Wanttoknow from "@/components/Wanttoknow";
import Ceo from "@/components/Ceo";
import Casestudies from "@/components/Casestudies";
import Centralize from "@/components/Centralize";

const page = () => {
  return (
    <div className="bg-white overflow-hidden">
      <Navbar />
      <Headersection />
      <Cash />
      <Dashboard />
      <Sponsors />
      <Treasury />
      <Founder />
      <Whyparty />
      <Safety />
      <Wanttoknow />
      <Ceo />
      <Casestudies />
      <Centralize/>
    </div>
  );
};
export default page;
