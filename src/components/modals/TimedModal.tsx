import { X, Sparkles } from "lucide-react";

interface TimedModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBook: () => void;
}

export default function TimedModal({ isOpen, onClose, onBook }: TimedModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full max-w-sm rounded-[2rem] shadow-2xl p-8 text-center animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-primary/40 hover:text-primary transition-colors"
        >
          <X size={20} />
        </button>
        <div className="py-12">
          <Sparkles className="mx-auto text-secondary mb-4" size={48} />
          <h3 className="text-2xl font-bold serif text-primary mb-4">Selamat Datang!</h3>
          <p className="text-primary-light text-sm">Terima kasih telah mengunjungi IntanBeauty. Kami siap memberikan perawatan terbaik untuk Anda.</p>
        </div>
        <button
          onClick={() => {
            onBook();
            onClose();
          }}
          className="w-full text-center bg-primary text-white py-4 rounded-2xl font-bold hover:bg-primary-light transition-all"
        >
          Booking Sekarang
        </button>
      </div>
    </div>
  );
}