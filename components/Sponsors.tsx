import Image from "next/image";
const Sponsors = () => {
  return (
    <div className="h-auto w-auto font-['SF_Pro_Text'] flex flex-col justify-center items-center rounded-md text-[#2E2E27] px-6 sm:px-8 pt-5 pb-5 bg-[#2E2E1F0F]">
      <div>Join leading companies on Vesto</div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-28 gap-y-6 sm:gap-y-3 pt-5">
        {Sponsorsimg.map((img, index) => {
          const { src } = img;
          return (
            <Image
            key={index}
              className="hover:scale-125"
              width={75}
              height={70}
              src={src}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

const Sponsorsimg = [
  {
    src: "/treecard.svg",
  },
  {
    src: "/tiny.svg",
  },
  {
    src: "/mercantile.svg",
  },
  {
    src: "/assemble.svg",
  },
  {
    src: "/nucleus.svg",
  },
  {
    src: "/reflect.svg",
  },
  {
    src: "/synthesis.svg",
  },
  {
    src: "/contrary.svg",
  },
  {
    src: "/july.svg",
  },
  {
    src: "/manymore.svg",
  },
];
export default Sponsors;
