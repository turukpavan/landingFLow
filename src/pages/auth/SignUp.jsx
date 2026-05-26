import { useState } from "react";

import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";

import axios from "axios";
import { toast } from "react-toastify";

import { BASE_URL } from "../../api/api";

import {
  FaApple,
  FaBuilding,
  FaChevronLeft,
  FaHouse,
  FaLock,
  FaPhone,
  FaRegEnvelope,
  FaRegEye,
  FaRegEyeSlash,
  FaRegUser,
  FaUser,
} from "react-icons/fa6";

import AuthCarousel from "../../components/authCarousel/AuthCarousel";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
    const navigate = useNavigate();
  const carouselImages = [image1, image2, image3];

  const [activeRole, setActiveRole] =
    useState("buyer");

  const [formData, setFormData] =
    useState({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });

  const [showPassword, setShowPassword] =
    useState(false);

  const [
    showConfirmPassword,
    setShowConfirmPassword,
  ] = useState(false);

  const [showOtpInput, setShowOtpInput] =
    useState(false);

  const [otp, setOtp] = useState("");

  const [otpArray, setOtpArray] =
    useState([
      "",
      "",
      "",
      "",
      "",
      "",
    ]);

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      toast.error(
        "Passwords do not match"
      );
      return;
    }

    try {
      await axios.post(
        `${BASE_URL}/auth/register/${activeRole}`,
        formData
      );

      setShowOtpInput(true);

      toast.success(
        "OTP sent successfully"
      );
    } catch (error) {
      toast.error(
        error.message || "Signup failed"
      );
    }
  };

  // VERIFY OTP
  const handleVerifyOtp = async () => {
    try {
      await axios.post(
        `${BASE_URL}/auth/verify-otp`,
        {
          email: formData.email,
          otp,
        },
        {
          withCredentials: true,
        }
      );

      toast.success(
        "Account created successfully"
      );

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });

      setOtp("");

      setOtpArray([
        "",
        "",
        "",
        "",
        "",
        "",
      ]);

      setShowOtpInput(false);
    } catch (error) {
      toast.error(
        error.message || "Invalid OTP"
      );
    }
  };

  // OTP CHANGE
  const handleOtpChange = (
    value,
    index
  ) => {
    if (!/^[0-9]?$/.test(value))
      return;

    const updatedOtp = [...otpArray];

    updatedOtp[index] = value;

    setOtpArray(updatedOtp);

    setOtp(updatedOtp.join(""));

    if (value && index < 5) {
      document
        .getElementById(
          `otp-${index + 1}`
        )
        ?.focus();
    }
  };

  // OTP BACKSPACE
  const handleKeyDown = (
    e,
    index
  ) => {
    if (
      e.key === "Backspace" &&
      !otpArray[index] &&
      index > 0
    ) {
      document
        .getElementById(
          `otp-${index - 1}`
        )
        ?.focus();
    }
  };

  // RESEND OTP
  const handleResendOtp = async () => {
    try {
      await axios.post(
        `${BASE_URL}/auth/resend-otp`,
        {
          email: formData.email,
        }
      );

      toast.success(
        "OTP Resent Successfully"
      );
    } catch (error) {
      toast.error(
        error.message ||
          "Failed To Resend OTP"
      );
    }
  };

  // ROLES
  const roles = [
    {
      key: "buyer",
      label: "Buyer",
      icon: (
        <FaHouse className="text-[8px]" />
      ),
    },

    {
      key: "agent",
      label: "Agent",
      icon: (
        <FaUser className="text-[8px]" />
      ),
    },

    {
      key: "developer",
      label: "Developers",
      icon: (
        <FaBuilding className="text-[8px]" />
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      <div className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] min-h-screen">

        {/* LEFT SIDE */}
        <div className="hidden lg:block h-screen p-4">

          <AuthCarousel
            page="signup"
            images={carouselImages}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center min-h-screen lg:h-screen px-4 sm:px-6 py-5 lg:py-0">

          {showOtpInput ? (

            // OTP SECTION
            <div className="w-full max-w-[340px] lg:max-w-[420px] flex flex-col gap-3">

              {/* BACK */}
              <button
                type="button"
                onClick={() =>
                  setShowOtpInput(false)
                }
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

                <span className="font-medium text-gray-700">
                  {formData.email}
                </span>
              </p>

              {/* OTP */}
              <div className="flex items-center justify-between gap-2">
                {otpArray.map(
                  (digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) =>
                        handleOtpChange(
                          e.target.value,
                          index
                        )
                      }
                      onKeyDown={(e) =>
                        handleKeyDown(
                          e,
                          index
                        )
                      }
                      className="w-10 h-10 rounded-lg border border-gray-300 text-center text-sm font-semibold outline-none focus:border-[#885EFF]"
                    />
                  )
                )}
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

          ) : (

            // SIGNUP FORM
            <div className="w-full max-w-[340px] lg:max-w-[420px] flex flex-col gap-2">

              {/* BACK BUTTON */}
              <button className="flex items-center gap-2 text-[11px] text-gray-400 mb-1">

                <span className="bg-[#F3EEFF] p-1 rounded-md">
                  <FaChevronLeft className="text-[#885EFF] text-[7px]" />
                </span>

                Back to home
              </button>

              {/* MOBILE TITLE */}
              <div className="lg:hidden mb-1">

                <h1 className="text-[28px] leading-[34px] font-bold text-gray-800">
                  Start your property
                  <br />
                  journey today.
                </h1>
              </div>

              {/* TITLE */}
              <h2 className="text-[20px] lg:text-[22px] leading-[26px] font-bold text-gray-800">
                Create Your Account
              </h2>

              {/* ROLE TABS */}
              <div className="flex items-center bg-gray-100 rounded-xl p-1">

                {roles.map((role) => (
                  <button
                    key={role.key}
                    type="button"
                    onClick={() =>
                      setActiveRole(
                        role.key
                      )
                    }
                    className={`flex-1 flex items-center justify-center gap-1 h-8 rounded-lg text-[9px] lg:text-[10px] font-medium transition-all duration-200 ${
                      activeRole === role.key
                        ? "bg-white text-[#885EFF] shadow-sm"
                        : "text-gray-400"
                    }`}
                  >
                    {role.icon}

                    {role.label}
                  </button>
                ))}
              </div>

              {/* FORM */}
              <form
                className="space-y-2.5"
                onSubmit={handleSubmit}
              >

                {/* FULL NAME */}
                <div>

                  <label className="block text-[11px] font-medium text-gray-700 mb-1">
                    Full Name
                  </label>

                  <div className="relative">

                    <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[11px]" />

                    <input
                      type="text"
                      name="fullName"
                      value={
                        formData.fullName
                      }
                      onChange={handleChange}
                      placeholder="Enter Name"
                      className="w-full h-10 lg:h-9 border border-gray-300 rounded-xl pl-9 pr-3 text-[12px] outline-none focus:border-[#885EFF]"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div>

                  <label className="block text-[11px] font-medium text-gray-700 mb-1">
                    Email
                  </label>

                  <div className="relative">

                    <FaRegEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[11px]" />

                    <input
                      type="email"
                      name="email"
                      value={
                        formData.email
                      }
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className="w-full h-10 lg:h-9 border border-gray-300 rounded-xl pl-9 pr-3 text-[12px] outline-none focus:border-[#885EFF]"
                    />
                  </div>
                </div>

                {/* PHONE */}
                <div>

                  <label className="block text-[11px] font-medium text-gray-700 mb-1">
                    Phone number
                  </label>

                  <div className="relative">

                    <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[11px]" />

                    <input
                      type="text"
                      name="phone"
                      value={
                        formData.phone
                      }
                      onChange={handleChange}
                      placeholder="Enter Phone number"
                      className="w-full h-10 lg:h-9 border border-gray-300 rounded-xl pl-9 pr-3 text-[12px] outline-none focus:border-[#885EFF]"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>

                  <label className="block text-[11px] font-medium text-gray-700 mb-1">
                    Password
                  </label>

                  <div className="relative">

                    <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[11px]" />

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      name="password"
                      value={
                        formData.password
                      }
                      onChange={handleChange}
                      placeholder="Enter Password"
                      className="w-full h-10 lg:h-9 border border-gray-300 rounded-xl pl-9 pr-9 text-[12px] outline-none focus:border-[#885EFF]"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(
                          !showPassword
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showPassword ? (
                        <FaRegEyeSlash className="text-gray-400 text-[12px]" />
                      ) : (
                        <FaRegEye className="text-gray-400 text-[12px]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* CONFIRM PASSWORD */}
                <div>

                  <label className="block text-[11px] font-medium text-gray-700 mb-1">
                    Confirm Password
                  </label>

                  <div className="relative">

                    <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[11px]" />

                    <input
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      name="confirmPassword"
                      value={
                        formData.confirmPassword
                      }
                      onChange={handleChange}
                      placeholder="Enter Confirm Password"
                      className="w-full h-10 lg:h-9 border border-gray-300 rounded-xl pl-9 pr-9 text-[12px] outline-none focus:border-[#885EFF]"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                    >
                      {showConfirmPassword ? (
                        <FaRegEyeSlash className="text-gray-400 text-[12px]" />
                      ) : (
                        <FaRegEye className="text-gray-400 text-[12px]" />
                      )}
                    </button>
                  </div>
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="mt-1 w-full h-10 lg:h-9 rounded-xl bg-[#885EFF] hover:bg-[#6A3DFF] text-white text-[12px] font-medium transition-all duration-300"
                >
                  Sign Up
                </button>
              </form>

              {/* SOCIAL */}
              <div>

                {/* DIVIDER */}
                <div className="flex items-center gap-2 mb-2">

                  <div className="flex-1 h-px bg-gray-200"></div>

                  <span className="text-[10px] text-gray-400">
                    or
                  </span>

                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* SOCIAL BUTTONS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">

                  {/* GOOGLE */}
                  <button className="w-full h-10 lg:h-9 border border-gray-300 rounded-xl flex items-center justify-center gap-2 text-[11px] font-medium text-gray-700 hover:bg-gray-50 transition">

                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="google"
                      className="w-3.5 h-3.5"
                    />

                    Continue with Google
                  </button>

                  {/* APPLE */}
                  <button className="w-full h-10 lg:h-9 border border-gray-300 rounded-xl flex items-center justify-center gap-2 text-[11px] font-medium text-gray-700 hover:bg-gray-50 transition">

                    <FaApple className="text-[12px]" />

                    Continue with Apple
                  </button>
                </div>

                {/* LOGIN */}
                <p className="text-center text-[11px] text-gray-500 mt-3">
                  Already have an account?{" "}

                  <button onClick={() => navigate("/auth/login")} className="text-[#885EFF] font-medium cursor-pointer hover:underline">
                    Login
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignupPage;