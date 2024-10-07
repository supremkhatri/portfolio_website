"use client";
import React from "react";
import Link from "next/link";

export default function Navbar({}: { className?: string }) {
  return (
    <div className="mt-2 navbar fixed top-0 w-full z-50 rounded-full dark:bg-gray-900">
      <div className="navbar-start">
        <div className="avatar mx-4 ">
          <div className="w-11 rounded-full">
            <img src="https://avatars.githubusercontent.com/u/128308240?v=4" />
          </div>
        </div>
        <Link
          href={"/"}
          className=" dark:hover:text-gray-500 text-white text-sm lg:text-xl font-bold tracking-wide"
        >
          {" "}
          Suprem Khatri
        </Link>
      </div>

      <div className="navbar-end lg:hidden">
        {" "}
      
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle focus:outline-none "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content font-sans mt-3 w-52 p-2 dark:bg-gray-800 text-white rounded-lg shadow-lg z-50"
          >
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"#skill-section"}>Skills</Link>
            </li>
            <li>
              <Link href={"#project-section"}>Projects</Link>
            </li>
            <li>
              <Link href={"#experience-section"}>Experience</Link>
            </li>
            <li>
              <Link href={"#education-section"}>Education</Link>
            </li>
            <li>
              <Link href={"#contact-section"}> Contact </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Horizontal menu for large screens */}
      <div className="navbar-end hidden lg:flex">
        {" "}
        {/* Hidden on small screens */}
        <ul className=" text-lg font-sans menu menu-horizontal p-0 space-x-4 text-white">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"#skill-section"}>Skills</Link>
          </li>
          <li>
            <Link href={"#project-section"}>Projects</Link>
          </li>
          <li>
            <Link href={"#experience-section"}>Experience</Link>
          </li>
          <li>
            <Link href={"#education-section"}>Education</Link>
          </li>
          <li>
              <Link href={"#contact-section"}> Contact </Link>
            </li>
        </ul>
      </div>
    </div>
  );
}
