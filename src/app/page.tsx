'use client'
import Navbar from "@/components/Navbar";
import HeroSection_1 from "@/components/HeroSection_1";
import HeroSection_2 from "@/components/HeroSection_2";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Timeline from "@/components/Timeline";
import Footer from "@/components/FooterSection";
import { Merriweather } from "next/font/google";
import { useEffect } from 'react';




export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    <main className={merri.className}>
      <Navbar className="border border-white " />
      <HeroSection_1 />
      <HeroSection_2 />
      <Skills />
      <Projects />
      <Experience />
      <Timeline />
      <Footer />
    </main>
  
  );
}

const merri = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});
