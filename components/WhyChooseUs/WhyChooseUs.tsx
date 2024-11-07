import Image from "next/image";
import RoundProgressBar from "../RoundProgressBar/RoundProgressBar";

export default function WhyChooseUs() {
  return (
    <section className="flex">
      <div className="w-full">
        <Image
          src={"/heros/headset.jpg"}
          alt="hero"
          width={1920}
          height={1080}
        />
      </div>
      <div className="w-full bg-[#181B2A] flex  justify-center items-center  text-white">
        <div className="max-w-[40rem]">
          <h1 className="text-4xl font-medium">
            We Are Focused On Making Your Process A Success
          </h1>
          <p className="my-9">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            reprehenderit hic recusandae. Iste modi aperiam est nihil corrupti.
            Perspiciatis vel vero cupiditate odio id reprehenderit qui quam
            similique voluptates maxime.
          </p>
          <div className="flex gap-10">
            <div className="flex gap-5 flex-col  justify-center">
              <RoundProgressBar
                className="max-w-[6.5rem]"
                progress={92}
                strokeWidth={6}
              />
              <p className="text-lg">
                We Have The Answers To Your Business Process Questions
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                dicta aspernatur voluptatem,
              </p>
            </div>
            <div className="flex gap-5 flex-col  justify-center">
              <RoundProgressBar
                className="max-w-[6.5rem]"
                progress={90}
                strokeWidth={8}
              />
              <p className="text-lg">
                We Have The Answers To Your Business Process Questions
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
                dicta aspernatur voluptatem, quo,
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
