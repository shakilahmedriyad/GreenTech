import Image from "next/image";

export default function TestimonialsCard() {
  return (
    <div className="flex bg-white shadow-xl px-11 py-10 space-y-5 flex-col w-full">
      <p className="text-gray-600 italic">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam veniam
        debitis inventore officia? Delectus eius animi consectetur quis aliquam
        voluptate dolorum
      </p>
      <div className="flex items-center gap-5">
        <Image
          src={"/heros/headset.jpg"}
          alt="client image"
          className="w-16 h-16 object-cover rounded-full"
          width={500}
          height={500}
        />
        <div>
          <h3>Rifat Miah</h3>
          <p className="text-sm text-gray-600">Manager</p>
        </div>
      </div>
    </div>
  );
}
