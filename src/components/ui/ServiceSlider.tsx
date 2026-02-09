import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { Service } from '../../types';
import ServiceCard from './ServiceCard';

interface ServiceSliderProps {
  services: Service[];
  onBook: () => void;
}

function usePerPage() {
  const [perPage, setPerPage] = useState(3);

  useEffect(() => {
    function update() {
      if (window.innerWidth < 768) setPerPage(1);
      else if (window.innerWidth < 1024) setPerPage(2);
      else setPerPage(3);
    }
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return perPage;
}

export default function ServiceSlider({ services, onBook }: ServiceSliderProps) {
  const perPage = usePerPage();
  const totalPages = Math.ceil(services.length / perPage);
  const [page, setPage] = useState(0);

  // Clamp page when perPage changes (e.g. resize)
  useEffect(() => {
    setPage(prev => Math.min(prev, totalPages - 1));
  }, [totalPages]);

  const goNext = useCallback(() => setPage(p => Math.min(p + 1, totalPages - 1)), [totalPages]);
  const goPrev = useCallback(() => setPage(p => Math.max(p - 1, 0)), []);

  const visible = services.slice(page * perPage, page * perPage + perPage);

  // No slider needed
  if (totalPages <= 1) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => (
          <ServiceCard key={service.id} service={service} onBook={onBook} />
        ))}
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 slider-fade-in" key={page}>
        {visible.map(service => (
          <ServiceCard key={service.id} service={service} onBook={onBook} />
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goPrev}
        disabled={page === 0}
        aria-label="Previous"
        className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-md shadow-lg rounded-full p-2.5 text-primary hover:bg-primary hover:text-white transition-all disabled:opacity-0 disabled:pointer-events-none"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        onClick={goNext}
        disabled={page === totalPages - 1}
        aria-label="Next"
        className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-md shadow-lg rounded-full p-2.5 text-primary hover:bg-primary hover:text-white transition-all disabled:opacity-0 disabled:pointer-events-none"
      >
        <ChevronRight size={22} />
      </button>

      {/* Dot indicators */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            aria-label={`Page ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === page
                ? 'w-8 h-3 bg-primary'
                : 'w-3 h-3 bg-primary/25 hover:bg-primary/50'
              }`}
          />
        ))}
        <span className="ml-3 text-xs text-primary-light font-medium">
          {page + 1} / {totalPages}
        </span>
      </div>
    </div>
  );
}
