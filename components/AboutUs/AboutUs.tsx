import Image from "next/image";
import { FaTools } from "react-icons/fa";
import SiBadge from "../Icons/SiBadge";
import ContentLayout from "../Layouts/ContentLayout";
import AboutUsCard from "./AboutUsCard";
import { FaCircleCheck } from "react-icons/fa6";
import ProgressBar from "../ProgressBar/ProgressBar";
import { GrLanguage } from "react-icons/gr";

export default function AboutUs() {
  const AboutUSItem = [
    {
      title: "Satisfaction Guarantee",
      description:
        "We guarantee complete satisfaction with our services, ensuring timely delivery, exceptional quality, and results that exceed expectations, backed by reliable support every step of the way.",
      Icon: <SiBadge className="w-[5rem] fill-white" />,
    },
    {
      title: "Multi Language Support",
      description:
        "Offer seamless multi-language support to connect with global audiences, ensuring your message reaches and resonates with clients across different languages and regions",
      Icon: <GrLanguage size={60} className="mt-3 mb-2 " color="#6AB15A" />,
    },
    {
      title: "Professional Tools",
      description:
        "Equipped with advanced tools and technologies, our agency ensures efficient, high-quality solutions to drive success for your business with precision and professionalism.",
      Icon: <FaTools size={60} className="mt-3 mb-2 " color="#6AB15A" />,
    },
  ];
  return (
    <ContentLayout>
      <section className="mb-24 mx-2 mt-56">
        <div className="w-full gap-5 grid sm:grid-cols-2  lg:grid-cols-3">
          {AboutUSItem.map((item, index) => (
            <AboutUsCard key={item.title} {...item} isGreen={index == 0} />
          ))}
        </div>
        <section className="flex md:flex-row flex-col-reverse  mx-2 mt-56 gap-10">
          <div className="w-full py-10 ">
            <h2 className="text-lg sm:text-2xl font-semibold leading-snug">
              Your Trusted Partner for Top-Quality B2B & B2C Lead Generation
              Services
            </h2>
            <p className="text-sm sm:text-base my-8">
              We are a dedicated team specializing in B2B and B2C lead
              generation, offering tailored solutions to help businesses grow.
              With a focus on quality, efficiency, and customer satisfaction, we
              connect you with the right prospects, ensuring long-term success
              and growth for your business.
            </p>
            <div className="w-full px-2 gap-4 justify-between mt-12 flex md:flex-row flex-col text-left">
              <div className="w-full">
                <p className="text-lg mb-4 flex items-center gap-2 font-medium">
                  <FaCircleCheck color="#6AB15A" size={25} />
                  24/7 Customer support
                </p>
                <span className="text-sm">
                  Our customer support is always here to assist you, ensuring
                  prompt responses and solutions
                </span>
              </div>
              <div className="w-full">
                <p className="text-lg flex items-center gap-2 mb-4 font-medium">
                  <FaCircleCheck color="#6AB15A" size={25} />
                  Delivery Report
                </p>
                <span className="text-sm ">
                  Our Delivery Report provides detailed insights into the
                  progress and completion of your projects.
                </span>
              </div>
            </div>
            <div className="w-full border-t-2 mt-12">
              <div className="space-y-7 mt-10">
                <div className="space-y-1">
                  <p>Communication</p>
                  <ProgressBar width={80} />
                </div>
                <div className="space-y-1">
                  <p>Chat support</p>
                  <ProgressBar width={70} />
                </div>
              </div>
            </div>
            <button className="btn-primary mt-16">More About Us</button>
          </div>
          <div className="w-full relative">
            <Image
              src={"/heros/headset.jpg"}
              width={1920}
              height={1080}
              className="h-full object-cover w-full"
              alt="about us"
            />
            <div className="absolute bg-white space-y-1 bottom-10 right-10 text-center rounded-md px-10 py-5">
              <p className="text-2xl font-bold">1,485+</p>
              <p className="text-gray-600">Trusted Clients</p>
            </div>
          </div>
        </section>
      </section>
    </ContentLayout>
  );
}
