import {
  FiMenu,
  FiSearch,
  FiBell,
  FiMessageSquare,
  FiChevronDown,
} from "react-icons/fi";

interface TopbarProps {
  onToggleSidebar: () => void;
}

export default function Topbar({ onToggleSidebar }: TopbarProps) {
  return (
    <header className="flex h-20 shrink-0 items-center justify-between border-b border-white/10 bg-[#07070A] px-6">
      {/* =========================================================
          LEFT SIDE
      ========================================================= */}
      <div className="flex items-center">
        {/* SIDEBAR TOGGLE */}
        <button
          type="button"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
          className={[
            "flex h-9 w-9 items-center justify-center",
            "rounded-lg",
            "text-zinc-400",
            "transition-colors duration-150",
            "hover:bg-white/[0.05]",
            "hover:text-white",
            "focus:outline-none",
          ].join(" ")}
        >
          <FiMenu size={20} />
        </button>
      </div>

      {/* =========================================================
          RIGHT SIDE
      ========================================================= */}
      <div className="flex items-center gap-5">
        {/* SEARCH */}
        <div className="flex h-10 w-56 items-center rounded-xl border border-white/10 bg-[#0B0D14]">
          <FiSearch size={18} className="ml-4 shrink-0 text-zinc-500" />

          <input
            type="text"
            placeholder="Search anything..."
            className={[
              "min-w-0 flex-1",
              "bg-transparent",
              "px-3 pr-4",
              "text-sm text-white",
              "outline-none",
              "placeholder:text-zinc-500",
            ].join(" ")}
          />
        </div>

        {/* NOTIFICATIONS */}
        <button
          type="button"
          aria-label="Notifications"
          className={[
            "relative rounded-lg p-2",
            "text-zinc-300",
            "transition",
            "hover:bg-white/5",
            "hover:text-white",
          ].join(" ")}
        >
          <FiBell size={18} />

          <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-purple-600 px-1 text-[10px] font-semibold text-white">
            3
          </span>
        </button>

        {/* MESSAGES */}
        <button
          type="button"
          aria-label="Messages"
          className={[
            "relative rounded-lg p-2",
            "text-zinc-300",
            "transition",
            "hover:bg-white/5",
            "hover:text-white",
          ].join(" ")}
        >
          <FiMessageSquare size={18} />

          <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-purple-600 px-1 text-[10px] font-semibold text-white">
            5
          </span>
        </button>

        {/* PROFILE */}
        <button
          type="button"
          className={[
            "flex items-center gap-3",
            "rounded-xl px-2 py-1.5",
            "transition",
            "hover:bg-white/5",
          ].join(" ")}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold">
            B
          </div>

          <div className="hidden text-left md:block">
            <p className="text-sm font-semibold text-white">Barney</p>

            <p className="text-xs text-zinc-500">Administrator</p>
          </div>

          <FiChevronDown size={16} className="text-zinc-400" />
        </button>
      </div>
    </header>
  );
}
