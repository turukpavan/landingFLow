import { useState } from "react";
import HomeImage from "../assets/images/home.png";
import Video1 from "../assets/images/video.mp4";
import Video2 from "../assets/images/video2.mp4";

const Hero = () => {
  const videoSources = [Video1, Video2];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoSources.length);
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-[#F3F7FA] to-white font-sans overflow-x-hidden pb-16">
      
      {/* Top Main Section (Text & 3D Model Image) */}
      <div className="max-w-[1300px] mx-auto px-4 pt-8 lg:pt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
        
        {/* Left: Text & Search Content */}
        <div className="col-span-1 lg:col-span-7 flex flex-col items-start z-10 text-left">
          
          {/* Badge Pill */}
          <div className="inline-flex items-center space-x-1.5 bg-gray-100/80 px-3.5 py-1.5 rounded-full text-xs font-medium text-gray-600 mb-6 border border-gray-200/40">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28l-2.28 5.941" />
            </svg>
            <span>40K+ Premium Property</span>
          </div>

          {/* Heading Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[54px] font-bold text-[#2A2A2A] leading-[1.15] mb-4 tracking-tight max-w-[550px]">
            Find A House That Suits You
          </h1>

          {/* Description Text */}
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-[460px] mb-8">
            Discover premium properties, trusted agents, and hassle-free buying & renting.
          </p>

          {/* Search Panel Widget Container */}
          <div className="w-full max-w-[660px] bg-white rounded-2xl lg:rounded-full p-3 lg:p-1.5 shadow-xl shadow-gray-200/50 border border-gray-100/60 flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-2">
            
            {/* Buy Filter Dropdown */}
            <div className="relative border-b lg:border-b-0 lg:border-r border-gray-100 pb-2 lg:pb-0 lg:pr-3 flex items-center justify-between lg:justify-start">
              <select className="appearance-none bg-transparent pl-3 pr-8 py-2 text-xs font-semibold text-gray-700 focus:outline-none cursor-pointer w-full lg:w-20">
                <option>Buy</option>
                <option>Rent</option>
              </select>
              <div className="absolute right-2 pointer-events-none text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </div>
            </div>

            {/* Keyword Input field */}
            <div className="flex-1 relative flex items-center border border-gray-200/80 lg:border-0 rounded-full px-3 py-2 lg:p-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.603Z" /></svg>
              <input 
                type="text" 
                placeholder="Search Keyword" 
                className="w-full text-xs font-medium text-gray-700 placeholder-gray-400 bg-transparent focus:outline-none"
              />
            </div>

            {/* Selection Dropdown: Type */}
            <div className="relative border border-gray-200/80 lg:border-0 rounded-full px-3 py-2 lg:p-0 flex items-center justify-between">
              <select className="appearance-none bg-transparent pr-8 text-xs font-medium text-gray-500 focus:outline-none cursor-pointer w-full lg:w-24">
                <option>Type</option>
              </select>
              <div className="absolute right-3 pointer-events-none text-gray-400 flex flex-col">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-2.5 h-2.5"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" /></svg>
              </div>
            </div>

            {/* Selection Dropdown: All Cities */}
            <div className="relative border border-gray-200/80 lg:border-0 rounded-full px-3 py-2 lg:p-0 flex items-center justify-between">
              <select className="appearance-none bg-transparent pr-8 text-xs font-medium text-gray-500 focus:outline-none cursor-pointer w-full lg:w-24">
                <option>All Cities</option>
              </select>
              <div className="absolute right-3 pointer-events-none text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-2.5 h-2.5"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
              </div>
            </div>

            {/* Search Trigger Button Pill */}
            <button className="bg-[#EBE9FE] hover:bg-[#DDD6FE] text-[#7C3AED] px-5 py-2.5 lg:py-2 rounded-full flex items-center justify-between lg:justify-center font-semibold text-xs transition-all duration-200 mt-2 lg:mt-0">
              <span>Search</span>
              <div className="w-6 h-6 rounded-full bg-[#7C3AED] flex items-center justify-center text-white ml-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.603Z" /></svg>
              </div>
            </button>

          </div>
        </div>

        {/* Right Side: Floating 3D House Isolate Graphics Element */}
        <div className="col-span-1 lg:col-span-5 relative w-full flex justify-center items-center mt-6 lg:mt-0">
          <div className="relative max-w-[440px] lg:max-w-none w-full">
            <img 
              src={HomeImage} 
              alt="Isometric House Model Render" 
              className="w-full h-auto object-contain transform lg:scale-110"
            />
          </div>

          {/* Floating Vertical Sticky Tag */}
          <div className="hidden lg:flex absolute right-[-40px] top-1/4 origin-right rotate-90 items-center space-x-3 bg-[#9061F9] text-white px-4 py-2 rounded-b-xl shadow-md text-xs font-medium whitespace-nowrap tracking-wide">
            <span>Schedule a Free Consultation</span>
            <div className="w-5 h-5 rounded-full bg-white text-[#9061F9] flex items-center justify-center -rotate-90">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-2.5 h-2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" /></svg>
            </div>
          </div>
        </div>

      </div>

      {/* Center Separation Label Indicator: "Scroll" */}
      <div className="w-full flex flex-col items-center justify-center mt-12 mb-8">
        <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Scroll</span>
        <div className="flex flex-col items-center -space-y-1 text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3 h-3"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3 h-3 opacity-60"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
        </div>
      </div>

      {/* Lower Dashboard Section */}
      <div className="max-w-[840px] mx-auto px-4 relative flex justify-center">
        
        {/* Main Video Presentation Display Frame Wrapper */}
        <div className="relative w-full rounded-2xl sm:rounded-[28px] overflow-hidden border-4 sm:border-8 border-[#333333] shadow-2xl bg-[#1A1A1A] z-10">
          <video
            key={currentVideoIndex} 
            className="w-full h-auto aspect-[16/10] object-cover opacity-95"
            src={videoSources[currentVideoIndex]}
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded}
          />

          <div className="absolute inset-0 bg-black/5 pointer-events-none" />

          {/* Dynamic Media Slider Indicator Bars */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 z-20">
            {videoSources.map((_, index) => (
              <span 
                key={index}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentVideoIndex === index ? 'w-5 bg-white' : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* FLOATING CARD 1: 4.8 Rating -> ADDED z-20 FOR OVERLAY LAYER */}
        <div className="absolute left-1 sm:left-[-40px] bottom-6 sm:bottom-12 w-32 sm:w-44 bg-white/80 backdrop-blur-md p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/40 shadow-xl flex flex-col items-start text-left z-20">
          <div className="flex items-center space-x-0.5 mb-1 sm:mb-2 bg-[#DDD6FE]/40 px-2 py-1 rounded-full">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-amber-400">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
              </svg>
            ))}
          </div>
          <span className="text-xs sm:text-sm font-bold text-gray-800">4.8 Rating</span>
          
          <div className="flex items-center -space-x-2 mt-2 sm:mt-3 mb-1">
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gray-300 border-2 border-white overflow-hidden"><img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User Avatar" /></div>
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gray-400 border-2 border-white overflow-hidden"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User Avatar" /></div>
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gray-500 border-2 border-white overflow-hidden"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" alt="User Avatar" /></div>
            <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-gray-600">+</div>
          </div>
          <span className="text-[9px] sm:text-[11px] font-medium text-gray-400">10000+ Happy Client</span>
        </div>

        {/* FLOATING CARD 2: 2k+ Developers -> ADDED z-20 FOR OVERLAY LAYER */}
        <div className="absolute right-[-10px] sm:right-[-50px] top-4 sm:top-10 bg-white/95 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 flex items-center space-x-2 sm:space-x-3 w-28 sm:w-40 text-left z-20">
          <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl bg-sky-50 flex items-center justify-center text-sky-500 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/xl" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" /></svg>
          </div>
          <div>
            <h4 className="text-xs sm:text-base font-bold text-gray-800 leading-none">2k+</h4>
            <p className="text-[9px] sm:text-xs text-gray-400 font-medium mt-0.5">Developers</p>
          </div>
        </div>

        {/* FLOATING CARD 3: 5000+ Sold Properties -> ADDED z-20 FOR OVERLAY LAYER */}
        <div className="absolute right-[-15px] sm:right-[-60px] bottom-14 sm:bottom-20 bg-white/95 p-2 sm:p-3 rounded-xl sm:rounded-2xl shadow-xl border border-gray-100 flex items-center space-x-2 sm:space-x-3 w-32 sm:w-44 text-left z-20">
          <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/xl" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.505-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" /></svg>
          </div>
          <div>
            <h4 className="text-xs sm:text-base font-bold text-gray-800 leading-none">5000+</h4>
            <p className="text-[9px] sm:text-xs text-gray-400 font-medium mt-0.5">property Sold</p>
          </div>
        </div>

        {/* Floating Calendar Overlay Sticky Trigger Option -> ADDED z-20 FOR OVERLAY LAYER */}
        <button className="absolute right-[-20px] sm:right-[-80px] bottom-36 bg-[#7C3AED] hover:bg-[#6D28D9] text-white p-2.5 rounded-xl shadow-lg shadow-purple-200 transition-all z-20">
          <svg xmlns="http://www.w3.org/2000/xl" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
          </svg></button>

      </div>

    </div>
  )
};

export default Hero;