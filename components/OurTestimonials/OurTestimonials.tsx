"use client";
import ContentLayout from "../Layouts/ContentLayout";
import TestimonialsCard from "./TestimonialsCards";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OurTestimonials() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
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
          <section className="relative bg-transparent -bottom-24 ">
            <Slider className="!bg-transparent" {...settings}>
              <TestimonialsCard />
              <TestimonialsCard />
              <TestimonialsCard />
            </Slider>
          </section>
        </ContentLayout>
      </div>
    </section>
  );
}
