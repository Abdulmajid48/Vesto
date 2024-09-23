import Image from "next/image";

const Ceo = () => {
  return (
    <div className="bg-[#061F13] font-['SF_Pro_Text'] pt-6">
      <div className="w-5/6 sm:w-4/5 p-2 text-center sm:text-left sm:p-10 flex flex-col sm:flex-row justify-center items-center gap-5 sm:gap-10 m-auto">
        <div className="">
          <Image src="/ceo.svg" alt="" height={550} width={550} />
        </div>
        <div className="flex flex-col justify-between gap-5">
          <h2 className="text-2xl sm:text-3xl text-white font-['SF_Compact_Text']">
            “Vesto is a no brainer for startups sitting on funding to extend
            their runway, or just for bootstrappers to build up their war
            chest.”
          </h2>
          <div className="text-white text-sm">
            <p>– Andrew Wilkinson</p>
            <p>CEO at Tiny</p>
          </div>
          <p className="text-[#FFFFFFB2] text-xs">
            Testimonial is from an owner or employee of a current Vesto
            customer. Customers have not or will not be compensated in any way
            when providing testimonials. Tiny is an investor in Vesto, resulting
            in a conflict of interest as they have a direct interest in the
            success of the Company.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Ceo;
