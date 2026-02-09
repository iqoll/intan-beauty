import { useState } from 'react';
import { MapPin, Phone, Instagram, Map as MapIcon, Image as ImageIcon } from 'lucide-react';

export default function ContactSection() {
  const [showMap, setShowMap] = useState(true);

  return (
    <section id="kontak" className="py-24 px-4 bg-zen-sand">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-5xl font-bold mb-8 serif">Kunjungi Kami</h2>
            <div className="flex gap-6 items-start">
              <div className="bg-white p-4 rounded-2xl shadow-sm hover:bg-zen-cream hover:scale-105 transition-all">
                <MapPin className="text-secondary" size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 serif">Alamat</h4>
                <p className="text-primary-light">Jln. Raya Timur No. 472 Cipakat Singaparna Kab. Tasikmalaya</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-white p-4 rounded-2xl shadow-sm hover:bg-zen-cream hover:scale-105 transition-all">
                <a href="https://wa.me/6282219282839" target="_blank" rel="noopener noreferrer">
                  <Phone className="text-secondary" size={24} />
                </a>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 serif">WhatsApp</h4>
                <p className="text-primary-light">0822-1928-2839</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-white p-4 rounded-2xl shadow-sm hover:bg-zen-cream hover:scale-105 transition-all">
                <a href="https://www.instagram.com/intanbeauty26" target="_blank" rel="noopener noreferrer">
                  <Instagram className="text-secondary" size={24} />
                </a>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 serif">Instagram</h4>
                <p className="text-primary-light">@intanbeauty26</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[450px] bg-white group/contact">
            {/* Toggle Buttons */}
            <div className="absolute top-4 right-4 z-20 flex bg-white/90 backdrop-blur-md p-1 rounded-full shadow-lg border border-zen-sand">
              <button
                onClick={() => setShowMap(true)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${showMap ? 'bg-primary text-white' : 'text-primary/60 hover:text-primary'}`}
              >
                <MapIcon size={14} /> Peta
              </button>
              <button
                onClick={() => setShowMap(false)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${!showMap ? 'bg-primary text-white' : 'text-primary/60 hover:text-primary'}`}
              >
                <ImageIcon size={14} /> Foto Klinik
              </button>
            </div>

            {/* Content Area */}
            <div className="w-full h-full transition-all duration-500 overflow-hidden">
              {showMap ? (
                <iframe
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  src="https://maps.google.com/maps?q=-7.346852926905103,108.12075983190353&hl=id&z=15&output=embed"
                  title="Map"
                  className="animate-in fade-in duration-700"
                ></iframe>
              ) : (
                <div className="relative w-full h-full animate-in fade-in zoom-in duration-700">
                  <img
                    src="https://i.pinimg.com/736x/40/4c/2d/404c2dce2a2f135e42f1332253958fd9.jpg?auto=format&fit=crop&q=80&w=1200"
                    alt="IntanBeauty Storefront"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                    <div className="text-white">
                      <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Storefront View</p>
                      <h4 className="text-xl font-bold serif">IntanBeauty Singaparna</h4>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
