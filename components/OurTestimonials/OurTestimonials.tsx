import ContentLayout from "../Layouts/ContentLayout";
import TestimonialsCard from "./TestimonialsCards";

export default function OurTestimonials() {
  return (
    <section className="h-full relative bg-[url('/headset.jpg')] backdrop-brightness-0 bg-cover bg-center bg-fixed text-white  bg-no-repeat  w-full ">
      <div className="pt-20 bg-transparent">
        <ContentLayout>
          <section className="my-16 max-w-[40rem] mx-auto text-center">
            <h2 className="text-3xl font-medium">Our Cleints Reviews</h2>
            <p className="mt-5 ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              deserunt laudantium voluptates atque reiciendis et eligendi iste
              aut
            </p>
          </section>
          <section className="grid relative -bottom-24 grid-cols-3 gap-10">
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
          </section>
        </ContentLayout>
      </div>
    </section>
  );
}
