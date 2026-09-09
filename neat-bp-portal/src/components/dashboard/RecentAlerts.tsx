// src/components/dashboard/RecentAlerts.tsx
import { AlertTriangle, WifiOff, CheckCircle2 } from "lucide-react";

const alerts = [
  {
    type: "warning",
    title: "Toi-Router memory usage high",
    time: "2m ago",
    description: "Memory usage at 92%",
  },
  {
    type: "down",
    title: "Gikomba-AP-02 is offline",
    time: "15m ago",
    description: "No response for 5 minutes",
  },
  {
    type: "warning",
    title: "High bandwidth usage",
    time: "32m ago",
    description: "Wakulima-AP-01 bandwidth at 85%",
  },
  {
    type: "success",
    title: "Payment received",
    time: "45m ago",
    description: "KES 5,000 from +254 7XX XXX 456",
  },
];

export default function RecentAlerts() {
  return (
    // Added min-h-0 and overflow-hidden
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0D16] p-5">
      <div className="mb-4 flex shrink-0 items-center justify-between">
        <h2 className="text-base font-semibold text-white">Recent Alerts</h2>
        <button className="text-xs font-medium text-zinc-400 hover:text-white">
          View All
        </button>
      </div>

      <div className="min-h-0 flex-1 space-y-3 overflow-hidden">
        {alerts.map((alert, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
          >
            <div className="shrink-0">
              {alert.type === "warning" && (
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <AlertTriangle size={16} />
                </div>
              )}
              {alert.type === "down" && (
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-500/10 text-red-400">
                  <WifiOff size={16} />
                </div>
              )}
              {alert.type === "success" && (
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                  <CheckCircle2 size={16} />
                </div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-white">
                {alert.title}
              </p>
              <p className="mt-0.5 truncate text-xs text-zinc-500">
                {alert.description}
              </p>
            </div>
            <span className="shrink-0 text-xs text-zinc-500">{alert.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
