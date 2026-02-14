import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  speed: number;
}

// Opacity multiplier: 1 at top (hero), ~0.12 when scrolled down so particles don't clutter light sections
function getScrollOpacityMultiplier(): number {
  const y = typeof window === 'undefined' ? 0 : window.scrollY;
  if (y < 300) return 1;
  if (y > 900) return 0.12;
  return 1 - (y - 300) / 600 * 0.88;
}

export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const rafRef = useRef<number | undefined>(undefined);
  const frameCountRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Reduce particles on touch devices and when user prefers reduced motion (helps low-end devices)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particleCount = prefersReducedMotion ? 0 : isTouchDevice ? 12 : 24;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    if (particleCount === 0) {
      return () => window.removeEventListener('resize', resizeCanvas);
    }

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 2,
      opacity: Math.random() * 0.3 + 0.3,
      speed: Math.random() * 0.5 + 0.5,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const animate = () => {
      frameCountRef.current++;
      const opacityMultiplier = getScrollOpacityMultiplier();

      // Render every 2nd frame for performance on low-end devices
      if (frameCountRef.current % 2 === 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particlesRef.current.forEach((particle, i) => {
          // Mouse repulsion (only process every 4th particle for performance)
          if (i % 4 === 0) {
            const dx = particle.x - mouseRef.current.x;
            const dy = particle.y - mouseRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < 100 && dist > 0) {
              const force = (100 - dist) / 100;
              particle.vx += (dx / dist) * force * 0.5;
              particle.vy += (dy / dist) * force * 0.5;
            }
          }

          // Update position
          particle.x += particle.vx * particle.speed;
          particle.y += particle.vy * particle.speed;

          // Damping
          particle.vx *= 0.99;
          particle.vy *= 0.99;

          // Random drift
          particle.vx += (Math.random() - 0.5) * 0.02;
          particle.vy += (Math.random() - 0.5) * 0.02;

          // Wrap around screen
          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;

          // Draw particle (opacity reduced when scrolled so they don't clutter light sections)
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity * opacityMultiplier})`;
          ctx.fill();
        });
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
