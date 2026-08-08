import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import PageContainer from "../components/layout/PageContainer";

export default function DashboardLayout() {
  return (
    <div className="flex min-h-screen bg-[#07070A] text-white">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />

        <PageContainer />
      </div>
    </div>
  );
}