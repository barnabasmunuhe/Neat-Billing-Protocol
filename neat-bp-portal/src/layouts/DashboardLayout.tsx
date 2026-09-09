// src/layouts/DashboardLayout.tsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";

export default function DashboardLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-dvh w-full overflow-hidden bg-[#07070A] text-white">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
      <div className="flex min-w-0 flex-1 flex-col h-full">
        {/* Strict 72px Topbar */}
        <div className="h-[72px] shrink-0">
          <Topbar onToggleSidebar={() => setCollapsed(!collapsed)} />
        </div>
        {/* Main Content Area: takes remaining space and manages its own overflow */}
        <main className="min-h-0 flex-1 overflow-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}