import { useState } from "react";
import frame224 from "../assets/images/frame224.png";

const Partners = () => {
  // Dynamic Corporate Partners Mock SVG Logos
  const [partners] = useState([
    { id: 1, label: "CONSTRUCTION", icon: "🏗️" },
    { id: 2, label: "HD LUXURY", icon: "💎" },
    { id: 3, label: "BUILDER LOGO", icon: "📐" },
    { id: 4, label: "REAL ESTATE", icon: "🏢" },
    { id: 5, label: "BUILD SERVICE", icon: "🛠️" },
  ]);
  return (
    <section
      className="w-full py-16 px-4 bg-repeat border-t border-gray-100"
      style={{ backgroundImage: `url(${frame224})` }}
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Header Grid Section Description */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="max-w-md relative">
            <h2 className="section-heading text-[#2A2A2A]">
              Our Real Estate Partner
            </h2>
            <div className="hidden lg:block absolute bottom-[-10px] right-[-32px]">
              <svg
                width="35"
                height="20"
                viewBox="0 0 54 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400 opacity-60"
              >
                <path
                  d="M1 2C15.5 2 39.5 7.5 48.5 24M48.5 24M41 24H49.5V15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
          <p className="section-copy text-gray-500 max-w-[29rem]">
            Empowering growth through trusted collaborations and shared vision.
          </p>
        </div>

        {/* Corporate White Box Partners Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="bg-white rounded-2xl border border-gray-200/50 p-6 flex flex-col items-center justify-center min-h-[110px] shadow-sm transition-all duration-300 hover:shadow-md hover:border-purple-200"
            >
              <div className="text-2xl sm:text-3xl mb-2 opacity-80">
                {partner.icon}
              </div>
              <span className="text-[10px] font-black tracking-wider text-gray-400 uppercase text-center block">
                {partner.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
