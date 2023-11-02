import Image from "next/image";
import Icon from "@/assets/svg/icon.svg";

export default function Services() {
  return (
    <div className="mb-64 pt-12">
      <div className="flex text-center justify-center items-center flex-col">
        <h1
          className="text-4xl not-italic font-black uppercase pt-12"
          style={{ color: "#333", fontFamily: "Poppins", lineHeight: "138%" }}
        >
          Services
        </h1>
        <p className="h-1 w-16 flex-shrink-0 mb-10 rounded-xl bg-teal-400"></p>
      </div>

      <div
        className="flex flex-row justify-center flex-wrap pl-60 pr-60"
        style={{ gap: "220px" }}
      >
        <Image src={Icon} alt=""></Image>
        <Image src={Icon} alt=""></Image>
        <Image src={Icon} alt=""></Image>
        <Image src={Icon} alt=""></Image>

        <Image src={Icon} alt=""></Image>
        <Image src={Icon} alt=""></Image>
        <Image src={Icon} alt=""></Image>
        <Image src={Icon} alt=""></Image>

        <Image src={Icon} alt=""></Image>
        <Image src={Icon} alt=""></Image>
        <Image src={Icon} alt=""></Image>
        <Image src={Icon} alt=""></Image>

        <Image src={Icon} alt=""></Image>
        <Image src={Icon} alt=""></Image>
        <Image src={Icon} alt=""></Image>
        <Image src={Icon} alt=""></Image>
      </div>
      
    </div>
  );
}
