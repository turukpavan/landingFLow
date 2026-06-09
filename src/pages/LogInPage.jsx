import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaApple, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import image1 from "../assets/images/image1.png";
import image2 from "../assets/images/image2.png";
import image3 from "../assets/images/image3.png";

import AuthCarousel from "../components/carousels/AuthCarousel";
import ForgotPassword from "../components/ForgetPassward";
import { useAuthActions } from "../hooks/useAuthActions";

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
  // CLEAR OLD TOKENS ON MOUNT
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
  }, []);

  // HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

 // Consume the hook
  const { loading, loginAction } = useAuthActions();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Pass the form payload and a clear success callback function
    loginAction(formData, () => {
      navigate("/");
    });
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-[50fr_50fr] h-screen">
        
        {/* LEFT COMPONENT PANEL LAYER */}
        {forgetPassword ? (
          <div className="flex items-center justify-center px-5 sm:px-8 lg:px-12 h-screen overflow-y-auto">
            <div className="w-full max-w-[380px] py-6">
              <ForgotPassword setForgetPassword={setForgetPassword} />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center px-5 sm:px-8 lg:px-12 h-screen overflow-y-auto">
            <div className="w-full max-w-[380px] py-6">

              {/* MOBILE RESPONSIVE HERO HEADER */}
              <div className="block lg:hidden mb-6">
                <h1 className="text-[28px] leading-[36px] font-bold text-gray-800 text-left">
                  Find it. Book it.
                  <br />
                  Manage it.
                </h1>
              </div>

              {/* GREETING HEADING */}
              <div className="mb-5 text-left">
                <h2 className="text-[26px] font-bold text-gray-800">
                  Welcome Back 👋
                </h2>
              </div>

              {/* INPUT FORM CONTAINER */}
              <form className="space-y-4" onSubmit={handleSubmit}>
                
                {/* EMAIL INPUT BLOCK */}
                <div className="text-left">
                  <label className="block text-[11px] font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-xl px-3 h-10 focus-within:ring-1 focus-within:ring-purple-600 focus-within:border-purple-600 bg-transparent">
                    <MdEmail className="text-gray-400 text-[14px] flex-shrink-0" />
                    <input
                      required
                      type="email"
                      name="email"
                      disabled={loading}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter Email"
                      className="w-full outline-none px-2.5 text-[12px] bg-transparent text-gray-800 disabled:opacity-60"
                    />
                  </div>
                </div>

                {/* PASSWORD INPUT BLOCK */}
                <div className="text-left">
                  <label className="block text-[11px] font-medium text-gray-700 mb-1.5">
                    Password
                  </label>
                  <div className="flex items-center border border-gray-300 rounded-xl px-3 h-10 focus-within:ring-1 focus-within:ring-purple-600 focus-within:border-purple-600 bg-transparent">
                    <FaLock className="text-gray-400 text-[12px] flex-shrink-0" />
                    <input
                      required
                      type={showPassword ? "text" : "password"}
                      name="password"
                      disabled={loading}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter Password"
                      className="w-full outline-none px-2.5 text-[12px] bg-transparent text-gray-800 disabled:opacity-60"
                    />
                    <button
                      type="button"
                      disabled={loading}
                      onClick={() => setShowPassword(!showPassword)}
                      className="flex items-center justify-center focus:outline-none"
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-gray-400 text-[13px] hover:text-gray-600" />
                      ) : (
                        <FaEye className="text-gray-400 text-[13px] hover:text-gray-600" />
                      )}
                    </button>
                  </div>

                  {/* FORGOT PASSWORD SCREEN TRIGGER */}
                  <div className="text-right mt-1.5">
                    <button
                      onClick={() => setForgetPassword(true)}
                      type="button"
                      disabled={loading}
                      className="text-[11px] text-[#885EFF] hover:underline disabled:opacity-50"
                    >
                      Forgot Password?
                    </button>
                  </div>
                </div>

                {/* LOGIN SUBMIT ACTION */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-10 rounded-xl bg-[#885EFF] hover:bg-[#6A3DFF] disabled:bg-purple-400 text-white text-[12px] font-medium transition-all duration-300 shadow-sm"
                >
                  {loading ? "Logging In..." : "Log In"}
                </button>

                {/* SEPARATOR DECORATION */}
                <div className="flex items-center gap-2 py-1">
                  <div className="flex-1 h-px bg-gray-200"></div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-wider">or</span>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* OAUTH INTEGRATIONS */}
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    disabled={loading}
                    className="w-full h-10 border border-gray-300 rounded-xl flex items-center justify-center gap-2 text-[11px] font-medium text-gray-700 hover:bg-gray-50 transition disabled:opacity-50"
                  >
                    <img
                      src="https://www.svgrepo.com/show/475656/google-color.svg"
                      alt="google"
                      className="w-3.5 h-3.5"
                    />
                    Google
                  </button>
                  <button
                    type="button"
                    disabled={loading}
                    className="w-full h-10 border border-gray-300 rounded-xl flex items-center justify-center gap-2 text-[11px] font-medium text-gray-700 hover:bg-gray-50 transition disabled:opacity-50"
                  >
                    <FaApple className="text-[12px]" />
                    Apple
                  </button>
                </div>
              </form>

              {/* ACCOUNT REGISTRATION UTILITY LINK */}
              <p className="text-center text-[11px] text-gray-500 pt-4">
                Don’t have an account?{" "}
                <button
                  onClick={() => navigate("/signup")}
                  disabled={loading}
                  className="text-[#885EFF] font-medium cursor-pointer hover:underline disabled:opacity-50"
                >
                  Sign Up
                </button>
              </p>
            </div>
          </div>
        )}

        {/* RIGHT MEDIA DISPLAY CAROUSEL PANEL */}
        <div className="hidden lg:block h-screen p-4">
          <AuthCarousel images={carouselImages} />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;