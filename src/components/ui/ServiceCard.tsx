import { useState } from 'react';
import { Sparkles, ChevronRight } from 'lucide-react';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  onBook: () => void;
}

export default function ServiceCard({ service, onBook }: ServiceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-zen-sand hover:shadow-lg transition-all duration-300 group">
      <div className="relative h-64 overflow-hidden">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg">
          <span className="text-primary font-bold text-lg">{service.price}</span>
        </div>
        {service.category === 'hair' && service.id === 'head-spa' && (
          <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
            Bestseller
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 group-hover:text-primary-light transition-colors serif">{service.name}</h3>
        {service.description && <p className="text-primary-light text-sm mb-4 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">{service.description}</p>}

        <div className="mb-6">
          <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-3">Manfaat Utama:</h4>
          <ul className="space-y-2">
            {service.benefits?.slice(0, 3).map((benefit, i) => (
              <li key={i} className="flex items-start text-sm text-primary/80">
                <Sparkles size={14} className="mt-1 mr-2 text-secondary shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {service.steps && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mb-4 text-xs font-bold text-primary-light uppercase tracking-widest flex items-center justify-center py-2 bg-zen-sand rounded-xl hover:bg-zen-wood/10 transition-colors"
          >
            {isExpanded ? 'Sembunyikan Tahapan' : `Lihat ${service.steps.length} Tahapan`}
            <ChevronRight className={`ml-1 transition-transform ${isExpanded ? 'rotate-90' : ''}`} size={14} />
          </button>
        )}

        {isExpanded && service.steps && (
          <div className="mb-6 space-y-3 bg-zen-cream p-4 rounded-2xl animate-fade-in">
            {service.steps.map((step, idx) => (
              <div key={idx} className="flex gap-3">
                <span className="text-secondary font-bold text-xs mt-0.5">{idx + 1}.</span>
                <div>
                  <p className="text-sm font-semibold">{step.name}</p>
                  <p className="text-xs text-primary-light">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onBook}
          className="block w-full text-center bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-light transition-all active:scale-95 shadow-md"
        >
          Booking Sekarang
        </button>
      </div>
    </div>
  );
}
