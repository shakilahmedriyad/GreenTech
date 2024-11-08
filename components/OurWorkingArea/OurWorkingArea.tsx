import Image from "next/image";
import ContentLayout from "../Layouts/ContentLayout";
import WorkingAreaNameBox from "./WorkingAreaNameBox";
import SiBadge from "../Icons/SiBadge";

export default function OurWorkingArea() {
  const WorkingArea = [
    "We Are Leading in Call Center Service",
    "Solutions For Small & Large Business",
    "Guidence From Our Expert Staff",
    "Learn From Customer Feedback",
  ];
  return (
    <ContentLayout>
      <section className="flex md:flex-row flex-col-reverse mt-56">
        <div className="w-full px-2 lg:px-12 py-20">
          <h2 className="text-xl sm:text-4xl font-medium">
            We Communicate To Get Your Business To The Next Level
          </h2>
          <p className="text-sm text-gray-600 mt-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            enim quae sequi iusto minima dolore illum numquam placeat! Aut minus
            reprehenderit doloremque delectus est earum id, quidem quas
            voluptatum quaerat.
          </p>
          <div className="working_field grid sm:grid-cols-2  gap-x-2 mt-10 gap-y-6">
            {WorkingArea.map((title) => (
              <WorkingAreaNameBox key={title} title={title} />
            ))}
          </div>
          <div className="mt-5 flex w-full justify-between  py-10  border-t">
            <div className="flex px-3 gap-3">
              <SiBadge className="w-[3.5rem] fill-lightLime" />
              <div className="">
                <p className="text-3xl font-bold">13+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
            <div className="flex px-3 gap-3">
              <SiBadge className="w-[3.5rem] fill-lightLime" />
              <div className="">
                <p className="text-3xl font-bold">13+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4 lg:px-10">
          <Image
            src={"/heros/headset.jpg"}
            alt="headset"
            width={1920}
            className="h-full w-full object-cover"
            height={1080}
          />
        </div>
      </section>
    </ContentLayout>
  );
}
