import { FiActivity, FiCheckCircle } from "react-icons/fi";

export default function NetworkHealth() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#101218] p-6">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <FiActivity className="text-emerald-400" size={20} />

            <h2 className="text-base font-semibold text-white">
              Network Health
            </h2>
          </div>

          <p className="mt-1 text-sm text-zinc-500">Overall network status</p>
        </div>

        <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-400">
          <FiCheckCircle size={14} />
          Healthy
        </div>
      </div>

      <div className="mt-8">
        <p className="text-4xl font-semibold text-emerald-400">98.4%</p>

        <p className="mt-2 text-sm text-zinc-500">Network uptime</p>
      </div>

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-xs text-zinc-500">
          <span>System health</span>
          <span>98.4%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[98.4%] rounded-full bg-emerald-500" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3">
        <div className="rounded-xl bg-white/5 p-3">
          <p className="text-xs text-zinc-500">Routers</p>
          <p className="mt-1 text-lg font-semibold text-white">12/12</p>
        </div>

        <div className="rounded-xl bg-white/5 p-3">
          <p className="text-xs text-zinc-500">Online</p>
          <p className="mt-1 text-lg font-semibold text-emerald-400">12</p>
        </div>

        <div className="rounded-xl bg-white/5 p-3">
          <p className="text-xs text-zinc-500">Down</p>
          <p className="mt-1 text-lg font-semibold text-white">0</p>
        </div>
      </div>
    </div>
  );
}
