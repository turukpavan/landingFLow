// services/homeService.js

import apiClient from "../api/apiClient";

export const homeService = {
  getPropertiesData: async () => {
    const response = await apiClient.get("api/buyer/search?per_page=10");

    return response.data;
  },


  getCitiesData: async () => {
    const response = await apiClient.get("api/buyer/explore");
    return response.data;
  },
  getAgentsData: async () => {
    const response = await apiClient.get("api/buyer/agents?per_page=12");
    return response.data;
  },
  getTestimonialsData: async () => {
    const response = await apiClient.get("api/buyer/properties/15/reviews?per_page=10");
    return response.data;
  }
};