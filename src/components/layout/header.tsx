"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <header className="sticky mt-4 top-4 z-50 px-2 md:px-4 md:flex justify-center">
      <nav className="border border-border px-4 flex items-center backdrop-filter backdrop-blur-xl bg-[#FFFFFF] dark:bg-[#121212] bg-opacity-70 h-[50px] z-20 relative md:flex justify-between">
        <Link className="flex items-center justify-center mr-6" href="/">
          <span className="text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            FS
          </span>
        </Link>
        <div className="space-x-2 font-bold text-sm hidden md:flex">
          <Link
            className="h-8 items-center justify-center text-sm font-bold px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
            href="#experience"
          >
            Experience
          </Link>
          <Link
            className="h-8 items-center justify-center text-sm font-bold px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
            href="#education"
          >
            Education
          </Link>
          <Link
            className="h-8 items-center justify-center text-sm font-bold px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
            href="#works"
          >
            Works
          </Link>
          <Link
            className="h-8 items-center justify-center text-sm font-bold px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
            href="#certifications"
          >
            Certifications & Training
          </Link>
          <Link
            className="h-8 items-center justify-center text-sm font-bold px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
            href="#languages"
          >
            Language Skills
          </Link>
          <Link
            className="h-8 items-center border-l-[1px] pl-8 justify-center text-sm font-bold px-3 py-2 inline-flex text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
            href="#"
          >
            Get in touch
          </Link>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden absolute top-[54px] left-2 right-2 border border-border backdrop-filter backdrop-blur-xl bg-[#FFFFFF] dark:bg-[#121212] bg-opacity-70 z-10">
          <div className="flex flex-col p-4 space-y-4">
            <Link
              className="text-sm font-bold text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
              href="#experience"
              onClick={toggleMenu}
            >
              Experience
            </Link>
            <Link
              className="text-sm font-bold text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
              href="#education"
              onClick={toggleMenu}
            >
              Education
            </Link>
            <Link
              className="text-sm font-bold text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
              href="#works"
              onClick={toggleMenu}
            >
              Works
            </Link>
            <Link
              className="text-sm font-bold text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
              href="#certifications"
              onClick={toggleMenu}
            >
              Certifications & Training
            </Link>
            <Link
              className="text-sm font-bold text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
              href="#languages"
              onClick={toggleMenu}
            >
              Language Skills
            </Link>
            <Link
              className="text-sm font-bold text-secondary-foreground transition-opacity hover:opacity-70 duration-200"
              href="#contact"
              onClick={toggleMenu}
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
