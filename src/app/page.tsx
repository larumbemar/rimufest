import Image from "next/image";
import { FeatureBox } from "~/components/FeatureBox";
import { HomeHero } from "~/components/HomeHero";

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <div className="z-10 flex h-fit w-screen flex-col items-center justify-center gap-48 bg-white px-6 py-32 md:px-8 lg:px-16">
        <p className="text-center text-2xl md:max-w-[36rem] md:text-3xl lg:text-4xl">
          RimuFest envisions an inclusive and innovative chamber music festival
          that empowers young musicians to thrive. We offer high-quality music
          education, fostering teamwork, leadership, and a diverse repertoire.
        </p>
        {/* <div className="w-full md:w-1/2">
          <FeatureBox
            title="Holiday Programme 2025"
            href="/holiday-programme"
            imageSrc="/holiday.jpeg"
            captions={[
              "21st-24th September, 2025",
              "Tauranga, NZ",
              "Open to Violin, Viola, Cello, Double Bass, and Piano",
            ]}
            borderColor="green-500"
          />
        </div> */}
        <div className="w-full md:w-1/2">
          <FeatureBox
            title="7th Annual Festival 2026"
            href="/annual-festival"
            imageSrc="/annual-portrait.jpeg"
            captions={[
              "January 6th - 11th, 2026",
              "Tauranga, NZ",
              "Open to Violin, Viola, Cello, Double Bass, and Piano",
            ]}
            borderColor="green-500"
          />
        </div>

        <div className="flex md:flex-row flex-col-reverse gap-8 md:gap-24">
          <Image
            alt="project-box"
            width={1000}
            height={1200}
            className="h-auto w-full md:w-[400px] md:h-[480px] object-cover
             md:mt-6"
            src={"/home/performance.jpeg"}
          />
          <p className="text-lg lg:leading-8 md:text-xl lg:max-w-96">
            Through captivating performances and community engagement, we aim to
            inspire and make a lasting impact on the musical journey of young
            talents in the Bay of Plenty and beyond.
          </p>
        </div>
      </div>
    </>
  );
}
