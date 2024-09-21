import Image from "next/image";

const Founder = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center items-center bg-[#061F13] p-10 sm:p-20">
      <div className="flex flex-col sm:w-1/2 text-[#FFFFFF] text-center sm:text-left mt-4 sm:mt-0">
        <h2 className="text-xl sm:text-3xl font-['SF_Compact_Text']">
          “Every company needs to be responsibly managing their cash. Now, Vesto
          is helping companies do this on autopilot.”
        </h2>
        <div className="font-['SF_Pro_Text']">
          <p>— Daniel Macklin</p>
          <p className="text-[#F4F4F4]">
            Co-Founder of SoFi; Investor in Vesto
          </p>
        </div>
      </div>
      <div>
        <Image
          className="rounded-md"
          src="/founder.svg"
          alt="founder"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};
export default Founder;
