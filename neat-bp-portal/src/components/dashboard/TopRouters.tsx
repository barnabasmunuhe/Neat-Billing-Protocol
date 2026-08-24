import { FiCheckCircle } from "react-icons/fi";

const routers = [
  {
    name: "Wakulima-Router",
    location: "Wakulima Market",
    uptime: "100%",
  },
  {
    name: "Gikomba-Router",
    location: "Gikomba Market",
    uptime: "99.8%",
  },
  {
    name: "CityMarket-Router",
    location: "City Market",
    uptime: "99.6%",
  },
  {
    name: "Toi-Router",
    location: "Toi Market",
    uptime: "98.9%",
  },
  {
    name: "Ngara-Router",
    location: "Ngara Market",
    uptime: "98.7%",
  },
];

export default function TopRouters() {
  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-[#101218] p-5">
      {/* Header */}
      <div className="mb-3 flex shrink-0 items-center justify-between">
        <h2 className="text-sm font-medium text-white">
          Top Performing Routers
        </h2>

        <span className="text-xs text-zinc-500">Uptime</span>
      </div>

      {/* Router list */}
      <div className="min-h-0 flex-1 overflow-hidden">
        {routers.map((router) => (
          <div
            key={router.name}
            className="flex items-center justify-between border-b border-white/5 py-2 last:border-0"
          >
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10">
                <FiCheckCircle className="text-emerald-400" />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">
                  {router.name}
                </p>

                <p className="truncate text-xs text-zinc-500">
                  {router.location}
                </p>
              </div>
            </div>

            <span className="ml-2 shrink-0 text-sm font-medium text-emerald-400">
              {router.uptime}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
