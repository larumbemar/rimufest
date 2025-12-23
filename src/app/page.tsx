"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FeatureBox } from "~/components/FeatureBox";
import { HomeHero } from "~/components/HomeHero";
import { LinkButton } from "~/components/LinkButton";

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

        {/* Leyendas utility bar - fixed over hero, sticky, disappears after hero */}
        <nav
          className={`fixed top-0 left-0 right-0 z-20 h-[62px] w-full border-b border-[#c5a059]/20 bg-[#3b2317] text-white shadow-md transition-opacity duration-300 ${
            showUtilityBar ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="mx-auto flex h-full max-w-7xl items-center pl-6 pr-20 lg:pl-12 lg:pr-20">
            <div className="flex flex-1 items-center gap-4">
              <div className="hidden flex-row items-center gap-4 text-[11px] font-bold uppercase tracking-[0.2em] lg:flex">
                <span className="text-[#f8f3e6]">THE HARIKOA COLLECTIVE: LEYENDAS</span>
                <span>•</span>
                <span>Jan 6, 2026</span>
                <span>•</span>
                <span>The Jam Factory</span>
              </div>
              <div className="flex flex-col gap-1 text-[10px] font-bold uppercase tracking-widest lg:hidden">
                <span className="text-[#f8f3e6]">THE HARIKOA COLLECTIVE: LEYENDAS</span>
                <span className="text-[#c5a059]">Jan 6, 2026 • The Jam Factory</span>
              </div>
              <Link
                href="https://www.theincubator.co.nz/event-details/harikoa-collective-at-the-jam-factory"
                target="_blank"
                rel="noreferrer"
                className="ml-2 inline-flex items-center justify-center rounded-full bg-[#c5a059] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#3b2317] shadow-md transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c5a059] focus:ring-offset-transparent"
              >
                Book Tickets
              </Link>
            </div>
          </div>
        </nav>
      </div>

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
        <div className="flex w-full flex-col items-stretch gap-10 md:flex-row md:items-start">
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
              borderColor="green"
              framePosition="up"
            />
          </div>

          <div className="w-full md:mt-32 md:w-1/2">
            <FeatureBox
              title="The Harikoa Collective: Leyendas"
              href="/leyendas"
              imageSrc="/leyendas/hero.jpg"
              captions={[
                "January 6th, 2026 • 6:30 PM",
                "The Jam Factory, Tauranga",
                "A journey from Brazil to the Andes",
              ]}
              borderColor="amber"
              framePosition="down"
              imagePosition="object-left"
            />
            <div className="mt-6 pl-12">
              <Link
                href="https://www.theincubator.co.nz/event-details/harikoa-collective-at-the-jam-factory"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#c5a059] px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#3b2317] shadow-md transition-colors hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c5a059] focus:ring-offset-transparent"
              >
                Book Tickets
              </Link>
            </div>
          </div>
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
