import { useState } from "react";
import { toast } from "react-toastify";
import ResetPassword from "./ResetPassword";
import { ChevronLeftIcon } from "./Icons";
import { useAuthActions } from "../hooks/useAuthActions";

const VerifyWithOtp = ({ email, showotpScreen, type }) => {
  const [showResetPassScreen, setShowResetPassScreen] = useState(false);
  const [otpArray, setOtpArray] = useState(["", "", "", "", "", ""]);

  // Connect to shared authentication layout state management
  const { loading, verifyOtpAction, resendOtpAction } = useAuthActions();

  // OTP CHANGE INDIVIDUAL CHARACTER
  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updatedOtp = [...otpArray];
    updatedOtp[index] = value;
    setOtpArray(updatedOtp);

    // Auto-focus forward
    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  // FULL 6-DIGIT PASTE SUPPORT
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    // Validate if the pasted text is numeric and fits within our boundaries
    if (!/^\d{6}$/.test(pastedData)) return;

    const digits = pastedData.split("");
    setOtpArray(digits);

    // Focus the last input box
    document.getElementById("otp-5")?.focus();
  };

  // OTP BACKSPACE NAVIGATION
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (!otpArray[index] && index > 0) {
        const updatedOtp = [...otpArray];
        updatedOtp[index - 1] = "";
        setOtpArray(updatedOtp);
        document.getElementById(`otp-${index - 1}`)?.focus();
      }
    }
  };

  // RESEND OTP REQUEST VIA HOOK
  const handleResendOtp = () => {
    resendOtpAction({ email });
  };

  // VERIFY OTP FORM DISPATCH VIA HOOK
  const handleVerifyOtp = () => {
    const rawOtpString = otpArray.join("");
    if (rawOtpString.length !== 6) {
      toast.error("Please enter a valid 6-digit code.");
      return;
    }

    const payload = { email, otp: rawOtpString };

    verifyOtpAction(
      payload,
      () => {
        // Run successful hook lifecycle navigation tasks
        if (type === "signup") {
          showotpScreen(false);
        } else {
          setShowResetPassScreen(true);
        }
        setOtpArray(["", "", "", "", "", ""]);
      },
      type,
    );
  };

  return showResetPassScreen ? (
    <ResetPassword email={email} />
  ) : (
    <div className="w-full max-w-[340px] lg:max-w-[420px] flex flex-col gap-3">
      {/* BACK NAVIGATION BUTTON */}
      <button
        type="button"
        disabled={loading}
        onClick={() => showotpScreen(false)}
        className="flex items-center gap-2 text-[11px] text-gray-500 self-start disabled:opacity-50 transition-opacity duration-200"
      >
        <span className="bg-[#F3EEFF] p-1.5 rounded-md flex items-center justify-center">
          <ChevronLeftIcon />
        </span>
        Go Back
      </button>

      {/* HEADER SECTION */}
      <div className="text-left mt-2">
        <h2 className="text-[24px] lg:text-[26px] leading-[30px] font-bold text-gray-800 mb-2">
          Verify Your Account
        </h2>
        <p className="text-[12px] text-gray-500 leading-5">
          We've sent a 6-digit code to
          <br />
          <span className="font-medium text-gray-700">{email}</span>
        </p>
      </div>

      {/* 6-DIGIT OTP GRID */}
      <div
        className="flex items-center justify-between gap-2 my-2"
        onPaste={handlePaste}
      >
        {otpArray.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={1}
            disabled={loading}
            value={digit}
            onChange={(e) => handleOtpChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-10 h-10 rounded-lg border border-gray-300 text-center text-sm font-semibold outline-none focus:border-[#885EFF] disabled:bg-gray-50 disabled:text-gray-400 transition-all text-gray-800"
          />
        ))}
      </div>

      {/* FORM ACTION TRIGGER BUTTON */}
      <button
        type="button"
        disabled={loading}
        onClick={handleVerifyOtp}
        className={`w-full h-10 rounded-xl text-white text-[12px] font-medium transition-all duration-300 shadow-sm ${
          loading
            ? "bg-purple-400 cursor-not-allowed"
            : "bg-[#885EFF] hover:bg-[#6A3DFF]"
        }`}
      >
        {loading ? "Verifying..." : "Verify"}
      </button>

      {/* RESEND LINK UTILITY */}
      <p className="text-center text-[11px] text-gray-500 mt-2">
        Don't receive the code?{" "}
        <button
          type="button"
          disabled={loading}
          onClick={handleResendOtp}
          className="text-[#885EFF] font-semibold hover:underline disabled:text-purple-300 disabled:no-underline disabled:cursor-not-allowed"
        >
          Resend
        </button>
      </p>
    </div>
  );
};

export default VerifyWithOtp;
