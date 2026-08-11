import {
  FiMenu,
  FiSearch,
  FiBell,
  FiMessageSquare,
  FiChevronDown,
} from "react-icons/fi";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-white/10 bg-[#07070A] px-8">
      {/* Left */}
      <button
        type="button"
        className="rounded-lg p-2 text-zinc-400 transition hover:bg-white/5 hover:text-white"
        aria-label="Toggle sidebar"
      >
        <FiMenu />
      </button>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Search */}
<div className="flex h-10 w-56 items-center rounded-xl border border-white/10 bg-[#0B0D14]">
  <FiSearch
    size={18}
    className="ml-4 shrink-0 text-zinc-500"
  />

  <input
    type="text"
    placeholder="Search anything..."
    className="min-w-0 flex-1 bg-transparent px-3 pr-4 text-sm text-white outline-none placeholder:text-zinc-500"
  />
</div>

        <button
  type="button"
  className="relative rounded-lg p-2 text-zinc-300 transition hover:bg-white/5 hover:text-white"
  aria-label="Notifications"
>
  <FiBell size={18} />

  <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-purple-600 px-1 text-[10px] font-semibold text-white">
    3
  </span>
</button>

        {/* Messages */}
        <button
  type="button"
  className="relative rounded-lg p-2 text-zinc-300 transition hover:bg-white/5 hover:text-white"
  aria-label="Messages"
>
  <FiMessageSquare size={18} />

  <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-purple-600 px-1 text-[10px] font-semibold text-white">
    5
  </span>
</button>

        {/* Profile */}
        <button
          type="button"
          className="flex items-center gap-3 rounded-xl px-2 py-1.5 transition hover:bg-white/5"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-600 text-sm font-semibold">
            B
          </div>

          <div className="hidden text-left md:block">
            <p className="text-sm font-semibold text-white">
              Barney
            </p>
            <p className="text-xs text-zinc-500">
              Administrator
            </p>
          </div>

          <FiChevronDown />
        </button>
      </div>
    </header>
  );
}