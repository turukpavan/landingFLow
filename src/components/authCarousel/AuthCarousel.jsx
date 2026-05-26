import { useEffect, useState } from "react";
import { FaBuilding, FaHouse, FaUser } from "react-icons/fa6";

const AuthCarousel = ({ images, page }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-full rounded-[20px] overflow-hidden w-[80%] mx-auto">
      
      {/* IMAGE */}
      <img
        src={images[currentIndex]}
        alt="auth"
        className="w-full h-[850px] object-fit transition-all duration-700"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* TOP LOGO */}
      <div className="absolute top-7 left-7 z-10">
        <h2 className="text-white text-[20px] font-semibold tracking-wide">
          Real Estate
        </h2>
      </div>

      {/* BOTTOM CONTENT */}
      <div className="absolute bottom-8 left-7 right-7 z-10 text-white">

        {/* SLIDER INDICATORS */}
        <div className="flex items-center gap-2 mb-6">
          {images.map((_, index) => (
            <div
              key={index}
              className={`rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? "w-8 h-[4px] bg-white"
                  : "w-4 h-[4px] bg-white/50"
              }`}
            />
          ))}
        </div>

        {/* TITLE */}
        <h1 className="text-[28px] leading-[46px] font-semibold max-w-[300px]">
          {page === "signup"
            ? "Start your property journey today."
            : "Find  it, Book it. Manage it."}
        </h1>

        {/* STATS */}
        {page === "signup" && (
        <div className="flex flex-wrap gap-5 mt-10">
          
          {/* PROPERTY */}
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <FaHouse className="text-[18px]" />
            </div>

            <div>
              <h3 className="text-[22px] font-bold">40k+</h3>
              <p className="text-[13px] text-gray-200 mt-1">
                Premium Property
              </p>
            </div>
          </div>

          {/* AGENTS */}
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <FaUser className="text-[18px]" />
            </div>

            <div>
              <h3 className="text-[22px] font-bold">4k+</h3>
              <p className="text-[13px] text-gray-200 mt-1">
                Real Estate Agent
              </p>
            </div>
          </div>

          {/* DEVELOPERS */}
          <div className="flex items-start gap-3">
            <div className="mt-1">
              <FaBuilding className="text-[18px]" />
            </div>

            <div>
              <h3 className="text-[22px] font-bold">2k+</h3>
              <p className="text-[13px] text-gray-200 mt-1">
                Developers
              </p>
            </div>
          </div>

        </div>
        )}
      </div>
    </div>
  );
};

export default AuthCarousel;