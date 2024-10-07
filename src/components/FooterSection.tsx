'use client'

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGmail,

} from "@tabler/icons-react";

export default function footer () {
    return(

        <footer className="footer footer-center dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-950 text-base-content rounded p-10">
  <nav className="grid grid-flow-col text-5xl font-extrabold text-white">
        Let&apos;s Connect
  </nav>
  <div 
  id="contact-section"
  className="flex items-center justify-center h-[3rem] w-full">
      <FloatingDock     
        items={links}
      />
    </div>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Suprem Khatri</p>
  </aside>
</footer>
)
}

const links = [
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full  dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/profile.php?id=100089340725365",
    },
 
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full  dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/supremkhatri/?hl=en",
    },
    {
      title: "Linked-In",
      icon: (
        <IconBrandLinkedin className="h-full w-full  dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/suprem-khatri-96ab3125a/",
    },
    {
      title: "Gmail",
      icon: (
        <IconBrandGmail className="h-full w-full  dark:text-neutral-300" />
      ),
      href: "mailto: suprem.khatri708@gmail.com",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full  dark:text-neutral-300" />
      ),
      href: "https://x.com/SupremKhatri",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full  dark:text-neutral-300" />
      ),
      href: "https://github.com/supremkhatri",
    },
  ];