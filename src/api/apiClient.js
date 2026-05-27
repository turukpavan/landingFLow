// src/api/apiClient.js
import axios from 'axios';

// Create the isolated instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://elyiteprop.com/api',
  timeout: 10000, // Safety timeout after 10 seconds
  withCredentials: false, // Automatically handle cookies globally
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

// GLOBAL RESPONSE INTERCEPTOR: Handle structural API errors globally
apiClient.interceptors.response.use(
  (response) => response, // Directly pass back successful responses
  (error) => {
    // Standard centralized error routing
    if (error.response) {
      const { status, data } = error.response;

      // Handle common global system status codes automatically
      if (status === 401) {
        // Example: Clear unauthorized user sessions or redirect to login
        console.warn('Unauthorized! Redirecting...');
      }

      // Return parsed error payload back to the calling function
      return Promise.reject(data);
    }
    
    // Handle fallback scenarios where the server drops or network disconnects
    return Promise.reject({ message: error.message || 'Network connection error' });
  }
);

export default apiClient;