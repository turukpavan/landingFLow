import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ,
  timeout: 10000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// REQUEST INTERCEPTOR
apiClient.interceptors.request.use(
  (config) => {
    // Check if the request explicitly asks to skip authorization
    if (config.skipAuth) {
      return config;
    }
    
    const token = localStorage.getItem("token");

    // Only attach token if it exists and it's going to your internal baseURL
    if (token && config.url?.startsWith('/')) {
      config.headers.Authorization = `Bearer ${token}`;
    } else if (token && !config.skipAuth) {
      // Fallback for absolute URLs pointing to your base domain
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// RESPONSE INTERCEPTOR
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      console.error(data)

      if (status === 401) {
        // FIX: Prevent infinite redirect loops on the login page
        const isLoginPage = window.location.pathname === "/login";

        if (!isLoginPage) {
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("user");

          // Clear credentials and route back to login cleanly
          window.location.href = "/login";
        }
      }

      // Always return the backend's precise error message payload if available
      return Promise.reject(data || error.response);
    }

    return Promise.reject({
      message: error.message || "Network connection error",
    });
  }
);

export default apiClient;