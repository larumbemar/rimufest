import React from "react";
import { LinkButton } from "~/components/LinkButton";

export const offers = [
  "Chamber Concert Series: Engage with performances by professional musicians.",
  "Daily Chamber Coaching: Receive personalized guidance from expert coaches in daily sessions.",
  "Chamber Music Masterclasses: Hone your performance skills, improve stage presence, and practice public speaking.",
  "Viola for violinists: Violinists also have the exciting option to explore both violin and viola during the programme!",
];

export const OnOffer = () => {
  return (
    <div className="flex flex-col gap-4 lg:w-3/5">
      <p className="text-sm">WHAT&apos;S INCLUDED</p>
      <ul className="flex flex-col gap-1 list-disc pl-5 ">
        {offers.map((offer) => (
          <li key={offer}>{offer}</li>
        ))}
      </ul>

      <LinkButton href="/learn-more">learn more</LinkButton>

      <p className="text-sm mt-4">SCHOLARSHIPS</p>

      <p className="mt-1 flex flex-col gap-1">
        <ul className="flex flex-col gap-1 list-disc pl-5 ">
          <li>
            RimuFest is committed to making chamber music education accessible
            to all students. A limited number of scholarships are available for
            those who would not be able to attend the programme without
            financial assistance. These may be full or partial and are open to
            all applicants.
          </li>
          <li>
            Priority will be given to students applying from outside Tauranga
            due to the additional costs associated with travel and
            accommodation. Tauranga-based students are still welcome to apply
            and will be considered if funding permits.
          </li>
          <li>
            If you are experiencing genuine financial hardship, you may indicate
            this on your registration form to be considered for a scholarship.
          </li>
        </ul>
      </p>
      <p className="text-sm mt-4">PRE-FORMED GROUPS WELCOME!</p>

      <p className="mt-1 flex flex-col gap-1">
        <ul className="flex flex-col gap-1 list-disc pl-5 ">
          <li>
            Each member must submit an individual registration form, but you may
            all use the same audition video.
          </li>
          <li>
            The video should feature a clip from one of your group’s
            performances or rehearsals.
          </li>
        </ul>
      </p>
    </div>
  );
};
