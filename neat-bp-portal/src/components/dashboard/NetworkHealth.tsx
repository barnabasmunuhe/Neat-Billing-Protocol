// src/components/dashboard/NetworkHealth.tsx
import {
  CheckCircle2,
  Cpu,
  Wifi,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export default function NetworkHealth() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/[0.08] bg-[#0A0D16] p-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Left: Overall Status */}
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
          <CheckCircle2 size={24} strokeWidth={1.8} />
        </div>
        <div>
          <p className="text-sm font-medium text-zinc-300">
            Overall Network Status:{" "}
            <span className="text-emerald-400">Excellent</span>
          </p>
          <p className="mt-1 text-xs text-zinc-500">
            All core systems are operational and performing well.
          </p>
        </div>
      </div>

      {/* Right: Quick Stats */}
      <div className="flex flex-wrap items-center gap-6">
        {/* Routers */}
        <div className="flex items-center gap-3 border-r border-white/[0.08] pr-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400">
            <Cpu size={18} strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-lg font-bold leading-tight text-white">12/12</p>
            <p className="text-xs text-zinc-500">Routers Online</p>
          </div>
        </div>

        {/* Access Points */}
        <div className="flex items-center gap-3 border-r border-white/[0.08] pr-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
            <Wifi size={18} strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-lg font-bold leading-tight text-white">24/26</p>
            <p className="text-xs text-zinc-500">Access Points Online</p>
          </div>
        </div>

        {/* Outages */}
        <div className="flex items-center gap-3 border-r border-white/[0.08] pr-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
            <AlertTriangle size={18} strokeWidth={1.8} />
          </div>
          <div>
            <p className="text-lg font-bold leading-tight text-white">2</p>
            <p className="text-xs text-zinc-500">Active Outages</p>
          </div>
        </div>

        {/* View Button */}
        <button className="group flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-zinc-300 transition-all hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white">
          View Network Health
          <ArrowRight
            size={16}
            className="text-zinc-500 transition-transform group-hover:translate-x-0.5 group-hover:text-purple-400"
          />
        </button>
      </div>
    </div>
  );
}
