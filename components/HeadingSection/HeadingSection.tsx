import Image from "next/image";
export default function HeadinSection() {
  return (
    <section className="heading w-full flex h-screen  items-center pt-20 ">
      <div className="lg:w-[50%] w-full absolute lg:relative flex justify-center lg:justify-end ">
        <div className="max-w-[40rem] lg:-mr-[20%]     w-full  rounded-md  relative z-10 bg-white shadow-md py-24 px-10 ">
          <h2 className="md:text-4xl text-xl sm:text-lg  tracking-wider leading-tight font-bold">
            Find The Right Lead Generation Service For Your Business
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-5">
            We started our business by using fiverr and upwork marketplace and
            now we have lot of permanent clients who give us project order
            directly and give the payment via payoneer and remitay.We active to
            our marketplace 18 hours on everyday and make sure that we submit
            our all project on time
          </p>
          <div>
            <button className=" btn-primary mt-10">Contact us</button>
          </div>
        </div>
      </div>
      <div className="lg:w-[70%] w-full h-full">
        <Image
          src={"/heros/headset.jpg"}
          alt="headset"
          width={1920}
          height={1080}
          className="max-w-[75rem] h-full object-cover w-full col-start-3 col-end-6 "
        />
      </div>
    </section>
  );
}
