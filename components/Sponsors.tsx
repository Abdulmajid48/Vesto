import Image from "next/image";
const Sponsors = () => {
  return (
    <div className="h-auto w-auto font-['SF_Pro_Text'] flex flex-col justify-center items-center rounded-md text-[#2E2E27] mx-6 sm:mx-8 sm:px-2 pt-5 pb-5 bg-[#2E2E1F0F]">
      <div>Join leading companies on Vesto</div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-28 gap-y-6 sm:gap-y-3">
        <Image className="hover:scale-125" width={75} height={70} src="/treecard.svg" alt="" />
        <Image className="hover:scale-125" width={75} height={70} src="/tiny.svg" alt="" />
        <Image className="hover:scale-125" width={75} height={70} src="/mercantile.svg" alt="" />
        <Image className="hover:scale-125" width={75} height={70} src="/assemble.svg" alt="" />
        <Image className="hover:scale-125" width={75} height={70} src="/nucleus.svg" alt="" />
        <Image className="hover:scale-125" width={75} height={70} src="/reflect.svg" alt="" />
        <Image className="hover:scale-125" width={75} height={70} src="/synthesis.svg" alt="" />
        <Image className="hover:scale-125" width={75} height={70} src="/contrary.svg" alt="" />
        <Image className="hover:scale-125" width={75} height={70} src="july.svg" alt="" />
        <Image className="hover:scale-125" width={75} height={70} src="/manymore.svg" alt="" />
      </div>
    </div>
  );
}
export default Sponsors