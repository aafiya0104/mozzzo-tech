import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  "• GOOGLE RANKING",
  "• MARKET RESEARCH",
  "• GOOGLE MAPS PRESENCE",
  "• DOMAIN INCLUDED",
  "• SEO SETUP",
  "• LIVE SUPPORT",
  "• EASY UPDATES"
];

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} className="py-6 bg-beige overflow-hidden border-y border-navy/5">
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-r from-beige to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-60 bg-gradient-to-l from-beige to-transparent z-10" />

        <div className="marquee-container flex">
          {/* Double the content for smooth loop */}
          <div className="marquee-slow flex items-center gap-8 md:gap-16 px-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex items-center gap-8 md:gap-16">
                {features.map((feature, index) => (
                  <span 
                    key={index} 
                    className="text-xl md:text-3xl font-bold text-navy/20 whitespace-nowrap hover:text-navy transition-colors duration-500 cursor-default select-none"
                    style={{ fontFamily: '"Geist", sans-serif' }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
