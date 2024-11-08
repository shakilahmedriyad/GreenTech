import AboutUs from "@/components/AboutUs/AboutUs";
import Footer from "@/components/Footer/Footer";
import HeadinSection from "@/components/HeadingSection/HeadingSection";
import OurServices from "@/components/OurServices/OurServices";
import OurTestimonials from "@/components/OurTestimonials/OurTestimonials";
import OurWorkingArea from "@/components/OurWorkingArea/OurWorkingArea";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <HeadinSection />
      <AboutUs />
      <WhyChooseUs />
      <OurServices />
      <OurTestimonials />
      <OurWorkingArea />
      <Footer />
    </main>
  );
}
