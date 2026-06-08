import { BASE_URL } from "../api/api";
import {
  VectorArrowIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  LocationIcon,
} from "../components/ui/Icons";

const RecentProperties = ({ propertiesData }) => {
  return (
    <section className="w-full bg-gradient-to-br from-[#653c6c] via-[#575ca6] to-[#25145A] text-white py-16 px-4 font-sans">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Header Content Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div className="max-w-xl relative">
            <h2 className="section-heading text-white mb-3">
              Discover The Most Recent Properties
            </h2>
            {/* Contextual vector arrow wrapper */}
            <div className="hidden sm:block absolute translate-x-[480px] -translate-y-[40px]">
              <VectorArrowIcon />
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            <p className="section-copy text-purple-200/80 max-w-[29rem]">
              Explore our handpicked selection of newly launched properties,
              thoughtfully designed to suit every lifestyle.
            </p>
            <button className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-200 rounded-full px-5 py-2.5 text-xs font-semibold">
              <span>Properties</span>
              <ArrowRightIcon />
            </button>
          </div>
        </div>

        {/* Dynamic Property Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {propertiesData?.slice(0, 3).map((property) => (
            <div
              key={property.id}
              className="group bg-transparent flex flex-col w-full text-left transition-all duration-300"
            >
              {/* Image Container Card */}
              <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden mb-5 bg-[#25145A]">
                <img
                  src={`${BASE_URL}${property.image}`}
                  alt={property.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />

                {/* Arrow navigation handles overlay */}
                <button className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/40">
                  <ChevronLeftIcon />
                </button>
                <button className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/40">
                  <ChevronRightIcon />
                </button>

                {/* Status Badges Tags Top Right */}
                <div className="absolute top-3 right-3 flex items-center space-x-1.5 text-[9px] uppercase font-bold tracking-wider">
                  <span className="bg-[#E2F8EE]/90 text-[#0F5A36] px-2.5 py-1 rounded">
                    {property.listing_category === "for_sale" ? "For Sale" : "For Rent"}
                  </span>
                  <span className="bg-[#FFF0F0]/90 text-[#A61B1B] px-2.5 py-1 rounded">
                    {property.property_type}
                  </span>
                </div>
              </div>

              {/* Card Meta Content Info */}
              <div className="flex flex-col flex-1 px-1">
                <h3 className="text-lg font-bold text-white mb-1.5 tracking-wide group-hover:text-purple-200 transition-colors">
                  {property.title}
                </h3>

                {/* Location Box Info row */}
                <div className="flex items-center space-x-1 text-purple-200/70 mb-4">
                  <LocationIcon />
                  <span className="text-xs truncate font-medium">
                    {property.locality}
                  </span>
                </div>

                <p className="text-xs text-purple-300/60 font-medium mb-3">
                  {property.property_category}
                </p>

                {/* Features Specifications Row */}
                <div className="flex items-center justify-between space-x-4 text-xs font-medium text-purple-100/90 border-b border-white/10 pb-4 mb-4">
                  <div>
                    <span className="opacity-75">{property.formatted_price}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <span className="opacity-75">🛏️</span>
                      <span>{property.bhk_list}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="opacity-75">🛁</span>
                      <span>{property.bathroom_list}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span className="opacity-75">📐</span>
                      <span>{property.area_range}</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer Row */}
                <div className="flex items-center justify-between mt-auto pt-1">
                  <div className="text-[10px] text-purple-300/40 font-medium mt-3">
                    Added:
                  </div>
                  <button className="bg-[#885eff] hover:bg-[#6D28D9] text-white px-4 py-2 rounded-lg text-xs font-bold tracking-wide transition-all duration-200 shadow-md">
                    View detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProperties;