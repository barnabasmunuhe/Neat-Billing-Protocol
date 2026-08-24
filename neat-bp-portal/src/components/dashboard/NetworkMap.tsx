import { FiWifi } from "react-icons/fi";

const routers = [
  {
    name: "Wakulima",
    position: "left-[18%] top-[30%]",
  },
  {
    name: "Gikomba",
    position: "left-[42%] top-[20%]",
  },
  {
    name: "City Market",
    position: "left-[70%] top-[30%]",
  },
  {
    name: "Toi Market",
    position: "left-[30%] top-[68%]",
  },
  {
    name: "Ngara",
    position: "left-[72%] top-[68%]",
  },
];

export default function NetworkMap() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#101218] p-5">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-white">Network Map</h2>

          <p className="mt-1 text-xs text-zinc-500">Router network overview</p>
        </div>

        <button
          type="button"
          className="rounded-lg bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-400 transition hover:bg-purple-500/20"
        >
          View All
        </button>
      </div>

      {/* Map */}
      <div className="relative mt-4 min-h-0 flex-1 overflow-hidden rounded-lg border border-white/5 bg-[#080A10]">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Network lines */}
        <div className="absolute left-[20%] top-[35%] h-px w-[48%] rotate-[-10deg] bg-cyan-400/40" />

        <div className="absolute left-[43%] top-[25%] h-px w-[32%] rotate-[15deg] bg-cyan-400/40" />

        <div className="absolute left-[32%] top-[68%] h-px w-[40%] rotate-[-18deg] bg-cyan-400/40" />

        {/* Router nodes */}
        {routers.map((router) => (
          <div
            key={router.name}
            className={`absolute ${router.position} flex -translate-x-1/2 -translate-y-1/2 flex-col items-center`}
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10">
              <FiWifi size={18} className="text-emerald-400" />

              <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>

            <span className="mt-2 whitespace-nowrap text-[11px] text-zinc-300">
              {router.name}
            </span>
          </div>
        ))}

        {/* NEAT Network */}
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-purple-400/50 bg-purple-500/10">
            <FiWifi size={24} className="text-purple-400" />
          </div>

          <span className="mt-2 text-[11px] font-semibold text-white">
            NEAT Network
          </span>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-3 flex shrink-0 items-center gap-5 text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          Healthy
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
          Warning
        </div>

        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
          Offline
        </div>
      </div>
    </div>
  );
}
