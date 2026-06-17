import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import LoanSelection from "../pages/LoanSelection";
import EligibilityChecker from "../pages/EligibilityChecker";
import EMICalculator from "../pages/EMICalculator";
import LoanApplication from "../pages/LoanApplication";

import ApplicationStatus from "../pages/ApplicationStatus";
import AdminDashboard from "../pages/AdminDashboard";

import DocumentUpload from "../pages/DocumentUpload";
import LoanOffers from "../pages/LoanOffers";
import Notifications from "../pages/Notifications";
import Profile from "../pages/Profile";
import SanctionLetter from "../pages/SanctionLetter";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/loans" element={<LoanSelection />} />
      <Route path="/eligibility" element={<EligibilityChecker />} />
      <Route path="/emi-calculator" element={<EMICalculator />} />
      <Route path="/apply" element={<LoanApplication />} />

      <Route path="/status" element={<ApplicationStatus />} />
      <Route path="/admin" element={<AdminDashboard />} />

      <Route path="/documents" element={<DocumentUpload />} />
      <Route path="/offers" element={<LoanOffers />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/sanction" element={<SanctionLetter />} />
    </Routes>
  );
}

export default AppRoutes;