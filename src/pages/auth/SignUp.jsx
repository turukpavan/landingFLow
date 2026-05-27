import { useState } from "react";

import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";

import { toast } from "react-toastify";


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
import VerifyWithOtp from "../../components/verifyWithOtp/VerifyWithOtp";
import { authService } from "../../services/authService";

const SignupPage = () => {
  const navigate = useNavigate();
  const carouselImages = [image1, image2, image3];

  const [activeRole, setActiveRole] = useState("buyer");

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showOtpInput, setShowOtpInput] = useState(false);

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

    if (formData.password !== formData.password_confirmation) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res =  await authService.register( activeRole,formData);
     

      toast.success(res.message || "OTP sent successfully");

      setShowOtpInput(true);
    } catch (error) {
      toast.error(error?.message || "Signup failed");
    }
  };

  // ROLES
  const roles = [
    {
      key: "buyer",
      label: "buyer",
      icon: <FaHouse className="text-[8px]" />,
    },

    {
      key: "agent",
      label: "agent",
      icon: <FaUser className="text-[8px]" />,
    },

    {
      key: "developer",
      label: "developer",
      icon: <FaBuilding className="text-[8px]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-[50fr_50fr] min-h-screen">
        {/* LEFT SIDE */}
        <div className="hidden lg:block h-screen p-4">
          <AuthCarousel page="signup" images={carouselImages} />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center min-h-screen lg:h-screen px-4 sm:px-6 py-5 lg:py-0">
          {showOtpInput ? (
            // OTP SECTION
            <VerifyWithOtp
              email={formData.email}
              showotpScreen={setShowOtpInput}
              type="signup"
            />
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
                    onClick={() => setActiveRole(role.key)}
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
              <form className="space-y-2.5" onSubmit={handleSubmit}>
                {/* FULL NAME */}
                <div>
                  <label className="block text-[11px] font-medium text-gray-700 mb-1">
                    Full Name
                  </label>

                  <div className="relative">
                    <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-[11px]" />

                    <input
                      type="text"
                      name="full_name"
                      value={formData.full_name}
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
                      value={formData.email}
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
                      value={formData.phone}
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
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter Password"
                      className="w-full h-10 lg:h-9 border border-gray-300 rounded-xl pl-9 pr-9 text-[12px] outline-none focus:border-[#885EFF]"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
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
                      type={showConfirmPassword ? "text" : "password"}
                      name="password_confirmation"
                      value={formData.password_confirmation}
                      onChange={handleChange}
                      placeholder="Enter Confirm Password"
                      className="w-full h-10 lg:h-9 border border-gray-300 rounded-xl pl-9 pr-9 text-[12px] outline-none focus:border-[#885EFF]"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
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

                  <span className="text-[10px] text-gray-400">or</span>

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
                  <button
                    onClick={() => navigate("/auth/login")}
                    className="text-[#885EFF] font-medium cursor-pointer hover:underline"
                  >
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
