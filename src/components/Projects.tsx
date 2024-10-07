"use client";
import { HoverEffect } from "./ui/card-hover-effect";

export default function CardHoverEffect() {
  return (
    
      <div
        id="project-section"
        className="flex dark:bg-blue-950/[0.2] flex-col items-center justify-center min-h-screen text-white"
      >
        <h2 className="text-7xl font-extrabold my-8">Projects</h2>
        <div className="flex flex-row items-center justify-center max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    
  );
}

export const projects = [
  {
    title: "To do App",
    description:
      "This project is built using JavaScript, along with basic HTML and pure CSS. The application allows users to store, delete, and edit their to-do items.",
    link: "https://supremkhatri.github.io/todotracker/",
    imageUrl: "/images/project/todo-icon.png",
  },
  {
    title: "Dictionary App",
    description: "This project leverages JavaScript, basic HTML, and Tailwind CSS to create a dynamic dictionary app. The application enables users to search for word definitions by utilizing a free dictionary API, providing a seamless and efficient word lookup experience.",
    link: "https://supremkhatri.github.io/dictionary/",
    imageUrl: "/images/project/dictionary.png",
  },
  {
    title: "Weather App",
    description: "This app is developed using JavaScript, HTML, and pure CSS to deliver real-time weather updates. By integrating a free weather API, the application provides users with current weather conditions, forecasts, and other relevant details for any location.",
    link: "https://supremkhatri.github.io/weatherdetails/",
    imageUrl: "/images/project/weather_app_icon_.jpg",
  },
  {
    title: "Scissor-Paper-Rock",
    description: "This game is developed using JavaScript, HTML, and pure CSS to bring the classic scissor-paper-rock game to life. Users can challenge a bot in this interactive app, with the game automatically determining the winner after each round.",
    link: "https://supremkhatri.github.io/scissorpaperrock/",
    imageUrl: "/images/project/rock-paper-scissor.jpg",
  },
];
