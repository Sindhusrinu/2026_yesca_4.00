"use client";
import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import Scene from "../R3F/Scene";

export default function Hero() {
  const [activeTab, setActiveTab] = useState("Platform overview");

  const tabs = ["Platform overview", "Healthcare", "Security", "Community"];

  const platformDetails = {
    "Platform overview": {
      title: "Unified product ecosystem",
      subtitle: "SaaS platforms for operations, not vanity dashboards.",
      features: [
        "Duty doctor scheduling",
        "Threat awareness",
        "Private communities",
        "Agri operations",
      ],
    },
    Healthcare: {
      title: "Healthcare Solutions",
      subtitle: "Comprehensive healthcare management platforms.",
      features: [
        "Patient management",
        "Doctor scheduling",
        "Health records",
        "Telemedicine",
      ],
    },
    Security: {
      title: "Security Platform",
      subtitle: "Enterprise-grade security solutions.",
      features: [
        "Threat detection",
        "Risk assessment",
        "Compliance monitoring",
        "Incident response",
      ],
    },
    Community: {
      title: "Community Platform",
      subtitle: "Build and manage engaged communities.",
      features: [
        "User engagement",
        "Content management",
        "Analytics",
        "Moderation tools",
      ],
    },
  };

  const currentDetail = platformDetails[activeTab];

  return (
    <section
      style={{
        background:
          "linear-gradient(180deg,rgba(45, 53, 142, 1) 0%, rgba(117, 167, 218, 1) 85%, rgba(117, 167, 218, 1) 100%)",
      }}
      className="w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      <div className="w-full max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex w-fit">
              <span className="bg-blue-900 bg-opacity-50 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                Product-led platforms for operations that matter
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Product-driven digital platforms for real-world operations
            </h1>

            <p className="text-sm sm:text-base text-gray-100 leading-relaxed max-w-lg">
              We build secure, scalable products across healthcare,
              cybersecurity, community, agriculture and spatial data – designed
              for long-term operations.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2.5 rounded-full transition-colors duration-300 text-center text-sm sm:text-base">
                View our products
              </button>
              <button className="border-2 border-gray-300 hover:border-white text-white font-semibold px-6 py-2.5 rounded-full transition-colors duration-300 text-center text-sm sm:text-base">
                Talk to our team
              </button>
            </div>

            <p className="text-xs sm:text-sm text-gray-200 pt-2">
              Trusted by hospitals, enterprises and mission-driven organizations
              across India.
            </p>
          </div>

          <div className="h-[500px] lg:h-[600px] flex items-center justify-center relative w-full">
            <div className="w-full h-full absolute inset-0">
              <Scene />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
