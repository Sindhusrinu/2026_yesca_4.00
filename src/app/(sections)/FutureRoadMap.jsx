"use client";

export default function FutureRoadMap() {
  const roadmapItems = [
    "Next-gen duty doctor tools",
    "Security awareness automation",
    "Private community infrastructure",
    "Agri operations intelligence",
    "GIS decision support",
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Future Roadmap Section */}
        <div className="mb-20 sm:mb-24">
          <span className="text-orange-500 text-xs sm:text-sm font-semibold">
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
          <div className="bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-200">
            <p className="text-xs sm:text-sm text-gray-700 mb-4 leading-relaxed">
              We are actively prototyping and validating new platforms with a
              small set of partner institutions. If you are exploring pilots in
              any of these domains, we would be glad to collaborate early.
            </p>

            {/* Tags/Items */}
            <div className="flex flex-wrap gap-2">
              {roadmapItems.map((item, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-16 sm:my-20"></div>

        {/* Contact Section */}
        <div>
          <span className="text-orange-500 text-xs sm:text-sm font-semibold">
            Contact
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3">
            Lets talk
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
            Looking to collaborate or pilot a product? Talk to us.
          </p>
        </div>
      </div>
    </section>
  );
}
