"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef } from "react";
import { cn } from "~/lib/utils";

interface FeatureBoxProps {
  imageSrc: string;
  title: string;
  captions: string[];
  borderColor: string;
  href: string;
  framePosition?: "up" | "down";
  imagePosition?: string;
}

const borderColorMap: Record<string, string> = {
  green: "border-green-500",
  blue: "border-blue-500",
  purple: "border-purple-500",
  amber: "border-amber-500",
  pink: "border-pink-500",
  red: "border-red-500",
  yellow: "border-yellow-500",
  indigo: "border-indigo-500",
  teal: "border-teal-500",
  orange: "border-orange-500",
};

export const FeatureBox: React.FC<FeatureBoxProps> = ({
  imageSrc,
  title,
  captions,
  borderColor,
  href,
  framePosition = "up",
  imagePosition,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate offset from center (normalized to -1 to 1)
    const offsetX = (e.clientX - centerX) / (rect.width / 2);
    const offsetY = (e.clientY - centerY) / (rect.height / 2);
    
    // Limit the movement (max 15px in each direction)
    const maxOffset = 15;
    setMousePosition({
      x: offsetX * maxOffset,
      y: offsetY * maxOffset,
    });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div className="group w-full px-8 py-6">
      <Link href={href} className="block">
        <div 
          ref={containerRef}
          className="relative"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <span
            className={cn(
              "z-10 absolute left-[20px] block h-full w-[calc(100%-40px)] border-[3px] border-solid md:left-[7%] md:w-[86%] transition-transform duration-300 ease-out",
              framePosition === "up" 
                ? "top-[-26px] md:top-[-2.08vw]" 
                : "bottom-[-26px] md:bottom-[-2.08vw]",
              borderColorMap[borderColor] || "border-gray-500"
            )}
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            }}
          />
          <div className="relative w-full aspect-10/12">
            <Image
              alt="project-box"
              fill
              className={cn("object-cover", imagePosition)}
              src={imageSrc}
            />
          </div>
        </div>
        <div className="relative mt-10 pl-4">
          <span className="absolute inset-0 w-[2px] bg-gray-200 before:absolute before:inset-0 before:h-0 before:bg-gray-400 before:transition-all before:duration-500 before:ease-in-out group-hover:before:h-full group-hover:before:bg-gray-700" />

          <h2 className="text-lg font-bold">{title}</h2>
          <p className="mt-5">
            {captions.map((caption, index) => (
              <span key={index}>
                {caption}
                <br />
              </span>
            ))}
          </p>
        </div>
      </Link>
    </div>
  );
};

// const FeatureBox = ({}) => {
//   return (
//     <div className="group w-full px-8 py-6">
//       <a>
//         <div className="relative">
//           <span className="z-3 absolute left-[20px] top-[-26px] block h-full w-[calc(100%-40px)] border-[3px] border-solid border-red-500" />
//           <Image
//             alt="project-box"
//             width={960}
//             height={1167}
//             className="h-auto w-full"
//             src={`/artists/jesbery.jpeg`}
//           />
//         </div>
//         <div className="relative mt-10 pl-4">
//           <span className="absolute inset-0 w-[2px] bg-gray-200 before:absolute before:inset-0 before:h-0 before:bg-gray-400 before:transition-all before:duration-500 before:ease-in-out group-hover:before:h-full group-hover:before:bg-gray-700" />

//           <h2 className="text-lg font-bold">Festival 2020</h2>
//           <p className="mt-5">
//             This is the caption for this thing. <br /> There could be breaks or
//             it could be just a whole sausage of things that wraps eventually
//             hopefully
//           </p>
//         </div>
//       </a>
//     </div>
//   );
// };

// export default FeatureBox;
