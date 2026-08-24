import {
  House,
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
  Tag,
  MessageSquare,
  Wrench,
  ChevronDown,
} from "lucide-react";

import { NavLink, useLocation } from "react-router-dom";
import neatLogo from "../../assets/neat-logo.png";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const menu = [
  {
    name: "Dashboard",
    path: "/",
    icon: House,
  },
  {
    name: "Routers",
    path: "/routers",
    icon: Router,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: Users,
  },
  {
    name: "Packages",
    path: "/packages",
    icon: Package,
  },
  {
    name: "Sessions",
    path: "/sessions",
    icon: Activity,
  },
  {
    name: "Payments",
    path: "/payments",
    icon: CreditCard,
  },
  {
    name: "Vouchers",
    path: "/vouchers",
    icon: Tag,
  },
  {
    name: "PPPoE",
    path: "/pppoe",
    icon: Cable,
  },
  {
    name: "Hotspot",
    path: "/hotspot",
    icon: Wifi,
  },
  {
    name: "Complaints",
    path: "/complaints",
    icon: MessageSquare,
  },
  {
    name: "Technicians",
    path: "/technicians",
    icon: Wrench,
  },
  {
    name: "Reports",
    path: "/reports",
    icon: BarChart3,
  },
  {
    name: "Logs",
    path: "/logs",
    icon: FileText,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar({
  collapsed,
  onToggle,
}: SidebarProps) {
  const location = useLocation();

  return (
    <aside
      className={[
        "flex h-screen shrink-0 flex-col",
        "border-r border-white/10",
        "bg-[#07070A] text-white",
        "transition-[width] duration-200 ease-in-out",
        collapsed ? "w-[76px]" : "w-[228px]",
      ].join(" ")}
    >
      {/* =========================================================
          BRAND
      ========================================================= */}
      <div
        className={[
          "shrink-0",
          collapsed
            ? "px-3 pb-6 pt-5"
            : "px-4 pb-6 pt-5",
        ].join(" ")}
      >
        <div
          className={[
            "flex items-center",
            collapsed ? "justify-center" : "",
          ].join(" ")}
        >
          {/* N LOGO */}
          <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center">
            <img
              src={neatLogo}
              alt="Neat"
              draggable={false}
              className="block h-[44px] w-[44px] object-contain"
            />
          </div>

          {/* BRAND TEXT */}
          {!collapsed && (
            <div className="ml-2 min-w-0">
              <p className="text-[23px] font-semibold leading-none tracking-tight text-white">
                Neat
              </p>

              <p className="mt-[3px] whitespace-nowrap text-[8px] font-medium uppercase tracking-[0.18em] text-zinc-500">
                Billing Protocol
              </p>
            </div>
          )}
        </div>
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <nav className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-3">
        <div className="space-y-1">
          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                title={collapsed ? item.name : undefined}
                onClick={(event) => {
                  /*
                   * Clicking the currently active page:
                   *
                   * Expanded  -> collapse sidebar
                   * Collapsed  -> expand sidebar
                   *
                   * Clicking another page continues to navigate
                   * normally.
                   */
                  if (location.pathname === item.path) {
                    event.preventDefault();
                    onToggle();
                  }
                }}
                className={({ isActive }) =>
                  [
                    "group flex h-10 items-center rounded-lg",
                    "text-sm font-medium",
                    "transition-all duration-150",

                    collapsed
                      ? "justify-center px-2"
                      : "gap-3 px-3",

                    isActive
                      ? [
                          "bg-gradient-to-r",
                          "from-purple-600/80",
                          "to-purple-500/70",
                          "text-white",
                          "shadow-[0_0_20px_rgba(139,92,246,0.18)]",
                        ].join(" ")
                      : [
                          "text-zinc-400",
                          "hover:bg-white/[0.04]",
                          "hover:text-white",
                        ].join(" "),
                  ].join(" ")
                }
              >
                <Icon
                  size={18}
                  strokeWidth={1.8}
                  className="shrink-0"
                />

                {!collapsed && (
                  <span className="truncate">
                    {item.name}
                  </span>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* =========================================================
          BOTTOM AREA
      ========================================================= */}
      <div className="shrink-0">
        {/* PROFILE DIVIDER */}
        <div className="mx-4 border-t border-white/10" />

        {/* USER PROFILE */}
        <div
          className={[
            "py-4",
            collapsed ? "px-3" : "px-5",
          ].join(" ")}
        >
          <div
            className={[
              "flex items-center",
              collapsed
                ? "justify-center"
                : "gap-3",
            ].join(" ")}
          >
            {/* AVATAR */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white shadow-[0_0_18px_rgba(139,92,246,0.15)]">
              B
            </div>

            {/* USER INFORMATION */}
            {!collapsed && (
              <>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium leading-tight text-white">
                    Barney
                  </p>

                  <p className="mt-1 text-xs leading-tight text-zinc-500">
                    Administrator
                  </p>
                </div>

                <ChevronDown
                  size={16}
                  strokeWidth={1.8}
                  className="shrink-0 text-zinc-400"
                />
              </>
            )}
          </div>
        </div>

        {/* SYSTEM TIME */}
        {!collapsed && (
          <div className="border-t border-white/10 px-5 pb-6 pt-4">
            <p className="text-[11px] font-medium text-zinc-500">
              System Time
            </p>

            <p className="mt-1 text-sm font-medium tracking-wide text-purple-400">
              10:24:35 AM
            </p>

            <p className="mt-1 text-xs text-zinc-500">
              August 08, 2026
            </p>
          </div>
        )}
      </div>
    </aside>
  );
}