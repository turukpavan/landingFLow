import { useCallback, useEffect, useState } from "react";
import frame224 from "../assets/images/frame224.png";
import { homeService } from "../services/homeService";

const ExploreProperties = () => {
  const [citiesData, setCitiesData] = useState([]);
  // Dynamic Data for Section 2: Explore Properties by Cities
  const cityImages = {
    Adrar:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    Amravati: "https://ex",
    Bangalore:
      "https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Bhopal:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
    Delhi: "https://example.com/images/delhi.jpg",
    Gurugram:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    Mumbai:
      "https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=800&auto=format&fit=crop",
    Nagpur:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=800&auto=format&fit=crop",
    Nicobar: "https://example.com/images/nicobar.jpg",
  };
  const transformedCities = Object.entries(citiesData).map(
    ([cityName, propertyCount], index) => {
      return {
        id: index + 1, // Automatically generates IDs starting from 1
        name: cityName,
        propertyCount: propertyCount,
        // Looks up the image from your cityImages object, or falls back to a placeholder
        imageUrl:
          cityImages[cityName] ||
          "https://example.com/images/default-placeholder.jpg",
      };
    },
  );
  const fetchCitiesData = useCallback(async () => {
    try {
      const res = await homeService.getCitiesData();
      setCitiesData(res.data.cities);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    Promise.resolve().then(fetchCitiesData);
  }, [fetchCitiesData]);
  return (
    <section
      className="w-full py-16 px-4 bg-repeat border-t border-gray-100"
      style={{ backgroundImage: `url(${frame224})` }}
    >
      <div className="max-w-[1300px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="max-w-md relative">
            <h2 className="section-heading text-[#2A2A2A]">
              Explore Properties by Cities
            </h2>
            <div className="hidden lg:block absolute bottom-[-10px] right-[-35px]">
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
          <div className="flex flex-col items-start md:items-end gap-5">
            <p className="section-copy text-gray-500 max-w-[29rem]">
              Stay one step ahead with early access to our soon-to-launch
              developments, offering you the perfect blend of comfort, style,
              and investment potential.
            </p>

            <button className="inline-flex items-center space-x-2 bg-[#EBE9FE] hover:bg-[#DDD6FE] text-[#7C3AED] transition-all duration-200 rounded-full pl-6 pr-1.5 py-1.5 text-xs font-bold shadow-sm">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {transformedCities.slice(0, 4).map((city) => (
            <div
              key={city.id}
              className="bg-white rounded-2xl border border-gray-200/60 shadow-md shadow-gray-100/40 p-3 flex flex-col text-left group transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px]"
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 bg-gray-100">
                <img
                  src={city.imageUrl}
                  alt={city.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between px-1 pb-1">
                <div>
                  <h3 className="text-sm font-extrabold text-gray-800 tracking-tight mb-0.5">
                    {city.name}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-semibold tracking-wide">
                    {city.propertyCount}
                  </p>
                </div>

                <div className="w-7 h-7 rounded-full bg-[#EBE9FE] group-hover:bg-[#7C3AED] text-[#7C3AED] group-hover:text-white flex items-center justify-center transition-all duration-300 flex-shrink-0 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="3"
                    stroke="currentColor"
                    className="w-3 h-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreProperties;
