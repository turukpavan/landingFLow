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
    
    const token = localStorage.getItem("token");

    if (token && config.url?.startsWith('/')) {
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