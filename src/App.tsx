import React, { useState, useEffect } from "react";
import { 
  Terminal, 
  Activity, 
  Volume2, 
  VolumeX, 
  Share2, 
  Cpu, 
  ChevronRight, 
  ShieldCheck, 
  TrendingUp, 
  Maximize2,
  ListRestart
} from "lucide-react";
import ThreeCan from "./components/ThreeCan";
import FlavorScroll from "./components/FlavorScroll";
import TechGrid from "./components/TechGrid";
import CherryUniverse from "./components/CherryUniverse";
import { playSodaSound, formatConsoleLine } from "./utils";
import { ProductVariant } from "./types";
import classicCan from "./assets/images/diet_coke_classic_1781264470106.jpg";
import caffeineFreeCan from "./assets/images/caffeine_free_gold_1781264483183.jpg";
import nanoBananaCan from "./assets/images/diet_coke_nano_banana.png";

export default function App() {
  const [activeVariant, setActiveVariant] = useState<string>("classic");
  const [logFeed, setLogFeed] = useState<string[]>([]);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [systemCalibrated, setSystemCalibrated] = useState<boolean>(true);

  // Variant details for Section 2
  const variants: ProductVariant[] = [
    {
      id: "classic",
      name: "Classic Silver Can",
      image: classicCan,
      accentColor: "#E8002D",
      label: "DIET COKE CLASSIC"
    },
    {
      id: "caffeine-free",
      name: "Caffeine Free Gold Can",
      image: caffeineFreeCan,
      accentColor: "#C9A84C",
      label: "CAFFEINE FREE DIRECTIVE"
    },
    {
      id: "nano-banana",
      name: "Gemini Nano Banana Can",
      image: nanoBananaCan,
      accentColor: "#FFE135",
      label: "GEMINI NANO BANANA EDITION"
    }
  ];

  // Initialize some cool retro terminal logs
  useEffect(() => {
    const initialLogs = [
      formatConsoleLine("system", "Initializing Diet Coke quantum telemetry core..."),
      formatConsoleLine("core", "Sensing ambient temperature: 3.5°C (Optimal frost)"),
      formatConsoleLine("mechanics", "Carbonation pressure holds firm at 4.2 Bar"),
      formatConsoleLine("safety", "Caloric payload scan: 0.00% detected [Zero Compromise SECURE]"),
      formatConsoleLine("branding", "Current campaign status: Just Because. Always.")
    ];
    setLogFeed(initialLogs);
  }, []);

  // Post logs to custom terminal HUD
  const addLog = (subsystem: string, text: string) => {
    const line = formatConsoleLine(subsystem, text);
    setLogFeed(prev => [line, ...prev].slice(0, 8)); // keep a maximum of 8 logs in viewport
  };

  const handleInteraction = (subsystem: string, text: string) => {
    addLog(subsystem, text);
    if (soundEnabled) {
      playSodaSound();
    }
  };

  const handleCanClick = () => {
    handleInteraction("holograph", "Opening aluminum sound pressure valve. CRACK & REVEAL.");
    // Smooth scroll down to interactive spec sheet
    const target = document.getElementById("tech-spec-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const selectedVariantDetails = variants.find(v => v.id === activeVariant) || variants[0];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col font-sans select-none overflow-x-hidden antialiased selection:bg-[#E8002D]/30 selection:text-white">
      
      {/* GLOBAL TELEMETRY HEADER STATUS LINER */}
      <div className="w-full bg-[#111111] border-b border-gray-900 py-2.5 px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-gray-400 gap-2 z-50">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-gray-200 uppercase tracking-widest font-bold">SYS_ONLINE // DE-CALORIZED ENVIRONMENT</span>
          <span className="text-gray-600">|</span>
          <span className="hidden sm:inline">COCA-COLA CORE DEVNET v1.982</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1">
            <span className="text-gray-500">CARBONATION:</span>
            <span className="font-bold text-white tracking-widest">N-FROST_MAX</span>
          </div>
          <button 
            id="sound-toggle-btn"
            onClick={() => {
              setSoundEnabled(!soundEnabled);
              addLog("audio", `Acoustic feedback ${!soundEnabled ? "ENGAGED" : "MUTED"}`);
            }}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer bg-white/5 px-2 py-0.5 rounded border border-white/10 active:scale-95"
          >
            {soundEnabled ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#E8002D]" />
                <span>AUDIO_ON</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-gray-500" />
                <span>AUDIO_OFF</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* SECTION 1: THE CYBERNETIC HERO SECTION */}
      <section 
        id="hero-reveal"
        className="relative min-h-[90vh] flex flex-col justify-between pt-10 pb-12 px-4 md:px-12 bg-radial-gradient from-red-950/20 via-[#0a0a0a] to-[#0a0a0a] overflow-hidden border-b border-gray-950"
      >
        {/* Glow backdrop lamps behind the 3D can */}
        <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-[#E8002D]/10 blur-[80px] md:blur-[130px] z-0 pointer-events-none" />
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] md:w-[350px] h-[180px] md:h-[350px] rounded-full bg-slate-100/10 blur-[60px] md:blur-[100px] z-0 pointer-events-none" />
        
        {/* Fine background linear crosshair wireframes */}
        <div className="absolute top-0 bottom-0 left-[10%] w-px bg-white/[0.02] pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-[10%] w-px bg-white/[0.02] pointer-events-none" />
        <div className="absolute top-[25%] left-0 right-0 h-px bg-white/[0.02] pointer-events-none" />
        
        {/* Top brand alignment wrapper */}
        <div className="relative w-full flex items-center justify-between z-10 select-none">
          {/* Coca-cola aesthetic font presentation */}
          <div className="flex flex-col">
            <span className="font-mono text-[9px] text-[#E8002D] tracking-widest uppercase font-bold">ORIGINAL BRANDING DEPT</span>
            <span className="font-serif italic text-lg leading-none tracking-wide text-white">The Coca-Cola Company</span>
          </div>
          <div className="font-mono text-[10px] text-gray-500 text-right uppercase border border-white/5 py-1 px-2 rounded bg-black/40">
            LOC // 35.0° N, 90.0° W • EST. 1886
          </div>
        </div>

        {/* Central Display Layout: 3D interactive Cylinder + Bold Typeface */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center justify-center my-auto z-10 w-full max-w-7xl mx-auto">
          
          {/* Text alignment block left column (6 columns span) */}
          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10 font-mono text-[10px] tracking-widest text-[#C0C0C0] uppercase">
              <Cpu className="w-3.5 h-3.5 text-[#E8002D]" />
              HARDWARE RELEASE v2026.1
            </div>

            <h1 className="font-sans font-black text-5xl sm:text-7xl xl:text-8xl tracking-tighter text-white leading-[0.9] uppercase select-none">
              STAY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-gray-500">
                EXTRAORDINARY.
              </span>
            </h1>

            <p className="font-mono text-xs sm:text-sm text-gray-400 tracking-wider uppercase font-semibold mt-1">
              Zero Sugar. Zero Calories. Zero Compromise.
            </p>

            <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
              <button
                id="experience-can-btn"
                onClick={handleCanClick}
                className="group relative px-8 py-3.5 font-mono text-xs tracking-widest uppercase bg-transparent text-white border border-[#E8002D]/60 rounded cursor-pointer transition-all duration-300 hover:border-white hover:shadow-[0_0_20px_rgba(232,0,45,0.4)] active:scale-95 w-full sm:w-auto"
              >
                {/* Glowing neon background highlights */}
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-red-600 via-white to-silver opacity-0 group-hover:opacity-100 transition-opacity" />
                EXPERIENCE THE CAN
              </button>

              <a
                href="#the-archive-product"
                className="text-xs font-mono text-gray-400 hover:text-white transition-colors tracking-widest uppercase flex items-center gap-1"
                onClick={() => handleInteraction("system", "Targeting core reimagined catalog archive")}
              >
                SPECIFICATION DATA // ARCHIVE <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick telemetry parameters under CTA */}
            <div className="mt-6 grid grid-cols-2 gap-4 w-full max-w-sm border-t border-gray-900 pt-4 font-mono text-[10px] text-gray-500">
              <div className="text-left">
                <span className="block text-gray-600">ZERO_SUGAR STATUS</span>
                <span className="text-white font-bold uppercase">SECURED // 100%</span>
              </div>
              <div className="text-right sm:text-left">
                <span className="block text-gray-600">FORMULA_DECRYPT</span>
                <span className="text-[#E8002D] font-bold uppercase">“JUST BECAUSE.”</span>
              </div>
            </div>
          </div>

          {/* ThreeJS Floating cylinder on right column (6 columns span) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            {/* The Can Simulator Canvas */}
            <ThreeCan />
            
            {/* Ambient circular telemetry text loop on side of the canvas */}
            <div className="absolute right-0 top-1/4 hidden md:flex flex-col items-end gap-1.5 font-mono text-[9px] text-gray-500 opacity-60">
              <div>INTERACTION_VECTOR: MOUSE_TILT</div>
              <div>METALLIC_REFRACT: EXTREME</div>
              <div>SYSTEM_COOLING: NOMINAL</div>
            </div>
          </div>

        </div>

        {/* Bottom elements bar in Hero */}
        <div className="relative w-full flex flex-col md:flex-row items-center justify-between border-t border-slate-900/60 pt-6 mt-10 gap-3 z-10 text-[10px] font-mono text-gray-500 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">BRAND FLAGSHIP:</span>
            <span className="text-white font-bold bg-white/5 py-1 px-2.5 rounded border border-white/5 tracking-wider">
              DIET COKE CORE v1982
            </span>
          </div>
          <div>ESTABLISHED FOR THE TASTE OF IT // NO GUILT. NO CRITIQUES.</div>
          <div className="flex items-center gap-3">
            <span>Y-ORBITAL_AZIMUTH: CONSTANT</span>
            <span>|</span>
            <span>SPEC_355ML</span>
          </div>
        </div>

      </section>

      {/* CLINICAL INSTRUMENTATION HUD / TELEMETRY DIALOGUE CONSOLE */}
      <div className="w-full bg-[#050505] border-y border-gray-950 py-3.5 px-4 md:px-12 select-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch justify-between gap-4">
          <div className="flex items-center gap-2.5 font-mono text-xs text-gray-400">
            <Terminal className="w-4 h-4 text-[#E8002D]" />
            <span className="font-bold text-white uppercase tracking-widest">QUANTUM TERMINAL_HUD:</span>
            <span className="hidden sm:inline text-gray-600">// PRESS MAIN ELEMENTS TO COUPLING TRANSMISSION</span>
          </div>
          <div className="flex-1 bg-[#090909] border border-gray-900 rounded p-2.5 max-h-16 overflow-y-auto block select-none">
            {logFeed.map((log, idx) => (
              <div key={idx} className="font-mono text-[9px] text-zinc-500 leading-normal select-none">
                <span className="text-slate-400 animate-pulse font-bold">&gt;</span> {log}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SECTION 2: THE RE-IMAGINED PRODUCT (Grid based layout, 2 columns) */}
      <section 
        id="the-archive-product"
        className="w-full py-16 md:py-24 px-4 md:px-12 bg-[#0a0a0a] border-b border-gray-950 relative max-w-7xl mx-auto z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Product Photo & upper stamp */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div 
              id="product-blueprint-card"
              className="relative p-6 bg-[#0e0e0e] border border-gray-900 rounded-2xl flex flex-col items-center justify-center w-full max-w-md group overflow-hidden"
              onClick={() => handleInteraction("blueprint", "Accessing structural CAD of the premium canister")}
            >
              {/* Overlay wireframe blueprint grids */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
              
              <div className="relative group-hover:scale-103 transition-transform duration-500 p-4 flex items-center justify-center h-[340px]">
                <img
                  src={selectedVariantDetails.image}
                  alt={selectedVariantDetails.name}
                  referrerPolicy="no-referrer"
                  className="h-full w-auto object-contain z-10 filter drop-shadow-[0_15px_20px_rgba(0,0,0,0.85)] max-h-[310px]"
                />
                
                {/* Micro tech measurement overlay */}
                <div className="absolute left-2 top-1/2 -translate-y-1/2 font-mono text-[8px] text-gray-500 flex flex-col gap-1 tracking-tighter">
                  <span>H: 122.2 MM</span>
                  <span>W: 66.0 MM</span>
                  <span>R: 33.0 MM</span>
                </div>
              </div>

              {/* STAMP REQUISITE: "NO SUGAR · NO CALORIES" stamped beneath in red uppercase */}
              <div className="mt-4 border-t border-gray-900 pt-4 w-full text-center">
                <span className="font-mono text-sm font-black text-[#E8002D] tracking-widest block uppercase select-none animate-pulse">
                  ★ NO SUGAR · NO CALORIES ★
                </span>
                <span className="font-mono text-[9px] text-gray-500 mt-1 block">
                  DEPLOYED ALUMINUM FORMULA 0.00% COMPROMISE
                </span>
              </div>

              {/* Interactive target highlights */}
              <div className="absolute top-2 left-2 font-mono text-[8px] text-gray-600">
                BLUEPRINT_CAD: ACT_REFRESH
              </div>
            </div>
          </div>

          {/* Right Column: Original Reimagined Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-1.5 font-mono text-[10px] text-gray-500 uppercase tracking-widest">
              <span className="w-2 h-0.5 bg-[#E8002D]" />
              THE CORE METRIC
            </div>

            <h2 className="font-sans font-black text-4xl md:text-6xl text-white tracking-tight uppercase leading-tight select-none">
              THE ORIGINAL. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-white to-gray-400">
                REIMAGINED.
              </span>
            </h2>

            <p className="font-sans text-sm md:text-base text-gray-300 leading-relaxed max-w-xl">
              Since 1982, Diet Coke has been the icon of taste without compromise. One sip. Infinite possibilities. The silver aluminum can is not just a carbonated drink — it is a modern lifestyle statement of total sensory refinement. Zero sugar, complete crisp velocity.
            </p>

            {/* THREE PRODUCT VARIANTS SIDE BY SIDE SELECTOR */}
            <div className="mt-4 border-t border-gray-900 pt-6">
              <span className="font-mono text-[10px] text-gray-500 block uppercase mb-3.5">
                CHOOSE HARDWARE CONFIGURATION TO INTERACT:
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {variants.map((v) => {
                  const isActive = activeVariant === v.id;
                  return (
                    <button
                      key={v.id}
                      id={`variant-selector-${v.id}`}
                      onClick={() => {
                        setActiveVariant(v.id);
                        handleInteraction("variant", `Swapped interface render node to: [${v.name.toUpperCase()}]`);
                      }}
                      className={`flex items-center gap-3 p-4 rounded-xl border text-left cursor-pointer transition-all duration-300 active:scale-97 ${
                        isActive
                          ? "bg-white/5 border-white text-white shadow-[0_0_15px_rgba(255,255,255,0.08)]"
                          : "bg-[#0b0b0b] border-gray-900 text-gray-400 hover:border-gray-750 hover:text-gray-200"
                      }`}
                    >
                      <div className="w-10 h-10 flex items-center justify-center p-1 rounded-lg bg-black">
                        <img
                          src={v.image}
                          alt={v.name}
                          referrerPolicy="no-referrer"
                          className="h-full w-auto object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans font-bold text-xs uppercase text-white">
                          {v.name}
                        </span>
                        <span className="font-mono text-[9px] text-gray-500 uppercase">
                          CONFIG_ID // {v.id.toUpperCase()}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Feature highlights metrics row */}
            <div className="grid grid-cols-3 gap-4 font-mono text-[10px] text-gray-400 bg-white/5 p-4 rounded-xl border border-white/5 mt-2">
              <div>
                <span className="block text-gray-600 mb-0.5">SWEETENER_MATRIX</span>
                <span className="text-white font-bold">ASPARTAME // PURE</span>
              </div>
              <div className="border-x border-gray-900 px-4">
                <span className="block text-gray-600 mb-0.5">ACOUSTICS</span>
                <span className="text-white font-bold">CRISP 4.2 HZ FIZZ</span>
              </div>
              <div className="pl-4">
                <span className="block text-gray-600 mb-0.5">PACKAGING</span>
                <span className="text-white font-bold">RECYCLABLE 100%</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 3: THE COLLECTION (FLAVORS) */}
      <section 
        id="collection-showcase" 
        className="w-full py-16 md:py-24 px-4 md:px-12 bg-[#080808] border-b border-gray-950"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-10 gap-3">
            <div className="text-left">
              <span className="font-mono text-xs text-[#E8002D] tracking-widest uppercase font-bold block mb-1">
                CATALOG // REPERTOIRE
              </span>
              <h2 className="font-sans font-black text-3xl md:text-5xl text-white tracking-widest uppercase">
                THE COLLECTION.
              </h2>
            </div>
            <div className="font-mono text-[10px] text-gray-500 uppercase">
              GRID SELECTABLE // SEAMLESS COMPATIBILITY
            </div>
          </div>

          {/* Flavors Grid Carousel */}
          <FlavorScroll />
        </div>
      </section>

      {/* SECTION 4: "JUST BECAUSE." */}
      <section 
        id="just-because-billboard"
        className="relative w-full py-20 md:py-32 px-4 bg-black overflow-hidden border-b border-gray-950"
      >
        {/* Behind coordinates grid layout */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Giant typography on left */}
          <div className="lg:col-span-8 flex flex-col gap-4 text-left">
            <span className="font-mono text-xs text-[#C0C0C0] tracking-widest uppercase font-bold">
              CORE DIRECTIVE // “JUST BECAUSE.”
            </span>
            <h2 className="font-sans font-black text-4xl sm:text-6xl xl:text-7xl text-white tracking-tighter leading-none uppercase select-none">
              YOU DON'T NEED <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-zinc-100 to-gray-500">
                A REASON.
              </span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-gray-400 leading-relaxed max-w-xl">
              No rules. No guilt. No explanation. Just crisp de-calorized cold-pressed liquid in a perfect aluminum canister — just because. Take the ultimate micro-break, recharge cognitive levels, and return to performance.
            </p>

            {/* Quick interactive stamp */}
            <div className="mt-2.5 flex items-center gap-3">
              <button 
                id="interactive-just-because-trigger"
                onClick={() => handleInteraction("directive", "Triggered core justification bypass protocol: Just Because.")}
                className="font-mono text-[10px] px-3.5 py-1.5 bg-white/5 hover:bg-white/10 text-white rounded border border-white/10 active:scale-95 cursor-pointer uppercase tracking-widest"
              >
                BYPASS RULES DIRECTIVE
              </button>
            </div>
          </div>

          {/* Red-to-silver liquid looping gradient canvas on right */}
          <div className="lg:col-span-4 flex items-center justify-center">
            <div 
              onClick={() => handleInteraction("fluid-matrix", "Sensing temperature viscosity index: 4.2 cST")}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/5 shadow-[0_0_40px_rgba(232,0,45,0.15)] flex items-center justify-center group cursor-pointer"
            >
              {/* The looping flowing dynamic gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E8002D] via-neutral-100 to-[#121212] animate-liquid" />
              
              {/* Inner overlay blur card */}
              <div className="absolute inset-[3px] bg-[#050505]/95 rounded-full flex flex-col items-center justify-center text-center p-6 z-10 border border-white/10">
                <Activity className="w-8 h-8 text-[#E8002D] mb-3 animate-pulse" />
                <span className="font-mono font-bold text-xs tracking-widest text-white mb-1 uppercase">
                  FLUID VELOCITY
                </span>
                <span className="font-mono text-[10px] text-gray-500">
                  REFRESH ENVELOPE: ACTIVE
                </span>
                <span className="mt-4 font-mono text-[8px] text-[#E8002D] tracking-widest">
                  SYS.LOOP: CALIBRATED
                </span>
              </div>

              {/* Glowing highlight ring */}
              <div className="absolute inset-0 rounded-full border border-red-500/0 group-hover:border-red-500/30 transition-colors duration-500" />
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 5: "WHAT'S INSIDE" (TECH SPECIFICATIONS GRID) */}
      <section 
        id="technical-specifications"
        className="w-full py-16 md:py-24 px-4 md:px-12 bg-[#090909] border-b border-gray-950"
      >
        <div className="max-w-7xl mx-auto">
          {/* Title Area */}
          <div className="flex flex-col md:flex-row items-baseline justify-between mb-10 gap-3">
            <div className="text-left">
              <span className="font-mono text-xs text-[#E8002D] tracking-widest uppercase font-bold block mb-1">
                CHEMICAL_FORMULA // SPECS
              </span>
              <h2 className="font-sans font-black text-3xl md:text-5xl text-white tracking-tight uppercase">
                WHAT'S INSIDE.
              </h2>
            </div>
            <div className="font-mono text-[10px] text-gray-400">
              PHYSICAL ENVELOPES // NUTRITION ASSAY
            </div>
          </div>

          {/* Specs grid card list */}
          <TechGrid />
        </div>
      </section>

      {/* SECTION 6: THE CHERRY UNIVERSE */}
      <section 
        id="cherry-dimension-universe"
        className="w-full py-16 md:py-24 px-4 md:px-12 bg-black"
      >
        <div className="max-w-7xl mx-auto">
          {/* Header Title alignment */}
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-pink-500 tracking-widest uppercase font-bold block mb-1">
              ATMOSPHERIC VARIANT MATRIX
            </span>
            <h2 className="font-sans font-black text-3xl md:text-5xl text-white tracking-widest uppercase">
              ENTER THE CHERRY DIMENSION.
            </h2>
            <div className="w-16 h-0.5 bg-pink-600 mx-auto mt-4" />
          </div>

          {/* Section content */}
          <CherryUniverse />
        </div>
      </section>

      {/* DENSE TECHNICAL MANUAL INCENTIVE / EXTRA INTERACTIVE ACCENT */}
      <div className="w-full bg-[#050505] py-8 border-t border-gray-950 px-4 md:px-12 text-center text-xs font-mono text-gray-500">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-500" />
          <h3 className="font-sans font-bold text-white text-xs uppercase tracking-widest">
            AUTHENTIC PRODUCT STATE ASSURACY
          </h3>
          <p className="text-[10px] text-gray-500 leading-relaxed max-w-lg">
            Diet Coke is produced under strict patent blueprints authorized solely by The Coca-Cola Company. All metallic canisters are made with lightweight durable 100% recyclable aluminum alloy formats.
          </p>
          <div className="flex gap-4 text-[9px] text-gray-600 mt-1">
            <span>REGISTRATION: #89211029</span>
            <span>•</span>
            <span>ENCRYPT CODE: ZERO-SUGAR-ZERO-COMPROMISE</span>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-[#030303] border-t border-gray-900 pt-16 pb-12 px-4 md:px-12 z-10 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          
          {/* Top block footer layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo/Brand columns */}
            <div className="md:col-span-6 flex flex-col gap-4 text-left">
              <span className="font-serif italic text-3xl leading-none text-white tracking-wide">
                The Coca-Cola Company
              </span>
              <p className="font-mono text-[10px] text-[#E8002D] tracking-widest uppercase font-semibold leading-relaxed max-w-sm">
                “JUST FOR THE TASTE OF IT.” / NO SUGAR. NO CALORIES. STAY EXTRAORDINARY.
              </p>
            </div>

            {/* Links directory layout columns */}
            <div className="md:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-6 font-mono text-[11px] text-gray-400 text-left">
              <div className="flex flex-col gap-2.5">
                <span className="font-bold text-white tracking-wider uppercase text-[10px]">DIET COKE DIRECT</span>
                <a href="#" onClick={() => handleInteraction("footer", "Targeting Privacy Directives")} className="hover:text-red-500 transition-colors">PRIVACY POLICY</a>
                <a href="#" onClick={() => handleInteraction("footer", "Targeting Terms of Use")} className="hover:text-red-500 transition-colors">TERMS of USE</a>
                <a href="#" onClick={() => handleInteraction("footer", "Targeting Legal Notices")} className="hover:text-red-500 transition-colors">LEGAL NOTICES</a>
              </div>
              <div className="flex flex-col gap-2.5">
                <span className="font-bold text-white tracking-wider uppercase text-[10px]">CONNECT INTERFACE</span>
                <a href="#" onClick={() => handleInteraction("footer", "Targeting Contact Gateway")} className="hover:text-red-500 transition-colors">CONTACT GATEWAY</a>
                <a href="#" onClick={() => handleInteraction("footer", "Targeting Client Services")} className="hover:text-red-500 transition-colors">CLIENT SERVICES</a>
                <a href="#" onClick={() => handleInteraction("footer", "Targeting Developer API")} className="hover:text-red-500 transition-colors">SYS_CONFIG</a>
              </div>
              <div className="flex flex-col gap-2.5 col-span-2 md:col-span-1">
                <span className="font-bold text-white tracking-wider uppercase text-[10px]">COGNITIVE CAMPAIGN</span>
                <span className="text-zinc-600 block leading-relaxed">
                  “KNOW THE SIGNS // TAKE A BREAK, REFRESH, RETURN TO PERFORMANCE.”
                </span>
              </div>
            </div>
          </div>

          {/* Clean separation bar and bottom specs */}
          <div className="border-t border-gray-950 pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-gray-600 gap-4">
            <div className="flex items-center gap-2">
              <span>© 2026 THE COCA-COLA COMPANY. ALL RIGHTS RESERVED.</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-500 font-bold uppercase tracking-wider">
              <span>DESIGNED FOR THE TASTE OF IT // STAY EXTRAORDINARY.</span>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
