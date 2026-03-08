import React, { useEffect, useRef } from 'react';
import { artistData } from '../data/mockData';

export const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background collage with parallax */}
      <div ref={heroRef} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black to-black"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="grid grid-cols-3 gap-4 h-full p-8">
            {artistData.artworks.slice(0, 6).map((artwork, index) => (
              <div
                key={index}
                className="bg-cover bg-center opacity-40 blur-sm"
                style={{ backgroundImage: `url(${artwork.image})` }}
              ></div>
            ))}
          </div>
        </div>
        {/* Paint splashes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl animate-fade-in">
        <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tight">
          <span className="text-white block mb-4" style={{ fontFamily: 'Impact, sans-serif' }}>
            {artistData.name.split(' ')[0].toUpperCase()}
          </span>
          <span className="text-pink-500 block paint-stroke" style={{ fontFamily: 'Impact, sans-serif' , fontSize: '12px' }}>
            {artistData.name.split(' ')[1].toUpperCase()}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-light tracking-wide">
          {artistData.tagline}
        </p>
        
        <div className="relative inline-block">
          <p className="text-lg md:text-xl text-pink-400 italic font-medium">
            "{artistData.subtitle}"
          </p>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
        </div>
      </div>

      {/* Paint stroke divider */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};
