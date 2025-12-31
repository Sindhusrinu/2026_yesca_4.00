"use client";
import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Roboto_Condensed, Poppins } from "next/font/google";
import RevealAnimation from "../AnimationsGsap.jsx/RevealAnimation";

// Roboto Condensed Black Italic
const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "900",
  style: "italic",
  variable: "--font-roboto-condensed",
});

// Poppins Regular
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);
  const topLineRef = useRef(null);
  const middleLineRef = useRef(null);
  const bottomLineRef = useRef(null);

  useEffect(() => {
    gsap.to(topLineRef.current, {
      y: isMenuOpen ? 6 : 0,
      rotation: isMenuOpen ? 45 : 0,
      transformOrigin: "center",
      duration: 0.3,
      ease: "power2.inOut",
    });

    gsap.to(middleLineRef.current, {
      opacity: isMenuOpen ? 0 : 1,
      duration: 0.3,
      ease: "power2.inOut",
    });

    gsap.to(bottomLineRef.current, {
      y: isMenuOpen ? -6 : 0,
      rotation: isMenuOpen ? -45 : 0,
      transformOrigin: "center",
      duration: 0.3,
      ease: "power2.inOut",
    });

    gsap.to(menuRef.current, {
      height: isMenuOpen ? "auto" : 0,
      duration: 0.3,
      ease: "power2.inOut",
    });
  }, [isMenuOpen]);

  const navLinksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerStart = window.innerHeight * 0.8;
      const triggerEnd = window.innerHeight * 1.2;
      const scrollY = window.scrollY;

      // Calculate progress from 0 to 1 between triggerStart and triggerEnd
      let progress = 0;
      if (scrollY >= triggerStart && scrollY <= triggerEnd) {
        progress = (scrollY - triggerStart) / (triggerEnd - triggerStart);
      } else if (scrollY > triggerEnd) {
        progress = 1;
      }

      // Update each nav link color smoothly
      navLinksRef.current.forEach((link, index) => {
        if (link) {
          // For all nav links and buttons - text colors (indices 0-13)
          gsap.to(link, {
            color: progress > 0.5 ? "#1e3a8a" : "#ffffff",
            duration: 0.3,
            overwrite: "auto",
          });

          // For "Talk to us" button (index 6 - desktop) - background color
          if (index === 6) {
            gsap.to(link, {
              backgroundColor: progress > 0.5 ? "#1e3a8a" : "#ffffff",
              duration: 0.3,
              overwrite: "auto",
            });
          }

          // For mobile "Talk to us" button (index 13) - background color
          if (index === 13) {
            gsap.to(link, {
              backgroundColor: progress > 0.5 ? "#1e3a8a" : "#ffffff",
              duration: 0.3,
              overwrite: "auto",
            });
          }
        }
      });

      setScrolled(progress > 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const router = useRouter();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const leftDoor = document.querySelector(".door.left");
    const rightDoor = document.querySelector(".door.right");

    // Close doors
    leftDoor.classList.add("door-close-left");
    rightDoor.classList.add("door-close-right");

    setTimeout(() => {
      router.push(href);

      setTimeout(() => {
        leftDoor.classList.remove("door-close-left");
        rightDoor.classList.remove("door-close-right");

        leftDoor.classList.add("door-open-left");
        rightDoor.classList.add("door-open-right");

        setTimeout(() => {
          leftDoor.classList.remove("door-open-left");
          rightDoor.classList.remove("door-open-right");
        }, 1000);
      }, 400);
    }, 1000);
  };

  return (
    <header className="w-full px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center text-white backdrop-blur-md fixed top-0 left-0 z-50">
      {/* LEFT PART - Logo (UNTOUCHED) */}
      <div className="flex items-center flex-shrink-0">
        <RevealAnimation />
      </div>

      {/* MIDDLE PART - Navigation Menu */}
      <nav className="hidden lg:flex space-x-6 xl:space-x-8 font-medium text-sm lg:text-base font-poppins flex-1 justify-center">
        {[
          ["/Home", "Home"],
          ["/Products", "Products"],
          ["/Services/ItServices", "Services"],
          ["/About", "About Us"],
          ["/Contact", "Contact Us"],
        ].map(([href, label], index) => (
          <a
            key={href}
            ref={(el) => (navLinksRef.current[index] = el)}
            href={href}
            onClick={(e) => handleNavClick(e, href)}
            className={`cursor-pointer transition-all duration-150 active:scale-90 ${
              scrolled ? "hover:text-blue-600" : "hover:text-blue-300"
            }`}
            style={{ color: "#ffffff" }}
          >
            {label}
          </a>
        ))}
      </nav>

      {/* RIGHT PART - CTA Buttons */}
      <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
        {/* <button
          onClick={() => handleNavClick({}, "/")}
          ref={(el) => (navLinksRef.current[4] = el)}
          className="font-semibold px-4 xl:px-5 py-2 rounded-full transition-all duration-300 text-xs sm:text-sm lg:text-sm"
          style={{
            color: "#ffffff",
            borderColor: "#ffffff",
            borderWidth: "2px",
          }}
        >
          Product-first tech studio0
        </button> */}
        <button
          onClick={() => handleNavClick({}, "/Contact")}
          ref={(el) => (navLinksRef.current[5] = el)}
          className="font-semibold px-4 xl:px-5 py-2 rounded-full transition-all duration-300 text-xs sm:text-sm lg:text-sm"
          style={{ backgroundColor: "#ffffff", color: "#1e3a8a" }}
        >
          Talk to us
        </button>
      </div>

      {/* Hamburger Button - Mobile */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-[#fff] relative w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
      >
        <svg
          className="w-full h-full absolute top-0 left-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <line
            ref={topLineRef}
            x1="4"
            y1="6"
            x2="20"
            y2="6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            ref={middleLineRef}
            x1="4"
            y1="12"
            x2="20"
            y2="12"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            ref={bottomLineRef}
            x1="4"
            y1="18"
            x2="20"
            y2="18"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="lg:hidden absolute top-16 sm:top-19 left-0 w-full bg-white/10 backdrop-blur-lg shadow-lg overflow-hidden"
        style={{ height: 0 }}
      >
        <nav className="flex flex-col space-y-3 sm:space-y-4 p-4 sm:p-6 font-medium text-sm sm:text-base">
          {[
            ["/Products", "Products"],
            ["/Services/ItServices", "Services"],
            ["/About", "About"],
            ["/Contact", "Contact"],
          ].map(([href, label], index) => (
            <Link
              key={href}
              ref={(el) => (navLinksRef.current[index + 4] = el)}
              href={href}
              className={`block px-3 py-2 sm:px-4 sm:py-3 rounded active:scale-95 transition-all duration-150 ${
                scrolled ? "hover:bg-white/20" : "hover:bg-white/10"
              }`}
              onClick={() => setIsMenuOpen(false)}
              style={{ color: "#ffffff" }}
            >
              {label}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-4 border-t border-white/20">
            <button
              ref={(el) => (navLinksRef.current[6] = el)}
              className="w-full font-semibold px-4 py-2 rounded-full transition-all duration-300 text-sm"
              style={{
                color: "#ffffff",
                borderColor: "#ffffff",
                borderWidth: "2px",
              }}
            >
              Product-first tech studio
            </button>
            <button
              ref={(el) => (navLinksRef.current[7] = el)}
              className="w-full font-semibold px-4 py-2 rounded-full transition-all duration-300 text-sm"
              style={{ backgroundColor: "#ffffff", color: "#1e3a8a" }}
            >
              Talk to us
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};
