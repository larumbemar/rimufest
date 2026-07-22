import React from "react";
import { FeatureBox } from "~/components/FeatureBox";
import { artists } from "~/lib/artists";
import type { Artist } from "~/lib/artists";

// Faculty not yet confirmed for this event; keep list empty until announced.
const facultyMembers: Array<{ artist: Artist; borderColor: string; framePosition: "up" | "down" }> = [];

export const Faculty = () => {
  if (facultyMembers.length === 0) return null;

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
