import { Outlet } from "react-router-dom";

export default function PageContainer() {
  return (
    <div className="h-full min-h-0 overflow-hidden p-6">
      <Outlet />
    </div>
  );
}
