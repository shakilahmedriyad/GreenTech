import Image from "next/image";

export default function ServicesCard({
  label,
  descriptions,
  icon,
}: {
  label: string;
  descriptions: string;
  icon: JSX.Element;
}) {
  return (
    <div className="w-full">
      <Image src={"/heros/headset.jpg"} alt="hero" width={1920} height={1080} />
      <div className="bg-white flex flex-col items-center gap-2 rounded-md px-5 py-7 relative z-10 text-center max-w-[90%] mx-auto -mt-[30%]">
        {icon}
        <h3 className="text-2xl mt-5 mb-3 font-medium">{label}</h3>
        <p>{descriptions}</p>
      </div>
    </div>
  );
}