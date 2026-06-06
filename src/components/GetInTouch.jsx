import frame224 from "../assets/images/frame224.png";
import Rectangle23 from "../assets/images/Rectangle23.png";
import manPng from "../assets/images/9151064.png";
import { useState } from "react";
const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    location: "",
    message: "",
    agreeTerms: false,
  });
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted Safely:", formData);
  };
  return (
    <section
      className="w-full py-12 md:py-16 px-4 md:px-12 bg-repeat"
      style={{ backgroundImage: `url(${frame224})` }}
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Main Container: Added 'overflow-hidden' so the background shapes clip perfectly at the bottom edge */}
        <div className="w-full bg-[#885EFF33] rounded-[32px] p-6 md:p-12 lg:p-16 relative flex flex-col lg:flex-row items-center justify-between gap-12 min-h-[600px] ">
          {/* =========================================================
          LEFT SIDE: HEADER & DOUBLE STACKED IMAGES
          ========================================================= */}
          {/* Changed flex-col behavior: pb-[280px] on mobile creates empty space at the bottom of the text for the absolute images to sit safely */}
          <div className="w-full  self-stretch flex flex-col justify-between min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] relative  lg:pb-0">
            {/* Header Titles (z-20 ensures text stays readable over images) */}
            <div className="mb-8 lg:mb-0 relative z-20 flex justify-between">
              <div className="inline-flex items-center gap-2 mb-3">
                <h2 className="section-heading text-[#2D244E]">
                  Get In Touch With Us
                </h2>
                <svg
                  width="32"
                  height="24"
                  viewBox="0 0 54 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#6D28D9] transform rotate-12"
                >
                  <path
                    d="M1 2C15.5 2 39.5 7.5 48.5 24M48.5 24M41 24H49.5V15"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="section-copy text-gray-500 max-w-[29rem] pb-10">
                We're just a message away — whether you're buying, selling, or
                developing, we'll help you make the right move.
              </p>
            </div>

            {/* =========================================================
            SHARED POSITION CONTAINER FOR BOTH IMAGES (RESPONSIVE)
            ========================================================= */}
            {/* On small screens, it spans full width (w-full) and stays bounded at h-[260px]/h-[320px] so it won't overflow into the headers */}
            <div className=" w-full lg:w-full lg:h-[90%] pointer-events-none select-none z-10 lg:flex">
              <div className="relative flex  h-full overflow-hidden">
                {/* Layer 1: Dark Purple Shape (Rectangle23) */}
                {/* Adjusted responsive positioning coordinates: leaves left edge slightly wider on mobile to prevent clipping */}
                <img
                  src={Rectangle23}
                  alt="Background vector design shape"
                  className=" w-auto h-[100%]  lg:h-[600px]  z-0"
                />

                {/* Layer 2: Man Illustration stacked exactly on top of it */}
                {/* Swapped width constraints on mobile to keep it from scaling out of sight */}
                <img
                  src={manPng}
                  alt="Representative holding digital tablet device"
                  className=" absolute bottom-0 top-[-5%] lg:top-[-12%] left-[-20px] sm:left-[40px] lg:left-[-70px] w-auto h-[95%] lg:h-[120%] max-w-none object-contain drop-shadow-2xl z-10 -scale-x-100"
                />
              </div>
              <div className="mt-10 relative width-full lg:absolute right-0 lg:w-[50%] lg:mt-0 bg-white rounded-3xl p-6 sm:p-10 shadow-xl shadow-purple-950/5 ">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name Input Box */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label className="text-xs font-bold text-[#3A3357]">
                        Name <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border border-gray-200 bg-[#F9FAFB] text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-all text-gray-800 placeholder-gray-400"
                      />
                    </div>

                    {/* Email Address Input Box */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label className="text-xs font-bold text-[#3A3357]">
                        Email <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-200 bg-[#F9FAFB] text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-all text-gray-800 placeholder-gray-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone Number Input Box */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label className="text-xs font-bold text-[#3A3357]">
                        Phone Number <span className="text-purple-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Enter"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border border-gray-200 bg-[#F9FAFB] text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-all text-gray-800 placeholder-gray-400"
                      />
                    </div>

                    {/* Property Type Dropdown Selection Menu */}
                    <div className="flex flex-col space-y-1.5 text-left">
                      <label className="text-xs font-bold text-[#3A3357]">
                        Property Interest{" "}
                        <span className="text-purple-500">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="interest"
                          required
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full border border-gray-200 bg-[#F9FAFB] text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-all text-gray-700 appearance-none cursor-pointer"
                        >
                          <option value="" disabled>
                            Select
                          </option>
                          <option value="buy">Luxury Apartment (Buy)</option>
                          <option value="rent">Residential Flat (Rent)</option>
                          <option value="commercial">
                            Commercial Acquisition
                          </option>
                          <option value="developer">
                            Developer Partnership
                          </option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-400">
                          <svg
                            className="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7 10l5 5 5-5H7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Geographic Target Location Input Box */}
                  <div className="flex flex-col space-y-1.5 text-left">
                    <label className="text-xs font-bold text-[#3A3357]">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      placeholder="Enter"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-[#F9FAFB] text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-all text-gray-800 placeholder-gray-400"
                    />
                  </div>

                  {/* Detailed Context Message Rich TextBox Area */}
                  <div className="flex flex-col space-y-1.5 text-left">
                    <label className="text-xs font-bold text-[#3A3357]">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      placeholder="Tell us more about your requirements.."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border border-gray-200 bg-[#F9FAFB] text-sm px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7C3AED]/20 focus:border-[#7C3AED] transition-all text-gray-800 placeholder-gray-400 resize-none"
                    />
                  </div>

                  {/* Terms Checkbox Row Validation Anchor */}
                  <div className="flex items-start space-x-3 pt-2 text-left">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="agreeTerms"
                      required
                      checked={formData.agreeTerms}
                      onChange={handleChange}
                      className="w-4 h-4 rounded border-gray-300 text-[#7C3AED] focus:ring-[#7C3AED]/40 mt-0.5 accent-[#7C3AED]"
                    />
                    <label
                      htmlFor="agreeTerms"
                      className="text-xs font-medium text-gray-500 leading-normal select-none"
                    >
                      By clicking, you agree to our{" "}
                      <a
                        href="#terms"
                        className="text-[#7C3AED] hover:underline font-semibold"
                      >
                        Terms & Conditions
                      </a>
                      .
                    </label>
                  </div>

                  {/* Purple pill submit trigger button */}
                  <div className="pt-2 text-left">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-between bg-[#EBE9FE] hover:bg-[#7C3AED] text-[#7C3AED] hover:text-white transition-all duration-300 rounded-full pl-8 pr-2 py-2 text-xs font-extrabold shadow-sm group w-full sm:w-auto gap-12"
                    >
                      <span>Submit</span>
                      <div className="w-8 h-8 rounded-full bg-[#7C3AED] group-hover:bg-white text-white group-hover:text-[#7C3AED] flex items-center justify-center transition-colors duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="3"
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                          />
                        </svg>
                      </div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* =========================================================
          RIGHT SIDE: FORM CONTAINER CARD PANEL
          ========================================================= */}
          {/* Added responsive z-20 layout layering so mobile forms remain fully clickable */}
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
