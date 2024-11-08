import Logo from "../Icons/Logo";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { RxHamburgerMenu } from "react-icons/rx";
export default function NavBar() {
  const navItem = [
    { label: "Home", slug: "/" },
    { label: "About", slug: "/about-us" },
    { label: "Services", slug: "/" },
    { label: "Expertise", slug: "/" },
    { label: "Testimonials", slug: "/" },
    { label: "Industries", slug: "/" },
  ];
  return (
    <nav className=" fixed px-5 z-30 w-full bg-white  shadow-xl">
      <section className="max-w-[80rem] fill-lightLime items-center py-5 flex justify-between  mx-auto w-full">
        <Logo className="w-[5.2rem] cursor-pointer z-50 fill-black" />
        <ul className=" hidden sm:flex cursor-pointer uppercase text-xs md:text-sm gap-5">
          {navItem.map((item) => (
            <li key={item.slug}>{item.label}</li>
          ))}
        </ul>
        <div className="sm:hidden block">
          <Sheet>
            <SheetTrigger asChild>
              <RxHamburgerMenu color="#6AB15A" size={35} />
            </SheetTrigger>
            <SheetContent>
              {navItem.map((item) => (
                <p key={item.slug}>{item.label}</p>
              ))}
            </SheetContent>
          </Sheet>
        </div>
      </section>
    </nav>
  );
}
