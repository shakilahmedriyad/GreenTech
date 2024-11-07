import Logo from "../Icons/Logo";

export default function NavBar() {
  const navItem = [
    { label: "Home", slug: "/" },
    { label: "About us", slug: "/about-us" },
    { label: "services", slug: "/" },
    { label: "Experience", slug: "/" },
    { label: "testimonials", slug: "/" },
    { label: "Working fields", slug: "/" },
  ];
  return (
    <nav className=" fixed z-30 w-full bg-white  shadow-xl">
      <section className="max-w-[80rem] items-center py-5 flex justify-between  mx-auto w-full">
        <Logo className="w-[5.2rem] cursor-pointer z-50 fill-black" />
        <ul className="flex cursor-pointer uppercase text-sm gap-5">
          {navItem.map((item) => (
            <li key={item.slug}>{item.label}</li>
          ))}
        </ul>
      </section>
    </nav>
  );
}
