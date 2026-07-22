"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FeatureBox } from "~/components/FeatureBox";
import { HomeHero } from "~/components/HomeHero";

export default function HomePage() {
  const [showUtilityBar, setShowUtilityBar] = useState(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        // Hide utility bar when hero is completely scrolled past
        setShowUtilityBar(rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div ref={heroRef} className="relative">
        <HomeHero />


      </div>

      <div className="z-10 flex h-fit w-screen flex-col items-center justify-center gap-24 bg-white px-6 py-32 md:px-8 lg:px-12 xl:px-16">
        <div className="relative flex items-center justify-center gap-8 md:gap-12">
          <p className="text-center font-bold text-base leading-relaxed max-w-[28rem] md:max-w-[36rem] md:text-lg">
            RimuFest envisions an inclusive and innovative chamber music festival
            that empowers young musicians to thrive. We offer high-quality music
            education, fostering teamwork, leadership, and a diverse repertoire.
          </p>
          <div className="hidden h-24 w-[2px] bg-gray-300 md:block lg:h-32"></div>
        </div>
        <div className="flex w-full flex-col items-stretch gap-10 md:flex-row md:items-start my-16 md:my-24">
          <div className="w-full md:w-1/2">
            <FeatureBox
              title="Term 3 Holiday Programme 2026"
              href="/holiday-programme"
              imageSrc="/holiday.jpeg"
              captions={[
                "September 27th - 30th, 2026",
                "Tauranga, NZ",
                "Applications open now",
              ]}
              borderColor="green"
              framePosition="up"
            />
             <div className="mt-6 pl-4">
              <a
                href="https://forms.gle/eSojeoZd9RdP1Sp46 "
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#c5a059] px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#3b2317] shadow-md transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c5a059] focus:ring-offset-transparent"
              >
                Apply now
              </a>
            </div>
          </div>

          <div className="w-full md:mt-16 md:w-1/2">
            <FeatureBox
              title="8th Annual Festival 2027"
              href="/annual-festival"
              imageSrc="/annual-portrait.jpeg"
              captions={[
                "January 8th - 13th, 2027",
                "Tauranga, NZ",
              ]}
              borderColor="amber"
              framePosition="down"
            />
          </div>
        </div>

        <div className="flex md:flex-row flex-col-reverse gap-8 md:gap-12 lg:gap-16">
          <Image
            alt="RimuFest performance at venue"
            width={1000}
            height={1200}
            className="h-auto w-full max-w-full max-h-[400px] md:max-h-none md:w-[400px] md:h-[480px] object-cover transition-transform duration-300 hover:scale-105 md:mt-6"
            src={"/home/performance.jpeg"}
          />
          <p className="text-base font-semibold leading-relaxed md:text-lg font-bold max-w-[28rem] lg:max-w-96">
            Through captivating performances and community engagement, we aim to
            inspire and make a lasting impact on the musical journey of young
            talents in the Bay of Plenty and beyond.
          </p>
        </div>
      </div>
    </>
  );
}
