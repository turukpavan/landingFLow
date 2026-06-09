import { BASE_URL } from "../api/api";
import frame224 from "../assets/images/frame224.png";
import {
  VectorCurveIcon,
  ArrowRightIcon,
  LocationIcon,
  CalendarIcon,
} from "./Icons";

const UpcomingProperties = ({ propertiesData, isLoading }) => {
  return (
    <section
      className="w-full py-16 px-4 font-sans bg-repeat"
      style={{ backgroundImage: `url(${frame224})` }}
    >
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header Layout Grid Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 relative">
          <div className="max-w-md relative">
            <h2 className="section-heading text-[#2A2A2A]">
              Discover Our Upcoming Properties
            </h2>
            <div className="hidden lg:block absolute bottom-[-15px] right-[-40px]">
              <VectorCurveIcon />
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-5">
            <p className="section-copy text-gray-500 max-w-[39rem]">
              Stay one step ahead with early access to our soon-to-launch
              developments, offering you the perfect blend of comfort, style,
              and investment potential.
            </p>

            <button className="inline-flex items-center space-x-2 bg-[#EBE9FE] hover:bg-[#DDD6FE] text-[#7C3AED] transition-all duration-200 rounded-full pl-6 pr-2 py-1.5 text-xs font-semibold shadow-sm">
              <span>Explore</span>
              <div className="w-7 h-7 rounded-full bg-[#7C3AED] text-white flex items-center justify-center">
                <ArrowRightIcon />
              </div>
            </button>
          </div>
        </div>

        {/* Responsive Cards Grid Map */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {isLoading ? (
            /* Active Shimmer Skeleton Cards for 4-Column Grid Layout */
            [1, 2, 3, 4].map((skeletonId) => (
              <div 
                key={skeletonId}
                className="bg-white rounded-2xl border border-gray-100 p-3 flex flex-col text-left animate-pulse"
              >
                {/* Image Asset Box Shimmer */}
                <div className="w-full aspect-[16/12] rounded-xl bg-gray-100 mb-4" />
                
                {/* Text Title Shimmer Strings */}
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-3" />
                
                {/* Subtext Location Shimmer Row */}
                <div className="h-3 bg-gray-100 rounded w-1/2 mb-4" />
                
                {/* Footer Divider Calendar Node Shimmer */}
                <div className="h-4 bg-gray-100 rounded w-1/3 mt-auto pt-2 border-t border-gray-50" />
              </div>
            ))
          ) : !propertiesData || propertiesData.length === 0 ? (
            /* Empty Arrays Safe Fallback Window */
            <div className="col-span-full text-center py-12 text-gray-400 font-medium">
              No upcoming properties schedules on file right now.
            </div>
          ) : (
            /* Content View Pipeline */
            propertiesData.slice(3, 7).map((property) => (
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
                    loading="lazy"
                  />
                </div>

                {/* Text Description Box Meta Fields */}
                <div className="px-1 flex flex-col flex-1">
                  <h3 className="text-sm font-bold text-gray-800 mb-2 tracking-tight">
                    {property.title}
                  </h3>

                  {/* Location Property Row */}
                  <div className="flex items-center space-x-1 text-gray-400 mb-3">
                    <LocationIcon />
                    <span className="text-xs font-semibold tracking-wide text-gray-400">
                      {property.locality}
                    </span>
                  </div>

                  {/* Calendar Target Launch Date Footer Row */}
                  <div className="flex items-center space-x-1.5 text-xs text-gray-400 font-semibold mt-auto pt-2 border-t border-gray-50">
                    <CalendarIcon />
                    <span>17-05-26</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default UpcomingProperties;