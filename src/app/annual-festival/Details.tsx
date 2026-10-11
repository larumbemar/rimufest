import React from "react";
import { LinkButton } from "~/components/LinkButton";

export const Details = () => {
  return (
    <div className="flex flex-col leading-none gap-1 lg:w-2/5 text-2xl">
      <span className="font-bold">Tauranga, NZ</span>
      <span className="italic font-bold">January 8th - 13th, 2027</span>
      <span className="text-xl">
        Applications open:{" "}
        <span className="font-normal italic text-nowrap">
          October 14th, 2026
        </span>
      </span>
      <span className="text-xl">
        Applications close:{" "}
        <span className="font-normal italic text-nowrap">
          November 8th, 2026
        </span>
      </span>
      <span className="text-xl">
        Music sent:{" "}
        <span className="font-normal italic">
          Late November / early December
        </span>
      </span>

      <LinkButton href="https://forms.gle/mAe8FQaPFMAB9ez47">
        apply now
      </LinkButton>
    </div>
  );
};
