"use client";

import { useEffect, useRef } from "react";

export function AnimatedText() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const text = "to rule them all";
    const dotSize = 4;
    const dotSpacing = 8;
    const color = "#666";

    // Set canvas size
    canvas.width = 800;
    canvas.height = 100;

    // Configure text
    ctx.font = "48px Inter";
    ctx.fillStyle = color;
    ctx.textBaseline = "middle";

    // Get text metrics
    const metrics = ctx.measureText(text);
    const textWidth = metrics.width;

    // Center text position
    const startX = (canvas.width - textWidth) / 2;
    const startY = canvas.height / 2;

    // Draw text first to get pixel data
    ctx.fillText(text, startX, startY);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw dots where text pixels are
    for (let y = 0; y < canvas.height; y += dotSpacing) {
      for (let x = 0; x < canvas.width; x += dotSpacing) {
        const i = (y * canvas.width + x) * 4;
        if (imageData.data[i + 3] > 128) {
          // If pixel is opaque
          ctx.beginPath();
          ctx.arc(x, y, dotSize / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }, []);

  return <canvas ref={canvasRef} className="w-full max-w-[800px] mx-auto" />;
}
