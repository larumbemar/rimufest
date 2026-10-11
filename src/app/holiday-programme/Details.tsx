import React from "react";

export const Details = () => {
  return (
    <div className="flex flex-col leading-none gap-1 lg:w-2/5 text-2xl">
      <span className="font-bold">Tauranga, NZ</span>
      <span className="italic font-bold">September 27th - 30th, 2026</span>
      <span className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-neutral-200 px-4 py-2 text-sm font-bold uppercase tracking-widest text-[#3b2317]">
        Closed
      </span>
    </div>
  );
};
