import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LogInPage";
import SignupPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import HomePage from "./pages/HomePage";
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
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<Navigate to="/login" />} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>{/* RootLayout */}</Route>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
