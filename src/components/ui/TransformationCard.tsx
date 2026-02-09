import { ArrowRight } from 'lucide-react';
import { TRANSFORMATIONS } from '../../constants';

interface TransformationCardProps {
  item: typeof TRANSFORMATIONS[0];
}

export default function TransformationCard({ item }: TransformationCardProps) {
  return (
    <div className="group bg-white p-4 rounded-[2.5rem] border border-zen-sand shadow-sm hover:shadow-xl transition-all duration-500">
      <div className="flex items-center justify-between mb-4 px-2">
        <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/5 px-3 py-1 rounded-full">{item.category}</span>
        <h4 className="font-bold text-primary serif text-xl">{item.title}</h4>
      </div>
      <div className="grid grid-cols-2 gap-2 relative mb-4">
        <div className="relative group/img overflow-hidden rounded-2xl">
          <img src={item.before} alt="Before" className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute bottom-2 left-2 bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">Before</div>
        </div>
        <div className="relative group/img overflow-hidden rounded-2xl">
          <img src={item.after} alt="After" className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute bottom-2 left-2 bg-secondary/80 backdrop-blur-md text-white text-[10px] px-2 py-0.5 rounded font-bold uppercase">After</div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg border border-zen-sand group-hover:scale-110 transition-transform z-10">
          <ArrowRight size={16} className="text-secondary" />
        </div>
      </div>
      <p className="text-primary-light text-xs text-center px-4 leading-relaxed">{item.description}</p>
    </div>
  );
}
