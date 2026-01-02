"use client";
import React, { useEffect, useRef, useState } from "react";

export default function Clients() {
  const [gsapLoaded, setGsapLoaded] = useState(false);

  const partners = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Google Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
    },
    {
      name: "Red Hat",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d8/Red_Hat_logo.svg",
    },
    {
      name: "Dell",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
    },
    {
      name: "HP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/ad/HP_logo_2012.svg",
    },
    {
      name: "Cisco",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg",
    },
    {
      name: "Sophos",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Sophos_logo.svg/1280px-Sophos_logo.svg.png",
    },
    {
      name: "Fortinet",
      logo: "https://cdn-public.softwarereviews.com/production/logos/offerings/3248/original/fortinet-logo.png?1666715909",
    },
    {
      name: "NetApp",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/NetApp_logo_2020.svg/1280px-NetApp_logo_2020.svg.png",
    },
    {
      name: "Adobe",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Adobe_Corporate_wordmark.svg/2560px-Adobe_Corporate_wordmark.svg.png",
    },
    {
      name: "Veeam",
      logo: "https://cdn.veeam.com/content/dam/veeam/global/go/projects/site/about/img/blocks/intro/logo_v_2x.png?ck=1697203457340",
    },
    {
      name: "Trend Micro",
      logo: "https://cdn.worldvectorlogo.com/logos/trend-micro-logo.svg",
    },
    { name: "And more", logo: null },
  ];

  const scrollRef2 = useRef(null);
  const scrollRef3 = useRef(null);

  useEffect(() => {
    if (window.gsap) {
      setGsapLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.async = true;
    script.onload = () => setGsapLoaded(true);
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (!gsapLoaded || !window.gsap) return;

    const gsap = window.gsap;

    const setupInfiniteScroll = (ref, speed, direction = -1) => {
      const element = ref.current;
      if (!element) return;

      const content = element.innerHTML;
      element.innerHTML = content + content + content;

      const totalWidth = element.scrollWidth / 3;

      if (direction === 1) {
        gsap.set(element, { x: -totalWidth });
      }

      const animation = gsap.to(element, {
        x: direction === -1 ? -totalWidth : 0,
        duration: speed,
        ease: "none",
        repeat: -1,
      });

      const parent = element.parentElement;
      const onEnter = () => animation.pause();
      const onLeave = () => animation.play();

      parent.addEventListener("mouseenter", onEnter);
      parent.addEventListener("mouseleave", onLeave);

      return {
        animation,
        cleanup: () => {
          parent.removeEventListener("mouseenter", onEnter);
          parent.removeEventListener("mouseleave", onLeave);
          animation.kill();
        },
      };
    };

    const res2 = setupInfiniteScroll(scrollRef2, 50, -1);
    const res3 = setupInfiniteScroll(scrollRef3, 50, 1);

    return () => {
      if (res2) res2.cleanup();
      if (res3) res3.cleanup();
    };
  }, [gsapLoaded]);

  const handleImageError = (e) => {
    e.target.style.display = "none";
    if (e.target.nextSibling) {
      e.target.nextSibling.style.display = "block";
      
    }
  };

  return (
    <section className="bg-white py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto mb-16 sm:mb-20">
        <div className="text-left">
          <div className="inline-block bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold mb-4 tracking-wide border border-indigo-100">
            TRUSTED ECOSYSTEM
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
            CLIENTS & PARTNERS
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-2xl leading-relaxed">
            Trusted by organizations that value reliability and long-term
            partnerships.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        {/* Foggy Edges Overlay - Left */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-20 bg-gradient-to-r from-white via-white/70 to-transparent z-20 pointer-events-none"></div>

        {/* Foggy Edges Overlay - Right */}
        <div className="absolute inset-y-0 right-0 w-8 md:w-20 bg-gradient-to-l from-white via-white/70 to-transparent z-20 pointer-events-none"></div>

        <div className="space-y-6">
          {/* Row 1: Partners (Forward) */}
          <div className="flex whitespace-nowrap cursor-pointer">
            <div ref={scrollRef2} className="flex gap-4 items-center">
              {partners.map((partner, index) => (
                <div
                  key={`partner-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl px-8 py-6 shadow-sm border border-gray-100 flex items-center justify-center min-w-[200px] h-24 group hover:shadow-xl hover:border-indigo-100 transition-all duration-500"
                >
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      onError={handleImageError}
                      className="h-8 w-auto object-contain opacity-100 transition-all duration-500 transform"
                    />
                  ) : null}
                  <span
                    className={`${
                      partner.logo ? "hidden" : "block"
                    } text-gray-400 font-bold text-xs tracking-widest uppercase text-center px-2`}
                  >
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Partners (Reverse) */}
          <div className="flex whitespace-nowrap cursor-pointer">
            <div ref={scrollRef3} className="flex gap-4 items-center">
              {[...partners].reverse().map((partner, index) => (
                <div
                  key={`partner-rev-${index}`}
                  className="flex-shrink-0 bg-white rounded-2xl px-8 py-6 shadow-sm border border-gray-100 flex items-center justify-center min-w-[200px] h-24 group hover:shadow-xl hover:border-indigo-100 transition-all duration-500"
                >
                  {partner.logo ? (
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      onError={handleImageError}
                      className="h-8 w-auto object-contain opacity-100 transition-all duration-500 transform"
                    />
                  ) : null}
                  <span
                    className={`${
                      partner.logo ? "hidden" : "block"
                    } text-gray-400 font-bold text-xs tracking-widest uppercase text-center px-2`}
                  >
                    {partner.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
