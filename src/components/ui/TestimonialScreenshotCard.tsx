import { Quote, Star, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';

interface TestimonialScreenshotCardProps {
  item: typeof TESTIMONIALS[0];
}

export default function TestimonialScreenshotCard({ item }: TestimonialScreenshotCardProps) {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-zen-sand shadow-sm relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
      <div className="absolute -top-4 -right-4 text-secondary/5 group-hover:text-secondary/10 transition-colors">
        <Quote size={120} />
      </div>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary/20 p-0.5">
          <img src={item.avatar} alt={item.name} className="w-full h-full object-cover rounded-full" />
        </div>
        <div>
          <h4 className="font-bold text-primary text-sm leading-none mb-1">{item.name}</h4>
          <div className="flex items-center gap-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className="fill-secondary text-secondary" />
              ))}
            </div>
            <span className="text-[10px] text-primary-light">via {item.source}</span>
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <p className="text-primary-light text-sm italic leading-relaxed">"{item.content}"</p>
      </div>

      {/* Screenshot */}
      <div className="my-6 rounded-xl overflow-hidden border border-zen-sand/50 shadow-inner bg-zen-cream/50 p-1 group-hover:scale-[1.02] transition-transform duration-500">
        <img
          src={item.screenshot || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=60&w=500"}
          alt="Testimony Screenshot"
          className="w-full h-150 md:h-190 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
        />
      </div>

      <div className="mt-6 flex items-center gap-2 text-[10px] font-bold text-secondary uppercase tracking-widest">
        <CheckCircle2 size={12} /> Terverifikasi
      </div>
    </div>
  );
}
