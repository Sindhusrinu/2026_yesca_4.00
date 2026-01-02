"use client";

import React from 'react';
import { ChevronRight } from 'lucide-react';

/**
 * OurProducts Component
 * Displays the product grid with "Know More" triggers for specific domain platforms.
 */
export default function OurProducts() {
  const products = [
    {
      id: 1,
      title: "Healthcare Platforms",
      description: "Reduces manual hospital coordination.",
      status: "Early access",
      statusColor: "green",
      hasKnowMore: true,
      link: "https://www.vaidya247.com/",
      
    },
    {
      id: 2,
      title: "Cybersecurity Platforms",
      description: "Improves incident visibility.",
      status: "In development",
      statusColor: "orange",
      hasKnowMore: false
    },
    {
      id: 3,
      title: "Community Platforms",
      description: "Centralizes community communication.",
      status: "In development",
      statusColor: "orange",
      hasKnowMore: true,
      link: "https://webasic.org/"
    },
    {
      id: 4,
      title: "AgriTech Platforms",
      description: "Tools for agricultural operations, field teams and decision-makers working with on-ground realities.",
      status: "In development",
      statusColor: "orange",
      hasKnowMore: true
    },
    {
      id: 5,
      title: "GIS & Spatial Platforms",
      description: "Location-aware systems for mapping, spatial analytics and infrastructure planning.",
      status: "In development",
      statusColor: "orange",
      hasKnowMore: false
    },
  ];

  const getStatusStyles = (color) => {
    return color === "green"
      ? "bg-green-100 text-green-700"
      : "bg-orange-100 text-orange-700";
  };

  const getStatusDot = (color) => {
    return color === "green" ? "bg-green-500" : "bg-orange-500";
  };

  return (
    <section
      style={{
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 1) 0%, rgba(187, 220, 252, 1) 50%, rgba(117, 167, 218, 1) 100%)",
      }}
      className="w-full min-h-screen py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Our Platforms */}
        <div className="mb-16 sm:mb-20">
          <span className="text-orange-500 text-xs sm:text-sm font-semibold">
            Our products
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3">
            Purpose-built platforms developed for specific domains.
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl leading-relaxed">
            YESCA focuses on deep, domain-driven products instead of generic
            tools. Each platform is designed around real operational workflows.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl p-5 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              
              <div className="flex-grow">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-5 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${getStatusDot(
                      product.statusColor
                    )}`}
                  ></div>
                  <span
                    className={`text-xs font-medium px-2 py-1 rounded-full ${getStatusStyles(
                      product.statusColor
                    )}`}
                  >
                    {product.status}
                  </span>
                </div>

                {/* Conditional "Know More" Button for Healthcare and Community */}
                {product.hasKnowMore && (
                  <a 
                    href={product.link || "#"}
                    target={product.link?.startsWith('http') ? "_blank" : "_self"}
                    rel={product.link?.startsWith('http') ? "noopener noreferrer" : ""}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#000783] hover:underline transition-all"
                  > 
                    Know More
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                )}    
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-300 bg-opacity-40 my-16 sm:my-20"></div>

        {/* Product + Services Section */}
        <div>
          <span className="text-orange-500 text-xs sm:text-sm font-semibold">
            Product + services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3">
            Built as products. Supported by expertise.
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-3xl leading-relaxed">
            Our platforms are designed to run in real operational environments.
            Our technology services exist to deploy, integrate, secure and
            operate them effectively.
          </p>
        </div>
      </div>
    </section>
  );
}