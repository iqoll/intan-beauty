import { ChevronRight } from 'lucide-react';
import { FAQS } from '../../constants';
import SectionTitle from '../ui/SectionTitle';

export default function FaqSection() {
  return (
    <section id="faq" className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          title="Paling Sering Ditanyakan"
          subtitle="Temukan jawaban cepat untuk pertanyaan umum mengenai layanan kami."
        />
        <div className="space-y-4">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="border border-zen-sand rounded-2xl overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-zen-cream transition-colors">
                  <span className="font-bold text-primary">{faq.question}</span>
                  <ChevronRight className="transition-transform group-open:rotate-90 text-secondary" size={20} />
                </summary>
                <div className="p-6 pt-0 text-primary-light leading-relaxed border-t border-zen-sand bg-zen-cream/30">
                  {faq.answer}
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
