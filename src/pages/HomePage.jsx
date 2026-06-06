import { useCallback, useEffect, useState } from "react";
import Hero from "../components/Hero";
import TestimonialsCarousel from "../components/carousels/TestimonialsCarousel";
import AgentCarousel from "../components/carousels/AgentCarousel";
import { homeService } from "../services/homeService";
import RecentProperties from "../components/RecentProperties";
import UpcomingProperties from "../components/UpcomingProperties";
import Statistics from "../components/Statistics";
import Solutions from "../components/Solutions";
import ExploreProperties from "../components/ExploreProperties";
import Partners from "../components/Partners";
import FreeConsultation from "../components/FreeConsultation";
function Home() {
  const [propertiesData, setPropertiesData] = useState([]);

  //   fetch properties data from backend API and update state (useEffect with homeService.getPropertiesData)
  const fetchPropertiesData = useCallback(async () => {
    try {
      const res = await homeService.getPropertiesData();
      setPropertiesData(res.data.properties);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    Promise.resolve().then(fetchPropertiesData);
  }, [fetchPropertiesData]);

  return (
    <div>
      <Hero />
      {/* remaining content */}
      {/* recent properties section */}
      <RecentProperties propertiesData={propertiesData} />
      {/* upcoming properties */}
      <UpcomingProperties propertiesData={propertiesData} />
      {/* stats sections  */}
      <Statistics />
      {/* Solution sections  */}
      <Solutions />
      {/* Review Carousel section */}
      <TestimonialsCarousel />

      {/* Explore Properties by Cities Section */}
      <ExploreProperties />

      {/* Agent Carousel Section */}
      <AgentCarousel />

      {/* Our Real Estate Partners Section */}
      <Partners />

      {/* free consultation section */}
      <FreeConsultation />
      {/* get in touch section */}

      {/* footer */}
    </div>
  );
}

export default Home;
