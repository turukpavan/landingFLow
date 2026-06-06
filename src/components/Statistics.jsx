import { useState } from "react";

const Statistics = () => {
  const [statsData] = useState([
    {
      id: 1,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.505-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
      count: "5,000+ Properties Sold",
      desc: "Homes, apartments, and villas sold successfully.",
    },
    {
      id: 2,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
          />
        </svg>
      ),
      count: "500+ Trusted Agents",
      desc: "Expert agents helping people every day.",
    },
    {
      id: 3,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
          />
        </svg>
      ),
      count: "10,000+ Happy Clients",
      desc: "Families who found their dream homes with us.",
    },
    {
      id: 4,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
          />
        </svg>
      ),
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
              <svg
                width="35"
                height="20"
                viewBox="0 0 54 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-purple-300 opacity-70"
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
