import Image from "next/image";
import { FeatureBox } from "~/components/FeatureBox";
import { LinkButton } from "~/components/LinkButton";
import { PageHero } from "~/components/PageHero/PageHero";

const offers = [
  "Chamber Concert Series: Engage with performances by professional musicians.",
  "Daily Chamber Coaching: Receive personalized guidance from expert coaches in daily sessions.",
  "Chamber Music Masterclasses: Hone your performance skills, improve stage presence, and practice public speaking.",
  "Alexander Technique: Learn to care for your body and optimize your posture for better performance.",
  "Orchestra Sessions: Participate in full ensemble rehearsals to deepen your understanding of the music.",
];

const About = () => {
  return (
    <>
      <PageHero title={"About"} image={"/about.jpeg"} />
      <div className="z-10 flex h-fit w-screen flex-col items-center gap-12  justify-center bg-white px-6 py-32 lg:px-8 ">
        <div className="flex lg:flex-row flex-col-reverse items-centerjustify-center mt-24 gap-8  lg:w-fit w-[300px] md:w-[400px]">
          <div className="relative w-[300px] md:w-[400px] h-[300px] md:h-[400px] overflow-hidden rounded-full">
            <Image
              alt="cofounders"
              layout="fill"
              className="object-cover"
              src={"/about/cofounders.jpg"}
            />
          </div>

          <p className="md:text-lg lg:max-w-96">
            RimuFest Chamber Music Festival, a non-profit organization
            co-founded by Amelia Taylor and Alejandro Larumbe, offers two annual
            programs in Tauranga: a four-day holiday program and a six-day
            summer program. Designed for ages 7-18, these inclusive programs
            foster musical collaboration, helping students develop essential
            life skills such as communication, teamwork, goal-setting, and
            organization.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-2 mt-24 lg:mx-24">
          <FeatureBox
            title="Annual Festival"
            href="annual-festival"
            captions={[
              "Our flagship festival is a six-day summer program for beginner to advanced string players. It offers a unique experience where students participate in chamber ensembles, orchestra, Alexander Technique sessions, coaching with high-caliber national and international musicians, rehearsals, masterclasses, and performance opportunities. The program also fosters the development of essential life skills, such as effective communication, teamwork, goal-setting, and organizational skills.",
            ]}
            imageSrc="/annual-portrait.jpeg"
            borderColor="blue"
            framePosition="up"
          />
          <div className="mt-48">
            <FeatureBox
              title="Holiday Program"
              href="annual-festival"
              captions={[
                "Our Holiday Program is a mini version of the summer program: a four-day opportunity for string players to enhance their chamber music skills, attend technique and ensemble classes, and conclude with a concert.",
              ]}
              imageSrc="/holiday.jpeg"
              borderColor="purple"
              framePosition="down"
            />
          </div>
        </div>
        <p className="lg:max-w-96 mt-24">
          Both programs are open to all levels and abilities. Students are
          grouped with others at a similar level and provided with appropriately
          challenging music. Violinists also have the option to customize their
          experience by including violin and/or viola studies.
        </p>

        <LinkButton href={"/learn-more"}>learn more</LinkButton>

        {/* <p className="lg:max-w-96">
          In addition to these programs, RimuFest hosts a captivating concert
          series that showcases and promotes both local and national talent.
          These concerts feature works by New Zealand and international
          composers, celebrating diverse voices and cultures. The series
          contributes to the growth and appreciation of the arts in the Bay of
          Plenty community, and students may attend any concert free of charge
          as part of their musical development.
        </p> */}
      </div>
    </>
  );
};

export default About;
