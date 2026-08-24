import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import PageContainer from "../components/layout/PageContainer";

export default function DashboardLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#07070A] text-white">
      {/* =========================================================
          SIDEBAR
      ========================================================= */}
      <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />

      {/* =========================================================
          MAIN APPLICATION AREA
      ========================================================= */}
      <div className="flex min-h-0 min-w-0 flex-1 flex-col">
        {/* ---------------------------------------------------------
            TOPBAR
        --------------------------------------------------------- */}
        <div className="shrink-0">
          <Topbar onToggleSidebar={toggleSidebar} />
        </div>

        {/* ---------------------------------------------------------
            PAGE CONTENT
        --------------------------------------------------------- */}
        <main className="min-h-0 flex-1 overflow-hidden">
          <PageContainer />
        </main>
      </div>
    </div>
  );
}
