// src/components/dashboard/BottomStats.tsx
import { Users, DollarSign, Database, Activity, CheckCircle2, Timer } from "lucide-react";

const stats = [
  { title: "Total Customers", value: "1,248", change: "+8%", icon: Users },
  { title: "Total Revenue (Month)", value: "KES 542,680", change: "+15%", icon: DollarSign },
  { title: "Total Data Used", value: "2.45 TB", change: "+12%", icon: Database },
  { title: "Active Sessions", value: "456", change: "+5%", icon: Activity },
  { title: "Payment Success Rate", value: "99.2%", change: "+1.2%", icon: CheckCircle2 },
  { title: "Avg. Response Time", value: "45ms", change: "-8ms", icon: Timer },
];

export default function BottomStats() {
  return (
    <div className="grid h-full grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;
        return (
          <div key={idx} className="flex h-full items-center gap-3 rounded-xl border border-white/[0.08] bg-[#101218] p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-purple-600/20 text-purple-400">
              <Icon size={18} />
            </div>
            <div className="min-w-0">
              <p className="truncate text-xs text-zinc-500">{stat.title}</p>
              <div className="flex items-center gap-2">
                <p className="truncate text-sm font-bold text-white">{stat.value}</p>
                <span className="text-xs text-purple-400">{stat.change}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}