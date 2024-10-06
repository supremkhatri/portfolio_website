import Navbar from "@/components/Navbar";
import HeroSection_1 from "@/components/HeroSection_1";
import HeroSection_2 from "@/components/HeroSection_2";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Timeline from "@/components/Timeline";
import Footer from "@/components/FooterSection";
import { Merriweather } from "next/font/google";


export default function Home() {
  return (
    <main className={playfair.className}>
      <Navbar className="border border-white" />
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

const playfair = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700"],
});
