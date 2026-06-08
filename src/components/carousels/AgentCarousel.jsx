import { useCallback, useEffect, useRef, useState } from "react";
import { homeService } from "../../services/homeService";
import { BASE_URL } from "../../api/api";
import {
  VectorCurveIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "../../components/ui/Icons";

const AgentCarousel = () => {
  const [agents, setAgents] = useState([]);
  const [loadingAgents, setLoadingAgents] = useState(true);

  const fetchAgents = useCallback(async () => {
    try {
      setLoadingAgents(true);
      const res = await homeService.getAgentsData();
      setAgents(res.data.agents || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingAgents(false);
    }
  }, []);

  useEffect(() => {
    Promise.resolve().then(fetchAgents);
  }, [fetchAgents]);

  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
  const autoPlayTimer = useRef(null);

  const totalAgents = agents.length;
  const [visibleCards, setVisibleCards] = useState(1);
  const totalAgentPages = Math.max(1, Math.ceil(totalAgents / visibleCards));
  const maxAgentIndex = totalAgentPages - 1;

  useEffect(() => {
    const handleResize = () => {
      const nextVisibleCards = window.innerWidth >= 768 ? 2 : 1;
      setVisibleCards((currentVisible) => {
        if (currentVisible === nextVisibleCards) return currentVisible;

        setCurrentAgentIndex((prevIndex) =>
          Math.min(
            prevIndex,
            Math.max(0, Math.ceil(totalAgents / nextVisibleCards) - 1)
          )
        );
        return nextVisibleCards;
      });
    };

    handleResize(); // Initial setup validation
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [totalAgents]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayTimer.current) clearInterval(autoPlayTimer.current);
  }, []);

  const startAutoPlay = useCallback(() => {
    stopAutoPlay();
    autoPlayTimer.current = setInterval(() => {
      setCurrentAgentIndex((prev) => (prev >= maxAgentIndex ? 0 : prev + 1));
    }, 4000);
  }, [maxAgentIndex, stopAutoPlay]);

  useEffect(() => {
    if (!loadingAgents && totalAgents > 0) {
      startAutoPlay();
    }
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay, loadingAgents, totalAgents]);

  const handleAgentPrev = () => {
    stopAutoPlay();
    setCurrentAgentIndex((prev) => (prev === 0 ? maxAgentIndex : prev - 1));
    startAutoPlay();
  };

  const handleAgentNext = () => {
    stopAutoPlay();
    setCurrentAgentIndex((prev) => (prev >= maxAgentIndex ? 0 : prev + 1));
    startAutoPlay();
  };

  const handleDotClick = (index) => {
    stopAutoPlay();
    setCurrentAgentIndex(index);
    startAutoPlay();
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#4C359E] via-[#3B2687] to-[#25145A] text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        
        {/* Section Heading Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-14">
          <div className="max-w-md relative">
            <h2 className="section-heading text-white">
              Meet Our Expert Agent
            </h2>
            <div className="hidden lg:block absolute bottom-[-10px] right-[-32px]">
              <VectorCurveIcon />
            </div>
          </div>
          <p className="section-copy text-purple-200/80 max-w-[29rem]">
            Hear from homebuyers, renters, and investors who trusted us with their journey.
          </p>
        </div>

        {/* Carousel Slider Panel Display Container */}
        <div className="relative px-0 md:px-14 mb-10">
          
          {/* Navigation Controls */}
          {!loadingAgents && totalAgents > 0 && (
            <>
              <button
                onClick={handleAgentPrev}
                className="absolute left-0 md:left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all z-20 shadow-md backdrop-blur-sm"
              >
                <ChevronLeftIcon />
              </button>

              <button
                onClick={handleAgentNext}
                className="absolute right-0 md:right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all z-20 shadow-md backdrop-blur-sm"
              >
                <ChevronRightIcon />
              </button>
            </>
          )}

          {/* Slider Active Mask Window */}
          <div className="overflow-hidden w-full">
            {loadingAgents ? (
              /* Shimmer Loading Skeleton State */
              <div className="flex w-full">
                {[1, 2].map((skeletonId) => (
                  <div
                    key={skeletonId}
                    className="w-full md:w-1/2 flex-shrink-0 flex justify-center px-3"
                  >
                    <div className="w-4/5 bg-white rounded-[24px] p-5 sm:p-6 shadow-xl flex flex-col justify-between min-h-[300px] animate-pulse">
                      <div>
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-14 h-14 rounded-full bg-gray-200"></div>
                          <div className="flex-1 space-y-2">
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-3 bg-gray-100 rounded w-1/3"></div>
                          </div>
                        </div>
                        <div className="space-y-2 mb-6">
                          <div className="h-3 bg-gray-200 rounded w-full"></div>
                          <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                        </div>
                        <div className="grid grid-cols-4 gap-2 mb-6">
                          {[1, 2, 3, 4].map((t) => (
                            <div key={t} className="aspect-video rounded-lg bg-gray-100"></div>
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                        <div className="h-8 bg-gray-200 rounded-xl w-24"></div>
                        <div className="h-4 bg-gray-200 rounded w-8"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : totalAgents === 0 ? (
              /* Empty Fallback State */
              <div className="text-center py-12 text-purple-200/60">
                No expert agents available at the moment.
              </div>
            ) : (
              /* Active Sliding Content Track */
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentAgentIndex * 100}%)`,
                }}
              >
                {agents.map((agent) => (
                  <div
                    key={agent.id}
                    className="w-full md:w-1/2 flex-shrink-0 flex justify-center px-3"
                  >
                    <div className="w-4/5 bg-white rounded-[24px] p-5 sm:p-6 text-left text-gray-800 shadow-xl flex flex-col justify-between h-full">
                      <div>
                        {/* Profile Metadata Segment */}
                        <div className="flex items-center space-x-4 mb-4">
                          <img
                            src={`${BASE_URL}/storage/${agent.image}`}
                            alt={agent.name}
                            className="w-14 h-14 rounded-full object-cover border-2 border-purple-100"
                          />
                          <div>
                            <div className="flex items-center space-x-2">
                              <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                                {agent.name}
                              </h3>
                              <span className="bg-[#F3E8FF] text-[#7C3AED] text-[9px] font-bold px-2 py-0.5 rounded border border-purple-200/40 flex items-center">
                                ✓ Verified
                              </span>
                            </div>
                            <p className="text-xs font-semibold text-gray-400 mt-0.5">
                              {agent.location ? agent.location.slice(0, 20) : "Location N/A"}
                            </p>
                          </div>
                        </div>

                        {/* Agent Narrative Summary Block */}
                        <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mb-6">
                          {agent.description}
                        </p>

                        {/* Property Inner Grid Thumbnails Row */}
                        <div className="grid grid-cols-4 gap-2 mb-6">
                          {agent.gallery?.map((thumb, i) => (
                            <div
                              key={i}
                              className="aspect-video rounded-lg overflow-hidden bg-gray-100 border border-gray-100"
                            >
                              <img
                                src={thumb}
                                alt="Property highlight thumbnail"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Action Interactive Footer Row */}
                      <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                        <button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-5 py-2 rounded-xl text-xs font-bold transition-colors">
                          View detail
                        </button>
                        <span className="text-xs font-bold text-[#7C3AED] tracking-wide">
                          {agent.properties_count} Properties
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Slider Pagination Lower Active Dot Indicators */}
        {!loadingAgents && totalAgents > 0 && (
          <div className="flex items-center justify-center space-x-2">
            {Array.from({ length: totalAgentPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentAgentIndex === index ? "w-5 bg-white" : "w-2 bg-white/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AgentCarousel;