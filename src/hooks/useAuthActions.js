import { useState } from "react";
import { authService } from "../services/authService";
import { toast } from "react-toastify";

export const useAuthActions = () => {
  const [loading, setLoading] = useState(false);

  // 1. FORGOT PASSWORD ACTION
  const forgotPasswordAction = async (email, onSuccess) => {
    try {
      setLoading(true);
      const res = await authService.forgotPassword({ email });
      if (res?.status === 200 || res) {
        toast.success(res?.otp || res?.data?.message || "Verification code sent.");
        if (onSuccess) onSuccess();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message || "Failed to send code.");
    } finally {
      setLoading(false);
    }
  };

  const resetPasswordAction = async (payload, onSuccess) => {
    try {
      setLoading(true);
      const res = await authService.resetPassword(payload);
      
      toast.success(
        res?.message || "Password reset successful. You can now log in."
      );
      
      if (onSuccess) onSuccess();
    } catch (error) {
      toast.error(error?.message || "Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };
  // VERIFY OTP ACTION
  const verifyOtpAction = async (payload, onSuccess, type) => {
    try {
      setLoading(true);
      const res = await authService.verifyOtp(payload);
      
      if (type === "signup") {
        toast.success(res?.message || "Account created successfully");
      }
      
      if (onSuccess) onSuccess();
    } catch (error) {
      toast.error(error?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  // RESEND OTP ACTION
  const resendOtpAction = async (payload) => {
    try {
      setLoading(true);
      const res = await authService.resendOtp(payload);
      toast.success(res?.message || "OTP Resent Successfully");
    } catch (error) {
      toast.error(error?.message || "Failed To Resend OTP");
    } finally {
      setLoading(false);
    }
  };

  // 2. LOGIN ACTION
  const loginAction = async (formData, onSuccess) => {
    try {
      setLoading(true);
      const res = await authService.login(formData);
      const authData = res?.data?.data || res?.data || res;
      
      if (authData?.token) {
        localStorage.setItem("token", authData.token);
        localStorage.setItem("refreshToken", authData.refresh_token);
        localStorage.setItem("user", JSON.stringify(authData.user));
        toast.success(res?.message || "Login successful!");
        if (onSuccess) onSuccess();
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // 3. REGISTER ACTION (Added)
  const registerAction = async (activeRole, formData, onSuccess) => {
    if (formData.password !== formData.password_confirmation) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const res = await authService.register(activeRole, formData);
      toast.success(res?.message || "OTP sent successfully");
      if (onSuccess) onSuccess();
    } catch (error) {
      toast.error(error?.response?.data?.message || error?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    forgotPasswordAction,
    resetPasswordAction,
    verifyOtpAction,
    resendOtpAction,
    loginAction,
    registerAction,
  };
};