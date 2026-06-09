import { Link, useNavigate } from "react-router-dom";
import { BackArrowIcon } from "./Icons"; // Reuses your consolidated icon file

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-5 font-sans">
      <div className="text-center max-w-[420px] w-full">
        
        {/* Giant Status Code */}
        <h1 className="text-[120px] font-extrabold text-[#885EFF] leading-none tracking-tighter mb-4 animate-pulse">
          404
        </h1>

        {/* Informative Error Message */}
        <h2 className="text-[24px] font-bold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-[13px] text-gray-500 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* Action Controls Container */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
          
          {/* Action Button: Step Back */}
          <button
            onClick={() => navigate(-1)}
            type="button"
            className="w-full sm:flex-1 h-11 border border-gray-300 rounded-xl flex items-center justify-center gap-2 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 transition active:scale-[0.98]"
          >
            <BackArrowIcon className="text-gray-500 text-[12px]" />
            Go Back
          </button>

          {/* Action Button: Reset to Home */}
          <Link
            to="/"
            className="w-full sm:flex-1 h-11 rounded-xl bg-[#885EFF] hover:bg-[#6A3DFF] text-white text-[12px] font-semibold flex items-center justify-center transition shadow-sm active:scale-[0.98]"
          >
            Return Home
          </Link>

        </div>
      </div>
    </div>
  );
};

export default NotFound;