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
            to all students. A limited number of scholarships were available for
            those who would not have been able to attend the programme without
            financial assistance. These were full or partial and open to all
            applicants.
          </li>
          <li>
            Priority was given to students applying from outside Tauranga due to
            the additional costs associated with travel and accommodation.
            Tauranga-based students were still welcome to apply and were
            considered if funding permitted.
          </li>
        </ul>
      </p>
      <p className="text-sm mt-4">PRE-FORMED GROUPS</p>

      <p className="mt-1 flex flex-col gap-1">
        <ul className="flex flex-col gap-1 list-disc pl-5 ">
          <li>
            Pre-formed groups were welcome. Each member submitted an individual
            registration form, and the group could share one audition video.
          </li>
          <li>
            The video featured a clip from one of the group’s performances or
            rehearsals.
          </li>
        </ul>
      </p>
    </div>
  );
};
