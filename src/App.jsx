import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Invoices from "./pages/Invoices";
import Orders from "./pages/Orders";
import Requests from "./pages/Requests";
import Incident from "./pages/IncidentForm";
import LoadingScreen from "./components/LoadingScreen";
import IncidentForm from "./pages/IncidentForm";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Get user state

  console.log("ProtectedRoute user:", user); // Debugging

  if (user === null) return <Navigate to="/signin" />; // Redirect if not logged in

  return children;
};

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/invoices" element={<ProtectedRoute><Invoices /></ProtectedRoute>} />
      <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
      <Route path="/requests" element={<ProtectedRoute><Requests /></ProtectedRoute>} />
      <Route path="/incidentForm" element={<ProtectedRoute><IncidentForm /></ProtectedRoute>} />
    </Routes>
  );
}

export default App;

