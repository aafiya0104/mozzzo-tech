import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CircularTextProps {
  text: string;
  radius?: number;
  className?: string;
}

export function CircularText({ text, radius = 60, className = "" }: CircularTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    // Continuous rotation
    const rotationAnim = gsap.to(el, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    // Speed up on scroll
    ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        // Increase timeScale based on scroll velocity and direction
        const velocity = self.getVelocity();
        // velocity is negative when scrolling up, positive when scrolling down
        // We want rotation direction to match scroll direction
        const direction = velocity > 0 ? 1 : -1;
        const speed = Math.abs(velocity);
        const timeScale = 1 + (speed / 100);
        
        gsap.to(rotationAnim, {
            timeScale: direction * timeScale,
            duration: 0.5,
            overwrite: true
        });
        
        // Reset to normal speed (and default clockwise direction) when stopped
        gsap.to(rotationAnim, {
            timeScale: 1,
            duration: 0.5,
            delay: 0.5
        });
      }
    });

    return () => {
        rotationAnim.kill();
    }
  }, []);

  const characters = text.split("");
  const degree = 360 / characters.length;

  return (
    <div ref={containerRef} className={`relative flex items-center justify-center ${className}`}>
      <div 
        ref={textRef}
        className="relative w-full h-full flex items-center justify-center"
        style={{ width: radius * 2, height: radius * 2 }}
      >
        {characters.map((char, i) => (
          <span
            key={i}
            className="absolute top-0 left-1/2 origin-bottom font-medium uppercase text-navy"
            style={{
              height: `${radius}px`,
              transform: `translateX(-50%) rotate(${i * degree}deg)`,
              transformOrigin: `center ${radius}px`,
              willChange: "transform",
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}
