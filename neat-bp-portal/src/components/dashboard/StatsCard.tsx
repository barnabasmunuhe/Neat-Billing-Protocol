// src/components/dashboard/StatsCard.tsx
import { ReactNode } from "react";
import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  trend: number;
  trendLabel: string;
  icon: ReactNode;
  progress?: number;
  chart?: ReactNode;
}

export default function StatsCard({
  title,
  value,
  trend,
  trendLabel,
  icon,
  progress,
  chart,
}: StatsCardProps) {
  const getTrendColor = () => {
    if (trend > 0) return "text-emerald-400";
    if (trend < 0) return "text-red-400";
    return "text-zinc-400";
  };

  return (
    <div className="flex flex-col rounded-2xl border border-white/[0.08] bg-[#0A0D16] p-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-600/20 text-purple-400">
            {icon}
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              {title}
            </p>
            <h2 className="mt-1 text-2xl font-bold text-white">{value}</h2>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-1.5 text-xs">
        <span
          className={`flex items-center gap-0.5 font-medium ${getTrendColor()}`}
        >
          {trend > 0 ? (
            <ArrowUpRight size={14} />
          ) : trend < 0 ? (
            <ArrowDownRight size={14} />
          ) : (
            <Minus size={14} />
          )}
          {Math.abs(trend)}%
        </span>
        <span className="text-zinc-500">{trendLabel}</span>
      </div>

      {/* Added margin-top to the chart to keep it from hugging the bottom */}
      {chart && <div className="mt-4 h-10 w-full">{chart}</div>}

      {progress !== undefined && (
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.05]">
          <div
            className="h-full rounded-full bg-purple-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}
