/**
 * Synthesizes a realistic "can-opening" crack sound followed by carbonated fizz
 * using the standard browser Web Audio API. 100% offline, zero-dependency.
 */
export function playSodaSound() {
  try {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) return;

    const ctx = new AudioContext();

    // 1. Can Pop/Crack (Low frequency thud + transient metal ping)
    const popOsc = ctx.createOscillator();
    const popGain = ctx.createGain();
    
    popOsc.type = "sine";
    popOsc.frequency.setValueAtTime(140, ctx.currentTime);
    popOsc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.1);

    popGain.gain.setValueAtTime(0.8, ctx.currentTime);
    popGain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.12);

    popOsc.connect(popGain);
    popGain.connect(ctx.destination);

    // Dynamic metal ring oscillator
    const ringOsc = ctx.createOscillator();
    const ringGain = ctx.createGain();
    ringOsc.type = "triangle";
    ringOsc.frequency.setValueAtTime(800, ctx.currentTime);
    ringOsc.frequency.exponentialRampToValueAtTime(2000, ctx.currentTime + 0.08);

    ringGain.gain.setValueAtTime(0.3, ctx.currentTime);
    ringGain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.08);

    ringOsc.connect(ringGain);
    ringGain.connect(ctx.destination);

    popOsc.start();
    popOsc.stop(ctx.currentTime + 0.15);
    ringOsc.start();
    ringOsc.stop(ctx.currentTime + 0.1);

    // 2. High-frequency Hiss (White noise with custom highpass/bandpass filters)
    const bufferSize = ctx.sampleRate * 1.5; // 1.5 seconds of fizz
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Populate with rand white noise
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noiseNode = ctx.createBufferSource();
    noiseNode.buffer = buffer;

    // Filter to sweep downward from 8kHz to 2kHz
    const biquadFilter = ctx.createBiquadFilter();
    biquadFilter.type = "bandpass";
    biquadFilter.frequency.setValueAtTime(6000, ctx.currentTime);
    biquadFilter.frequency.exponentialRampToValueAtTime(2500, ctx.currentTime + 1.2);
    biquadFilter.Q.setValueAtTime(2.5, ctx.currentTime);

    // Gain envelope for fizz settling
    const hissGain = ctx.createGain();
    hissGain.gain.setValueAtTime(0.0, ctx.currentTime);
    hissGain.gain.linearRampToValueAtTime(0.65, ctx.currentTime + 0.02); // Quick build
    hissGain.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + 1.5); // Slow decay

    noiseNode.connect(biquadFilter);
    biquadFilter.connect(hissGain);
    hissGain.connect(ctx.destination);

    noiseNode.start(ctx.currentTime + 0.01);
    noiseNode.stop(ctx.currentTime + 1.6);
  } catch (error) {
    console.warn("Web Audio Context could not run or was suspended by client constraints:", error);
  }
}

/**
 * Format string to look like premium console logging
 */
export function formatConsoleLine(module: string, message: string): string {
  const time = new Date().toISOString().split("T")[1].slice(0, 8);
  return `[${time}] [${module.toUpperCase()}] ${message}`;
}
