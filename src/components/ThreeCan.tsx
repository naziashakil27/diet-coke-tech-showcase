import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function ThreeCan() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tilt offsets
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 8;

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // --- Draw Offscreen Label Texture ---
    const labelWidth = 1024;
    const labelHeight = 1024;
    const labelCanvas = document.createElement("canvas");
    labelCanvas.width = labelWidth;
    labelCanvas.height = labelHeight;
    const ctx = labelCanvas.getContext("2d");

    if (ctx) {
      // 1. Sleek metallic silver background gradient
      const gradient = ctx.createLinearGradient(0, 0, labelWidth, 0);
      gradient.addColorStop(0, "#ececec");
      gradient.addColorStop(0.15, "#ffffff");
      gradient.addColorStop(0.3, "#dddddd");
      gradient.addColorStop(0.5, "#b5b5b5");
      gradient.addColorStop(0.7, "#ececec");
      gradient.addColorStop(0.85, "#ffffff");
      gradient.addColorStop(1, "#9c9c9c");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, labelWidth, labelHeight);

      // 2. High-tech subtle background vertical grid lines
      ctx.strokeStyle = "rgba(220, 220, 220, 0.4)";
      ctx.lineWidth = 2;
      for (let x = 0; x < labelWidth; x += 16) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, labelHeight);
        ctx.stroke();
      }

      // Add a cool technical target crosshair in the corners/edges
      ctx.fillStyle = "rgba(232, 0, 45, 0.15)";
      ctx.fillRect(50, 50, labelWidth - 100, labelHeight - 100);

      // Draw horizontal brushed steel guidelines
      ctx.fillStyle = "rgba(255, 255, 255, 0.25)";
      for (let y = 0; y < labelHeight; y += 4) {
        if (Math.random() > 0.4) {
          ctx.fillRect(0, y, labelWidth, 1);
        }
      }

      // 3. Coke Red vertical signature band (sleek & narrow, like premium tech)
      const bandWidth = 260;
      const bandX = (labelWidth - bandWidth) / 2;
      
      // We will draw side stripes and the central sleek crimson stripe
      ctx.fillStyle = "#E8002D";
      ctx.fillRect(bandX, 0, bandWidth, labelHeight);

      // Glowing cyber accents on the red stripe
      ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
      ctx.fillRect(bandX + 20, 0, 15, labelHeight);
      ctx.fillRect(bandX + bandWidth - 35, 0, 15, labelHeight);

      // Technical boundary marks
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(bandX + 45, 0);
      ctx.lineTo(bandX + 45, labelHeight);
      ctx.moveTo(bandX + bandWidth - 45, 0);
      ctx.lineTo(bandX + bandWidth - 45, labelHeight);
      ctx.stroke();

      // 4. Branding Words
      // Bold red italicized "diet"
      ctx.save();
      ctx.translate(labelWidth / 2, 280);
      ctx.font = "italic bold 110px 'Inter', sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
      ctx.shadowBlur = 10;
      ctx.fillText("diet", 0, 0);
      ctx.restore();

      // Monospace Futuristic Wording: "Coke" or "COKE" in massive silver text inside the stripe
      ctx.save();
      ctx.translate(labelWidth / 2, 440);
      ctx.font = "900 160px 'Inter', sans-serif";
      ctx.fillStyle = "#0a0a0a"; // Super high contrast charcoal gray black
      ctx.textAlign = "center";
      ctx.letterSpacing = "6px";
      ctx.fillText("Coke", 0, 0);
      
      // White subline shadow
      ctx.font = "900 160px 'Inter', sans-serif";
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 4;
      ctx.strokeText("Coke", 0, 0);
      ctx.restore();

      // Tagline "NO SUGAR. NO CALORIES" stamped in elegant technology monospace font
      ctx.font = "500 24px monospace";
      ctx.fillStyle = "#ffffff";
      ctx.textAlign = "center";
      ctx.letterSpacing = "8px";
      ctx.fillText("ZERO SUGAR • ZERO CALORIES", labelWidth / 2, 540);

      // 5. Tech Specification Overlay Labels (making it look like a gadget)
      ctx.font = "400 16px monospace";
      ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
      ctx.fillText("SYS LOG: COCA COLA CO. INC.", labelWidth / 2, 600);
      ctx.fillText("SPEC: 355ML | CORE EDITION v1.982", labelWidth / 2, 630);

      // Left-side silver tech specs
      ctx.fillStyle = "#0a0a0a";
      ctx.font = "600 20px monospace";
      ctx.textAlign = "left";
      ctx.fillText("BATCH: DC-456", 80, 800);
      ctx.fillText("INTEGRITY: 100%", 80, 830);
      ctx.fillText("COMPROMISE: 0.00%", 80, 860);

      // Right-side silver specs
      ctx.textAlign = "right";
      ctx.fillText("SWEETENERS: ASP-K", labelWidth - 80, 800);
      ctx.fillText("CAFFEINE: ACTIVE", labelWidth - 80, 830);
      ctx.fillText("TEMP: OPTIMAL", labelWidth - 80, 860);

      // Microbarcode at the bottom
      ctx.fillStyle = "#0a0a0a";
      for (let b = 0; b < 180; b += 8) {
        const w = Math.random() > 0.4 ? 4 : 2;
        ctx.fillRect(labelWidth / 2 - 90 + b, 890, w, 40);
      }
      ctx.font = "400 12px monospace";
      ctx.textAlign = "center";
      ctx.fillText("0049000028913", labelWidth / 2, 950);
    }

    // Convert Canvas to Texture
    const mainTexture = new THREE.CanvasTexture(labelCanvas);
    mainTexture.anisotropy = 4;
    mainTexture.colorSpace = THREE.SRGBColorSpace;

    // --- Assemble the Can 3D Primitives ---
    const canGroup = new THREE.Group();

    // A. Main Cylinder Assembly (Body)
    const bodyGeometry = new THREE.CylinderGeometry(1.4, 1.4, 4.4, 64, 1, false);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      map: mainTexture,
      metalness: 0.88,
      roughness: 0.22,
      bumpScale: 0.02,
    });
    const canBody = new THREE.Mesh(bodyGeometry, bodyMaterial);
    canGroup.add(canBody);

    // B. Neck slope (top bevel)
    const neckGeometry = new THREE.CylinderGeometry(1.24, 1.4, 0.15, 64);
    const rimMaterial = new THREE.MeshStandardMaterial({
      color: 0xc0c0c0,
      metalness: 0.95,
      roughness: 0.15,
    });
    const canNeck = new THREE.Mesh(neckGeometry, rimMaterial);
    canNeck.position.y = 2.2 + 0.075;
    canGroup.add(canNeck);

    // C. Top Rim Lip
    const topRimGeometry = new THREE.CylinderGeometry(1.26, 1.24, 0.1, 64);
    const canTopRim = new THREE.Mesh(topRimGeometry, rimMaterial);
    canTopRim.position.y = 2.35 + 0.05;
    canGroup.add(canTopRim);

    // D. Bottom Bevel
    const bottomBevelGeometry = new THREE.CylinderGeometry(1.4, 1.25, 0.18, 64);
    const canBottomBevel = new THREE.Mesh(bottomBevelGeometry, rimMaterial);
    canBottomBevel.position.y = -2.2 - 0.09;
    canGroup.add(canBottomBevel);

    // Bottom Rim
    const bottomRimGeometry = new THREE.CylinderGeometry(1.25, 1.22, 0.1, 64);
    const canBottomRim = new THREE.Mesh(bottomRimGeometry, rimMaterial);
    canBottomRim.position.y = -2.38 - 0.05;
    canGroup.add(canBottomRim);

    // E. Lid Details (indented circular plane at top)
    const lidGeometry = new THREE.CylinderGeometry(1.2, 1.2, 0.02, 64);
    const lidMaterial = new THREE.MeshStandardMaterial({
      color: 0x999999,
      metalness: 0.95,
      roughness: 0.25,
    });
    const canLid = new THREE.Mesh(lidGeometry, lidMaterial);
    canLid.position.y = 2.41;
    canGroup.add(canLid);

    // Pull Tab Accessory (Tiny Box for high fidelity representation)
    const tabGeometry = new THREE.BoxGeometry(0.3, 0.02, 0.6);
    const tab = new THREE.Mesh(tabGeometry, rimMaterial);
    tab.position.set(0, 2.42, 0.3);
    tab.rotation.x = 0.05;
    canGroup.add(tab);

    // Place the can into scene
    scene.add(canGroup);

    // Initial tilted posture
    canGroup.rotation.x = 0.15;
    canGroup.rotation.z = -0.1;

    // --- Lights ---
    // High-key white front directional light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(5, 5, 5);
    scene.add(keyLight);

    // Counter filling light
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-5, 0, 5);
    scene.add(fillLight);

    // Glowy coke-red point lights at the sides for gorgeous thematic highlights
    const redPointLightLeft = new THREE.PointLight(0xff002b, 4.5, 15);
    redPointLightLeft.position.set(-6, 2, -3);
    scene.add(redPointLightLeft);

    const redPointLightRight = new THREE.PointLight(0xff002b, 3.5, 15);
    redPointLightRight.position.set(6, -2, -3);
    scene.add(redPointLightRight);

    // Silver backlighting point-light
    const silverRimLight = new THREE.PointLight(0xe4e4e4, 3.0, 15);
    silverRimLight.position.set(0, 5, -5);
    scene.add(silverRimLight);

    // Soft ambient setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    // --- Subtle Cyber Particles (representing icy carbonation fizz!) ---
    const bubbleCount = 70;
    const bubbleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(bubbleCount * 3);
    const speed = new Float32Array(bubbleCount);
    const initialPositions: [number, number, number][] = [];

    for (let i = 0; i < bubbleCount; i++) {
      const x = (Math.random() - 0.5) * 6;
      const y = (Math.random() - 0.5) * 8;
      const z = (Math.random() - 0.5) * 6;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      initialPositions.push([x, y, z]);
      speed[i] = 0.015 + Math.random() * 0.02; // Bubble ascending rate
    }

    bubbleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const bubbleMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });
    const bubbles = new THREE.Points(bubbleGeometry, bubbleMaterial);
    scene.add(bubbles);

    // --- Resize Observer (as per instructions) ---
    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Force initial trigger
    const initialRect = container.getBoundingClientRect();
    camera.aspect = initialRect.width / initialRect.height;
    camera.updateProjectionMatrix();
    renderer.setSize(initialRect.width, initialRect.height);

    // --- Interactivity (Mouse tilt tracking) ---
    const onMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      // Normalize client moves (-0.5 to 0.5)
      mouseRef.current.targetX = (x / rect.width - 0.5) * 1.5;
      mouseRef.current.targetY = (y / rect.height - 0.5) * 1.5;
    };

    container.addEventListener("mousemove", onMouseMove);

    // Touch support (mobile compatibility)
    const onTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const touch = event.touches[0];
        const rect = container.getBoundingClientRect();
        const x = touch.clientX - rect.left;
        const y = touch.clientY - rect.top;
        mouseRef.current.targetX = (x / rect.width - 0.5) * 1.5;
        mouseRef.current.targetY = (y / rect.height - 0.5) * 1.5;
      }
    };
    container.addEventListener("touchmove", onTouchMove, { passive: true });

    // Handle touch/mouse reset on exit
    const onMouseLeave = () => {
      mouseRef.current.targetX = 0;
      mouseRef.current.targetY = 0;
    };
    container.addEventListener("mouseleave", onMouseLeave);

    // --- Core Render Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();

      // Slow idle autonomous rotation on Y-axis
      // Spin slightly faster when hovered
      const idleSpinSpeed = isHovered ? 0.012 : 0.005;
      canGroup.rotation.y += idleSpinSpeed;

      // Parallax mouse-tracking interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.08;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.08;

      // Apply coordinates dynamically: Y tilt rotates Z-axis, X tilt rotates Y-axis
      canGroup.rotation.z = -0.1 - mouseRef.current.x * 0.4;
      canGroup.rotation.x = 0.15 + mouseRef.current.y * 0.4;

      // Float gently up and down to signify suspension
      canGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.18;

      // Update fizz bubbles
      const bubblePositions = bubbleGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < bubbleCount; i++) {
        // ascend bubbles
        bubblePositions[i * 3 + 1] += speed[i];
        
        // wiggle bubbles sideways slightly
        bubblePositions[i * 3] += Math.sin(elapsedTime + i) * 0.002;

        // Reset if float higher than the top of screen
        if (bubblePositions[i * 3 + 1] > 4) {
          bubblePositions[i * 3 + 1] = -4;
          bubblePositions[i * 3] = (Math.random() - 0.5) * 5;
        }
      }
      bubbleGeometry.attributes.position.needsUpdate = true;

      // Render update
      renderer.render(scene, camera);

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.unobserve(container);
      resizeObserver.disconnect();
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("mouseleave", onMouseLeave);
      renderer.dispose();
      mainTexture.dispose();
      labelCanvas.remove();
      bodyGeometry.dispose();
      bodyMaterial.dispose();
      neckGeometry.dispose();
      rimMaterial.dispose();
      topRimGeometry.dispose();
      bottomBevelGeometry.dispose();
      bottomRimGeometry.dispose();
      lidGeometry.dispose();
      lidMaterial.dispose();
      tabGeometry.dispose();
      bubbleGeometry.dispose();
      bubbleMaterial.dispose();
    };
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      id="3d-can-stage"
      className="relative w-full h-[380px] md:h-[550px] flex items-center justify-center cursor-grab active:cursor-grabbing hover:scale-105 transition-transform duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Canvas element */}
      <canvas ref={canvasRef} className="w-full h-full block select-none pointer-events-auto" />

      {/* Cybernetic Tech Indicators Around the 3D Stage */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-gray-500 flex flex-col gap-1 pointer-events-none select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#E8002D] animate-ping rounded-full" />
          <span className="text-gray-400">STAGE: INTEGRATED HOLOGRAPH</span>
        </div>
        <div>MODEL: SILV-CAN-12OZ</div>
        <div>X-ROT: INTERACTIVE</div>
      </div>

      <div className="absolute bottom-4 right-4 font-mono text-[10px] text-gray-500 text-right pointer-events-none select-none">
        <div>ORBITAL_Y: ROTATING</div>
        <div>STYL_MODE: PREMIUM</div>
      </div>

      {/* Outer ambient red glow radial aura behind the canvas */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,0,45,0.14)_0%,transparent_65%)] pointer-events-none z-[-1]" />
    </div>
  );
}
