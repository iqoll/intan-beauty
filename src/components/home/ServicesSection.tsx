import { Icon } from '@iconify/react';
import { SERVICES } from '../../constants';
import SectionTitle from '../ui/SectionTitle';
import ServiceSlider from '../ui/ServiceSlider';

interface ServicesSectionProps {
  handleOpenBooking: () => void;
}

export default function ServicesSection({ handleOpenBooking }: ServicesSectionProps) {
  return (
    <section id="layanan" className="py-24 px-4 bg-zen-sand">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Layanan Eksklusif Kami"
          subtitle="Pilihan perawatan terbaik mulai dari kepala hingga ujung kaki, dirancang khusus untuk kenyamanan Anda."
        />

        {/* Hair Category */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-4 no-scrollbar">
            <div className="bg-primary text-white px-6 py-3 rounded-full flex items-center gap-2 shrink-0">
              <Icon icon="mdi:hair-dryer" width={18} height={18} />
              <span className="font-bold">Hair Treatments</span>
            </div>
          </div>
          <ServiceSlider services={SERVICES.filter(s => s.category === 'hair')} onBook={handleOpenBooking} />
        </div>

        {/* Facial Category */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-4 no-scrollbar">
            <div className="bg-secondary text-white px-6 py-3 rounded-full flex items-center gap-2 shrink-0">
              <Icon icon="fa6-solid:spa" width={18} height={18} />
              <span className="font-bold">Facial & Skin Treatments</span>
            </div>
          </div>
          <ServiceSlider services={SERVICES.filter(s => s.category === 'facial')} onBook={handleOpenBooking} />
        </div>

        {/* Laser IPL Category */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-4 no-scrollbar">
            <div className="bg-primary-light text-white px-6 py-3 rounded-full flex items-center gap-2 shrink-0">
              <Icon icon="mdi:laser-pointer" width={18} height={18} />
              <span className="font-bold">Laser IPL & Hair Removal</span>
            </div>
          </div>
          <ServiceSlider services={SERVICES.filter(s => s.category === 'laser-ipl')} onBook={handleOpenBooking} />
        </div>
      </div>
    </section>
  );
}
