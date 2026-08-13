import { Routes, Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Routers from "../pages/Routers";
import Hotspot from "../pages/Hotspot";
import PPPoE from "../pages/PPPoE";
import Packages from "../pages/Packages";
import Sessions from "../pages/Sessions";
import Payments from "../pages/Payments";
import Reports from "../pages/Reports";
import Logs from "../pages/Logs";
import Settings from "../pages/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="customers" element={<Customers />} />
        <Route path="routers" element={<Routers />} />
        <Route path="hotspot" element={<Hotspot />} />
        <Route path="pppoe" element={<PPPoE />} />
        <Route path="packages" element={<Packages />} />
        <Route path="sessions" element={<Sessions />} />
        <Route path="payments" element={<Payments />} />
        <Route path="reports" element={<Reports />} />
        <Route path="logs" element={<Logs />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
