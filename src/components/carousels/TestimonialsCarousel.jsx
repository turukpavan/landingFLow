import { useState, useEffect } from "react";
import { homeService } from "../../services/homeService";

const TestimonialsCarousel = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Simulation of API fetching
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setLoading(true);
        // Replace with your actual endpoint: await fetch("YOUR_API_ENDPOINT")
        const response = await homeService.getTestimonialsData();
        if (response.status && response.data?.reviews) {
          setTestimonials(response.data.reviews);
        }
      } catch (error) {
        console.error("Error loading testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const totalItems = testimonials.length;

  const handlePrev = () => {
    if (totalItems === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalItems - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (totalItems === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === totalItems - 1 ? 0 : prevIndex + 1
    );
  };

  // Safe helper to truncate massive overflow strings (comments or names)
  const truncateText = (text, maxLength) => {
    if (!text) return "No comment provided.";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#4C359E] via-[#3B2687] to-[#25145A] text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto relative">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-14">
          <div className="max-w-md relative">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              What Our Client Says
            </h2>
            <div className="hidden lg:block absolute bottom-[-12px] right-[-35px]">
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
          <p className="text-purple-200/80 max-w-[29rem]">
            Hear from homebuyers, renters, and investors who trusted us with their journey.
          </p>
        </div>

        {/* Carousel Slider Interface Container */}
        <div className="relative px-0 md:px-14">
          
          {/* Navigation Controls (Hidden if loading or empty) */}
          {!loading && totalItems > 0 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-0 md:left-[-10px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all z-20 shadow-lg backdrop-blur-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="absolute right-0 md:right-[-10px] top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all z-20 shadow-lg backdrop-blur-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </>
          )}

          {/* Viewport Window Container */}
          <div className="overflow-hidden w-full">
            {loading ? (
              /* Shimmer Loading Skeleton State */
              <div className="flex space-x-6 w-full">
                {[1, 2, 3].map((skeletonId) => (
                  <div key={skeletonId} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 bg-white/5 border border-white/10 rounded-2xl p-6 animate-pulse min-h-[220px] flex flex-col justify-between">
                    <div>
                      <div className="h-4 bg-white/20 rounded w-1/3 mb-4"></div>
                      <div className="h-3 bg-white/10 rounded w-full mb-2"></div>
                      <div className="h-3 bg-white/10 rounded w-5/6"></div>
                    </div>
                    <div className="flex items-center space-x-3 pt-4 border-t border-white/5">
                      <div className="w-10 h-10 rounded-full bg-white/20"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-3 bg-white/20 rounded w-1/2"></div>
                        <div className="h-2 bg-white/10 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : totalItems === 0 ? (
              /* Empty Fallback State */
              <div className="text-center py-12 text-purple-200/60">
                No reviews available at the moment.
              </div>
            ) : (
              /* Main Track */
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {testimonials.map((item) => (
                  <div
                    key={item.id}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-3"
                  >
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col h-full min-h-[240px] justify-between transition-all duration-300 hover:bg-white/15">
                      <div>
                        {/* Star Rating Layout */}
                        <div className="flex items-center space-x-1 mb-4 text-amber-400">
                          {[...Array(item.rating || 5)].map((_, i) => (
                            <svg
                              key={i}
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-4 h-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                        </div>
                        {/* Normalized Truncated Comment text */}
                        <p className="text-xs sm:text-sm font-medium text-purple-100/90 leading-relaxed mb-6 break-words">
                          "{truncateText(item.comment, 160)}"
                        </p>
                      </div>

                      {/* User Profile Info Row */}
                      <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
                        <img
                          src={item.reviewer_image || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=60"} // Fallback placeholder if avatar is null
                          alt={item.reviewer_name}
                          className="w-10 h-10 rounded-full object-cover border border-purple-400/30 shrink-0"
                        />
                        <div className="min-w-0">
                          <h4 className="text-sm font-bold text-white tracking-wide truncate">
                            {truncateText(item.reviewer_name, 30).replace("...", "")}
                          </h4>
                          <p className="text-[11px] text-purple-300/80 font-medium">
                            {item.is_mine ? "Verified Buyer (You)" : "Verified Client"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

// Simulated mock async object matching your exact API payload structure


export default TestimonialsCarousel;