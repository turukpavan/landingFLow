import {
  LocationPinIcon,
  PhoneIcon,
  MailIcon,
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
} from "./Icons";

const Footer = () => {
  return (
    <footer className="w-full bg-[#655495] text-white flex flex-col font-sans">
      
      {/* TOP FOOTER CONTENT LINKS & NEWSLETTER */}
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
              <a href="#properties" className="hover:text-white transition-colors">
                Properties
              </a>
            </li>
            <li>
              <a href="#agents" className="hover:text-white transition-colors">
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
              <LocationPinIcon />
              <span>41110 Pleasant Street</span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon />
              <span>878-800-5249</span>
            </li>
            <li className="flex items-center gap-3">
              <MailIcon />
              <a href="mailto:Marlene71@hotmail.com" className="hover:underline">
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
                <ArrowRightIcon />
              </div>
            </button>
          </form>

          {/* Subtext description hook */}
          <p className="text-xs text-purple-200 font-medium pt-1">
            Join Our Real Estate Community
          </p>
        </div>
      </div>

      {/* BOTTOM BAR: BRAND, COPYRIGHT & SOCIAL ICONS */}
      <div className="w-full bg-[#2a2a2a] text-gray-300 border-t border-white/5">
        <div className="max-w-[1240px] w-full mx-auto px-6 sm:px-12 md:px-16 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium">
          {/* Brand logo name */}
          <div className="text-white text-lg font-bold tracking-wide">
            Real Estate
          </div>

          {/* Copyright stamp metadata */}
          <div className="text-xs sm:text-sm opacity-80">
            © 2026 RealEstateCo
          </div>

          {/* Social Media Link Icons Row */}
          <div className="flex items-center space-x-5 text-white">
            <a href="#facebook" className="hover:text-purple-300 transition-colors" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="#instagram" className="hover:text-purple-300 transition-colors" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="#telegram" className="hover:text-purple-300 transition-colors" aria-label="Telegram">
              <TelegramIcon />
            </a>
            <a href="#twitter" className="hover:text-purple-300 transition-colors" aria-label="Twitter">
              <TwitterIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;