"use client";

import { useEffect, useRef, useState } from "react";

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
        <div
          className={`absolute inset-0 z-10 flex items-center justify-center transition-transform duration-300 ease-in-out`}
        >
          <span className="text-center text-3xl font-semibold text-pink-500">
            Rimufest Chamber Music Festival
          </span>
        </div>

        <video
          ref={videoRef}
          className="fixed inset-0 z-0 h-full w-full object-cover"
          src="/splash.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            objectFit: "cover",
            filter: "contrast(1.28) saturate(1.18) brightness(1.03)",
            transition: `opacity ${FADE_DURATION}s linear`,
            opacity: fadeOut ? 0 : 1,
          }}
        />

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
