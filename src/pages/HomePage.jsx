import { useHomeData } from "../hooks/useHomeData";
import Hero from "../components/Hero";
import TestimonialsCarousel from "../components/carousels/TestimonialsCarousel";
import AgentCarousel from "../components/carousels/AgentCarousel";
import RecentProperties from "../components/RecentProperties";
import UpcomingProperties from "../components/UpcomingProperties";
import Statistics from "../components/Statistics";
import Solutions from "../components/Solutions";
import ExploreProperties from "../components/ExploreProperties";
import Partners from "../components/Partners";
import FreeConsultation from "../components/FreeConsultation";
import GetInTouch from "../components/GetInTouch";

function Home() {
  // 1. CONSUME THE COMMON HOOK
  // Calls the dynamic homeService endpoint, unpacks 'properties' response key, defaults to an empty array
  const { data: propertiesData, loading: loadingProperties } = useHomeData(
    "getPropertiesData",
    "properties",
    []
  );

  return (
    <div>
      <Hero />
      
      {/* Recent Properties Segment */}
      <RecentProperties 
        propertiesData={propertiesData} 
        isLoading={loadingProperties} 
      />
      
      {/* Upcoming Properties Segment */}
      <UpcomingProperties 
        propertiesData={propertiesData} 
        isLoading={loadingProperties} 
      />
      
      {/* Metrics & Informational Tracks */}
      <Statistics />
      <Solutions />
      
      {/* Carousel Frameworks */}
      <TestimonialsCarousel />
      <ExploreProperties />
      <AgentCarousel />
      
      {/* Supporting Conversion Sections */}
      <Partners />
      <FreeConsultation />
      <GetInTouch />
    </div>
  );
}

export default Home;