import AboutUs from "@/components/AboutUs/AboutUs";
import HeadinSection from "@/components/HeadingSection/HeadingSection";
import OurServices from "@/components/OurServices/OurServices";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeadinSection />
      <AboutUs />
      <WhyChooseUs />
      <OurServices />
    </main>
  );
}
