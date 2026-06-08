import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LogInPage";
import SignupPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./routes/Protected.Route";
import RootLayout from "./Layout/RootLayout";
import NotFound from "./components/NotFound";
import HomePage from "./pages/HomePage";
import ProperyPage from "./pages/PropertyPage";
import AgentsPage from "./pages/AgentsPage"
import DevelopersPage from "./pages/DeveloperPage"
import FacilityManagementPage from "./pages/FacilityManagementPage";
import AboutPage from "./pages/AboutPage"
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
          <Route path="*" element={<NotFound/>} />
          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>{/* RootLayout */}</Route>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/properties" element={<ProperyPage />} />
            <Route path="/agents" element={<AgentsPage />} />
            <Route path="/developers" element={<DevelopersPage />} />
            <Route path="/facility-management" element={<FacilityManagementPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
