import React, { useEffect, useRef, useState } from 'react';
import { artistData } from '../data/mockData';

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #1a0a2e 50%, #000000 100%)'
      }}
    >
      {/* Paint splash decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-6xl md:text-7xl font-black mb-4">
            <span className="text-white">ABOUT </span>
            <span className="text-pink-500 paint-stroke">ME</span>
          </h2>
          <div className="w-32 h-1 bg-pink-500 mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/30 to-purple-500/30 rounded-lg blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative overflow-hidden rounded-lg border-4 border-pink-500/50">
                <img
                  src={artistData.bio.image}
                  alt="Artist Portrait"
                  className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg italic font-light">
                    {artistData.bio.quote}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-pink-500 mb-6">
                Creative | Visionary | Artist
              </h3>
              
              <div className="prose prose-invert max-w-none">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  {artistData.bio.text}
                </p>
                
                <div className="bg-black/40 backdrop-blur-sm border border-pink-500/20 rounded-lg p-6 mt-8">
                  <h4 className="text-xl font-semibold text-pink-400 mb-4">My Philosophy</h4>
                  <p className="text-white/80 leading-relaxed">
                    {artistData.bio.philosophy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Paint stroke divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-24">
          <path
            d="M0,50 Q300,20 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="url(#paint-gradient)"
            className="paint-stroke-path"
          />
          <defs>
            <linearGradient id="paint-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 0.2 }} />
              <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.2 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};
