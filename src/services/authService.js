// src/services/authService.js
import apiClient from '../api/apiClient';

export const authService = {
  login: async (loginData) => {
    return apiClient.post('api/auth/login', loginData);
  },

  register: async (role, registrationData) => {
    return apiClient.post(`api/auth/register/${role}`, registrationData);
  },

  verifyOtp: async (otpData) => {
    return apiClient.post('api/auth/verify-otp', otpData);
  },
  forgotPassword: async (forgotPassData) => {
    return apiClient.post('api/auth/forgot-password', forgotPassData);
  },
  resendOtp : async (resendOtpData)=>{
    return apiClient.post('apiauth/resend-otp',resendOtpData)
  },
resetPassword :async (resetData)=>{
    return apiClient.post('api/auth/reset-password', resetData);
}
};