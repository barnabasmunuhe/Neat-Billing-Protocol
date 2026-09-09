// src/pages/Dashboard.tsx
import { DollarSign, Users, Wrench, Heart, Target } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import PageContainer from "../components/layout/PageContainer";
import NetworkHealth from "../components/dashboard/NetworkHealth";
import StatsCard from "../components/dashboard/StatsCard";
import NetworkMap from "../components/dashboard/NetworkMap";
import RevenueChart from "../components/dashboard/RevenueChart";
import TopRouters from "../components/dashboard/TopRouters";
import RecentAlerts from "../components/dashboard/RecentAlerts";
import AiInsights from "../components/dashboard/AiInsights";
import BottomStats from "../components/dashboard/BottomStats";

const sparkData = [
  { v: 10 },
  { v: 15 },
  { v: 8 },
  { v: 20 },
  { v: 25 },
  { v: 18 },
  { v: 28 },
];

const Dashboard = () => {
  return (
    <PageContainer>
      <div className="flex h-full flex-col gap-4 overflow-hidden">
        {/* 1. Network Health (Fixed - don't shrink) */}
        <div className="shrink-0">
          <NetworkHealth />
        </div>

        {/* 2. KPI Cards (Fixed - don't shrink) */}
        <div className="grid shrink-0 grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
          <StatsCard
            title="Today's Revenue"
            value="KES 18,420"
            trend={-12}
            trendLabel="vs yesterday"
            icon={<DollarSign size={20} />}
            chart={
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={sparkData}
                  margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                >
                  <Area
                    type="monotone"
                    dataKey="v"
                    stroke="#8B5CF6"
                    fill="#8B5CF6"
                    fillOpacity={0.2}
                    strokeWidth={1.5}
                  />
                </AreaChart>
              </ResponsiveContainer>
            }
          />
          <StatsCard
            title="Active Customers"
            value="284"
            trend={0}
            trendLabel="Online right now"
            icon={<Users size={20} />}
          />
          <StatsCard
            title="Technicians On-Site"
            value="3"
            trend={0}
            trendLabel="Active technicians"
            icon={<Wrench size={20} />}
          />
          <StatsCard
            title="Customer Happiness"
            value="96%"
            trend={0}
            trendLabel="Excellent"
            icon={<Heart size={20} />}
            progress={96}
          />
          <StatsCard
            title="Today's Goal"
            value="KES 25,000"
            trend={0}
            trendLabel="76% achieved!"
            icon={<Target size={20} />}
            progress={76}
          />
        </div>

        {/* 3. Middle Row: NETWORK MAP & AI - Fills ALL remaining space (min-h-0 is crucial) */}
        <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 xl:grid-cols-2">
          <div className="h-full min-h-0">
            {" "}
            <NetworkMap />{" "}
          </div>
          <div className="h-full min-h-0">
            {" "}
            <AiInsights />{" "}
          </div>
        </div>

        {/* 4. Bottom Charts Row (Strict fixed height, no shrink) */}
        <div className="grid h-[220px] shrink-0 grid-cols-1 gap-4 xl:grid-cols-12">
          <div className="h-full min-h-0 xl:col-span-4">
            {" "}
            <RevenueChart />{" "}
          </div>
          <div className="h-full min-h-0 xl:col-span-4">
            {" "}
            <TopRouters />{" "}
          </div>
          <div className="h-full min-h-0 xl:col-span-4">
            {" "}
            <RecentAlerts />{" "}
          </div>
        </div>

        {/* 5. Bottom Stats (Strict fixed height 80px) */}
        <div className="h-[80px] shrink-0">
          <BottomStats />
        </div>
      </div>
    </PageContainer>
  );
};

export default Dashboard;
