import { Waves, MessageCircle, Heart } from 'lucide-react';
import { TRANSFORMATIONS, TESTIMONIALS } from '../../constants';
import SectionTitle from '../ui/SectionTitle';
import TransformationCard from '../ui/TransformationCard';
import TestimonialScreenshotCard from '../ui/TestimonialScreenshotCard';

export default function TransformationSection() {
  return (
    <section id="results" className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title="Hasil & Testimoni"
          subtitle="Transformasi nyata and kepuasan tulus dari para pelanggan setia IntanBeauty."
        />

        <h3 className="text-2xl font-bold serif text-primary mb-10 flex items-center gap-3">
          <Waves className="text-secondary" /> Transformasi Perawatan
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {TRANSFORMATIONS.map((item, idx) => (
            <TransformationCard key={idx} item={item} />
          ))}
        </div>

        <h3 className="text-2xl font-bold serif text-primary mb-10 flex items-center gap-3">
          <MessageCircle className="text-secondary" /> Apa Kata Mereka?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item, idx) => (
            <TestimonialScreenshotCard key={idx} item={item} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/5 border border-secondary/20 px-6 py-3 rounded-full text-secondary font-bold text-sm">
            <Heart size={16} />
            Sudah lebih dari 1000+ pelanggan puas di Singaparna
          </div>
        </div>
      </div>
    </section>
  );
}
