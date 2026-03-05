import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';
import { artistData } from '../data/mockData';

export const ContactSection = () => {
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
      id="contact"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #1a0a2e 100%)'
      }}
    >
      {/* Paint splashes */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-6xl md:text-7xl font-black mb-4">
            <span className="text-white">CONTACT </span>
            <span className="text-pink-500 paint-stroke">ME</span>
          </h2>
          <div className="w-32 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg">
            Let's create something beautiful together
          </p>
        </div>

        {/* Contact Cards */}
        <div className="space-y-6">
          {/* Phone */}
          <div className={`group transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <a
              href={`tel:${artistData.contact.phone}`}
              className="flex items-center gap-6 p-8 bg-black/40 backdrop-blur-md border border-pink-500/20 rounded-xl hover:border-pink-500/60 hover:bg-black/60 transition-all duration-500 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-pink-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <Phone className="text-white" size={28} />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-pink-400 font-semibold text-sm mb-1">CALL ME</p>
                <p className="text-white text-xl font-medium group-hover:text-pink-400 transition-colors duration-300">
                  {artistData.contact.phone}
                </p>
              </div>
            </a>
          </div>

          {/* Email */}
          <div className={`group transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <a
              href={`mailto:${artistData.contact.email}`}
              className="flex items-center gap-6 p-8 bg-black/40 backdrop-blur-md border border-pink-500/20 rounded-xl hover:border-pink-500/60 hover:bg-black/60 transition-all duration-500 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-pink-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <Mail className="text-white" size={28} />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-pink-400 font-semibold text-sm mb-1">EMAIL</p>
                <p className="text-white text-xl font-medium group-hover:text-pink-400 transition-colors duration-300 break-all">
                  {artistData.contact.email}
                </p>
              </div>
            </a>
          </div>

          {/* Instagram */}
          <div className={`group transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <a
              href={`https://instagram.com/${artistData.contact.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-6 p-8 bg-black/40 backdrop-blur-md border border-pink-500/20 rounded-xl hover:border-pink-500/60 hover:bg-black/60 transition-all duration-500 group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-pink-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                  <Instagram className="text-white" size={28} />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-pink-400 font-semibold text-sm mb-1">FOLLOW</p>
                <p className="text-white text-xl font-medium group-hover:text-pink-400 transition-colors duration-300">
                  {artistData.contact.instagramDisplay}
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent mb-8"></div>
          <p className="text-white/60 text-sm">
            © 2025 {artistData.name}. All rights reserved.
          </p>
          <p className="text-white/40 text-xs mt-2">
            Self-taught artist from Karachi | Creating art with meaning
          </p>
        </div>
      </div>
    </section>
  );
};
