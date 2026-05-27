import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { toast } from "react-toastify";
import ResetPassword from "../resetPassword/ResetPassword";
import { authService } from "../../services/authService";

const VerifyWithOtp = ({ email, showotpScreen, type }) => {
  const [showResetPassScreen, setShowResetPassScreen] = useState(false);
  const [otp, setOtp] = useState("");

  const [otpArray, setOtpArray] = useState(["", "", "", "", "", ""]);

  // OTP CHANGE
  const handleOtpChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const updatedOtp = [...otpArray];

    updatedOtp[index] = value;

    setOtpArray(updatedOtp);

    setOtp(updatedOtp.join(""));

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  // OTP BACKSPACE
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otpArray[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  // RESEND OTP
  const handleResendOtp = async () => {
    try {
      const res = await authService.resendOtp({email: email});

      toast.success(res?.message || "OTP Resent Successfully");
    } catch (error) {
      toast.error(error?.message || "Failed To Resend OTP");
    }
  };

  // VERIFY OTP
  const handleVerifyOtp = async () => {
    try {
      const res = await authService.verifyOtp({email,otp})
     
      type === "signup" &&
        toast.success(res?.message || "Account created successfully");

      setOtp("");

      setOtpArray(["", "", "", "", "", ""]);
      if (type === "signup") {
        showotpScreen(false);
      }
      setShowResetPassScreen(true);

      // add reset password
    } catch (error) {
      toast.error(error?.message || "Invalid OTP");
    }
  };
  return showResetPassScreen ? (
    <ResetPassword email={email} />
  ) : (
    <div className="w-full max-w-[340px] lg:max-w-[420px] flex flex-col gap-3">
      {/* BACK */}
      <button
        type="button"
        onClick={() => showotpScreen(false)}
        className="flex items-center gap-2 text-[11px] text-gray-500"
      >
        <span className="bg-[#F3EEFF] p-1.5 rounded-md">
          <FaChevronLeft className="text-[#885EFF] text-[8px]" />
        </span>
        Go Back
      </button>

      {/* TITLE */}
      <h2 className="text-[24px] lg:text-[26px] leading-[30px] font-bold text-gray-800">
        Verify Your Account
      </h2>

      <p className="text-[12px] text-gray-500 leading-5">
        We've sent a 6-digit code to
        <br />
        <span className="font-medium text-gray-700">{email}</span>
      </p>

      {/* OTP */}
      <div className="flex items-center justify-between gap-2">
        {otpArray.map((digit, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleOtpChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-10 h-10 rounded-lg border border-gray-300 text-center text-sm font-semibold outline-none focus:border-[#885EFF]"
          />
        ))}
      </div>

      {/* BUTTON */}
      <button
        type="button"
        onClick={handleVerifyOtp}
        className="w-full h-10 rounded-xl bg-[#885EFF] hover:bg-[#6A3DFF] text-white text-[12px] font-medium transition-all duration-300"
      >
        Verify
      </button>

      {/* RESEND */}
      <p className="text-center text-[11px] text-gray-500">
        Don't receive the code?{" "}
        <button
          type="button"
          onClick={handleResendOtp}
          className="text-[#885EFF] font-semibold"
        >
          Resend
        </button>
      </p>
    </div>
  );
};

export default VerifyWithOtp;
