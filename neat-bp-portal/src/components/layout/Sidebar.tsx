// src/components/layout/Sidebar.tsx
import {
  House,
  Globe2,
  Users,
  Wrench,
  CreditCard,
  MessageSquare,
  BarChart3,
  Settings,
  ChevronRight,
  Router,
  Radio,
  Map,
  TriangleAlert,
  UserRound,
  Package,
  Activity,
  Wifi,
  Cable,
  HardHat,
  LayoutDashboard,
  ListTodo,
  Receipt,
  Megaphone,
  LineChart,
  FileText,
  Bell,
  Bot,
  Workflow,
  Sparkles,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { useState } from "react";
import type { ElementType } from "react"; // Changed from React.ElementType
import neatLogo from "../../assets/neat-logo.png";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

interface FlyoutItem {
  name: string;
  path: string;
  icon: ElementType;
  badge?: string;
}

interface NavGroup {
  name: string;
  icon: ElementType;
  items: FlyoutItem[];
}

const groups: NavGroup[] = [
  {
    name: "Network",
    icon: Globe2,
    items: [
      { name: "Overview", path: "/network", icon: LayoutDashboard },
      { name: "Routers", path: "/routers", icon: Router },
      {
        name: "Access Points",
        path: "/access-points",
        icon: Radio,
        badge: "New",
      },
      { name: "Network Map", path: "/network-map", icon: Map },
      { name: "Outages", path: "/outages", icon: TriangleAlert },
    ],
  },
  {
    name: "Customers",
    icon: Users,
    items: [
      { name: "Customers", path: "/customers", icon: UserRound },
      { name: "Packages", path: "/packages", icon: Package },
      { name: "Sessions", path: "/sessions", icon: Activity },
      { name: "Hotspot", path: "/hotspot", icon: Wifi },
      { name: "PPPoE", path: "/pppoe", icon: Cable },
    ],
  },
  {
    name: "Operations",
    icon: Wrench,
    items: [
      { name: "Technicians", path: "/technicians", icon: HardHat },
      { name: "Dispatch Board", path: "/dispatch", icon: LayoutDashboard },
      { name: "Tasks", path: "/tasks", icon: ListTodo },
    ],
  },
  {
    name: "Finance",
    icon: CreditCard,
    items: [
      { name: "Payments", path: "/payments", icon: CreditCard },
      { name: "Vouchers", path: "/vouchers", icon: Receipt },
      { name: "Invoices", path: "/invoices", icon: FileText },
    ],
  },
  {
    name: "Reports",
    icon: BarChart3,
    items: [
      { name: "Reports", path: "/reports", icon: BarChart3 },
      { name: "Analytics", path: "/analytics", icon: LineChart },
      { name: "Logs", path: "/logs", icon: FileText },
    ],
  },
  {
    name: "System",
    icon: Settings,
    items: [
      { name: "Alerts", path: "/alerts", icon: Bell },
      { name: "Automation", path: "/automation", icon: Workflow },
      { name: "Settings", path: "/settings", icon: Settings },
    ],
  },
  // Neat AI Assistant placed here
  {
    name: "Neat AI Assistant",
    icon: Sparkles,
    items: [
      { name: "Chat with AI", path: "/ai-assistant", icon: Bot },
      { name: "Network Insights", path: "/ai-insights", icon: LineChart },
      { name: "Automate Actions", path: "/ai-actions", icon: Workflow },
    ],
  },
];

export default function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const [hoveredGroup, setHoveredGroup] = useState<string | null>(null);

  const handlePageClick = () => {
    if (collapsed) {
      onToggle();
    }
  };

  return (
    <aside
      className={[
        "relative z-40 flex h-screen shrink-0 flex-col",
        "border-r border-white/[0.08]",
        "bg-[#07070A] text-white",
        "transition-[width] duration-200 ease-in-out",
        collapsed ? "w-[76px]" : "w-[228px]",
      ].join(" ")}
    >
      {/* BRAND */}
      <div
        className={[
          "shrink-0",
          collapsed ? "px-3 pb-7 pt-5" : "px-4 pb-7 pt-5",
        ].join(" ")}
      >
        <div
          className={[
            "flex items-center",
            collapsed ? "justify-center" : "",
          ].join(" ")}
        >
          <div className="flex h-[44px] w-[44px] shrink-0 items-center justify-center">
            <img
              src={neatLogo}
              alt="Neat"
              draggable={false}
              className="block h-[44px] w-[44px] object-contain"
            />
          </div>

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

      {/* NAVIGATION */}
      <nav className="min-h-0 flex-1 overflow-visible px-3">
        {/* HOME (Changed from Dashboard) */}
        <NavLink
          to="/"
          end
          onClick={handlePageClick}
          title={collapsed ? "Home" : undefined}
          className={({ isActive }) =>
            [
              "group mb-6 flex h-10 items-center rounded-lg",
              "text-sm font-medium",
              "transition-all duration-150",
              collapsed ? "justify-center px-2" : "gap-3 px-3",
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
          <House size={18} strokeWidth={1.8} className="shrink-0" />
          {!collapsed && <span>Home</span>}
        </NavLink>

        {/* NAVIGATION GROUPS */}
        <div className="space-y-2">
          {groups.map((group) => {
            const GroupIcon = group.icon;
            const isHovered = hoveredGroup === group.name;
            const isAI = group.name === "Neat AI Assistant";

            return (
              <div
                key={group.name}
                className="relative"
                onMouseEnter={() => setHoveredGroup(group.name)}
                onMouseLeave={() => setHoveredGroup(null)}
              >
                {/* GROUP TRIGGER */}
                <button
                  type="button"
                  aria-label={group.name}
                  className={[
                    "group flex h-10 w-full items-center rounded-lg",
                    "text-sm font-medium",
                    "text-zinc-400",
                    "transition-colors duration-150",
                    "hover:bg-white/[0.04]",
                    "hover:text-white",
                    collapsed ? "justify-center px-2" : "gap-3 px-3",
                    isAI ? "text-purple-400 hover:text-purple-300" : "",
                  ].join(" ")}
                >
                  <div className={isAI ? "relative" : ""}>
                    <GroupIcon
                      size={18}
                      strokeWidth={isAI ? 2.2 : 1.8}
                      className={[
                        "shrink-0",
                        isAI
                          ? "text-purple-400 drop-shadow-[0_0_6px_rgba(168,85,247,0.6)]"
                          : "",
                      ].join(" ")}
                    />
                  </div>

                  {!collapsed && (
                    <>
                      <span className="min-w-0 flex-1 truncate text-left">
                        {group.name}
                      </span>

                      <ChevronRight
                        size={15}
                        strokeWidth={1.8}
                        className={[
                          "shrink-0 transition-transform duration-150",
                          isHovered
                            ? "translate-x-0.5 text-purple-400"
                            : "text-zinc-600",
                        ].join(" ")}
                      />
                    </>
                  )}
                </button>

                {/* FLYOUT */}
                {isHovered && (
                  <div
                    className={[
                      "absolute left-full top-0 z-50 ml-2",
                      "w-[218px]",
                      "rounded-xl",
                      "border border-white/[0.08]",
                      "bg-[#0B0D14]",
                      "p-2",
                      "shadow-[0_16px_45px_rgba(0,0,0,0.55)]",
                    ].join(" ")}
                  >
                    <div className="px-3 pb-2 pt-2">
                      <p
                        className={[
                          "text-[10px] font-semibold uppercase tracking-[0.16em]",
                          isAI ? "text-purple-500" : "text-zinc-500",
                        ].join(" ")}
                      >
                        {group.name}
                      </p>
                    </div>

                    <div className="space-y-1">
                      {group.items.map((item) => {
                        const ItemIcon = item.icon;

                        return (
                          <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={handlePageClick}
                            className={({ isActive }) =>
                              [
                                "flex h-9 items-center gap-3 rounded-lg px-3",
                                "text-sm font-medium",
                                "transition-colors duration-150",
                                isActive
                                  ? isAI
                                    ? "bg-purple-600/20 text-purple-300"
                                    : "bg-purple-600/20 text-purple-300"
                                  : [
                                      "text-zinc-400",
                                      "hover:bg-white/[0.05]",
                                      "hover:text-white",
                                    ].join(" "),
                              ].join(" ")
                            }
                          >
                            <ItemIcon
                              size={16}
                              strokeWidth={1.8}
                              className="shrink-0"
                            />
                            <span className="min-w-0 flex-1 truncate">
                              {item.name}
                            </span>

                            {item.badge && (
                              <span className="rounded-md bg-purple-600 px-1.5 py-0.5 text-[9px] font-semibold text-white">
                                {item.badge}
                              </span>
                            )}
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* SYSTEM TIME (Avatar Removed) */}
      <div
        className={[
          "shrink-0 border-t border-white/[0.08]",
          collapsed ? "px-3 pb-6 pt-4" : "px-5 pb-6 pt-4",
        ].join(" ")}
      >
        {!collapsed ? (
          <>
            <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-zinc-600">
              System Time
            </p>
            <p className="mt-1 text-sm font-medium tracking-wide text-purple-400">
              10:24:35 AM
            </p>
            <p className="mt-1 text-xs text-zinc-500">September 05, 2026</p>
          </>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div
              className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.6)]"
              title="System Time"
            />
          </div>
        )}
      </div>
    </aside>
  );
}
