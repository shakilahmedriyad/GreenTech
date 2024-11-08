import Logo from "../Icons/Logo";
import ContentLayout from "../Layouts/ContentLayout";
import { IoMailSharp } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import { TbClockHour3 } from "react-icons/tb";
export default function Footer() {
  const navItem = [
    { label: "Home", slug: "/" },
    { label: "About us", slug: "/about-us" },
    { label: "services", slug: "/" },
    { label: "Experience", slug: "/" },
    { label: "testimonials", slug: "/" },
    { label: "Working fields", slug: "/" },
  ];
  return (
    <footer className="bg-[#0F0F0F] ">
      <ContentLayout>
        <div className="text-white my-10 max-w-[42rem] py-32 ml-auto text-right">
          <h1 className="text-3xl font-medium">
            Needs Experience Lead Generation Services?
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
          <button className="btn-primary mt-7">Contact Us</button>
        </div>
        <div className="text-white justify-between pb-10 flex">
          <div className=" space-y-4  w-full">
            <Logo className="w-[7.2rem]" />
            <p>
              Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do
              eiusmod
            </p>
            <p className="flex items-center gap-3">
              <FaMapMarkerAlt size={22} className="fill-lightLime" />
              Jl. Sunset Road No.815, Kuta
            </p>
            <p className="flex items-center gap-3">
              <IoMailSharp size={22} className="fill-lightLime" />
              support@domain.com
            </p>
            <p className="flex items-center gap-3">
              <IoCallSharp size={22} className="fill-lightLime" />
              (+62)81 6754 345
            </p>
          </div>
          <div className=" w-full flex flex-col  items-center ">
            <h2 className="text-2xl mt-3 uppercase mb-5 font-medium">
              Quick Links
            </h2>
            <ul className="space-y-3">
              {navItem.map((item) => (
                <li className="cursor-pointer" key={item.slug}>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <h2 className="text-2xl uppercase mt-3 mb-5 font-medium">
              Work Hours
            </h2>
            <p className="flex items-center gap-5">
              <TbClockHour3 size={22} className="stroke-lightLime" />9 AM - 5 PM
              , Monday - Saturday
            </p>
          </div>
        </div>
      </ContentLayout>
    </footer>
  );
}
