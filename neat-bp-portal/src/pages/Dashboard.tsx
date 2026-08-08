import {
  Users,
  Zap,
  WalletCards,
  Router,
} from "lucide-react";

import StatsCard from "../components/dashboard/StatsCard";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-white">
          Good Morning{" "}
          <span className="text-purple-400">Barney</span> ☀️
        </h1>

        <p className="mt-1 text-sm text-zinc-400">
          Your network is healthy.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Customers"
          value="284"
          description="Online right now"
          icon={<Users size={20} />}
        />

        <StatsCard
          title="Active Sessions"
          value="342"
          description="+12 today"
          icon={<Zap size={20} />}
        />

        <StatsCard
          title="Today's Revenue"
          value="KES 18,420"
          description="+12% vs yesterday"
          icon={<WalletCards size={20} />}
        />

        <StatsCard
          title="Routers"
          value="12/12"
          description="All routers healthy"
          icon={<Router size={20} />}
        />
      </div>
    </div>
  );
}