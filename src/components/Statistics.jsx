import { useState } from "react";
import {
  VectorArrowIcon,
  HomeIcon,
  BadgeCheckIcon,
  HappyFaceIcon,
  PaperPlaneIcon,
} from "./Icons";

const Statistics = () => {
  const [statsData] = useState([
    {
      id: 1,
      icon: <HomeIcon />,
      count: "5,000+ Properties Sold",
      desc: "Homes, apartments, and villas sold successfully.",
    },
    {
      id: 2,
      icon: <BadgeCheckIcon />,
      count: "500+ Trusted Agents",
      desc: "Expert agents helping people every day.",
    },
    {
      id: 3,
      icon: <HappyFaceIcon />,
      count: "10,000+ Happy Clients",
      desc: "Families who found their dream homes with us.",
    },
    {
      id: 4,
      icon: <PaperPlaneIcon />,
      count: "Across 50+ Cities",
      desc: "Expanding trust nationwide.",
    },
  ]);

  return (
    <section className="w-full bg-gradient-to-br from-[#4C359E] via-[#3B2687] to-[#25145A] text-white py-16 px-4">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 relative">
          <div className="max-w-md relative">
            <h2 className="section-heading text-white">
              Trusted By Thousands of people
            </h2>
            {/* Hand-drawn loop arrow svg */}
            <div className="hidden lg:block absolute bottom-[-10px] right-[-30px]">
              <VectorArrowIcon />
            </div>
          </div>
          <p className="section-copy text-purple-200/80 max-w-[29rem]">
            Over the years, we've helped thousands of families, investors, and
            professionals find the perfect property — earning trust through
            transparency, quality, and reliability.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="bg-white/15 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-left flex flex-col items-start transition-all duration-300 hover:bg-white/20 hover:translate-y-[-2px]"
            >
              {/* Circular Glass Icon Holder */}
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-4 text-white">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold mb-2 tracking-wide text-white">
                {item.count}
              </h3>
              <p className="text-xs text-purple-200/70 leading-relaxed font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;