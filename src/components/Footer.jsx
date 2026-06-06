
const Footer = () => {
  return (
     <footer className="w-full bg-[#655495] text-white flex flex-col font-sans">
        {/* =========================================================
      TOP FOOTER CONTENT LINKS & NEWSLETTER
      ========================================================= */}
        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-12 md:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start">
          {/* COLUMN 1: DISCOVER NAVIGATION */}
          <div className="flex flex-col space-y-4 text-left">
            <h3 className="text-xl font-bold tracking-wide text-white mb-2">
              Discover
            </h3>
            <ul className="space-y-3 text-purple-200 font-medium text-sm sm:text-base">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#properties"
                  className="hover:text-white transition-colors"
                >
                  Properties
                </a>
              </li>
              <li>
                <a
                  href="#agents"
                  className="hover:text-white transition-colors"
                >
                  Agents
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: CONTACT DETAILS */}
          <div className="flex flex-col space-y-4 text-left">
            <h3 className="text-xl font-bold tracking-wide text-white mb-2">
              Contact
            </h3>
            <ul className="space-y-4 text-purple-200 font-medium text-sm sm:text-base">
              <li className="flex items-center gap-3">
                {/* Location Pin Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 shrink-0 text-purple-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <span>41110 Pleasant Street</span>
              </li>
              <li className="flex items-center gap-3">
                {/* Phone Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 shrink-0 text-purple-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.58bV19.5a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 19.5V6.584c0-.416-.214-.803-.564-1.025l-7.5-4.875a1.249 1.249 0 0 0-1.372 0l-7.5 4.875c-.35.221-.564.609-.564 1.025Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.584c0-.416.214-.803.564-1.025l7.5-4.875a1.249 1.249 0 0 1 1.372 0l7.5 4.875c.35.221.564.609.564 1.025"
                  />
                </svg>
                <span>878-800-5249</span>
              </li>
              <li className="flex items-center gap-3">
                {/* Mail Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 shrink-0 text-purple-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <a
                  href="mailto:Marlene71@hotmail.com"
                  className="hover:underline"
                >
                  Marlene71@hotmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: NEWSLETTER FORM */}
          <div className="flex flex-col space-y-4 text-left">
            <h3 className="text-xl font-bold tracking-wide text-white mb-2">
              Newsletter
            </h3>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 max-w-sm w-full"
            >
              {/* Email Input Field */}
              <input
                type="email"
                placeholder="Enter your Email"
                required
                className="w-full bg-white text-gray-800 placeholder-gray-400 text-sm px-6 py-3.5 rounded-full outline-none focus:ring-2 focus:ring-[#906BFF] transition-all shadow-inner"
              />

              {/* Translucent pill shape submit trigger button */}
              <button
                type="submit"
                className="inline-flex items-center justify-between bg-white/20 hover:bg-white/30 text-white transition-all duration-300 rounded-full pl-6 pr-1.5 py-1.5 text-sm font-semibold border border-white/10 shadow-inner group gap-8"
              >
                <span>Submit</span>
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
            </form>

            {/* Subtext description hook */}
            <p className="text-xs text-purple-200 font-medium pt-1">
              Join Our Real Estate Community
            </p>
          </div>
        </div>

        {/* =========================================================
      BOTTOM BAR: BRAND, COPYRIGHT & SOCIAL ICONS
      ========================================================= */}
        <div className="w-full bg-[#2a2a2a] text-gray-300 border-t border-white/5">
          <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-12 md:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium">
            {/* Brand logo name */}
            <div className="text-white text-lg font-bold tracking-wide">
              Real Estate
            </div>

            {/* Copyright stamp metadata */}
            <div className="text-xs sm:text-sm opacity-80">
              © 2025 RealEstateCo
            </div>

            {/* Social Media Link Icons Row */}
            <div className="flex items-center space-x-5 text-white">
              {/* Facebook Link */}
              <a
                href="#facebook"
                className="hover:text-purple-300 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>

              {/* Instagram Link */}
              <a
                href="#instagram"
                className="hover:text-purple-300 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </a>

              {/* Telegram Link */}
              <a
                href="#telegram"
                className="hover:text-purple-300 transition-colors"
                aria-label="Telegram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-1-.65-.35-1 .22-1.62.15-.15 2.73-2.5 2.78-2.73.01-.03.01-.15-.06-.21-.07-.06-.17-.04-.25-.02-.11.02-1.92 1.22-5.42 3.58-.51.35-.98.53-1.39.52-.46-.01-1.34-.26-2-.47-.8-.26-1.44-.4-1.39-.85.03-.24.36-.48 1-.74 3.92-1.71 6.53-2.83 7.84-3.37 3.73-1.53 4.5-1.8 5.01-1.8.11 0 .36.03.52.16.14.11.18.27.2.39.01.05.02.16 0 .23z" />
                </svg>
              </a>

              {/* Twitter/X Link */}
              <a
                href="#twitter"
                className="hover:text-purple-300 transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer