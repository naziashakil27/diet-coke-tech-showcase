import React from "react";
import { Sparkles, Flame, Droplet, Layers, Zap } from "lucide-react";
import { TechSpec } from "../types";

export default function TechGrid() {
  const specs: TechSpec[] = [
    {
      id: "calories",
      label: "CALORIES",
      value: "000",
      unit: "KCAL",
      description: "Thermodynamic energy payload. Complete metabolic bypass. Infinite refreshment without caloric heat conversion.",
      iconName: "Flame",
    },
    {
      id: "sugar",
      label: "SUGAR",
      value: "0.0",
      unit: "GRAMS",
      description: "Glucolytic matrix status: Empty. Zero sweet cycles. Preserves glucose homeostasis with zero insulin activation.",
      iconName: "Sparkles",
    },
    {
      id: "caffeine",
      label: "CAFFEINE",
      value: "046",
      unit: "MG",
      description: "Synaptic neural accelerator level per 12 FL OZ. Elevates spatial cognition, response times, and focus pathways.",
      iconName: "Zap",
    },
    {
      id: "size",
      label: "SIZE",
      value: "355",
      unit: "ML",
      description: "Standard liquid displacement capacity. Sculpted in structural cold-rolled recyclable aluminum cylinders.",
      iconName: "Droplet",
    },
    {
      id: "sweetener",
      label: "SWEETENERS",
      value: "DUAL",
      unit: "SYNTH",
      description: "Bio-engineered signature sweet compounds: Aspartame blended with Acesulfame Potassium for optimal flavor curve.",
      iconName: "Layers",
    },
  ];

  // Map icon names to components safely
  const getIcon = (name: string) => {
    switch (name) {
      case "Flame":
        return <Flame className="w-5 h-5 text-[#E8002D]" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-gray-300" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-amber-400 animate-pulse" />;
      case "Droplet":
        return <Droplet className="w-5 h-5 text-sky-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-violet-400" />;
      default:
        return <Layers className="w-5 h-5 text-[#E8002D]" />;
    }
  };

  return (
    <div id="tech-spec-section" className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {specs.map((spec) => (
          <div
            key={spec.id}
            id={`spec-card-${spec.id}`}
            className="group relative bg-[#0e0e0e] border border-gray-800 rounded-lg p-5 overflow-hidden transition-all duration-300 hover:border-red-600/50 hover:shadow-[0_0_15px_rgba(232,0,45,0.15)] hover:-translate-y-1"
          >
            {/* Top accent row */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-gray-500 tracking-wider">
                SPEC // {spec.label}
              </span>
              <div className="p-1.5 bg-black/40 rounded border border-gray-850 group-hover:border-red-500/30 transition-colors">
                {getIcon(spec.iconName)}
              </div>
            </div>

            {/* Main Spec Figure */}
            <div className="flex items-baseline gap-1.5 mb-2">
              <span className="font-mono font-bold text-4xl text-white tracking-tight group-hover:text-red-500 transition-colors">
                {spec.value}
              </span>
              {spec.unit && (
                <span className="font-mono text-xs text-gray-400 tracking-wider">
                  {spec.unit}
                </span>
              )}
            </div>

            {/* Separator Line */}
            <div className="w-full h-px bg-gradient-to-r from-red-600/30 to-transparent my-3 group-hover:from-red-600/60 transition-all duration-500" />

            {/* Description Text */}
            <p className="font-sans text-xs text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
              {spec.description}
            </p>

            {/* Tech details panel in hover state */}
            <div className="absolute bottom-0 right-0 h-1/2 w-1/2 bg-radial-gradient from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-500" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-transparent group-hover:border-red-500 transition-colors duration-300 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-transparent group-hover:border-red-500 transition-colors duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </div>
  );
}
