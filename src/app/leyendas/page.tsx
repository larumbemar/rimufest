"use client";

import Image from "next/image";
import Link from "next/link";
import { artists } from "~/lib/artists";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { useEffect, useRef, useState } from "react";

const BOOKING_URL =
  "https://www.theincubator.co.nz/event-details/harikoa-collective-at-the-jam-factory";

const pageBg = "#f7f2e9";
const gold = "#c5a059";
const darkBrown = "#3b2317";

const performers = [
  {
    id: "amelia",
    artistKey: "amelia-taylor" as const,
    name: "Amelia Taylor",
    role: "Violin",
    image: "/leyendas/amelia.png",
    bio: artists["amelia-taylor"].bio.join(" "),
  },
  {
    id: "alejandro",
    artistKey: "alejandro-larumbe" as const,
    name: "Alejandro Larumbe",
    role: "Violin",
    image: "/leyendas/alejandro.png",
    bio: artists["alejandro-larumbe"].bio.join(" "),
  },
  {
    id: "donald",
    artistKey: "donald" as const,
    name: "Donald Maurice",
    role: "Viola",
    image: "/leyendas/donald.png",
    bio: artists.donald.bio.join(" "),
  },
  {
    id: "jesbery",
    artistKey: "jesbery-hartono-hall" as const,
    name: "Jesbery Hartono-Hall",
    role: "Cello",
    image: "/leyendas/jesbery.png",
    bio: artists["jesbery-hartono-hall"].bio.join(" "),
  },
];

function BookingButton({ className = "" }: { className?: string }) {
  return (
    <Link
      href={BOOKING_URL}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide text-white shadow-md transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c5a059] focus:ring-offset-transparent ${className}`}
      style={{ backgroundColor: gold }}
    >
      Book Tickets
    </Link>
  );
}

function PerformerSheet({
  performer,
}: {
  performer: (typeof performers)[number];
}) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <button className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent">
          <div className="mx-auto flex max-w-[10rem] flex-col items-center gap-3 sm:max-w-[11rem]">
            <Image
              src={performer.image}
              alt={performer.name}
              width={320}
              height={320}
              className="h-auto w-full object-contain transition duration-300 group-hover:scale-105"
            />
            <div className="text-xs font-semibold tracking-wide text-[color:var(--heading,_#3b2317)] sm:text-sm">
              <div>{performer.name}</div>
              <div className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-neutral-600 sm:text-xs">
                {performer.role}
              </div>
            </div>
          </div>
        </button>
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in" />
        <DialogPrimitive.Content className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col bg-[color:var(--sheet-bg,_#f7f2e9)] shadow-2xl outline-none data-[state=open]:animate-in data-[state=open]:slide-in-from-right data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right">
          <div className="flex items-start justify-between border-b border-[rgba(0,0,0,0.06)] px-6 py-4">
            <div>
              <DialogPrimitive.Title className="text-base font-semibold text-[color:var(--dialog-text,_#3b2317)]">
                {performer.name}
              </DialogPrimitive.Title>
              <DialogPrimitive.Description className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                {performer.role}
              </DialogPrimitive.Description>
            </div>
            <DialogPrimitive.Close className="rounded-full px-3 py-1 text-xs font-semibold text-neutral-600 transition hover:bg-black/5">
              Close
            </DialogPrimitive.Close>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
            <div className="relative h-64 w-64 overflow-hidden">
              <Image
                src={performer.image}
                alt={performer.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed text-[color:var(--dialog-text,_#3b2317)] sm:text-base">
              {performer.bio}
            </p>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export default function LeyendasPage() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        
        // Parallax effect: image moves slower than scroll
        // When scrolling down, image moves up (negative translateY)
        const parallaxSpeed = 0.3; // Much slower than scroll (0.3 = 30% speed for more dramatic effect)
        const parallaxOffset = scrollY * parallaxSpeed;
        
        // Apply parallax immediately from scroll start
        setScrollY(-parallaxOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div
  className="w-full"
  style={{
    backgroundColor: "#f8f3e6", // pageBg
    color: "#3b2317",       // darkBrown
  }}
>
  {/* 1. TOP UTILITY BAR (Logistics) */}
  <nav className="sticky top-0 z-30 w-full border-b border-[#c5a059]/20 bg-[#3b2317] py-5 text-white shadow-md">
    <div className="mx-auto flex max-w-7xl items-center gap-10 px-6 md:px-12">
      <div className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] md:flex">
        <span>Jan 6, 2026 • 6:30 PM</span>
        <span>The Jam Factory, Tauranga</span>
      </div>
      <div className="flex flex-col text-[10px] font-bold uppercase tracking-widest md:hidden">
        <span className="text-[#c5a059]">Jan 6, 2026 • 6:30 PM</span>
        <span>The Jam Factory</span>
      </div>
      <div className="flex items-center gap-4">
        <BookingButton className="bg-[#c5a059] px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#3b2317] hover:bg-white transition-colors" />
      </div>
    </div>
  </nav>

  {/* 2. HERO SECTION (Bottom-Aligned Content) */}
  <section ref={heroRef} className="relative flex h-[80vh] w-full flex-col justify-end overflow-hidden bg-[#f8f3e6] md:h-[90vh]">
    <Image
      src="/leyendas/hero.jpg"
      alt="Leyendas backdrop"
      fill
      priority
      className="pointer-events-none select-none object-cover opacity-90 object-[left_20%] md:object-[center_20%]" // Left on mobile, center on desktop
      style={{
        transform: `translateY(${scrollY}px) scale(1.1)`,
        willChange: "transform",
      }}
    />
    
    {/* The "Anchor" Gradient: Transparent at top, dark at bottom for text, ends perfectly at the section edge */}
    {/* <div 
      className="pointer-events-none absolute inset-0 z-10" 
      style={{
        background: `linear-gradient(to bottom, 
          rgba(59, 35, 23, 0) 0%, 
          rgba(59, 35, 23, 0.2) 50%, 
          rgba(59, 35, 23, 0.8) 85%, 
          rgba(59, 35, 23, 1) 100%)`
      }}
    /> */}

      {/* Brand Logo - Floating top left */}
    <div className="absolute left-6 top-8 z-10 md:left-12">
      <Image
        src="/leyendas/rimufestpresents.png"
        alt="RimuFest"
        width={120}
        height={40}
        className="w-24 brightness-0 invert opacity-90 md:w-32"
      />
    </div>

    {/* Content Container: Anchored to the bottom */}
    <div className="relative z-10 w-full px-6 pb-6 md:px-16 md:pb-10">
      <div className="max-w-4xl">
        {/* The Harikoa Collective */}
        <p className="mb-2 text-base font-medium tracking-wide text-[#f8f3e6] drop-shadow-lg md:text-xl">
          THE HARIKOA COLLECTIVE:
        </p>
        {/* Leyendas Logo */}
        <div className="mb-4 w-full max-w-[280px] md:max-w-md">
          <Image
            src="/leyendas/leyendas.png"
            alt="Leyendas Title"
            width={1250}
            height={500}
            // className="h-auto w-full drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
          />
        </div>
        
        {/* Tagline */}
        {/* <p className="max-w-xl text-balance text-lg font-light leading-snug tracking-wide text-white drop-shadow-lg md:text-2xl">
          From the <span className="text-[#c5a059] font-medium italic">Andes</span> to the heart of <span className="text-[#c5a059] font-medium italic">Brazil</span> — a journey through rhythm and folklore.
        </p> */}
      </div>
    </div>
  </section>

  {/* 3. TRANSITION SECTION: Solid Brown bar to bridge Hero and Blurb */}
  {/* <div className="h-4 w-full bg-[#3b2317]" />  */}

  {/* 4. BLURB SECTION */}
  <section className="mx-auto max-w-4xl px-8 py-20 text-center md:py-32">
    <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-[color:var(--heading,_#3b2317)] sm:text-3xl">
            From the <span className="text-[#c5a059] font-medium italic">Andes</span> to the heart of <span className="text-[#c5a059] font-medium italic">Brazil</span> — a journey through rhythm and folklore.
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#c5a059] mx-auto" />
            <div className="mt-8 space-y-4 text-left text-sm leading-relaxed text-[color:var(--body,_#3b2317)] sm:text-base sm:leading-relaxed">
              <p>
                In this special concert, The Harikoa Collective trace a musical
                journey from the lush sound worlds of Brazil to the soaring,
                windswept landscapes of the Andes. At the heart of the programme
                is Gabriela Lena Frank&apos;s{" "}
                <span className="font-semibold italic">
                  Leyendas: An Andean Walkabout
                </span>
                , a work that reimagines the string quartet as a storyteller of
                myth, ritual, and village life.
              </p>
              <p>
                Alongside Lena Frank&apos;s evocative soundscapes sits Heitor
                Villa-Lobos&apos;s String Quartet No. 1, music alive with folk
                colour, rhythmic vitality, and an unmistakable sense of place.
                Together, these works invite listeners into a richly textured
                world where tradition and imagination intertwine.
              </p>
            </div>
          </div>
  </section> 
</div>

      <div>
     

        {/* Walkabout section */}
        <section className="px-6 pb-16 sm:pb-20 md:px-10 md:pb-24 lg:px-20">
          <div className="mx-auto flex max-w-5xl flex-col gap-16">
            {/* Brazil block */}
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-10">
              <div className="order-1 w-full md:order-none md:w-1/2">
                <div className="relative mx-auto max-w-sm md:max-w-md">
                  <Image
                    src="/leyendas/brazil.png"
                    alt="Brazil programme graphic"
                    width={600}
                    height={600}
                    className="h-auto w-full drop-shadow-xl"
                  />
                </div>
              </div>
              <div className="order-2 w-full md:order-none md:w-1/2">
                <h3 className="text-xl font-semibold text-[color:var(--heading,_#3b2317)] sm:text-2xl">
                  Heitor Villa-Lobos – String Quartet No. 1
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--body,_#3b2317)] sm:text-base">
                  Villa-Lobos&apos;s first string quartet reflects his deep
                  connection to Brazilian musical identity. Drawing on Brazilian
                  folk influences while shaped by European classical tradition,
                  the quartet is full of warmth, rhythmic drive, and bold
                  character. Its melodies and textures evoke bustling streets,
                  intimate songs, and the vibrant energy of Brazil&apos;s
                  musical life.
                </p>
              </div>
            </div>

            {/* Andes block */}
            <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:items-center md:gap-10">
              <div className="order-1 w-full md:order-none md:w-1/2">
                <div className="relative mx-auto max-w-sm md:max-w-md">
                  <Image
                    src="/leyendas/andes.png"
                    alt="Andes programme graphic"
                    width={600}
                    height={600}
                    className="h-auto w-full drop-shadow-xl"
                  />
                </div>
              </div>
              <div className="order-2 w-full md:order-none md:w-1/2">
                <h3 className="text-xl font-semibold text-[color:var(--heading,_#3b2317)] sm:text-2xl">
                  Gabriela Lena Frank – Leyendas: An Andean Walkabout
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--body,_#3b2317)] sm:text-base">
                  At the centre of the programme is Gabriela Lena Frank&apos;s{" "}
                  <span className="italic">Leyendas: An Andean Walkabout</span>,
                  inspired by the landscapes, rhythms, and indigenous musical
                  traditions of Peru. Evoking ancient dances, village life, and
                  ceremonial music, <span className="italic">Leyendas</span> is
                  rich in colour and imagination, using the full expressive
                  range of the string quartet to recreate folk instruments and
                  storytelling gestures. The result is a sound world that feels
                  both ancient and vividly contemporary.
                </p>
              </div>
            </div>
          </div>
        </section>
{/* Performers Section */}
<section className="relative px-6 pb-64 md:px-10 lg:px-20 md:mx-40">
  <div className="mx-auto max-w-7xl"> {/* Wider container for larger desktop presence */}
    
    {/* Section Header */}
    <div className="text-center mb-20 md:mb-32">
      <h2 className="text-3xl font-bold tracking-tight text-[#3b2317] sm:text-5xl">
        The Harikoa Collective
      </h2>
      <div className="mt-6 h-1 w-20 rounded-full bg-[#c5a059] mx-auto" />
    </div>

    {/* The Staggered Diamond Grid */}
    <div className="mx-auto grid max-w-5xl grid-cols-1 place-items-center gap-x-20 sm:grid-cols-2 sm:gap-x-0 gap-y-10 sm:gap-y-20">
      {performers.map((performer, index) => (
        <div 
          key={performer.id} 
          className={`flex flex-col items-center  transition-all duration-700
            ${/* Separation: Increased Vertical Stagger, Closer Horizontal */ ''}
            ${index % 2 === 0 
              ? 'sm:-translate-x-4 sm:-translate-y-12' 
              : 'sm:translate-x-4 sm:translate-y-24'
            }
          `}
        >
          {/* Large Desktop Container */}
          <div className="group relative w-full max-w-[340px] md:max-w-[440px] lg:max-w-[480px]">
            {/* The Animation: Scale + Rotation */}
            <div className="transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3 group-hover:z-50 relative">
              
              {/* PerformerSheet handles the Image and the Dialog Trigger */}
              <PerformerSheet performer={performer} />
              
            </div>
          </div>
        </div>
      ))}
    </div>

  
  </div>
</section>

      </div>
        {/* Event logistics */}
        <section
          className="w-full pb-16 pt-10 sm:pb-20 sm:pt-12 md:pb-24 md:pt-14"
          style={{ backgroundColor: darkBrown }}
        >
          <div className="flex w-full flex-col gap-10 px-6 text-[color:var(--logistics-text,_#f7f2e9)] md:flex-row md:items-center md:justify-between md:px-10 lg:px-20">
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
                Event Details
              </h2>
              <div className="h-1 w-16 rounded-full bg-[#c5a059]" />
              <div className="space-y-2 text-sm sm:text-base">
                <p>
                  <span className="font-semibold">Date &amp; Time:</span>{" "}
                  January 6, 2026 &middot; 6:30 PM
                </p>
                <p>
                  <span className="font-semibold">Venue:</span> The Jam Factory,
                  The Historic Village, 159 17th Avenue, Tauranga South NZ
                </p>
                <p>
                  <a
                    href="https://www.google.com/maps/place/The+Jam+Factory/@-37.7047599,176.146666,17z/data=!3m1!4b1!4m6!3m5!1s0x6d6ddb79e2a7d0df:0x992bae27fb76d996!8m2!3d-37.7047599!4d176.1492463!16s%2Fg%2F11j8z1pffb?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium underline underline-offset-4 hover:text-[#f5e7c6]"
                  >
                    Open in Google Maps
                  </a>
                </p>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4">
                <BookingButton />
                {/* Poster download can be enabled when available */}
                {/* <Link
                  href="/leyendas/poster_full.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-[#f5e7c6] underline underline-offset-4 hover:text-white"
                >
                  Download poster
                </Link> */}
              </div>
            </div>

            <div className="flex-1 flex justify-center md:justify-end">
              <div className="w-full max-w-xs sm:max-w-sm">
                <Image
                  src="/leyendas/jamfactory.png"
                  alt="The Jam Factory"
                  width={320}
                  height={160}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>

      
        </section>
    </>
  );
}

