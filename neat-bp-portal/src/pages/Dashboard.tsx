import {
  FiDollarSign,
  FiRadio,
  FiSmile,
  FiTarget,
  FiUserCheck,
  FiUsers,
  FiWifi,
} from "react-icons/fi";

import StatsCard from "../components/dashboard/StatsCard";
import RevenueChart from "../components/dashboard/RevenueChart";
import NetworkHealth from "../components/dashboard/NetworkHealth";
import TopRouters from "../components/dashboard/TopRouters";
import NetworkMap from "../components/dashboard/NetworkMap";
import RecentAlerts from "../components/dashboard/RecentAlerts";
import RecentActivities from "../components/dashboard/RecentActivities";

export default function Dashboard() {
  return (
    <div className="h-full min-h-0 overflow-hidden">
      <div className="grid h-full min-h-0 grid-rows-[auto_auto_auto_minmax(0,1fr)_auto] gap-3">
        {/* =========================================================
            GREETING
        ========================================================= */}
        <div className="min-h-0">
          <h1 className="text-2xl font-semibold tracking-tight text-white">
            Good Morning <span className="text-violet-500">Barney</span> ☀️
          </h1>

          <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-500 text-emerald-400">
              ✓
            </span>

            <span>Your network is healthy.</span>
          </div>
        </div>

        {/* =========================================================
            KPI ROW 1
        ========================================================= */}
        <div className="grid min-h-0 grid-cols-4 gap-3">
          <div className="min-h-0">
            <NetworkHealth />
          </div>

          <div className="min-h-0">
            <StatsCard
              title="Today's Revenue"
              value="KES 18,420"
              description="vs yesterday"
              icon={<FiDollarSign size={20} />}
            />
          </div>

          <div className="min-h-0">
            <StatsCard
              title="Active Customers"
              value="284"
              description="Online right now"
              icon={<FiUsers size={20} />}
            />
          </div>

          <div className="min-h-0">
            <StatsCard
              title="Outages"
              value="None"
              description="All systems operational"
              icon={<FiWifi size={20} />}
            />
          </div>
        </div>

        {/* =========================================================
            KPI ROW 2
        ========================================================= */}
        <div className="grid min-h-0 grid-cols-4 gap-3">
          <div className="min-h-0">
            <StatsCard
              title="Routers"
              value="12/12"
              description="Healthy"
              icon={<FiRadio size={20} />}
            />
          </div>

          <div className="min-h-0">
            <StatsCard
              title="Technicians"
              value="3"
              description="Working"
              icon={<FiUserCheck size={20} />}
            />
          </div>

          <div className="min-h-0">
            <StatsCard
              title="Customer Happiness"
              value="96%"
              description="Excellent"
              icon={<FiSmile size={20} />}
            />
          </div>

          <div className="min-h-0">
            <StatsCard
              title="Today's Goal"
              value="KES 25,000"
              description="74% achieved"
              icon={<FiTarget size={20} />}
            />
          </div>
        </div>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}
        <div className="grid min-h-0 grid-cols-[4fr_3fr_4fr] gap-3">
          <div className="h-full min-h-0 overflow-hidden">
            <RevenueChart />
          </div>

          <div className="h-full min-h-0 overflow-hidden">
            <TopRouters />
          </div>

          <div className="h-full min-h-0 overflow-hidden">
            <NetworkMap />
          </div>
        </div>

        {/* =========================================================
            BOTTOM ROW
        ========================================================= */}
        <div className="grid min-h-0 grid-cols-2 gap-3">
          <div className="h-full min-h-0 overflow-hidden">
            <RecentAlerts />
          </div>

          <div className="h-full min-h-0 overflow-hidden">
            <RecentActivities />
          </div>
        </div>
      </div>
    </div>
  );
}
