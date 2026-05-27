// src/services/authService.js
import apiClient from '../api/apiClient';

export const authService = {
  login: async (loginData) => {
    return apiClient.post('/auth/login', loginData);
  },

  register: async (role, registrationData) => {
    return apiClient.post(`/auth/register/${role}`, registrationData);
  },

  verifyOtp: async (otpData) => {
    return apiClient.post('/auth/verify-otp', otpData);
  },
  forgotPassword: async (forgotPassData) => {
    return apiClient.post('/auth/forgot-password', forgotPassData);
  },
  resendOtp : async (resendOtpData)=>{
    return apiClient.post('auth/resend-otp',resendOtpData)
  },
resetPassword :async (resetData)=>{
    return apiClient.post('/auth/reset-password', resetData);
}
};