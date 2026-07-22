import React from "react";
import { LinkButton } from "~/components/LinkButton";

export const Details = () => {
  return (
    <div className="flex flex-col leading-none gap-1 lg:w-2/5 text-2xl">
      <span className="font-bold">Tauranga, NZ</span>
      <span className="italic font-bold">September 27th - 30th, 2026</span>
      <span className="text-xl">
        Applications open:{" "}
        <span className="font-normal italic text-nowrap">July 20th, 2026</span>
      </span>
      <span className="text-xl">
        Registration closes:{" "}
        <span className="font-normal italic text-nowrap">
          August 16th, 2026
        </span>
      </span>
      <span className="text-xl">
        Music sent:{" "}
        <span className="font-normal italic text-nowrap">
          September 1st, 2026
        </span>
      </span>

      <LinkButton href="https://forms.gle/eSojeoZd9RdP1Sp46">
        apply now
      </LinkButton>
    </div>
  );
};
