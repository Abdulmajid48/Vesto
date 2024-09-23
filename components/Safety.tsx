import Image from "next/image";

interface Content {
  image: string;
  heading: string;
  paragraph: string;
}

const Safety = () => {
  return (
    <>
      <div className="bg-[#F9F8F1] font-['SF_Pro_Text'] text-[#2E2E27] pt-7 mb-5 h-[79.5rem] sm:h-[520px]">
        <div>
          <h2 className="text-center text-2xl sm:text-3xl">
            Safety and security
          </h2>
          <p className="text-xs sm:text-sm text-center">
            Purpose-built to maximize the security of your assets.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-10 sm:mr-10 sm:ml-10 w-11/12 m-auto mt-4">
          {Safetycontents.map((content, index) => {
            const { image, heading, paragraph }: Content = content;
            return (
              <div className="flex flex-col" key={index}>
                <Image
                  src={image}
                  alt="audit picture"
                  height={350}
                  width={350}
                />
                <div className="text-left bg-white w-[350px] h-[150px] p-7">
                  <h2 className="pb-2 text-lg">{heading}</h2>
                  <p className="text-sm">{paragraph}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

const Safetycontents = [
  {
    image: "/audit.svg",
    heading: "Audit friendly",
    paragraph: "Purpose-built to maximize the security of your assets.",
  },
  {
    image: "/insurance.svg",
    heading: "Insured custody accounts",
    paragraph:
      "Investment accounts are protected with $500K of SIPC insurance & an additional $5M of FDIC insurance.",
  },
  {
    image: "/sec.svg",
    heading: "SOC-2 Compliant",
    paragraph: "SOC-2 compliant practices and advanced data encryption.",
  },
];

export default Safety;
