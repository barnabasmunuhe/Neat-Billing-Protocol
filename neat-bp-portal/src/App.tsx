// src/App.tsx
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";

// Import the other pages you have created
import Customers from "./pages/Customers";
import Hotspot from "./pages/Hotspot";
import Logs from "./pages/Logs";
import PPPoE from "./pages/PPPoE";
import Packages from "./pages/Packages";
import Payments from "./pages/Payments";
import Reports from "./pages/Reports";
import Routers from "./pages/Routers";
import Sessions from "./pages/Sessions";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      {/* The layout wraps all the pages */}
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Dashboard />} />
        
        {/* Other routes */}
        <Route path="/customers" element={<Customers />} />
        <Route path="/hotspot" element={<Hotspot />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="/pppoe" element={<PPPoE />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/routers" element={<Routers />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Fallback for unknown routes */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;