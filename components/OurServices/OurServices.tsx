import ContentLayout from "../Layouts/ContentLayout";
import ServicesCard from "./ServicesCard";
import { IoCallOutline } from "react-icons/io5";

export default function OurServices() {
  const Service = [
    {
      label: "Call Center",
      descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      icon: <IoCallOutline size={60} />,
    },
    {
      label: "Debt Collection",
      descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      icon: <IoCallOutline size={60} />,
    },
    {
      label: "Inbound Request",
      descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      icon: <IoCallOutline size={60} />,
    },
    {
      label: "Customer Support",
      descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      icon: <IoCallOutline size={60} />,
    },
    {
      label: "Virtual Assistance",
      descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      icon: <IoCallOutline size={60} />,
    },
    {
      label: "Live Chat Support",
      descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      icon: <IoCallOutline size={60} />,
    },
  ];
  return (
    <ContentLayout>
      <section className="my-24">
        <h1 className="text-5xl font-medium">What Service We offer</h1>
        <p className="pb-10 pt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
          ducimus excepturi sapiente,
        </p>
        <div className="grid grid-cols-3 gap-5">
          {Service.map((service) => (
            <ServicesCard {...service} key={service.label} />
          ))}
        </div>
      </section>
    </ContentLayout>
  );
}
