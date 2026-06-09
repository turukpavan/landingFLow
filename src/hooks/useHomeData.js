import { useState, useEffect, useCallback } from "react";
import { homeService } from "../services/homeService";
import { toast } from "react-toastify";

/**
 * Custom hook for fetching and managing state for any homeService method.
 * @param {string} serviceMethod - The function name inside homeService (e.g., 'getAgentsData')
 * @param {string} dataKey - The key where the array lives in response.data (e.g., 'agents')
 * @param {any} fallbackValue - Default value if no data is returned (usually empty array [])
 */
export const useHomeData = (serviceMethod, dataKey, fallbackValue = []) => {
  const [data, setData] = useState(fallbackValue);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    // Safety check to ensure the endpoint method actually exists
    if (!homeService[serviceMethod]) {
      console.error(`Method ${serviceMethod} does not exist on homeService.`);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await homeService[serviceMethod]();
      
      // Dynamically extract data using the provided dataKey
      // Using a functional update state prevents fallbackValue dependency requirements
      setData(res?.data?.[dataKey] || fallbackValue);
    } catch (error) {
      const errorMessage = 
        error?.response?.data?.message || 
        error?.message || 
        `Failed to load ${dataKey}`;
      
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
    // REMOVED fallbackValue from dependencies to stop the reference-change trigger loop
  }, [serviceMethod, dataKey]); 

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, refetch: fetchData };
};