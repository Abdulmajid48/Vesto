import Image from "next/image";

const Footer = () => {
  return <div className="bg-[#061F13]">
    <div>
        <Image src="/logo.svg" alt="logo" width={50} height={50}/>
    </div>
    <div></div>
  </div>;
}
export default Footer