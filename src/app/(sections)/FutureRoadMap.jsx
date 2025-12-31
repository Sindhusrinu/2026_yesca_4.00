"use client";

import React from 'react';

export default function FutureRoadMap() {
  const roadmapItems = [
    "Next-gen duty doctor tools",
    "Security awareness automation",
    "Private community infrastructure",
    "Agri operations intelligence",
    "GIS decision support",
  ];

  const address = "425, Workafella Cyber Crown, Sec-II Village, HUDA Techno Enclave, Madhapur, Hyderabad, Telangana 500081";
  const encodedAddress = encodeURIComponent(address);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Future Roadmap Section */}
        <div className="mb-20 sm:mb-24">
          <span className="text-orange-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">
            Future roadmap
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3">
            What we're building next
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed mb-6">
            YESCA is continuously expanding its product ecosystem across
            healthcare, security, community, agriculture and spatial data
            platforms.
          </p>

          {/* Roadmap Card */}
          <div className="bg-gray-50 rounded-2xl p-5 sm:p-8 border border-gray-200 shadow-sm">
            <p className="text-sm sm:text-base text-gray-700 mb-6 leading-relaxed">
              We are actively prototyping and validating new platforms with a
              small set of partner institutions. If you are exploring pilots in
              any of these domains, we would be glad to collaborate early.
            </p>

            {/* Tags/Items */}
            <div className="flex flex-wrap gap-2">
              {roadmapItems.map((item, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-2 rounded-full border border-blue-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-16 sm:my-20"></div>

        {/* Simplified Contact + Map Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Call to Action Only */}
          <div className="space-y-6">
            <span className="text-orange-500 text-xs sm:text-sm font-semibold uppercase tracking-wider">
              Contact
            </span>
            
            <div className="pt-2">
              <a href="/contact" className="inline-block">
                <button 
                  className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#000783] text-white text-lg sm:text-xl font-bold rounded-2xl transition-all duration-300 hover:bg-[#000560] hover:scale-[1.02] hover:shadow-xl active:scale-95 shadow-lg shadow-blue-900/20"
                >
                  Let's talk
                </button>
              </a>
            </div>
            
            <p className="text-sm sm:text-base text-gray-600 max-w-md leading-relaxed">
              Get in touch to learn how our platforms can transform your operational efficiency.
            </p>
          </div>

          {/* Right Side: Map */}
          <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 shadow-xl h-[350px] sm:h-[400px] w-full">
            <iframe
              title="Office Location"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}