import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/LogIn";
import SignupPage from "./pages/auth/SignUp";
import { ToastContainer } from "react-toastify";
import HomeRoute from "./routes/Home.Route";
import ProtectedRoute from "./routes/Protected.Route";
import RootLayout from "./Layout/RootLayout";
const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        theme="light"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="*" element={<Navigate to="/auth/login" />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            {/* RootLayout */}
            <Route element={<RootLayout />}>
              <Route path="/" element={<HomeRoute />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
