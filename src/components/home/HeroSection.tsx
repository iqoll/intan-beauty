interface HeroSectionProps {
  handleOpenBooking: () => void;
}

export default function HeroSection({ handleOpenBooking }: HeroSectionProps) {
  return (
    <section id="tentang" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/hero.webp"
          alt="Luxury Spa Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/30 text-xs font-bold uppercase tracking-[0.2em] animate-pulse">
            Pertama di Singaparna
          </div>
        </div>
        <h1 className="text-5xl md:text-8xl font-bold mb-6 leading-tight drop-shadow-2xl text-shadow-lg serif">
          Kemurnian Tradisi <br /> <span className="text-secondary-light">Japanese Head Spa</span>
        </h1>
        <p className="text-lg md:text-xl mb-10 text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
          Rasakan sensasi relaksasi total dengan teknik water therapy pertama and satu-satunya di Singaparna, Kabupaten Tasikmalaya.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleOpenBooking}
            className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-zen-cream hover:scale-105 transition-all"
          >
            Booking Sekarang
          </button>
          <a
            href="#layanan"
            className="w-full sm:w-auto bg-transparent border-2 border-white/50 text-white px-10 py-[18px] rounded-2xl font-bold text-lg backdrop-blur-md hover:bg-white/10 transition-all"
          >
            Lihat Layanan
          </a>
        </div>
      </div>
    </section>
  );
}
