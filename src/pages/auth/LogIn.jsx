import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../../api/api";

import {
  FaArrowLeft,
  FaApple,
  FaEye,
  FaEyeSlash,
  FaLock,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import image1 from "../../assets/images/image1.png";
import image2 from "../../assets/images/image2.png";
import image3 from "../../assets/images/image3.png";

import AuthCarousel from "../../components/authCarousel/AuthCarousel";
import { useNavigate } from "react-router-dom";
import ForgotPassword from "../../components/forgetPassword/ForgetPassward";

const LoginPage = () => {
  const navigate = useNavigate();
  const carouselImages = [image3, image2, image1];

  // STATE
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);

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

    try {
      await axios.post(`${BASE_URL}/auth/login`, formData, {
        withCredentials: true,
      });

      toast.success("Login successful");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[50fr_50fr] h-screen">
        {/* LEFT SECTION */}

        {forgetPassword ? (
          <div className="flex items-center justify-center px-5 sm:px-8 lg:px-12 h-screen overflow-y-auto">
            <div className="w-full max-w-[380px] py-6">
              <ForgotPassword setForgetPassword={setForgetPassword} />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center px-5 sm:px-8 lg:px-12 h-screen overflow-y-auto">
            <div className="w-full max-w-[380px] py-6">
              {/* BACK BUTTON */}
              <button className="flex items-center gap-2 text-[11px] text-gray-400 mb-4">
                <span className="bg-[#F3EEFF] p-1.5 rounded-md">
                  <FaArrowLeft className="text-[#885EFF] text-[9px]" />
                </span>
                Back to home
              </button>

              {/* MOBILE TITLE */}
              <div className="block lg:hidden mb-6">
                <h1 className="text-[28px] leading-[36px] font-bold text-gray-800">
                  Find it. Book it.
                  <br />
                  Manage it.
                </h1>
              </div>

              {/* WELCOME */}
              <div className="mb-5">
                <h2 className="text-[26px] font-bold text-gray-800">
                  Welcome Back 👋
                </h2>
              </div>

              {/* FORM */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                {/* EMAIL */}
                <div>
                  <label className="block text-[11px] font-medium text-gray-700 mb-1.5">
                    Email
                  </label>

                  <div className="flex items-center border border-gray-300 rounded-xl px-3 h-10">
                    <MdEmail className="text-gray-400 text-[14px]" />

                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className="w-full outline-none px-2.5 text-[12px] bg-transparent"
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="block text-[11px] font-medium text-gray-700 mb-1.5">
                    Password
                  </label>

                  <div className="flex items-center border border-gray-300 rounded-xl px-3 h-10">
                    <FaLock className="text-gray-400 text-[12px]" />

                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter Password"
                      className="w-full outline-none px-2.5 text-[12px] bg-transparent"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-gray-400 text-[13px]" />
                      ) : (
                        <FaEye className="text-gray-400 text-[13px]" />
                      )}
                    </button>
                  </div>

                  {/* FORGOT PASSWORD */}
                  <div className="text-right mt-1.5">
                    <button
                      onClick={() => setForgetPassword(true)}
                      type="button"
                      className="text-[11px] text-[#885EFF]"
                    >
                      Forgot Password?
                    </button>
                  </div>
                </div>

                {/* LOGIN BUTTON */}
                <button
                  type="submit"
                  className="w-full h-10 rounded-xl bg-[#885EFF] hover:bg-[#6A3DFF] text-white text-[12px] font-medium transition-all duration-300"
                >
                  Log In
                </button>

                {/* DIVIDER */}
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-px bg-gray-200"></div>

                  <span className="text-[10px] text-gray-400">or</span>

                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* SOCIAL BUTTONS */}
                <div className="grid grid-cols-2 gap-2">
                  {/* GOOGLE */}
                  <button
                    type="button"
                    className="w-full h-10 border border-gray-300 rounded-xl flex items-center justify-center gap-2 text-[11px] font-medium text-gray-700 hover:bg-gray-50 transition"
                  >
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="google"
                      className="w-3.5 h-3.5"
                    />
                    Google
                  </button>

                  {/* APPLE */}
                  <button
                    type="button"
                    className="w-full h-10 border border-gray-300 rounded-xl flex items-center justify-center gap-2 text-[11px] font-medium text-gray-700 hover:bg-gray-50 transition"
                  >
                    <FaApple className="text-[12px]" />
                    Apple
                  </button>
                </div>
              </form>
              {/* SIGNUP */}
              <p className="text-center text-[11px] text-gray-500 pt-1">
                Don’t have an account?{" "}
                <button
                  onClick={() => navigate("/auth/signup")}
                  className="text-[#885EFF] font-medium cursor-pointer hover:underline"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        )}

        {/* RIGHT SECTION */}
        <div className="hidden lg:block h-screen p-4">
          <AuthCarousel images={carouselImages} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
