"use client";

export default function TechnologyServices() {
  const services = [
    {
      id: 1,
      title: "Platform Engineering & Development",
      subtitle: "Designing, extending and integrating digital platforms.",
      description:
        "We build and enhance software platforms that solve real operational needs—scalable, secure and ready for growth.",
      features: [
        "Custom platform engineering",
        "Module development & system integrations",
        "Web & mobile application development",
        "E-commerce platform development",
      ],
    },
    {
      id: 2,
      title: "Cloud & Infrastructure Services",
      subtitle: "Reliable infrastructure that supports scalable operations.",
      description:
        "We design and manage infrastructure foundations that ensure performance, availability and continuity.",
      features: [
        "Server, storage & infrastructure setup",
        "Cloud deployment, monitoring & optimization",
        "Backup & disaster recovery solutions",
      ],
    },
    {
      id: 3,
      title: "Network & Enterprise Infrastructure",
      subtitle: "Designing secure and resilient network environments.",
      description:
        "We create dependable network architectures that keep organizations connected and operational.",
      features: [
        "Network design & implementation",
        "Switching, routing & connectivity solutions",
        "Enterprise network support",
      ],
    },
    {
      id: 4,
      title: "Security & Compliance Services",
      subtitle: "Protecting systems, data and users across environments.",
      description:
        "Security is built into everything we deliver—aligned with organizational policies and compliance needs.",
      features: [
        "Endpoint & firewall security solutions",
        "Infrastructure & application security reviews",
        "Security awareness & compliance alignment",
      ],
    },
    {
      id: 5,
      title: "Licensing, Software & Renewals",
      subtitle: "Simplified access to licensed platforms and tools.",
      description:
        "We help organizations manage licensed software efficiently, ensuring compliance and continuity.",
      features: [
        "Microsoft licensing & renewals",
        "Software subscriptions & compliance support",
        "Ongoing license management",
      ],
    },
    {
      id: 6,
      title: "Advisory, Implementation & Support",
      subtitle: "Helping teams adopt technology with minimal disruption.",
      description:
        "From early-stage advice to post-deployment support, we ensure smooth adoption and long-term value.",
      features: [
        "Solution advisory & focused pilots",
        "Implementation & onboarding",
        "Post-deployment support",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 sm:mb-20">
          <span className="text-orange-500 text-xs sm:text-sm font-semibold">
            Technology services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-3">
            Technology Services
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-3xl leading-relaxed">
            Specialized technology services that help organizations design,
            deploy and operate digital systems that are secure, scalable and
            reliable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
            >
              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">
                {service.title}
              </h3>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-gray-600 mb-3">
                {service.subtitle}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-700 mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-2">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-400 text-base mt-0.5">•</span>
                    <span className="text-xs text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
