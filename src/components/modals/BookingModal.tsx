import { useState } from "react";
import { SERVICES, WHATSAPP_LINK } from "../../constants";
import { X, ArrowLeft, Scissors, Heart, Zap, Sparkles, MessageCircle } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<'hair' | 'facial' | 'laser-ipl' | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');

  if (!isOpen) return null;

  const resetModal = () => {
    setStep(1);
    setCategory(null);
    setSelectedServiceId('');
    onClose();
  }

  const handleCategorySelect = (category: 'hair' | 'facial' | 'laser-ipl') => {
    setCategory(category);
    setStep(2);
  }

  const filteredServices = SERVICES.filter((s) => s.category === category);
  const selectedService = SERVICES.find((s) => s.id === selectedServiceId);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-primary/40 backdrop-blur-md transition-opacity duration-500"
        onClick={resetModal}
      ></div>

      {/* Modal Card */}
      <div className="relative bg-zen-cream w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button
          onClick={resetModal}
          className="absolute top-6 right-6 p-2 text-primary/40 hover:text-primary transition-colors"
        >
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold serif text-primary mb-2">Reservasi Perawatan</h3>
            <p className="text-primary-light text-sm">Silahkan tentukan jenis perawatan Anda</p>
          </div>

          {/* Step 1: Category */}
          {step === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in slide-in-from-bottom-4 duration-500">
              <button
                onClick={() => handleCategorySelect('hair')}
                className="group p-6 bg-white border border-zen-sand rounded-3xl hover:border-secondary hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-zen-sand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/10 transition-colors">
                  <Scissors className="text-primary group-hover:text-secondary" />
                </div>
                <span className="font-bold text-primary block">Hair Treatment</span>
              </button>
              <button
                onClick={() => handleCategorySelect('facial')}
                className="group p-6 bg-white border border-zen-sand rounded-3xl hover:border-secondary hover:shadow-xl transition-all text-center"
              >
                <div className="w-16 h-16 bg-zen-sand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/10 transition-colors">
                  <Heart className="text-primary group-hover:text-secondary" />
                </div>
                <span className="font-bold text-primary block">Facial Treatment</span>
              </button>
              <button
                onClick={() => handleCategorySelect('laser-ipl')}
                className="group p-6 bg-white border border-zen-sand rounded-3xl hover:border-secondary hover:shadow-xl transition-all text-center sm:col-span-2"
              >
                <div className="w-16 h-16 bg-zen-sand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/10 transition-colors">
                  <Zap className="text-primary group-hover:text-secondary" />
                </div>
                <span className="font-bold text-primary block">Laser IPL & Hair Removal</span>
              </button>
            </div>
          )}

          {/* Step 2: Service Selection */}
          {step === 2 && (
            <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
              <button
                onClick={() => setStep(1)}
                className="flex items-center gap-2 text-sm text-primary-light hover:text-primary transition-colors mb-4"
              >
                <ArrowLeft size={16} /> Kembali
              </button>

              <div className="space-y-4">
                <label className="text-xs font-bold uppercase tracking-widest text-secondary block">Pilih Layanan</label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-white border border-zen-sand p-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-secondary/20 appearance-none text-primary cursor-pointer"
                >
                  <option value="" disabled>-- Klik untuk memilih --</option>
                  {filteredServices.map(s => (
                    <option key={s.id} value={s.id}>{s.name} - {s.price}</option>
                  ))}
                </select>
              </div>

              {selectedServiceId && (
                <div className="pt-4 animate-in fade-in slide-in-from-bottom-2">
                  <div className="text-center p-8 bg-zen-sand/50 rounded-3xl border border-dashed border-zen-wood/30">
                    <Sparkles className="mx-auto text-secondary mb-3" size={32} />
                    <h4 className="font-bold text-primary mb-1">Reservasi Via WhatsApp</h4>
                    <p className="text-xs text-primary-light mb-6">Booking untuk {selectedService?.name} dapat dilakukan langsung melalui Admin WhatsApp kami.</p>
                    <div className="flex flex-col gap-3">
                      <a
                        href={WHATSAPP_LINK}
                        className="bg-secondary text-white py-4 rounded-2xl font-bold text-sm shadow-lg flex items-center justify-center gap-2"
                      >
                        <MessageCircle size={18} /> Chat Admin Sekarang
                      </a>
                      <button
                        onClick={resetModal}
                        className="text-primary-light text-xs font-bold uppercase tracking-widest hover:text-primary"
                      >
                        Tutup
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BookingModal