import React from "react";
import type { NextPage } from "next"; // Import NextPage type
import { BlurImage } from "~/components/BlurImage";
import { artists } from "~/lib/artists";
import type { Artists } from "~/lib/artists";
import Link from "next/link";
import { RimuFestLogo } from "~/components/PageHero/RimufestLogo";

export const dynamicParams = false;

export async function generateStaticParams() {
  const paths = Object.keys(artists).map((key) => ({
    id: key,
  }));

  return paths;
}

const Artist: NextPage<{ params: { id: Artists } }> = ({ params }) => {
  const id = params.id;

  const artist = artists[id];

  return (
    <>
      <div className="z-20 w-full flex flex-col items-center gap-4 pt-20 mb-8 md:px-10 lg:px-16">
        <Link href={"/"}>
          <RimuFestLogo />
        </Link>
      </div>

      <div className="md:w-[750px] lg:w-[900px] p-8 md:mx-auto mb-20 ">
        <div className="flex flex-col gap-8 md:justify-between md:flex-row">
          <div className="md:self-end">
            <div className="text-5xl font-extrabold">{artist.name}</div>
            {artist.title && <p className="text-3xl">{artist.title}</p>}
            <p className="text-2xl">{artist.instrument}</p>
            {artist.website && (
              <a
                href={artist.website}
                className="text-xl text-blue-500 hover:underline"
              >
                {artist.website}
              </a>
            )}
          </div>

          <div className="relative w-auto md:h-[450px] lg:h-[500px] aspect-10/12">
            <BlurImage
              fill
              src={`/artists/${artist.image}.jpeg`}
              alt={artist.name}
              className="object-cover"
            />
          </div>
        </div>
        {artist.bio && (
          <div className="mt-4">
            {artist.bio.map((paragraph, index) => (
              <div key={index} className="text-md">
                {paragraph}
              </div>
            ))}
          </div>
        )}{" "}
      </div>
    </>
  );
};

export default Artist;
