import { useCallback, useEffect, useState } from "react";
import Hero from "../components/hero/hero";
import frame224 from "../assets/images/frame224.png";
import Rectangle23 from "../assets/images/Rectangle23.png";
import manPng from "../assets/images/9151064.png";
import image4 from "../assets/images/image4.png";
import TestimonialsCarousel from "../components/carousels/TestimonialsCarousel";
import AgentCarousel from "../components/carousels/AgentCarousel";
import { homeService } from "../services/homeService";
import { BASE_URL } from "../api/api";
function Home() {
  const [propertiesData, setPropertiesData] = useState([]);
  const [citiesData, setCitiesData] = useState([]);

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


  // Dynamic Corporate Partners Mock SVG Logos
  const [partners] = useState([
    { id: 1, label: "CONSTRUCTION", icon: "🏗️" },
    { id: 2, label: "HD LUXURY", icon: "💎" },
    { id: 3, label: "BUILDER LOGO", icon: "📐" },
    { id: 4, label: "REAL ESTATE", icon: "🏢" },
    { id: 5, label: "BUILD SERVICE", icon: "🛠️" },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    location: "",
    message: "",
    agreeTerms: false,
  });

  //   fetch properties data from backend API and update state (useEffect with homeService.getPropertiesData)
  const fetchPropertiesData = useCallback(async () => {
    try {
      const res = await homeService.getPropertiesData();
      setPropertiesData(res.data.properties);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const fetchCitiesData = useCallback(async () => {
    try {
      const res = await homeService.getCitiesData();
      setCitiesData(res.data.cities);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    Promise.resolve().then(fetchPropertiesData);
    Promise.resolve().then(fetchCitiesData);
  }, [fetchPropertiesData, fetchCitiesData]);

  // URL pointers to pattern assets matching your description

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted Safely:", formData);
  };

  return (
    <div>
      <Hero />
      {/* remaining content */}
      {/* recent properties section */}
      <section className="w-full bg-gradient-to-br from-[#653c6c] via-[#575ca6] to-[#25145A] text-white py-16 px-4 font-sans">
        <div className="max-w-[1300px] mx-auto">
          {/* Header Content Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div className="max-w-xl">
              <h2 className="section-heading text-white mb-3">
                Discover The Most Recent Properties
              </h2>
              {/* Contextual vector arrow wrapper if needed */}
              <div className="hidden sm:block absolute translate-x-[480px] -translate-y-[40px]">
                <svg
                  width="40"
                  height="25"
                  viewBox="0 0 54 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-purple-300 opacity-80"
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

            <div className="flex flex-col items-start md:items-end gap-4">
              <p className="section-copy text-purple-200/80 max-w-[29rem]">
                Explore our handpicked selection of newly launched properties,
                thoughtfully designed to suit every lifestyle.
              </p>
              <button className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-200 rounded-full px-5 py-2.5 text-xs font-semibold">
                <span>Properties</span>
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

                  {/* Arrow navigation handles overlay (Mirroring design mockup layout) */}
                  <button className="absolute left-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/40">
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
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                      />
                    </svg>
                  </button>
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity text-white hover:bg-white/40">
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
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </button>

                  {/* Status Badges Tags Top Right */}
                  <div className="absolute top-3 right-3 flex items-center space-x-1.5 text-[9px] uppercase font-bold tracking-wider">
                    <span className="bg-[#E2F8EE]/90 text-[#0F5A36] px-2.5 py-1 rounded">
                      {property.listing_category === "for_sale"
                        ? "For Sale"
                        : "For Rent"}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="w-3.5 h-3.5 flex-shrink-0"
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
                      <span className="opacity-75">
                        {property.formatted_price}
                      </span>
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
      {/* upcoming properties */}
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
      {/* stats sections  */}
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
      {/* Solution sections  */}
      <section
        className="w-full  py-16 px-4 bg-repeat border-t border-gray-100"
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
              We provide tailored tools and insights for every real estate role
              — from property owners to developers — helping each achieve
              success with ease.
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
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
     {/* Review Carousel section */}
      <TestimonialsCarousel />

      {/* Explore Properties by Cities Section */}
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

      {/* Agent Carousel Section */}
      <AgentCarousel />

      {/* Our Real Estate Partners Section */}
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
              Empowering growth through trusted collaborations and shared
              vision.
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

      {/* move to dream home section */}
      <section className="w-full py-10 md:py-10 px-4 md:px-10 bg-gradient-to-br from-[#5758a1] via-[#413274] to-[#5c3d86] ">
        <div className="max-w-[1240px] mx-auto bg-[#8485c53e] rounded-[32px] shadow-2xl">
          {/* Main Card Container with Outer Purple Border Gradient Style Background */}
          <div className="w-full   relative flex flex-col md:flex-row items-stretch min-h-[420px] md:min-h-[480px] lg:min-h-[520px] ">
            {/* Asymmetric Angled Background Shape Layer (Left Side Accent) */}
            <div
              className="absolute inset-0 z-0 opacity-90 pointer-events-none"
              style={{ clipPath: "polygon(0 0, 55% 0, 42% 100%, 0% 100%)" }}
            />

            {/* =========================================================
          LEFT SIDE: CONTENT BANNER TEXT & BUTTON
          ========================================================= */}
            <div className="w-full md:w-[50%] lg:w-[55%] p-8 sm:p-12 md:p-16 flex flex-col justify-center items-start text-left relative z-10">
              <h2 className="section-heading text-white mb-4 max-w-md">
                Ready to Move Into Your Dream Home?
              </h2>

              <p className="section-copy text-gray-500 max-w-[39rem]">
                Get expert guidance and explore premium properties tailored for
                you.
              </p>

              {/* Translucent pill shape anchor trigger button */}
              <button
                type="button"
                className="inline-flex items-center justify-between bg-white/20 hover:bg-white/30 text-white transition-all duration-300 rounded-full pl-6 pr-1.5 py-1.5 text-xs sm:text-sm font-semibold border border-white/20 shadow-inner group gap-8 max-w-full"
              >
                <span>Schedule a Free Consultation</span>
                <div className="w-8 h-8 rounded-full bg-[#906BFF] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="w-4 h-4"
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

            {/* =========================================================
          RIGHT SIDE: PREMIUM HOUSE ILLUSTRATION/IMAGE
          ========================================================= */}
            {/* Absolutely aligned right and bottom on desktop viewports to achieve the visual overhang mask clip effect */}
            <div className="relative w-full h-[280px] md:h-auto md:w-[50%] lg:w-[45%] md:absolute md:right-0 md:bottom-0 md:top-0 flex items-end justify-center md:justify-end z-10">
              <img
                src={image4}
                alt="Modern luxury architecture real estate estate listing rendering"
                className="w-auto h-[105%] max-w-none object-contain md:object-right-bottom select-none pointer-events-none origin-bottom translate-y-[2px]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* get in touch section */}
      <section
        className="w-full py-12 md:py-16 px-4 md:px-12 bg-repeat"
        style={{ backgroundImage: `url(${frame224})` }}
      >
        <div className="max-w-[1240px] mx-auto">
          {/* Main Container: Added 'overflow-hidden' so the background shapes clip perfectly at the bottom edge */}
          <div className="w-full bg-[#885EFF33] rounded-[32px] p-6 md:p-12 lg:p-16 relative flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[600px] ">
            {/* =========================================================
          LEFT SIDE: HEADER & DOUBLE STACKED IMAGES
          ========================================================= */}
            {/* Changed flex-col behavior: pb-[280px] on mobile creates empty space at the bottom of the text for the absolute images to sit safely */}
            <div className="w-full  self-stretch flex flex-col justify-between min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] relative  lg:pb-0">
              {/* Header Titles (z-20 ensures text stays readable over images) */}
              <div className="mb-8 lg:mb-0 relative z-20 flex justify-between">
                <div className="inline-flex items-center gap-2 mb-3">
                  <h2 className="section-heading text-[#2D244E]">
                    Get In Touch With Us
                  </h2>
                  <svg
                    width="32"
                    height="24"
                    viewBox="0 0 54 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#6D28D9] transform rotate-12"
                  >
                    <path
                      d="M1 2C15.5 2 39.5 7.5 48.5 24M48.5 24M41 24H49.5V15"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <p className="section-copy text-gray-500 max-w-[29rem] pb-10">
                  We're just a message away — whether you're buying, selling, or
                  developing, we'll help you make the right move.
                </p>
              </div>

              {/* =========================================================
            SHARED POSITION CONTAINER FOR BOTH IMAGES (RESPONSIVE)
            ========================================================= */}
              {/* On small screens, it spans full width (w-full) and stays bounded at h-[260px]/h-[320px] so it won't overflow into the headers */}
              <div className=" w-full lg:w-full lg:h-[90%] pointer-events-none select-none z-10 lg:flex">
                <div className="relative flex  h-full overflow-hidden">
                  {/* Layer 1: Dark Purple Shape (Rectangle23) */}
                  {/* Adjusted responsive positioning coordinates: leaves left edge slightly wider on mobile to prevent clipping */}
                  <img
                    src={Rectangle23}
                    alt="Background vector design shape"
                    className=" w-auto h-[100%]  lg:h-[600px]  z-0"
                  />

                  {/* Layer 2: Man Illustration stacked exactly on top of it */}
                  {/* Swapped width constraints on mobile to keep it from scaling out of sight */}
                  <img
                    src={manPng}
                    alt="Representative holding digital tablet device"
                    className=" absolute bottom-0 top-[-5%] lg:top-[-12%] left-[-20px] sm:left-[40px] lg:left-[-70px] w-auto h-[95%] lg:h-[120%] max-w-none object-contain drop-shadow-2xl z-10 -scale-x-100"
                  />
                </div>
                <div className="mt-10 relative width-full lg:absolute right-0 lg:w-[50%] lg:mt-0 bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-purple-950/5 ">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name Input Box */}
                      <div className="flex flex-col space-y-1.5 text-left">
                        <label className="text-xs font-bold text-[#3A3357]">
                          Name <span className="text-purple-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          placeholder="Enter"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full border border-gray-200 bg-[#F9FAFB] text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-all text-gray-800 placeholder-gray-400"
                        />
                      </div>

                      {/* Email Address Input Box */}
                      <div className="flex flex-col space-y-1.5 text-left">
                        <label className="text-xs font-bold text-[#3A3357]">
                          Email <span className="text-purple-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="Enter"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border border-gray-200 bg-[#F9FAFB] text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-all text-gray-800 placeholder-gray-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone Number Input Box */}
                      <div className="flex flex-col space-y-1.5 text-left">
                        <label className="text-xs font-bold text-[#3A3357]">
                          Phone Number{" "}
                          <span className="text-purple-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          placeholder="Enter"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full border border-gray-200 bg-[#F9FAFB] text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-all text-gray-800 placeholder-gray-400"
                        />
                      </div>

                      {/* Property Type Dropdown Selection Menu */}
                      <div className="flex flex-col space-y-1.5 text-left">
                        <label className="text-xs font-bold text-[#3A3357]">
                          Property Interest{" "}
                          <span className="text-purple-500">*</span>
                        </label>
                        <div className="relative">
                          <select
                            name="interest"
                            required
                            value={formData.interest}
                            onChange={handleChange}
                            className="w-full border border-gray-200 bg-[#F9FAFB] text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-all text-gray-700 appearance-none cursor-pointer"
                          >
                            <option value="" disabled>
                              Select
                            </option>
                            <option value="buy">Luxury Apartment (Buy)</option>
                            <option value="rent">
                              Residential Flat (Rent)
                            </option>
                            <option value="commercial">
                              Commercial Acquisition
                            </option>
                            <option value="developer">
                              Developer Partnership
                            </option>
                          </select>
                          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                            <svg
                              className="fill-current h-4 w-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M7 10l5 5 5-5H7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Geographic Target Location Input Box */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label className="text-xs font-bold text-[#3A3357]">
                        Location
                      </label>
                      <input
                        type="text"
                        name="location"
                        placeholder="Enter"
                        value={formData.location}
                        onChange={handleChange}
                        className="w-full border border-gray-200 bg-[#F9FAFB] text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-all text-gray-800 placeholder-gray-400"
                      />
                    </div>

                    {/* Detailed Context Message Rich TextBox Area */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label className="text-xs font-bold text-[#3A3357]">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows="3"
                        placeholder="Tell us more about your requirements.."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full border border-gray-200 bg-[#F9FAFB] text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-all text-gray-800 placeholder-gray-400 resize-none"
                      />
                    </div>

                    {/* Terms Checkbox Row Validation Anchor */}
                    <div className="flex items-start space-x-3 pt-2 text-left">
                      <input
                        type="checkbox"
                        id="agreeTerms"
                        name="agreeTerms"
                        required
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        className="w-4 h-4 rounded border-gray-300 text-[#7C3AED] focus:ring-[#7C3AED]/40 mt-0.5 accent-[#7C3AED]"
                      />
                      <label
                        htmlFor="agreeTerms"
                        className="text-xs font-medium text-gray-500 leading-normal select-none"
                      >
                        By clicking, you agree to our{" "}
                        <a
                          href="#terms"
                          className="text-[#7C3AED] hover:underline font-semibold"
                        >
                          Terms & Conditions
                        </a>
                        .
                      </label>
                    </div>

                    {/* Purple pill submit trigger button */}
                    <div className="pt-2 text-left">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-between bg-[#EBE9FE] hover:bg-[#7C3AED] text-[#7C3AED] hover:text-white transition-all duration-300 rounded-full pl-8 pr-2 py-2 text-xs font-extrabold shadow-sm group w-full sm:w-auto gap-12"
                      >
                        <span>Submit</span>
                        <div className="w-8 h-8 rounded-full bg-[#7C3AED] group-hover:bg-white text-white group-hover:text-[#7C3AED] flex items-center justify-center transition-colors duration-300">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="3"
                            stroke="currentColor"
                            className="w-4 h-4"
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
                  </form>
                </div>
              </div>
            </div>

            {/* =========================================================
          RIGHT SIDE: FORM CONTAINER CARD PANEL
          ========================================================= */}
            {/* Added responsive z-20 layout layering so mobile forms remain fully clickable */}
          </div>
        </div>
      </section>
      {/* footer */}
     
    </div>
  );
}

export default Home;
