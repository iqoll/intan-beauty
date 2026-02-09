import { Scissors, Heart, Zap } from 'lucide-react';
import { SERVICES } from '../../constants';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from '../ui/ServiceCard';

interface ServicesSectionProps {
  handleOpenBooking: () => void;
}

export default function ServicesSection({ handleOpenBooking }: ServicesSectionProps) {
  return (
    <section id="services" className="py-24 px-4 bg-zen-sand">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Layanan Eksklusif Kami"
          subtitle="Pilihan perawatan terbaik mulai dari kepala hingga ujung kaki, dirancang khusus untuk kenyamanan Anda."
        />

        {/* Hair Category */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-4 no-scrollbar">
            <div className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 shrink-0">
              <Scissors size={18} />
              <span className="font-bold">Hair Treatments</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.filter(s => s.category === 'hair').map(service => (
              <ServiceCard key={service.id} service={service} onBook={handleOpenBooking} />
            ))}
          </div>
        </div>

        {/* Facial Category */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-4 no-scrollbar">
            <div className="bg-secondary text-white px-6 py-3 rounded-full flex items-center gap-2 shrink-0">
              <Heart size={18} />
              <span className="font-bold">Facial & Skin Treatments</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.filter(s => s.category === 'facial').map(service => (
              <ServiceCard key={service.id} service={service} onBook={handleOpenBooking} />
            ))}
          </div>
        </div>

        {/* Laser IPL Category */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-4 no-scrollbar">
            <div className="bg-primary-light text-white px-6 py-3 rounded-full flex items-center gap-2 shrink-0">
              <Zap size={18} />
              <span className="font-bold">Laser IPL & Hair Removal</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.filter(s => s.category === 'laser-ipl').map(service => (
              <ServiceCard key={service.id} service={service} onBook={handleOpenBooking} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
