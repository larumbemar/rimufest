import React from "react";
import { LinkButton } from "~/components/LinkButton";

export const offers = [
  "Chamber Concert Series: Engage with performances by professional musicians.",
  "Daily Chamber Coaching: Receive personalized guidance from expert coaches in daily sessions.",
  "Chamber Music Masterclasses: Hone your performance skills, improve stage presence, and practice public speaking.",
  "Alexander Technique: Learn to care for your body and optimize your posture for better performance.",
  "Orchestra Sessions: Participate in full ensemble rehearsals to deepen your understanding of the music.",
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

      <p className="mt-2">
        We offer a limited number of need-based scholarships that can cover up
        to the full cost of the program. If you would like to apply for
        financial assistance, please indicate this in your application.
      </p>
    </div>
  );
};
