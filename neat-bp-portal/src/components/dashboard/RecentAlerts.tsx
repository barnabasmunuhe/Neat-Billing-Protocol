import { FiCheckCircle, FiAlertTriangle, FiCreditCard } from "react-icons/fi";

const alerts = [
  {
    type: "success",
    message: "All routers are operating normally",
    time: "2 minutes ago",
  },
  {
    type: "warning",
    message: "High memory usage on Toi-Router",
    time: "15 minutes ago",
  },
  {
    type: "success",
    message: "Payment received from +254 7XX XXX 123",
    time: "32 minutes ago",
  },
];

export default function RecentAlerts() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#101218] p-5">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between">
        <h2 className="text-sm font-semibold text-white">Recent Alerts</h2>

        <button
          type="button"
          className="rounded-lg bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-400 transition hover:bg-purple-500/20"
        >
          View All
        </button>
      </div>

      {/* Alerts */}
      <div className="mt-2 min-h-0 flex-1 overflow-hidden divide-y divide-white/5">
        {alerts.map((alert) => (
          <div key={alert.message} className="flex items-center gap-3 py-2.5">
            <div className="shrink-0">
              {alert.type === "success" && (
                <FiCheckCircle size={20} className="text-emerald-400" />
              )}

              {alert.type === "warning" && (
                <FiAlertTriangle size={20} className="text-amber-400" />
              )}

              {alert.type === "payment" && (
                <FiCreditCard size={20} className="text-purple-400" />
              )}
            </div>

            <p className="min-w-0 flex-1 truncate text-sm text-zinc-300">
              {alert.message}
            </p>

            <span className="shrink-0 whitespace-nowrap text-xs text-zinc-500">
              {alert.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
