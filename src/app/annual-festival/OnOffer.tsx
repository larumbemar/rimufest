import React from "react";
import { LinkButton } from "~/components/LinkButton";

export const offers = [
  "Chamber Concert Series: Engage with performances by professional musicians.",
  "Daily Chamber Coaching: Receive personalized guidance from expert coaches in daily sessions.",
  "Chamber Music Masterclasses: Hone your performance skills, improve stage presence, and practice public speaking.",
  "Alexander Technique: Learn to care for your body and optimize your posture for better performance.",
  "Public Speaking and Theatre Spots: Practice introducing your music and speaking with confidence in front of an audience.",
  "Pop-up Concerts: Take the music into the community with informal performances around Tauranga.",
  "Faculty and Student Concerts: Observe and learn from performances by faculty and fellow students.",
  "Social Time: Shared breaks to meet new people and make friends across the festival.",
  "Orchestra Sessions: Participate in full ensemble rehearsals to deepen your understanding of the music.",
];

export const OnOffer = () => {
  return (
    <div className="flex flex-col gap-4 lg:w-3/5">
      <p className="text-sm">WHY JOIN US THIS SUMMER</p>
      <ul className="flex flex-col gap-1 list-disc pl-5 ">
        {offers.map((offer) => (
          <li key={offer}>{offer}</li>
        ))}
      </ul>

      <LinkButton href="/learn-more">learn more</LinkButton>

      <p className="text-sm mt-4">SCHOLARSHIPS</p>
      <p className="mt-1">
        We offer a limited number of need-based scholarships that can cover up
        to the full cost of the program. If you are in genuine need of
        financial assistance, please indicate this in your application form.
        You will be asked to provide an outline of why this scholarship would
        be beneficial to your child.
      </p>
    </div>
  );
};
