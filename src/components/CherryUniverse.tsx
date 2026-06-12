import React from "react";
import { Sparkles, Cherry, Milestone, Zap, AlertCircle } from "lucide-react";
import cherryDietCan from "../assets/images/cherry_diet_coke_1781264499540.jpg";
import cherryZeroCan from "../assets/images/cherry_coca_cola_zero_1781264514925.jpg";

export default function CherryUniverse() {
  return (
    <div
      id="cherry-dimension-canvas"
      className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#1c0110] via-[#0D000C] to-[#2d0012] border border-pink-900/30 p-6 md:p-12 shadow-[0_0_50px_rgba(217,4,103,0.1)]"
    >
      {/* Background Floating Cherries & Sparkle FX */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
        <div className="absolute left-[8%] top-[15%] w-24 h-24 text-magenta-500 opacity-[0.25] animate-bounce duration-[8000ms] flex items-center justify-center">
          <Cherry className="w-12 h-12 text-pink-600 blur-[0.5px]" />
        </div>
        <div className="absolute right-[12%] bottom-[25%] w-32 h-32 opacity-[0.22] animate-pulse duration-[6000ms] flex items-center justify-center">
          <Cherry className="w-16 h-16 text-pink-500 filter drop-shadow-[0_0_10px_rgba(219,39,119,0.5)]" />
        </div>
        <div className="absolute left-[35%] bottom-[12%] w-16 h-16 opacity-[0.15] animate-bounce duration-[9000ms] flex items-center justify-center">
          <Cherry className="w-8 h-8 text-pink-700" />
        </div>
        <div className="absolute right-[33%] top-[10%] w-20 h-20 opacity-[0.18] animate-pulse duration-[7000ms] flex items-center justify-center">
          <Cherry className="w-10 h-10 text-pink-500" />
        </div>

        {/* Ambient magenta laser light guides */}
        <div className="absolute -top-1/2 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500/15 to-transparent rotate-12" />
        <div className="absolute -bottom-1/2 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-400/20 to-transparent -rotate-12" />

        {/* Dynamic mesh pattern layer */}
        <div className="absolute inset-0 bg-[radial-gradient(#d904671a_1px,transparent_1px)] [background-size:16px_16px] opacity-35" />
      </div>

      {/* Main Container Layout */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column Wording Detail */}
        <div className="lg:col-span-5 flex flex-col gap-4 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 self-center lg:self-start bg-pink-950/40 border border-pink-700/30 px-3 py-1 rounded-full font-mono text-[10px] text-pink-400 uppercase tracking-widest leading-none">
            <Sparkles className="w-3.5 h-3.5" />
            DIMENSIONAL COLORWAY
          </div>
          
          <h2 className="font-sans font-black text-3xl md:text-5xl text-white tracking-tight leading-tight">
            THE CHERRY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-red-500">
              DIMENSION.
            </span>
          </h2>
          
          <p className="font-sans text-sm text-pink-100/70 leading-relaxed max-w-md mx-auto lg:mx-0">
            Bold. Dark. Irresistible. Wild Cherry is not just a secondary addition — it is an intensive taste mood state engineered to trigger premium flavor responses. Zero sugar carbonation fused with deep dark stonefruit.
          </p>

          {/* Micro spec metrics for Cherry */}
          <div className="mt-4 flex flex-col gap-2 p-4 bg-black/40 rounded-xl border border-pink-950/40 font-mono text-xs">
            <div className="flex items-center justify-between text-pink-300">
              <span>MATRIX SPEED_INDEX</span>
              <span className="font-bold text-white">4.8 GB/SIP</span>
            </div>
            <div className="w-full bg-pink-950/40 h-1.5 rounded-full overflow-hidden">
              <div className="bg-gradient-to-r from-pink-500 to-red-500 h-full w-[88%]" />
            </div>
            <div className="flex items-center justify-between text-gray-400 text-[10px] mt-1">
              <span>FRUIT STRENGTH: MAXIMUM</span>
              <span>NO_COMPROMISE: ACTIVATED</span>
            </div>
          </div>
        </div>

        {/* Right Column Product Comparison Showcase */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          
          {/* Product Can 1: Cherry Diet Coke */}
          <div className="group relative bg-black/60 rounded-xl border border-pink-900/20 p-5 overflow-hidden hover:border-pink-500/40 transition-all duration-500 hover:-translate-y-2">
            <span className="absolute top-3 right-3 font-mono text-[9px] text-[#D11A5B] tracking-wider uppercase font-bold">
              FORMULA_A
            </span>
            
            <div className="h-64 flex items-center justify-center relative">
              {/* Radial backdrop light halo */}
              <div className="absolute inset-0 w-32 h-32 rounded-full m-auto bg-[#D11A5B]/10 group-hover:bg-[#D11A5B]/15 blur-2xl transition-colors duration-500" />
              
              <img
                src={cherryDietCan}
                alt="Cherry Diet Coke Can"
                referrerPolicy="no-referrer"
                className="h-full w-auto object-contain z-10 filter drop-shadow-[0_10px_12px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mt-4 border-t border-pink-950/40 pt-4 text-center">
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-1">
                CHERRY DIET COKE
              </h4>
              <p className="font-sans text-[10px] text-gray-400">
                Luminescent white body. Deep wild berry nodes, light crisp finish.
              </p>
            </div>
          </div>

          {/* Product Can 2: Cherry Coca-Cola Zero Sugar */}
          <div className="group relative bg-black/60 rounded-xl border border-pink-900/20 p-5 overflow-hidden hover:border-pink-500/40 transition-all duration-500 hover:-translate-y-2">
            <span className="absolute top-3 right-3 font-mono text-[9px] text-[#E8002D] tracking-wider uppercase font-bold">
              FORMULA_B
            </span>
            
            <div className="h-64 flex items-center justify-center relative">
              {/* Radial backdrop light halo */}
              <div className="absolute inset-0 w-32 h-32 rounded-full m-auto bg-pink-500/5 group-hover:bg-pink-500/10 blur-2xl transition-colors duration-500" />
              
              <img
                src={cherryZeroCan}
                alt="Cherry Coca-Cola Zero Sugar Can"
                referrerPolicy="no-referrer"
                className="h-full w-auto object-contain z-10 filter drop-shadow-[0_10px_12px_rgba(0,0,0,0.8)] group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="mt-4 border-t border-pink-950/40 pt-4 text-center border-l-0">
              <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-1">
                CHERRY COCA-COLA ZERO SUGAR
              </h4>
              <p className="font-sans text-[10px] text-gray-400">
                Stealth black armor with metallic pink bands. Intense dark cherry density.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
