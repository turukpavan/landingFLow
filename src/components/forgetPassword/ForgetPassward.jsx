import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { toast } from "react-toastify";
import VerifyWithOtp from "../verifyWithOtp/VerifyWithOtp";
import { authService } from "../../services/authService";

export default function ForgotPassword({ setForgetPassword }) {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [codeScreen, setCodeScreen] = useState(false);
  useState(["", "", "", "", "", ""]);
  // submit button for forgetpassword screen
  const handleForgotPassward = async (e) => {
    e.preventDefault();
    // Handle sending the code here
    try {
      setLoading(true);
      const res = await authService.forgotPassword({email});
      if (res.status === 200) {
        toast.success(res?.otp || "Verification code sent to your email.");
      }
      setCodeScreen(true);
      setLoading(false);
    } catch (error) {
      toast.error(
        error?.message || "Failed to send verification code.",
      );
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {codeScreen ? (
        // otp screen
        <VerifyWithOtp
          email={email}
          showotpScreen={setCodeScreen}
          type="forgotPassword"
        />
      ) : (
        // forget password screen
        <div className="w-full max-w-[340px] lg:max-w-[420px] flex flex-col gap-3">
          {/* BACK BUTTON */}
          <button
            onClick={() => setForgetPassword(false)}
            className="flex items-center gap-2 text-[11px] text-gray-400 mb-4"
          >
            <span className="bg-[#F3EEFF] p-1.5 rounded-md">
              <FaArrowLeft className="text-[#885EFF] text-[9px]" />
            </span>
            Back to home
          </button>
          {/* Header Section */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
              Forgot Password?
            </h1>
            <p className="text-xs text-gray-500 leading-relaxed font-normal">
              Enter your registered email address or phone number, and we'll
              send you a code to reset your password.
            </p>
          </div>

          {/* Form Section */}
          <form onSubmit={handleForgotPassward} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="email"
                className="text-xs font-semibold text-gray-600"
              >
                Email
              </label>
              <div className="relative flex items-center">
                {/* Outlined Mail Icon */}
                <span className="absolute left-4 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  id="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 text-xs border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 placeholder-gray-400 font-medium text-gray-800"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#8353FF] hover:bg-[#7242EE] text-white text-xs font-semibold py-3.5 px-4 rounded-xl transition duration-200 shadow-sm"
            >
              {loading ? "Sending..." : "Send Code"}
            </button>
          </form>
        </div>
      )}
    </>
  );
}
