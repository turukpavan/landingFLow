import image4 from "../assets/images/image4.png";

const FreeConsultation = () => {
  return (
    <section className="w-full py-10 md:py-10 px-4 md:px-10 bg-gradient-to-br from-[#5758a1] via-[#413274] to-[#5c3d86] ">
      <div className="max-w-[1240px] mx-auto bg-[#8485c53e] rounded-[32px] shadow-2xl">
        {/* Main Card Container with Outer Purple Border Gradient Style Background */}
        <div className="w-full   relative flex flex-col md:flex-row items-stretch min-h-[420px] md:min-h-[480px] lg:min-h-[520px] ">
          {/* Asymmetric Angled Background Shape Layer (Left Side Accent) */}
          <div
            className="absolute inset-0 z-0 opacity-90 pointer-events-none"
            style={{ clipPath: "polygon(0 0, 55% 0, 42% 100%, 0% 100%)" }}
          />

          {/* =========================================================
          LEFT SIDE: CONTENT BANNER TEXT & BUTTON
          ========================================================= */}
          <div className="w-full md:w-[50%] lg:w-[55%] p-8 sm:p-12 md:p-16 flex flex-col justify-center items-start text-left relative z-10">
            <h2 className="section-heading text-white mb-4 max-w-md">
              Ready to Move Into Your Dream Home?
            </h2>

            <p className="section-copy text-gray-500 max-w-[39rem]">
              Get expert guidance and explore premium properties tailored for
              you.
            </p>

            {/* Translucent pill shape anchor trigger button */}
            <button
              type="button"
              className="inline-flex items-center justify-between bg-white/20 hover:bg-white/30 text-white transition-all duration-300 rounded-full pl-6 pr-1.5 py-1.5 text-xs sm:text-sm font-semibold border border-white/20 shadow-inner group gap-8 max-w-full"
            >
              <span>Schedule a Free Consultation</span>
              <div className="w-8 h-8 rounded-full bg-[#906BFF] text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
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

          {/* =========================================================
          RIGHT SIDE: PREMIUM HOUSE ILLUSTRATION/IMAGE
          ========================================================= */}
          {/* Absolutely aligned right and bottom on desktop viewports to achieve the visual overhang mask clip effect */}
          <div className="relative w-full h-[280px] md:h-auto md:w-[50%] lg:w-[45%] md:absolute md:right-0 md:bottom-0 md:top-0 flex items-end justify-center md:justify-end z-10">
            <img
              src={image4}
              alt="Modern luxury architecture real estate estate listing rendering"
              className="w-auto h-[105%] max-w-none object-contain md:object-right-bottom select-none pointer-events-none origin-bottom translate-y-[2px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeConsultation;
