// src/components/layout/Topbar.tsx
import { useState } from "react";
import {
  Menu,
  Search,
  Bell,
  MessageSquare,
  ChevronDown,
  CalendarDays,
  User,
  Settings,
  LogOut,
  CheckCircle2,
} from "lucide-react";

interface TopbarProps {
  onToggleSidebar: () => void;
}

export default function Topbar({ onToggleSidebar }: TopbarProps) {
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="relative z-50 flex w-full shrink-0 flex-col border-b border-white/10 bg-[#07070A]">
      {/* ROW 1: Main Controls */}
      <div className="flex h-[72px] w-full items-center justify-between px-6">
        {/* LEFT: Hamburger */}
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 transition-all duration-150 hover:bg-white/[0.05] hover:text-white focus:outline-none"
        >
          <Menu size={23} strokeWidth={1.8} />
        </button>

        {/* RIGHT: Search, Bell, Messages, Profile */}
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-[280px] items-center rounded-xl border border-white/[0.08] bg-[#0A0D16] shadow-[inset_0_1px_0_rgba(255,255,255,0.02)] transition-all duration-150 focus-within:border-purple-500/30 focus-within:ring-2 focus-within:ring-purple-500/10">
            <Search
              size={17}
              strokeWidth={1.8}
              className="ml-3.5 shrink-0 text-zinc-500"
            />
            <input
              type="text"
              placeholder="Search anything..."
              className="min-w-0 flex-1 bg-transparent px-2.5 text-sm text-zinc-200 outline-none placeholder:text-zinc-500"
            />
          </div>

          <button
            type="button"
            aria-label="Notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-zinc-200 transition-all duration-150 hover:bg-white/[0.05] hover:text-white"
          >
            <Bell size={19} strokeWidth={1.8} />
            <span className="absolute right-1 top-0.5 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-purple-600 px-1 text-[9px] font-semibold text-white">
              3
            </span>
          </button>

          <button
            type="button"
            aria-label="Messages"
            className="relative flex h-10 w-10 items-center justify-center rounded-lg text-zinc-200 transition-all duration-150 hover:bg-white/[0.05] hover:text-white"
          >
            <MessageSquare size={19} strokeWidth={1.8} />
            <span className="absolute right-1 top-0.5 flex h-[15px] min-w-[15px] items-center justify-center rounded-full bg-purple-600 px-1 text-[9px] font-semibold text-white">
              5
            </span>
          </button>

          <div
            className="relative"
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setProfileOpen(false)}
          >
            <button
              type="button"
              aria-expanded={profileOpen}
              aria-haspopup="menu"
              className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition-all duration-150 hover:bg-white/[0.05] focus:outline-none"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold text-white shadow-[0_0_18px_rgba(139,92,246,0.12)]">
                B
              </div>
              <div className="hidden text-left md:block">
                <p className="text-sm font-semibold leading-tight text-white">
                  Barney
                </p>
                <p className="mt-1 text-xs leading-tight text-zinc-500">
                  Administrator
                </p>
              </div>
              <ChevronDown
                size={16}
                strokeWidth={1.8}
                className={`text-zinc-300 transition-transform duration-150 ${profileOpen ? "rotate-180" : ""}`}
              />
            </button>

            {profileOpen && (
              <div
                className="absolute right-0 top-[52px] z-50 w-52 overflow-hidden rounded-xl border border-white/10 bg-[#0B0D14] p-1.5 shadow-[0_15px_40px_rgba(0,0,0,0.45)]"
                role="menu"
              >
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                  role="menuitem"
                >
                  <User size={16} strokeWidth={1.8} /> Profile
                </button>
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white"
                  role="menuitem"
                >
                  <Settings size={16} strokeWidth={1.8} /> Settings
                </button>
                <div className="my-1 border-t border-white/[0.08]" />
                <button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-zinc-400 transition hover:bg-red-500/10 hover:text-red-400"
                  role="menuitem"
                >
                  <LogOut size={16} strokeWidth={1.8} /> Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ROW 2: Greeting (Left) & Calendar (Right - right between Avatar and Network Health) */}
      <div className="flex h-[60px] w-full items-center justify-between px-6">
        <h1 className="text-2xl font-semibold text-white">
          Good Morning, Barney! 👋
        </h1>

        <button
          type="button"
          className="flex h-10 items-center gap-3 rounded-xl border border-white/[0.08] bg-[#0A0D16] px-3.5 text-sm text-zinc-200 transition-all duration-150 hover:border-white/[0.14] hover:bg-[#0D1019]"
        >
          <CalendarDays size={17} strokeWidth={1.8} className="text-zinc-300" />
          <span>May 11, 2025</span>
          <ChevronDown
            size={15}
            strokeWidth={1.8}
            className="ml-2 text-zinc-400"
          />
        </button>
      </div>

      {/* ROW 3: Subtitle with Green Checkmark */}
      <div className="flex w-full items-center gap-2 px-6 pb-4">
        <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
        <p className="text-sm text-zinc-400">
          Here's what's happening with your network today.
        </p>
      </div>
    </header>
  );
}
