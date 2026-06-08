import { useState } from "react";
import frame224 from "../assets/images/frame224.png";
import { VectorCurveIcon, ArrowRightIcon } from "../components/ui/Icons";

const Solutions = () => {
  // Dynamic Data for Section 2: Real Estate Solutions
  const [solutionsData] = useState([
    {
      id: 1,
      title: "For Buyers & Tenants",
      desc: "Find your perfect home or rental with ease — explore verified listings, transparent pricing, and trusted agents.",
      btnText: "Explore Properties",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      title: "For Agents",
      desc: "Showcase verified listings, connect with buyers instantly, and close deals faster using our AI-powered tools.",
      btnText: "Join as Agent",
      image:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      title: "For Developers",
      desc: "Promote your upcoming projects, manage leads, and boost visibility with dedicated project pages and analytics.",
      btnText: "Showcase Your Project",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      title: "For Facility Management",
      desc: "Streamline building operations, handle service requests, and maintain property value through digital management tools.",
      btnText: "Get Started",
      image:
        "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=400&q=80",
    },
  ]);

  return (
    <section
      className="w-full py-16 px-4 bg-repeat border-t border-gray-100"
      style={{ backgroundImage: `url(${frame224})` }}
    >
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 relative">
          <div className="max-w-md relative">
            <h2 className="section-heading text-[#2A2A2A]">
              Solutions for Every Real Estate Partner
            </h2>
            {/* Hand-drawn loop arrow svg */}
            <div className="hidden lg:block absolute bottom-[-10px] right-[-30px]">
              <VectorCurveIcon />
            </div>
          </div>
          <p className="section-copy text-gray-500 max-w-[29rem]">
            We provide tailored tools and insights for every real estate role —
            from property owners to developers — helping each achieve success
            with ease.
          </p>
        </div>

        {/* Solutions Partner Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutionsData.map((sol) => (
            <div
              key={sol.id}
              className="bg-white rounded-2xl border border-gray-200/60 shadow-md shadow-gray-100/40 p-3 flex flex-col text-left group transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
            >
              {/* Image Section */}
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src={sol.image}
                  alt={sol.title}
                  className="w-full h-full object-cover grayscale-[15%] transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info Text Area */}
              <div className="flex flex-col flex-1 px-1 pb-1">
                <h3 className="text-sm font-extrabold text-gray-800 mb-2 tracking-tight">
                  {sol.title}
                </h3>
                <p className="text-xs text-gray-400 font-medium leading-relaxed mb-6">
                  {sol.desc}
                </p>

                {/* Wide Pill Action Button at the bottom */}
                <button className="w-full mt-auto inline-flex items-center justify-between bg-[#EBE9FE] hover:bg-[#DDD6FE] text-[#7C3AED] transition-all duration-200 rounded-full pl-4 pr-1 py-1 text-xs font-bold shadow-sm">
                  <span>{sol.btnText}</span>
                  <div className="w-6 h-6 rounded-full bg-[#7C3AED] text-white flex items-center justify-center flex-shrink-0">
                    <ArrowRightIcon />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;