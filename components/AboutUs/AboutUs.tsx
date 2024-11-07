import Image from "next/image";
import ABC from "../Icons/ABC";
import CustomerLogo from "../Icons/Customer";
import SiBadge from "../Icons/SiBadge";
import ContentLayout from "../Layouts/ContentLayout";
import AboutUsCard from "./AboutUsCard";
import { FaCircleCheck } from "react-icons/fa6";
import ProgressBar from "../ProgressBar/ProgressBar";

export default function AboutUs() {
  const AboutUSItem = [
    {
      title: "Satisfaction Guarantee",
      description:
        "lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor incididunt ut, ea commodo consequat et dolore magna aliqua. Ut enim ad minim ven",
      Icon: <SiBadge className="w-[5rem] fill-white" />,
    },
    {
      title: "Multi Language Support",
      description:
        "lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor incididunt ut, ea commodo consequat et dolore magna aliqua. Ut enim ad minim ven",
      Icon: <ABC className="w-[5rem]   " fill="#6AB15A" />,
    },
    {
      title: "Professional Stuff",
      description:
        "lorem ipsum dolor sit amet, consectetur adip, sed do eiusmod tempor incididunt ut, ea commodo consequat et dolore magna aliqua. Ut enim ad minim ven",
      Icon: (
        <CustomerLogo className="w-[5rem]  stroke-lightLime stroke-[15] " />
      ),
    },
  ];
  return (
    <ContentLayout>
      <section className="mb-24 mt-56">
        <div className="w-full gap-5 grid grid-cols-3">
          {AboutUSItem.map((item, index) => (
            <AboutUsCard key={item.title} {...item} isGreen={index == 0} />
          ))}
        </div>
        <section className="flex mt-56 gap-10">
          <div className="w-full py-10 ">
            <h2 className="text-3xl font-bold leading-snug">
              We Are The Best B2B & B2C Lead Generation Service For your
              Business{" "}
            </h2>
            <p className="text- my-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              pariatur quisquam eos. Fuga minus molestias amet, deserunt commodi
              architecto hic explicabo, rerum harum ut assumenda doloremque
              quidem eaque pariatur provident.
            </p>
            <div className="w-full px-2 gap-4 justify-between mt-12 flex text-left">
              <div>
                <p className="text-lg mb-4 flex items-center gap-2 font-medium">
                  <FaCircleCheck color="#6AB15A" size={25} />
                  24/7 Customer support
                </p>
                <span className="text-sm">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum soluta est, adipisci fugit inventore natus hic
                </span>
              </div>
              <div>
                <p className="text-lg flex items-center gap-2 mb-4 font-medium">
                  <FaCircleCheck color="#6AB15A" size={25} />
                  Delivery Report
                </p>
                <span className="text-sm ">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum soluta est, adipisci fugit inventore natus hic
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
