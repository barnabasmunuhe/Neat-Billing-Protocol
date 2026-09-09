// src/components/dashboard/AiInsights.tsx
import {
  ShieldCheck,
  AlertTriangle,
  TrendingDown,
  DatabaseBackup,
  ArrowRight,
} from "lucide-react";

const insights = [
  {
    type: "success",
    title: "Great performance today!",
    description: "Payment success rate is up 2.8% this week.",
    action: "View Details",
  },
  {
    type: "warning",
    title: "High memory usage on Toi-Router",
    description: "Memory usage is at 92%.",
    action: "View Router",
  },
  {
    type: "trend",
    title: "Peak hours identified",
    description: "Peak network traffic between 6PM - 10PM.",
    action: "View Analytics",
  },
  {
    type: "suggestion",
    title: "Suggestion: Backup Configuration",
    description: "Toi-Router hasn't been backed up for 14 days.",
    action: "Backup Now",
  },
];

export default function AiInsights() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0D16] p-5">
      <div className="mb-4 flex shrink-0 items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-purple-500/20 text-purple-400">
            ✨
          </span>
          <h2 className="text-base font-semibold text-white">
            AI Network Insights
          </h2>
        </div>
        <button className="text-xs font-medium text-purple-400 hover:text-purple-300">
          View All
        </button>
      </div>

      {/* Strict overflow-hidden, tight spacing */}
      <div className="min-h-0 flex-1 space-y-2 overflow-hidden">
        {insights.map((insight, idx) => (
          <div
            key={idx}
            className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-2.5 transition-colors hover:bg-white/[0.04]"
          >
            <div className="mt-0.5 shrink-0">
              {insight.type === "success" && (
                <ShieldCheck size={18} className="text-emerald-400" />
              )}
              {insight.type === "warning" && (
                <AlertTriangle size={18} className="text-amber-400" />
              )}
              {insight.type === "trend" && (
                <TrendingDown size={18} className="text-blue-400" />
              )}
              {insight.type === "suggestion" && (
                <DatabaseBackup size={18} className="text-purple-400" />
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-white">{insight.title}</p>
              <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                {insight.description}
              </p>
            </div>
            <button className="shrink-0 text-xs font-medium text-zinc-400 transition-colors hover:text-white">
              {insight.action} <ArrowRight size={12} className="ml-1 inline" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
