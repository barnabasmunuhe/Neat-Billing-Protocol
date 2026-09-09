// src/components/dashboard/NetworkMap.tsx
import { useState } from "react";
import { Cpu, Wifi, Maximize2 } from "lucide-react";

interface Node {
  id: string;
  name: string;
  status: "healthy" | "warning" | "down";
  details: string;
  x: number;
  y: number;
}

// Expanded coordinates to match target map layout
const nodes: Node[] = [
  {
    id: "1",
    name: "Wakulima-AP-01",
    status: "healthy",
    details: "Clients: 24\nUptime: 26.6h",
    x: 15,
    y: 25,
  },
  {
    id: "2",
    name: "City Market AP-03",
    status: "healthy",
    details: "Clients: 15\nUptime: 54.2h",
    x: 82,
    y: 20,
  },
  {
    id: "3",
    name: "Core Router",
    status: "healthy",
    details: "Uptime: 15d 4h",
    x: 48,
    y: 50,
  },
  {
    id: "4",
    name: "Gikomba-AP-02",
    status: "warning",
    details: "Clients: 32\nUptime: 1h 3h",
    x: 18,
    y: 72,
  },
  {
    id: "5",
    name: "Toi Market AP-05",
    status: "down",
    details: "Clients: 21\nUptime: 45.1h",
    x: 80,
    y: 75,
  },
];

const statusColors = {
  healthy: "bg-emerald-500",
  warning: "bg-amber-400",
  down: "bg-red-500",
};

export default function NetworkMap() {
  const [selectedNode, setSelectedNode] = useState<Node | null>(nodes[2]);

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A0D16] p-5">
      {/* Header */}
      <div className="mb-4 flex shrink-0 items-center justify-between">
        <h2 className="text-base font-semibold text-white">Network Map</h2>
        <button className="flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300">
          View Full Map <Maximize2 size={14} />
        </button>
      </div>

      {/* Map Area - flex-1 so it expands */}
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-xl border border-white/[0.06] bg-[#060609]">
        {/* SVG Lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <line
            x1="48"
            y1="50"
            x2="15"
            y2="25"
            stroke="#3f3f46"
            strokeWidth="0.3"
            strokeDasharray="2 2"
          />
          <line
            x1="48"
            y1="50"
            x2="82"
            y2="20"
            stroke="#3f3f46"
            strokeWidth="0.3"
            strokeDasharray="2 2"
          />
          <line
            x1="48"
            y1="50"
            x2="18"
            y2="72"
            stroke="#3f3f46"
            strokeWidth="0.3"
            strokeDasharray="2 2"
          />
          <line
            x1="48"
            y1="50"
            x2="80"
            y2="75"
            stroke="#3f3f46"
            strokeWidth="0.3"
            strokeDasharray="2 2"
          />
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <button
            key={node.id}
            onClick={() => setSelectedNode(node)}
            className={`group absolute z-10 -translate-x-1/2 -translate-y-1/2 transition-transform duration-200 hover:scale-110`}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div className="flex flex-col items-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 bg-[#1e1e24] transition-colors ${
                  selectedNode?.id === node.id
                    ? "border-purple-500 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
                    : "border-zinc-700 group-hover:border-purple-500/50"
                }`}
              >
                {node.name.includes("Router") ? (
                  <Cpu size={18} className="text-zinc-300" />
                ) : (
                  <Wifi size={18} className="text-zinc-300" />
                )}
              </div>
              <div className="mt-1.5 rounded-md bg-[#09090b]/80 px-2 py-1 backdrop-blur-sm">
                <p className="text-[10px] font-semibold text-white whitespace-nowrap">
                  {node.name}
                </p>
              </div>
              <div className="mt-1 flex items-center gap-1.5">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${statusColors[node.status]}`}
                />
                <span className="text-[9px] text-zinc-500">
                  {node.status === "healthy"
                    ? "Healthy"
                    : node.status === "warning"
                      ? "Warning"
                      : "Down"}
                </span>
              </div>
            </div>
          </button>
        ))}

        {/* Selected Node Info Popup */}
        {selectedNode && (
          <div className="absolute bottom-4 left-1/2 z-20 w-[200px] -translate-x-1/2 rounded-xl border border-white/10 bg-[#101218]/95 p-4 shadow-xl backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
              <p className="text-xs font-semibold text-white">
                {selectedNode.name}
              </p>
              <span
                className={`h-2 w-2 rounded-full ${statusColors[selectedNode.status]}`}
              />
            </div>
            <div className="space-y-1">
              {selectedNode.details.split("\n").map((line, idx) => {
                const [key, value] = line.split(": ");
                return (
                  <div key={idx} className="flex justify-between text-[10px]">
                    <span className="text-zinc-500">{key}</span>
                    <span className="font-medium text-zinc-300">{value}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="mt-4 flex shrink-0 items-center gap-6">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-xs text-zinc-500">Healthy</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          <span className="text-xs text-zinc-500">Warning</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-red-500" />
          <span className="text-xs text-zinc-500">Down</span>
        </div>
      </div>
    </div>
  );
}
