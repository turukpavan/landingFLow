import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LockIcon, EyeOpenIcon, EyeClosedIcon } from "./Icons";
import { useAuthActions } from "../hooks/useAuthActions";

export default function ResetPassword({ email }) {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Consume your custom hook actions (Removed the old redundant local loading state)
  const { loading, resetPasswordAction } = useAuthActions();

  const handleResetPassward = (e) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const payload = {
      email: email,
      password: newPassword,
      password_confirmation: confirmPassword,
    };

    // Trigger action from hook with navigation fallback on success
    resetPasswordAction(payload, () => {
      navigate("/login");
    });
  };

  return (
    <div className="w-full max-w-[340px] lg:max-w-[420px] flex flex-col gap-3">
      {/* Header Section */}
      <div className="mb-4 text-left">
        <h1 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
          Reset Password
        </h1>
        <p className="text-xs text-gray-500 leading-relaxed font-normal">
          Create a strong password for your account.
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleResetPassward} className="flex flex-col gap-5">
        
        {/* New Password Input */}
        <div className="flex flex-col gap-1.5 text-left">
          <label
            htmlFor="newPassword"
            className="text-xs font-semibold text-gray-600"
          >
            New Password
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-gray-400 pointer-events-none">
              <LockIcon />
            </span>
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              placeholder="Enter New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              disabled={loading}
              className="w-full pl-11 pr-11 py-3 text-xs border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 placeholder-gray-400 font-medium text-gray-800 disabled:bg-gray-50 disabled:text-gray-400"
              required
            />
            <button
              type="button"
              disabled={loading}
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-4 text-gray-400 hover:text-gray-600 focus:outline-none flex items-center justify-center disabled:opacity-50"
            >
              {showNewPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="flex flex-col gap-1.5 text-left">
          <label
            htmlFor="confirmPassword"
            className="text-xs font-semibold text-gray-600"
          >
            Confirm Password
          </label>
          <div className="relative flex items-center">
            <span className="absolute left-4 text-gray-400 pointer-events-none">
              <LockIcon />
            </span>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Enter Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              disabled={loading}
              className="w-full pl-11 pr-11 py-3 text-xs border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-purple-600 focus:border-purple-600 placeholder-gray-400 font-medium text-gray-800 disabled:bg-gray-50 disabled:text-gray-400"
              required
            />
            <button
              type="button"
              disabled={loading}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 text-gray-400 hover:text-gray-600 focus:outline-none flex items-center justify-center disabled:opacity-50"
            >
              {showConfirmPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </button>
          </div>
        </div>

        {/* Reset Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white text-xs font-semibold py-3.5 px-4 rounded-xl transition duration-200 shadow-sm mt-2 ${
            loading 
              ? "bg-purple-400 cursor-not-allowed" 
              : "bg-[#8353FF] hover:bg-[#7242EE]"
          }`}
        >
          {loading ? "Resetting..." : "Reset"}
        </button>
      </form>
    </div>
  );
}