import { useState } from "react";
import VerifyWithOtp from "./VerifyWithOtp";
import { BackArrowIcon, OutlinedMailIcon } from "./Icons";
import { useAuthActions } from "../hooks/useAuthActions";
export default function ForgotPassword({ setForgetPassword }) {
  const [email, setEmail] = useState("");
  const [codeScreen, setCodeScreen] = useState(false);
  useState(["", "", "", "", "", ""]);

     const { loading, forgotPasswordAction } = useAuthActions();
   
  // submit button for forgetpassword screen
  const handleForgotPassward = async (e) => {
    e.preventDefault();
    // Handle sending the code here
   forgotPasswordAction({email},()=>{
    setCodeScreen(true)
   })
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
         <span className="bg-[#F3EEFF] p-1.5 rounded-md flex items-center justify-center">
              <BackArrowIcon />
            </span>
            Back 
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
                  <OutlinedMailIcon/>
                </span>
                <input
                  type="email"
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
