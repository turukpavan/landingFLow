import { useHomeData } from "../hooks/useHomeData";
import frame224 from "../assets/images/frame224.png";
import {
  VectorCurveIcon,
  ArrowRightIcon,
  ArrowRightSmallIcon,
} from "./Icons";

const ExploreProperties = () => {
  // 1. USE THE COMMON HOOK (Passes service function name, response data object key, and fallback object)
  const { data: citiesData, loading: loadingCities } = useHomeData(
    "getCitiesData",
    "cities",
    {}
  );

  // Dynamic Fallback Images dictionary mapped to API names
  const cityImages = {
    Adrar:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    Amravati:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=800&auto=format&fit=crop",
    Bangalore:
      "https://plus.unsplash.com/premium_photo-1681550097108-187abe10d445?q=80&w=2070&auto=format&fit=crop",
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

  // 2. DATA TRANSFORMATION (Runs seamlessly as citiesData updates reactively via hook)
  const transformedCities = Object.entries(citiesData).map(
    ([cityName, propertyCount], index) => ({
      id: index + 1,
      name: cityName,
      propertyCount: propertyCount,
      imageUrl:
        cityImages[cityName] ||
        "https://example.com/images/default-placeholder.jpg",
    })
  );

  return (
    <section
      className="w-full py-16 px-4 bg-repeat border-t border-gray-100"
      style={{ backgroundImage: `url(${frame224})` }}
    >
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="max-w-md relative">
            <h2 className="section-heading text-[#2A2A2A]">
              Explore Properties by Cities
            </h2>
            <div className="hidden lg:block absolute bottom-[-10px] right-[-35px]">
              <VectorCurveIcon />
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
                <ArrowRightIcon />
              </div>
            </button>
          </div>
        </div>

        {/* Cities Dynamic Rendering Section */}
        {loadingCities ? (
          /* Shimmer Loading State for Grid Grid UI */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((skeletonId) => (
              <div 
                key={skeletonId} 
                className="bg-white rounded-2xl border border-gray-200/60 p-3 animate-pulse"
              >
                <div className="w-full aspect-square bg-gray-100 rounded-xl mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
                <div className="h-3 bg-gray-100 rounded w-1/3"></div>
              </div>
            ))}
          </div>
        ) : transformedCities.length === 0 ? (
          /* Fallback No Cities Layout found */
          <div className="text-center py-12 text-gray-400 font-medium">
            No dynamic city data found available at this moment.
          </div>
        ) : (
          /* Cities Grid View */
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
                    loading="lazy"
                  />
                </div>

                <div className="flex items-center justify-between px-1 pb-1">
                  <div>
                    <h3 className="text-sm font-extrabold text-gray-800 tracking-tight mb-0.5">
                      {city.name}
                    </h3>
                    <p className="text-[11px] text-gray-400 font-semibold tracking-wide">
                      {city.propertyCount} Properties
                    </p>
                  </div>

                  <div className="w-7 h-7 rounded-full bg-[#EBE9FE] group-hover:bg-[#7C3AED] text-[#7C3AED] group-hover:text-white flex items-center justify-center transition-all duration-300 flex-shrink-0 cursor-pointer">
                    <ArrowRightSmallIcon />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreProperties;