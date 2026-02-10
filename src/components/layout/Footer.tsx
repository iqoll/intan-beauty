
export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div>
            <div className="flex items-center mb-6"><img src="https://i.imgur.com/lGzFXQV.png" alt="IntanBeauty" className="h-16 md:h-20 w-auto object-contain" /></div>
            <p className="text-zen-cream/60 leading-relaxed mb-8">Penyedia Japanese Head Spa pertama di Singaparna.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-8 serif">Navigasi</h4>
            <ul className="space-y-4 text-zen-cream/60">
              <li><a href="#tentang" className="hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Layanan Spa</a></li>
              <li><a href="#hasil" className="hover:text-white transition-colors">Hasil Transformasi</a></li>
              <li><a href="#kontak" className="hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-8 serif">Jam Operasional</h4>
            <ul className="space-y-4 text-zen-cream/60">
              <li className="flex justify-between"><span>Senin - Minggu:</span><span>09:00 - 17:00</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-10 text-center text-zen-cream/40 text-sm">
          <p>&copy; {new Date().getFullYear()} IntanBeauty Singaparna. Seluruh Hak Cipta Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}