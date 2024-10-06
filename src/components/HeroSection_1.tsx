"use client";
import React, { useState, useEffect } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function BackgroundBeamsWithCollisionDemo() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <BackgroundBeamsWithCollision>
      <div className="flex flex-col text-center justify-center h-[37rem]">
        <h2 className="pt-16 text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-black dark:text-white font-sans tracking-tight">
          Hello, I am Suprem Khatri.
        </h2>

        <div className="mx-auto">
          <TypewriterEffectSmooth
            key={currentIndex}
            words={[words[currentIndex]]}
          />
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}

const words = [
  {
    text: "Student!",
    className: "text-blue-500 dark:text-blue-500",
  },
  {
    text: "Programmer!",
    className: "text-green-500 dark:text-green-500",
  },
  {
    text: "Freelancer!",
    className: "text-red-500 dark:text-red-500",
  },
  {
    text: "Content Creator!",
    className: "text-purple-500 dark:text-purple-500",
  },
];
