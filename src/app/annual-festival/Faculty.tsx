import React from "react";
import { FeatureBox } from "~/components/FeatureBox";
import { artists } from "~/lib/artists";
import type { Artist } from "~/lib/artists";

const facultyMembers: Array<{ artist: Artist; borderColor: string; framePosition: "up" | "down" }> = [
  { artist: artists["amelia-taylor"], borderColor: "green", framePosition: "up" },
  { artist: artists["kate-ellingham-hunt"], borderColor: "blue", framePosition: "down" },
  { artist: artists["jesbery-hartono-hall"], borderColor: "purple", framePosition: "up" },
  { artist: artists["donald"], borderColor: "amber", framePosition: "down" },
  { artist: artists["maria-mo"], borderColor: "pink", framePosition: "up" },
  // { artist: artists["alejandro-larumbe"], borderColor: "red", framePosition: "down" },
];

export const Faculty = () => {
  return (
    <div className="my-12 w-full lg:px-24">
      <h2 className="text-2xl font-bold ">Faculty</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {facultyMembers.map(({ artist, borderColor, framePosition }) => (
          <FeatureBox
            key={artist.path}
            imageSrc={`/artists/${artist.image}.jpeg`}
            captions={[artist.instrument]}
            href={`/artists/${artist.path}`}
            title={artist.name}
            borderColor={borderColor}
            framePosition={framePosition}
          />
        ))}
      </div>
    </div>
  );
};
