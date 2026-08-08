import {
  LayoutDashboard,
  Users,
  Router,
  Wifi,
  Cable,
  Package,
  Activity,
  CreditCard,
  BarChart3,
  FileText,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

const menu = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard },
  { name: "Customers", path: "/customers", icon: Users },
  { name: "Routers", path: "/routers", icon: Router },
  { name: "Hotspot", path: "/hotspot", icon: Wifi },
  { name: "PPPoE", path: "/pppoe", icon: Cable },
  { name: "Packages", path: "/packages", icon: Package },
  { name: "Sessions", path: "/sessions", icon: Activity },
  { name: "Payments", path: "/payments", icon: CreditCard },
  { name: "Reports", path: "/reports", icon: BarChart3 },
  { name: "Logs", path: "/logs", icon: FileText },
  { name: "Settings", path: "/settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 border-r border-zinc-800 bg-zinc-950 p-4">
      {/* Brand */}
      <div className="mb-8 px-3 py-2">
        <h1 className="text-lg font-bold text-white">
          Neat Billing Protocol
        </h1>

        <p className="mt-1 text-xs text-zinc-500">
          ISP Operations Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}