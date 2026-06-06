import { BASE_URL } from "../api/api";
import frame224 from "../assets/images/frame224.png";
const UpcomingProperties = ({ propertiesData }) => {
  return (
    <section
      className="w-full  py-16 px-4 font-sans bg-repeat"
      style={{ backgroundImage: `url(${frame224})` }}
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Header Layout Grid Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 relative">
          <div className="max-w-md relative">
            <h2 className="section-heading text-[#2A2A2A]">
              Discover Our Upcoming Properties
            </h2>
            {/* Small descriptive vector curve decoration below text */}
            <div className="hidden lg:block absolute bottom-[-15px] right-[-40px]">
              <svg
                width="35"
                height="20"
                viewBox="0 0 54 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-400"
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

          <div className="flex flex-col items-start md:items-end gap-5">
            <p className="section-copy text-gray-500 max-w-[39rem]">
              Stay one step ahead with early access to our soon-to-launch
              developments, offering you the perfect blend of comfort, style,
              and investment potential.
            </p>

            {/* Action pill trigger button */}
            <button className="inline-flex items-center space-x-2 bg-[#EBE9FE] hover:bg-[#DDD6FE] text-[#7C3AED] transition-all duration-200 rounded-full pl-6 pr-2 py-1.5 text-xs font-semibold shadow-sm">
              <span>Explore</span>
              <div className="w-7 h-7 rounded-full bg-[#7C3AED] text-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Responsive Cards Grid Map */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {propertiesData?.slice(3, 7).map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-md shadow-gray-100/40 p-3 group flex flex-col text-left transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
            >
              {/* Card Image Display Segment */}
              <div className="relative aspect-[16/12] w-full rounded-xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src={`${BASE_URL}${property.image}`}
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Horizontal slider arrows overlay indicators visible on item focus hover */}
                <button className="absolute left-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-2.5 h-2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 19.5 8.25 12l7.5-7.5"
                    />
                  </svg>
                </button>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/60">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-2.5 h-2.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>

              {/* Text Description Box Meta Fields */}
              <div className="px-1 flex flex-col flex-1">
                <h3 className="text-sm font-bold text-gray-800 mb-2 tracking-tight">
                  {property.title}
                </h3>

                {/* Location Property Row */}
                <div className="flex items-center space-x-1 text-gray-400 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-3.5 h-3.5 text-[#7C3AED]/70"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <span className="text-xs font-semibold tracking-wide text-gray-400">
                    {property.locality}
                  </span>
                </div>

                {/* Calendar Target Launch Date Footer Row */}
                <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-semibold mt-auto pt-2 border-t border-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-3.5 h-3.5 text-[#7C3AED]/70"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                    />
                  </svg>
                  <span>17-05-26</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingProperties;
