import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const revenueData = [
  { day: "Mon", revenue: 2400 },
  { day: "Tue", revenue: 3200 },
  { day: "Wed", revenue: 2800 },
  { day: "Thu", revenue: 4100 },
  { day: "Fri", revenue: 3600 },
  { day: "Sat", revenue: 5200 },
  { day: "Sun", revenue: 4600 },
];

export default function RevenueChart() {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#101218] p-6">
      <div className="mb-6">
        <h2 className="text-base font-semibold text-white">Revenue Overview</h2>

        <p className="mt-1 text-sm text-zinc-500">
          Revenue generated over the last 7 days
        </p>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={revenueData}>
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#71717A", fontSize: 12 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#71717A", fontSize: 12 }}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#101218",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "12px",
                color: "#fff",
              }}
            />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.12}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
