import Image from "next/image";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center mx-4 my-3">
      <div>
        <Image src="/logo.svg" width={50} height={50} alt="" />
      </div>
      <div className="text-[#2E2E27] text-sm flex flex-row justify-between items-center gap-4">
        <button>Product</button>
        <button>Customer</button>
        <button>Blog</button>
        <button>About</button>
      </div>
      <div className=" flex flex-row justify-between items-center gap-5 text-sm">
        <button className="w-16 h-8 rounded-md bg-[#2E2E1F1F] text-[#2E2E27]">
          Sign in
        </button>
        <button className="h-8 w-36 bg-[#0B3721] text-[#FFFFFF] rounded-md">
          Schedule a Demo
        </button>
      </div>
    </div>
  );
};
export default Navbar;
