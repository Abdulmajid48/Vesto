import Image from "next/image";
const Navbar = () => {
  return (
    <div className="navbar bg-[#2E2E1F1F]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>Customer</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>About</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">
          {" "}
          <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt=""
            className="hover:scale-125 ease-in-out"
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="hover:scale-110 ease-in-out">
            <a>Product</a>
          </li>
          <li>
            <details>
              <summary className="hover:scale-110 ease-in-out">
                Customer
              </summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li className="hover:scale-110 ease-in-out">
            <a>Blog</a>
          </li>
          <li className="hover:scale-110 ease-in-out">
            <a>About</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end flex flex-row gap-4 text-xs sm:text-xs">
        {/* <a className="btn">Button</a> */}
        <button className="w-16 h-8 rounded-md bg-[#2E2E1F1F] text-[#2E2E27] hover:scale-110 ease-in-out">
          Sign in
        </button>
        <button className="max-[400px]:hidden h-8 w-36 bg-[#0B3721] text-[#FFFFFF] rounded-md hover:scale-110 ease-in-out">
          {" "}
          Schedule a Demo
        </button>
      </div>
    </div>
  );
};
export default Navbar;

// <div className="flex flex-row justify-between items-center mx-4 my-3">
//   <div>
//     <Image src="/logo.svg" width={50} height={50} alt="" />
//   </div>
//   <div className="text-[#2E2E27] text-sm flex flex-row justify-between items-center gap-4">
//     <button>Product</button>
//     <button>Customer</button>
//     <button>Blog</button>
//     <button>About</button>
//   </div>
//   <div className=" flex flex-row justify-between items-center gap-5 text-sm">
//     <button className="w-16 h-8 rounded-md bg-[#2E2E1F1F] text-[#2E2E27]">
//       Sign in
//     </button>
//     <button className="h-8 w-36 bg-[#0B3721] text-[#FFFFFF] rounded-md">
//       Schedule a Demo
//     </button>
//   </div>
// </div>
