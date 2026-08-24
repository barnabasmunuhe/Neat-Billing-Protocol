import type { ReactNode } from "react";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: ReactNode;
}

export default function StatsCard({
  title,
  value,
  description,
  icon,
}: StatsCardProps) {
  return (
    <div className="flex h-full min-h-0 flex-col rounded-xl border border-white/10 bg-[#101218] p-5">
      <div className="flex items-start justify-between">
        <div className="min-w-0">
          <p className="text-sm text-zinc-400">{title}</p>

          <p className="mt-2 text-2xl font-semibold text-white">{value}</p>

          <p className="mt-1 text-xs text-zinc-500">{description}</p>
        </div>

        <div className="shrink-0 rounded-lg bg-purple-500/10 p-2.5 text-purple-400">
          {icon}
        </div>
      </div>
    </div>
  );
}
