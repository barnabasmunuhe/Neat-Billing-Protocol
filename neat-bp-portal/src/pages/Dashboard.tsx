import {
  FiUsers,
  FiZap,
  FiDollarSign,
  FiWifi,
} from "react-icons/fi";

import StatsCard from "../components/dashboard/StatsCard";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-white">
          Good Morning Barney ☀️
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          Your network is healthy.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Customers"
          value="284"
          description="+12.5% from last month"
          icon={<FiUsers size={20} />}
        />

        <StatsCard
          title="Active Sessions"
          value="342"
          description="Currently online"
          icon={<FiZap size={20} />}
        />

        <StatsCard
          title="Revenue"
          value="KES 18,420"
          description="+8.2% from last month"
          icon={<FiDollarSign size={20} />}
        />

        <StatsCard
          title="Routers"
          value="12/12"
          description="All systems operational"
          icon={<FiWifi size={20} />}
        />
      </div>
    </div>
  );
}