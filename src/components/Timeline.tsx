import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function TimelineDemo() {
  return (
    <div id="education-section" className="w-full">
      <Timeline data={data} />
    </div>
  );
}

const data = [
  {
    title: "2023-2026",
    content: (
      <div>
        <div className="flex flex-row mb-8">
          <div className="avatar mx-4 ">
            <div className="w-11 rounded-md">
              <img src="images/education/thapathali-campus.jpg" />
            </div>
          </div>
          <h2 className="text-3xl text-white font-bold">Thapathali Campus</h2>
        </div>
        <p className=" dark:text-neutral-200 sm:text-lg text-sm font-normal mb-8 mx-6">
          I&apos;m currently studying Bachelors in Computer Engineering at
          Thapathali Campus. The Bachelor&apos;s in Computer Engineering at
          Thapathali Campus covers both hardware and software, with a focus on
          programming, electronics, and networking, along with industry-relevant
          projects and seminars. This program helps me refine my technical
          skills and enhance my problem-solving abilities.
        </p>
      </div>
    ),
  },
  {
    title: "2020-2022",
    content: (
      <div>
        <div className="flex flex-row mb-8">
          <div className="avatar mx-4 ">
            <div className="w-11 rounded-md">
              <img src="images/education/sainik-awasiya-college.png" />
            </div>
          </div>
          <h2 className="text-3xl text-white font-bold">Sainik Awasiya Mahavidyalaya</h2>
        </div>
        <p className=" dark:text-neutral-200 sm:text-lg text-sm font-normal mb-8 mx-6">
          I completed my +2 in Science from Sainik Awasiya Mahavidyalaya, where
          I gained a solid academic foundation and developed essential life
          skills in a nurturing environment. The college&apos;s culture
          encouraged both personal and academic growth, preparing me for future
          challenges.
        </p>
      </div>
    ),
  },
  {
    title: "2006-2019",
    content: (
      <div>
        <div className="flex flex-row mb-8">
          <div className="avatar mx-4 ">
            <div className="w-11 rounded-md">
              <img src="images/education/noble-school.jpg" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white">Noble School</h2>
        </div>
        <p className="dark:text-neutral-200 sm:text-lg text-sm font-normal mb-8 mx-6">
          I completed my primary education at Noble School, located near my
          home. It was here that I was first introduced to computers and learned
          basic programming in QBasic, sparking my interest in technology from
          an early age.
        </p>
      </div>
    ),
  },
];
