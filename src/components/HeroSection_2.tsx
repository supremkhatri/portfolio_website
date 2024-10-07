"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export default function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl font-mono px-4 md:text-2xl lg:text-3xl dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        A passionate learner with a strong drive for problem-solving. 
        Always eager to take on new challenges, I continuously seek opportunities to  <br/>
        <Highlight className=" dark:text-white">
        Learn and Grow.
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
