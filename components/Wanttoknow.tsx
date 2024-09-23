const Wanttoknow = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] flex flex-col justify-center items-center font-['SF_Pro_Text']">
        <div className="w-3/4 sm:w-1/3 m-auto text-center mb-5 text-[#2E2E27]">
          {" "}
          <div className="text-2xl sm:text-3xl mb-2">
            Want to know how much you can earn with Vesto?
          </div>
          <div>
            Enter your business metrics, and we’ll send you an estimate of your
            potential earnings with Vesto.*
          </div>
        </div>

        <div className="bg-[#0B3721] w-11/12 sm:w-[60%] rounded-md mb-5 h-auto sm:h-56 flex flex-col gap-6 px-2 sm:px-6 pt-4 pb-10 text-white">
          <p className="pl-3 sm:p-0 text-lg">Company cash balance</p>
          <p className="pl-3 sm:p-0 border-b-[0.5px] border-b-neutral-500">$0.00</p>
          <div className="flex flex-row gap-4 sm:w-full w-11/12 m-auto sm:m-0">
            <input
              type="email"
              placeholder="Your work email"
              className="border border-white h-10 sm:w-5/6 w-36 pl-4 bg-[#FFFFFF29] text-xs rounded-md"
            />
            <button className="bg-white text-[#0B3721] text-xs w-40 px-1 sm:px-3 h-10 text-center rounded-md">
              Calculate my estimate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Wanttoknow;
