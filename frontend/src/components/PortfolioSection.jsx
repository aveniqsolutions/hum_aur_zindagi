import React, { useEffect, useRef, useState } from 'react';
import { artistData } from '../data/mockData';

export const PortfolioSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative py-32 px-6 bg-black overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-6xl md:text-7xl font-black mb-4">
            <span className="text-white">MY </span>
            <span className="text-pink-500 paint-stroke">PORTFOLIO</span>
          </h2>
          <div className="w-32 h-1 bg-pink-500 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A collection of emotions, stories, and visual expressions captured on canvas
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artistData.artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedArtwork(artwork)}
            >
              <div className="relative overflow-hidden rounded-lg bg-purple-950/30 backdrop-blur-sm border border-pink-500/0 group-hover:border-pink-500/50 transition-all duration-500">
                {/* Image */}
                <div className="relative h-96 overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-pink-500/20 blur-xl"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                    {artwork.title}
                  </h3>
                  <div className="h-px bg-gradient-to-r from-pink-500 to-transparent mb-3"></div>
                  <p className="text-sm text-pink-300 font-medium mb-2">
                    Theme: {artwork.theme}
                  </p>
                  <p className="text-white/70 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {artwork.description}
                  </p>
                </div>

                {/* Exhibition label style corner */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-pink-500/30 rounded px-3 py-1">
                  <span className="text-pink-400 text-xs font-mono">#{artwork.id.toString().padStart(2, '0')}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for artwork details */}
      {selectedArtwork && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-6 animate-fade-in"
          onClick={() => setSelectedArtwork(null)}
        >
          <div
            className="max-w-4xl w-full bg-purple-950/50 backdrop-blur-xl border border-pink-500/30 rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-96 md:h-auto">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-bold text-pink-500 mb-4">
                  {selectedArtwork.title}
                </h3>
                <div className="h-px bg-gradient-to-r from-pink-500 to-transparent mb-4"></div>
                <div className="mb-6">
                  <p className="text-pink-300 font-semibold mb-2">THEME:</p>
                  <p className="text-white/90">{selectedArtwork.theme}</p>
                </div>
                <div className="mb-6">
                  <p className="text-pink-300 font-semibold mb-2">MEANING:</p>
                  <p className="text-white/80 leading-relaxed">{selectedArtwork.description}</p>
                </div>
                {selectedArtwork.size && (
                  <div className="mb-4">
                    <p className="text-pink-300 font-semibold mb-1">SIZE:</p>
                    <p className="text-white/80">{selectedArtwork.size}</p>
                  </div>
                )}
                {selectedArtwork.medium && (
                  <div className="mb-4">
                    <p className="text-pink-300 font-semibold mb-1">MEDIUM:</p>
                    <p className="text-white/80">{selectedArtwork.medium}</p>
                  </div>
                )}
                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="mt-6 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition-colors duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
