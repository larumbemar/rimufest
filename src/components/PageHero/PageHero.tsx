import Link from "next/link";
import { BlurImage } from "~/components/BlurImage";
import { RimuFestLogo } from "./RimufestLogo";

type Props = {
  title: string;
  image: string;
};

export const PageHero = ({ title, image }: Props) => {
  return (
    <div className="z-20 w-full flex flex-col items-center gap-4 pt-20 md:px-10 lg:px-16">
      <Link href={"/"}>
        <RimuFestLogo />
      </Link>
      <h1 className="py-12 text-4xl mx-4 md:px-0 md:text-6xl">{title}</h1>
      <div className="relative w-full aspect-16/10">
        <BlurImage alt="preloaded" fill className="object-cover" src={image} />
      </div>
    </div>
  );
};
