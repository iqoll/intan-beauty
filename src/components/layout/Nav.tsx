import { Menu, X } from "lucide-react";

interface NavProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  handleOpenBooking: () => void;
}

function Nav({ isMenuOpen, setIsMenuOpen, handleOpenBooking }: NavProps) {
  return (
    <nav className="fixed w-full z-40 bg-white/80 backdrop-blur-lg border-b border-zen-sand">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://i.imgur.com/lGzFXQV.png"
            alt="IntanBeauty"
            className="h-16 md:h-20 w-auto object-contain cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-primary/70">
          <a href="#about" className="hover:text-primary transition-colors">Tentang</a>
          <a href="#services" className="hover:text-primary transition-colors">Layanan</a>
          <a href="#results" className="hover:text-primary transition-colors">Hasil</a>
          <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-primary transition-colors">Kontak</a>
          <button
            onClick={handleOpenBooking}
            className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-primary-light transition-all shadow-lg"
          >
            Booking
          </button>
        </div>

        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-zen-sand p-6 flex flex-col gap-6 animate-fade-in">
          <a href="#tentang" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Tentang Kami</a>
          <a href="#layanan" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Layanan</a>
          <a href="#hasil" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Transformasi</a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Tanya Jawab (FAQ)</a>
          <a href="#kontak" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium">Lokasi & Kontak</a>
          <button
            onClick={handleOpenBooking}
            className="bg-primary text-white py-4 rounded-2xl text-center font-bold w-full"
          >
            Pilih Jadwal Booking
          </button>
        </div>
      )}
    </nav>
  )
}

export default Nav