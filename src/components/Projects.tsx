"use client";
import { HoverEffect } from "./ui/card-hover-effect";
export const projects = [
  {
    title: "ECAST Website",
    description:
      "This is a college club webiste that I worked on with the college memebers using React.Js",
    link: "https://ecast.tcioe.edu.np/",
    imageUrl: "/images/project/ecast.jpg",
  },
  {
    title: "Event Management Solution",
    description:
      "This project is built on Next.js | TypeScript | Tailwind CSS | DaisyUI | Accenterity UI. It is a event management web app that showcases ongoing and past events with details like presenters, stats, sponsors, and more",
      link: "https://event-management-frontend-nine-topaz.vercel.app/",
      imageUrl: "/images/project/event_management.jpeg",
  },
  {
    title: "Dictionary App",
    description:
      "This project leverages JavaScript, basic HTML, and Tailwind CSS to create a dynamic dictionary app. The application enables users to search for word definitions by utilizing a free dictionary API, providing a seamless and efficient word lookup experience.",
    link: "https://supremkhatri.github.io/dictionary/",
    imageUrl: "/images/project/dictionary.png",
  },
];

export default function CardHoverEffect() {
  return (
    <div
      id="project-section"
      className="flex bg-customGray flex-col items-center justify-center min-h-screen text-white"
    >
      <h2 className="text-7xl text-white font-extrabold my-8">Projects</h2>
      <div className="flex flex-row items-center justify-center max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

