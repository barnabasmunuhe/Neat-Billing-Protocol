import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import PageContainer from "../components/layout/PageContainer";

// This is the parent that owns the relationship between the sidebar, topbar, and page content. It manages the state of the sidebar (collapsed or expanded) and passes down the necessary props to the child components.
export default function DashboardLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed((current) => !current);
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
        <Topbar onToggleSidebar={toggleSidebar} />

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
