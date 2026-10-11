import Image from "next/image";
import React from "react";
import { PageHero } from "~/components/PageHero/PageHero";

const learnMore = [
  {
    title: "Ensemble/Orchestra",
    image: "/learn-more/orchestra.jpg",
    paragraphs: [
      "During RimuFest, students will participate in a large ensemble. They will be divided into sections, playing the same music together to foster teamwork, synchronization, and unified sound. Ensemble practice helps develop listening skills, musicality, and following a conductor, while cultivating collaboration as students work towards a shared performance goal.",
      "These experiences prepare students for their chamber groups, where they will take on leadership roles and perform independently.",
    ],
  },
  {
    title: "Chamber Music",
    image: "/learn-more/chamber.jpg",
    paragraphs: [
      "At RimuFest, each student will be placed in a small chamber group of 2-5 players, where they will be the sole performer of their part. Students are expected to learn their parts beforehand to ensure cohesive rehearsals. Dedicated coaching sessions with RimuFest faculty help them refine their ensemble skills.",
      "Chamber music is highly rewarding, refining fundamental skills like rhythm, pitch, timing, and dynamics. It fosters creativity, coordination, and memorization, while also nurturing social and emotional development. It offers a comprehensive musical experience that enhances both individual musicianship and group performance.",
    ],
  },
  {
    title: "Masterclass",
    image: "/learn-more/masterclass.jpg",
    paragraphs: [
      "Masterclasses are an integral part of the RimuFest programme, held at the end of each day. Students perform in front of their peers and faculty, receiving constructive feedback on their performance. The masterclass environment is supportive, allowing students to learn from each other's performances and receive helpful feedback from coaches to take to their next practice session, providing rehearsal techniques and guidance for improvement.",
      "Beyond music, students also learn stage presence: how to walk on and off stage, engage with the audience, and use effective body language. These skills help them become more expressive, polished performers, enhancing both confidence and overall presentation. The masterclass experience not only refines musical abilities but also nurtures a well-rounded stage persona, preparing students for future performances.",
    ],
  },
  {
    title: "Rehearsal vs Coaching",
    image: "/learn-more/coaching.jpg",
    paragraphs: [
      "A rehearsal is a practice session where students come together without a teacher to work on their music, focusing on teamwork, communication, and interpretation. Each student is responsible for their part while actively listening and responding to others.",
      "A coaching session is led by an experienced teacher who provides feedback to refine the performance. Coaches offer insights into musicality, interpretation, and technique, guiding the group toward a more cohesive sound. Unlike rehearsals, where the focus is on the collaborative efforts of the group, coaching sessions are more instructional and led by the teacher.",
      "Both rehearsals and coaching are vital to students' growth in chamber music—rehearsals encourage independence and collaboration, while coachings provide professional guidance to elevate their musical skills. Together, these elements contribute to a well-rounded and enriching chamber music experience at RimuFest.",
    ],
  },
  {
    title: "Viola for Violinists",
    image: "/learn-more/viola.jpg",
    paragraphs: [
      "RimuFest offers violinists the chance to explore the viola, even with little to no prior experience. The viola plays a crucial role in ensemble settings, acting as the link between melody and harmony. Violinists can easily adapt to the viola's deep, warm sound due to similar playing techniques, enhancing their overall musicianship.",
      "Learning the viola brings multiple benefits: it improves violin technique, and gives students new opportunities to experience different musical roles in both chamber and orchestral settings.",
    ],
  },
  {
    title: "Alexander Technique",
    image: "/learn-more/alexander.jpg",
    paragraphs: [
      "Alexander Technique sessions help students notice how they sit, stand, and move while they play. By easing unnecessary tension and finding a more balanced posture, players can perform with greater ease, stamina, and freedom.",
      "The classes are practical and gentle. Students learn simple ways to look after their bodies through long rehearsals and on stage, skills they can take home to everyday practice.",
    ],
  },
  {
    title: "Public Speaking and Theatre Spots",
    image: "/learn-more.jpeg",
    paragraphs: [
      "Alongside the music, students practice being on stage: introducing a piece, speaking clearly to an audience, and holding a room with confidence. Short theatre-style spots give everyone a turn to try this in a supportive group.",
      "Learning how to walk on, speak, and acknowledge an audience makes a performance feel complete. It also builds public-speaking confidence that reaches well beyond the festival.",
    ],
  },
  {
    title: "Pop-up Concerts",
    image: "/gallery/2022/2022-6.jpeg",
    paragraphs: [
      "Groups take the music out into the community with informal pop-up concerts. These short performances let students share what they have been working on in everyday places, with neighbours and local audiences.",
      "Playing outside the rehearsal room is exciting, and a little brave. It gives students a real sense of why chamber music matters: bringing people together through live performance.",
    ],
  },
  {
    title: "Faculty and Student Concerts",
    image: "/home/performance.jpeg",
    paragraphs: [
      "Through the week, students hear faculty and fellow students in concert. Watching a performance up close is part of the learning: phrasing, ensemble, and stagecraft become easier to understand when you can see them happen.",
      "These concerts are a chance to listen carefully, ask questions, and borrow ideas for your own group. At RimuFest, observing is as much a part of the programme as playing.",
    ],
  },
  {
    title: "Time to Meet People",
    image: "/gallery/2022/2022-3.jpeg",
    paragraphs: [
      "The festival leaves room to meet people. Shared breaks and the time between rehearsals are when students get to know musicians from other schools, towns, and chamber groups.",
      "Friendships are part of why students come back. Playing together is easier, and more fun, when there is time to talk, laugh, and feel part of the group.",
    ],
  },
];

interface LearnMoreItemProps {
  item: {
    title: string;
    image: string;
    paragraphs: string[];
  };
}

const LearnMoreItem: React.FC<LearnMoreItemProps> = ({ item }) => (
  <div>
    <div className="relative w-full aspect-10/12">
      <Image alt={item.title} fill className="object-cover" src={item.image} />
    </div>
    <div className="pl-6 mt-8 border-l border-gray-200">
      <h2 className="font-bold">{item.title}</h2>
      <div className="mt-4">
        {item.paragraphs.map((paragraph, idx) => (
          <p className="text-sm" key={idx}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </div>
);

export default function LearnMore() {
  return (
    <>
      <PageHero title="Learn more" image={"/annual.jpeg"} />

      <div className="lg:mx-24 my-48">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 mx-6 md:mx-24 lg:mx-0 mt-8">
          <div className="flex flex-col gap-24">
            {learnMore.slice(0, 5).map((item) => (
              <LearnMoreItem key={item.title} item={item} />
            ))}
          </div>
          <div className="flex flex-col gap-24 lg:mt-32">
            {learnMore.slice(5).map((item) => (
              <LearnMoreItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
