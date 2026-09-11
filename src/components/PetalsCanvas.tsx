import React, { useEffect, useRef } from 'react';

interface PetalsCanvasProps {
  enabled: boolean;
}

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
}

export const PetalsCanvas: React.FC<PetalsCanvasProps> = ({ enabled }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Elegant soft pink & lily white tones
    const petalColors = [
      'rgba(244, 114, 182, 0.35)', // pink-400
      'rgba(251, 207, 232, 0.45)', // pink-200
      'rgba(253, 242, 248, 0.60)', // pure lily blush
      'rgba(244, 63, 94, 0.22)',   // soft rose
    ];

    const petalCount = Math.min(22, Math.floor(window.innerWidth / 50));
    const petals: Petal[] = Array.from({ length: petalCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 8 + 6,
      speedX: Math.random() * 1.2 - 0.4,
      speedY: Math.random() * 1.0 + 0.6,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.2,
      color: petalColors[Math.floor(Math.random() * petalColors.length)]
    }));

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(p.size / 2, -p.size, p.size, -p.size / 2, p.size, 0);
      ctx.bezierCurveTo(p.size, p.size / 2, p.size / 2, p.size, 0, p.size * 1.2);
      ctx.bezierCurveTo(-p.size / 2, p.size, -p.size, p.size / 2, -p.size, 0);
      ctx.bezierCurveTo(-p.size, -p.size / 2, -p.size / 2, -p.size, 0, 0);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      petals.forEach(p => {
        p.x += p.speedX + Math.sin(p.y * 0.008) * 0.4;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
      aria-hidden="true"
    />
  );
};
