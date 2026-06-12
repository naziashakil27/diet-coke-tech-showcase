import React, { useState } from "react";
import { FlavorItem } from "../types";
import { ChevronRight, Award } from "lucide-react";
import classicCan from "../assets/images/diet_coke_classic_1781264470106.jpg";
import caffeineFreeCan from "../assets/images/caffeine_free_gold_1781264483183.jpg";
import cherryDietCan from "../assets/images/cherry_diet_coke_1781264499540.jpg";
import nanoBananaCan from "../assets/images/diet_coke_nano_banana.png";

export default function FlavorScroll() {
  const flavors: FlavorItem[] = [
    {
      id: "classic",
      name: "DIET COKE CLASSIC",
      tagline: "STAY EXTRAORDINARY.",
      image: classicCan,
      accentColor: "#E8002D", // Coke Red
      badge: "ORIGINAL CODE",
      canColor: "from-gray-300 via-gray-100 to-gray-400",
      description: "The immaculate standard. High-gloss silver aluminum shielding containing zero sugar, zero calories, and zero compromise. Designed for the taste of it. High cognitive focus catalyst.",
    },
    {
      id: "caffeine-free",
      name: "CAFFEINE FREE",
      tagline: "CALM VELOCITY.",
      image: caffeineFreeCan,
      accentColor: "#C9A84C", // Premium gold
      badge: "DE-COGNITIVE ACCELERANT",
      canColor: "from-amber-300 via-[#FFEAA0] to-amber-500",
      description: "Infinite taste, zero caffeine strain. Wrapped in precious gilded micro-plates. Perfectly tuned for high-velocity environments requiring premium focus without neural amplification.",
    },
    {
      id: "cherry-diet",
      name: "CHERRY DIET COKE",
      tagline: "ENTER THE CHERRY DIMENSION.",
      image: cherryDietCan,
      accentColor: "#D11A5B", // Electric magenta Cherry
      badge: "FRUIT ATOMIC MATRIX",
      canColor: "from-pink-500 via-white to-purple-600",
      description: "A dark crimson splash within the traditional formula. Crisp natural essence of sweet wild cherry infused with cold carbonation nodes. Bold, irresistible flavor curve for high-status mood loops.",
    },
    {
      id: "nano-banana",
      name: "GEMINI NANO BANANA",
      tagline: "COGNITIVE CREATIVE MATRIX.",
      image: nanoBananaCan,
      accentColor: "#FFE135", // Banana yellow
      badge: "LIMITED TECH FLAVOR",
      canColor: "from-yellow-400 via-zinc-100 to-yellow-600",
      description: "A special cyberpunk concept flavor combining a refreshing hint of banana essence with classic Diet Coke crispness. Designed using artificial neural networks to unlock peak creative workflow.",
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {/* Dynamic Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {flavors.map((flavor, index) => {
          const isSelected = activeIndex === index;
          return (
            <div
              key={flavor.id}
              id={`flavor-card-${flavor.id}`}
              className="relative group flex flex-col h-full bg-[#0d0d0d] border border-gray-850 rounded-xl overflow-hidden transition-all duration-500 cursor-pointer hover:border-red-650/40"
              style={{
                boxShadow: isSelected
                  ? `0px 10px 30px -10px ${flavor.accentColor}33`
                  : "none",
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* Top Accent Strip with dynamically color-matched bar */}
              <div
                className="h-1 w-full bg-gray-800 group-hover:transition-all duration-500"
                style={{
                  backgroundColor: isSelected ? flavor.accentColor : "rgb(31, 41, 55)",
                }}
              />

              {/* Card Meta Badge */}
              <div className="px-5 pt-5 pb-2 flex items-center justify-between">
                <span className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
                  VARIANT_{index + 1} // CRITICAL
                </span>
                <span
                  className="font-mono text-[9px] px-2 py-0.5 rounded border text-slate-400 bg-white/5 transition-all duration-300"
                  style={{
                    borderColor: isSelected ? `${flavor.accentColor}50` : "rgba(255,255,255,0.08)",
                  }}
                >
                  {flavor.badge}
                </span>
              </div>

              {/* Responsive High-Fidelity Product Display Area */}
              <div className="relative group-hover:scale-102 transition-transform duration-500 flex items-center justify-center p-3 h-72 overflow-hidden bg-radial-gradient from-white/5 to-transparent">
                {/* Radial color aura glow on hover */}
                <div
                  className="absolute w-44 h-44 rounded-full opacity-10 group-hover:opacity-25 blur-3xl transition-all duration-700 pointer-events-none"
                  style={{
                    backgroundColor: flavor.accentColor,
                  }}
                />

                <img
                  src={flavor.image}
                  alt={flavor.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-auto object-contain z-10 filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.85)] max-h-64 object-center hover:rotate-1 transition-transform duration-500"
                />

                {/* Subtle cybernetic blueprint coordinates overlay */}
                <div className="absolute inset-x-2 bottom-2 font-mono text-[8px] text-gray-600 flex justify-between tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>SCALE: 1:1 CAN SIZE</span>
                  <span>SYS: COMMITTED RAW</span>
                </div>
              </div>

              {/* Flavor Content area */}
              <div className="p-5 flex-1 flex flex-col justify-between border-t border-gray-900 bg-black/30">
                <div>
                  <h3 className="font-sans font-black text-xl text-white tracking-wide mb-1 flex items-center justify-between">
                    <span>{flavor.name}</span>
                    <ChevronRight
                      className="w-4 h-4 text-gray-600 group-hover:translate-x-1 transition-transform duration-300"
                      style={{
                        color: isSelected ? flavor.accentColor : "rgb(75, 85, 99)",
                      }}
                    />
                  </h3>
                  <p className="font-mono text-xs text-gray-500 tracking-widest font-semibold uppercase mb-3">
                    {flavor.tagline}
                  </p>
                  <p className="font-sans text-xs text-gray-400 leading-relaxed mb-4">
                    {flavor.description}
                  </p>
                </div>

                {/* Micro tech specifications badge underneath the card */}
                <div className="pt-4 border-t border-gray-900/40 grid grid-cols-3 gap-2 text-center font-mono text-[9px] text-gray-400">
                  <div className="bg-[#111111] p-1.5 rounded border border-white/5">
                    <span className="block text-gray-500 text-[8px] mb-0.5">SUGAR</span>
                    <span className="font-bold text-white">0% ABS</span>
                  </div>
                  <div className="bg-[#111111] p-1.5 rounded border border-white/5">
                    <span className="block text-gray-500 text-[8px] mb-0.5">CALORIES</span>
                    <span className="font-bold text-white">0.0</span>
                  </div>
                  <div className="bg-[#111111] p-1.5 rounded border border-white/5">
                    <span className="block text-gray-500 text-[8px] mb-0.5">METRIC</span>
                    <span className="font-bold text-white">12 OZ</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Futuristic Feature Accent Panel Beneath flavored cards */}
      <div className="mt-8 p-4 bg-[#080808] border border-gray-850 rounded-lg flex flex-col md:flex-row items-center justify-between text-xs font-mono text-gray-400">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <Award className="w-4 h-4 text-[#E8002D]" />
          <span className="text-gray-300">TECHNOLOGY COMPLIANCE STATE:</span>
          <span className="text-emerald-500 bg-emerald-950/40 px-2 py-0.5 rounded text-[10px] border border-emerald-900/30">
            FDA CERTIFIED ZERO SUGAR
          </span>
        </div>
        <div className="flex items-center gap-4 text-[10px] text-gray-500">
          <span>ALUMINUM WALL_THICK: SIGNED_METALLIC</span>
          <span className="hidden sm:inline">|</span>
          <span>FLAVOR_MATRIX_COUNT: 04</span>
        </div>
      </div>
    </div>
  );
}
