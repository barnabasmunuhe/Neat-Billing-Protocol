import {
  FiCheckCircle,
  FiCreditCard,
  FiUser,
  FiUserPlus,
} from "react-icons/fi";

const activities = [
  {
    icon: <FiUserPlus size={16} />,
    title: "New user registered: +254 7XX XXX 456",
    time: "10:15 AM",
    type: "user",
  },
  {
    icon: <FiCreditCard size={16} />,
    title: "Voucher purchased: KES 50 - 24 Hours",
    time: "10:12 AM",
    type: "payment",
  },
  {
    icon: <FiCheckCircle size={16} />,
    title: "Router Gikomba-Router came back online",
    time: "09:58 AM",
    type: "success",
  },
  {
    icon: <FiUser size={16} />,
    title: "Technician Mike checked in at City Market",
    time: "09:45 AM",
    type: "technician",
  },
];

export default function RecentActivities() {
  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#080A12]">
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between px-5 py-4">
        <h2 className="text-sm font-medium text-white">Recent Activities</h2>

        <button
          type="button"
          className="rounded-lg bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-400 transition hover:bg-violet-500/20"
        >
          View All
        </button>
      </div>

      {/* Activities */}
      <div className="min-h-0 flex-1 overflow-hidden">
        {activities.map((activity, index) => (
          <div
            key={activity.title}
            className={`flex items-center gap-3 px-5 py-2.5 ${
              index !== activities.length - 1 ? "border-b border-white/5" : ""
            }`}
          >
            {/* Icon */}
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                activity.type === "user"
                  ? "bg-cyan-500/10 text-cyan-400"
                  : activity.type === "payment"
                    ? "bg-violet-500/10 text-violet-400"
                    : activity.type === "success"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-zinc-500/10 text-zinc-400"
              }`}
            >
              {activity.icon}
            </div>

            {/* Activity text */}
            <p className="min-w-0 flex-1 truncate text-xs text-zinc-300">
              {activity.title}
            </p>

            {/* Time */}
            <span className="shrink-0 text-xs text-zinc-500">
              {activity.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
