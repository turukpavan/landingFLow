import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, ButtonArrowIcon, HamburgerMenuIcon } from '../components/ui/Icons';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#', active: true },
    { name: 'Property', href: '#', active: false },
    { name: 'Agents', href: '#', active: false },
    { name: 'Developer', href: '#', active: false },
    { name: 'Facility management', href: '#', active: false },
    { name: 'About', href: '#', active: false },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 font-sans sticky top-0 z-50">
      <div className="max-w-[1300px] mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="text-lg font-semibold text-gray-900 tracking-tight">
            Real Estate
          </a>
        </div>

        {/* Center Navigation Pill Container (Hidden on mobile) */}
        <nav className="hidden lg:flex items-center bg-[#f6f6f6] border border-gray-100/50 rounded-full p-2">
          <ul className="flex items-center space-x-0.5">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 block ${
                    item.active
                      ? 'bg-[#3A3A3A] text-white shadow-sm'
                      : 'text-gray-500 hover:text-gray-800'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions Section - ALWAYS VISIBLE */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Phone Link Pill */}
          <a
            href="tel:+911234567895"
            className="hidden sm:flex items-center space-x-1.5 bg-[#f6f6f6] hover:bg-gray-100 border border-gray-100/80 text-gray-600 px-3.5 py-3 rounded-full text-xs font-medium transition-all"
          >
            <PhoneIcon />
            <span className="tracking-wide">+91 123-456-7895</span>
          </a>

          {/* Log In Button */}
          <Link
            to={'/auth/login'}
            className="group flex items-center space-x-1.5 sm:space-x-2 bg-[#EBE9FE] hover:bg-[#DDD6FE] text-[#6D28D9] pl-3 sm:pl-4 pr-1 py-2 rounded-full text-xs font-semibold transition-all duration-200"
          >
            <span>Log in</span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#7C3AED] group-hover:bg-[#6D28D9] flex items-center justify-center text-white transition-colors duration-200">
              <ButtonArrowIcon />
            </div>
          </Link>

          {/* Sign Up Button */}
          <a
            href="#"
            className="group flex items-center space-x-1.5 sm:space-x-2 bg-[#7C3AED] hover:bg-[#6D28D9] text-white pl-3 sm:pl-4 pr-1 py-2 rounded-full text-xs font-semibold transition-all duration-200"
          >
            <span>Sign up</span>
            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-[#7C3AED] flex items-center justify-center transition-transform duration-200">
              <ButtonArrowIcon />
            </div>
          </a>

          {/* Hamburger Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 text-gray-600 transition-colors ml-1"
          >
            {/* Added dynamic class check to handle dynamic cross/bars mapping setup */}
            <HamburgerMenuIcon isOpen={isOpen} />
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 px-4 py-3 shadow-lg">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`block px-3 py-2 rounded-xl text-xs font-medium ${
                    item.active ? 'bg-gray-900 text-white' : 'text-gray-500'
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            {/* Phone option falls into mobile menu on tiny screens */}
            <li className="sm:hidden pt-2 border-t border-gray-100 mt-2">
              <a href="tel:+911234567895" className="flex items-center space-x-2 text-gray-600 font-medium px-3 py-2 text-xs">
                <span>📞 +91 123-456-7895</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;