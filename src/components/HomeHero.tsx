"use client";

import { useEffect, useRef, useState } from "react";
import { RimuFestLogo } from "./AppMenu/RimufestLogo";

export function HomeHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fadeOut, setFadeOut] = useState(false);
  const LOOP_AT = 16.8; // seconds — adjust to just before flicker
  const FADE_DURATION = 0.45; // seconds — duration for fadeout

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // This will handle the fadeout logic
    const handleTimeUpdate = () => {
      if (video.currentTime >= LOOP_AT - FADE_DURATION) {
        setFadeOut(true);
      } else if (fadeOut && video.currentTime < LOOP_AT - FADE_DURATION) {
        setFadeOut(false);
      }
      if (video.currentTime >= LOOP_AT) {
        video.currentTime = 0;
        video.play();
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
    // We want fadeOut in dependency to reset when needed
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fadeOut]);

  // After the loop, reset fadeOut
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoop = () => {
      setFadeOut(false);
    };

    video.addEventListener("seeked", handleLoop);
    return () => {
      video.removeEventListener("seeked", handleLoop);
    };
  }, []);

  return (
    <>
      <div className="relative bg-black z-10 h-screen w-screen overflow-hidden">
        {/* Logo and text - centered in the middle */}
        <div
          className={`absolute inset-0 z-10 flex flex-col items-center justify-center gap-6 md:gap-8 transition-transform duration-300 ease-in-out`}
        >
          <div className="scale-125 md:scale-150 lg:scale-[1.75]">
            <RimuFestLogo />
          </div>
          <span className="text-center text-2xl font-bold tracking-wide text-white drop-shadow-2xl md:text-2xl lg:text-3xl">
            Chamber Music Festival
          </span>
        </div>

        <video
          ref={videoRef}
          className="fixed inset-0 z-0 h-full w-full object-cover"
          src="/splash.mp4"
          autoPlay
          muted
          playsInline
          style={{
            objectFit: "cover",
            filter: "contrast(1.28) saturate(1.18) brightness(1.03)",
            transition: `opacity ${FADE_DURATION}s linear`,
            opacity: fadeOut ? 0 : 1,
          }}
        />
        
        {/* Dark overlay for better text visibility */}
        <div className="fixed inset-0 z-[5] bg-black/20 pointer-events-none" />

        {/* Optionally, add a div for smoother fade/blend */}
        {/* 
        <div
          className={`fixed inset-0 pointer-events-none z-10 transition-opacity duration-[${FADE_DURATION * 1000}ms]`}
          style={{ opacity: fadeOut ? 1 : 0, background: "black" }}
        />
        */}
      </div>
    </>
  );
}
