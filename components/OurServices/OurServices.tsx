import GraphicsDesignIcon from "../Icons/GraphicsDesignIcon";
import LeadGenerationIcon from "../Icons/LeadGeneration";
import VideoEditing from "../Icons/VideoEditingIcon";
import WebsiteDesignIcon from "../Icons/WebsiteDesignIcon";
import ContentLayout from "../Layouts/ContentLayout";
import ServicesCard from "./ServicesCard";
import { IoCallOutline } from "react-icons/io5";

export default function OurServices() {
  const Service = [
    {
      label: "B2B & B2C cold calling",
      descriptions: "Connecting You to Opportunities, One Call at a Time",
      icon: <IoCallOutline size={60} />,
      heroImage: "/heros/cold-calling.png",
    },
    {
      label: "B2B & B2C lead generation",
      descriptions: "Connecting You with Quality Leads for Business Growth",
      icon: <LeadGenerationIcon className="max-w-[4rem]" />,
      heroImage: "/heros/lead-generation.webp",
    },
    {
      label: "Graphics design",
      descriptions: "Creative Designs that Speak to Your Brand",
      icon: <GraphicsDesignIcon className="max-w-[4rem]" />,
      heroImage: "/heros/graphics-design.jpg",
    },
    {
      label: "Website design",
      descriptions: "Crafting Stunning Websites That Drive Results",
      icon: <WebsiteDesignIcon className="max-w-[4rem]" />,
      heroImage: "/heros/website-design.avif",
    },
    {
      label: "Photoshop and video editing",
      descriptions:
        "Bringing Your Vision to Life with Expert Photoshop and Video Editing",
      icon: <VideoEditing className="max-w-[4.5rem]" />,
      heroImage: "/heros/video-editing.webp",
    },
    // {
    //   label: "Website design",
    //   descriptions: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    //   icon: <IoCallOutline size={60} />,
    // },
  ];
  return (
    <ContentLayout>
      <section className="py-24 px-4 h-full">
        <h1 className="text-3xl font-semibold">What Service We offer</h1>
        <p className="pb-10 pt-2">
          Comprehensive Lead Generation Solutions to Drive Your Business Forward
        </p>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {Service.map((service) => (
            <ServicesCard {...service} key={service.label} />
          ))}
        </div>
      </section>
    </ContentLayout>
  );
}
