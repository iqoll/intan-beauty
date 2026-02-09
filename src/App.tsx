import { useState } from "react";
import Nav from "./components/layout/Nav";
import BookingModal from "./components/modals/BookingModal";
import HeroSection from "./components/home/HeroSection";
import ServicesSection from "./components/home/ServicesSection";
import TransformationSection from "./components/home/TransformationSection";
import FaqSection from "./components/home/FaqSection";
import ContactSection from "./components/home/ContactSection";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingModalOpen(true);
    setIsMenuOpen(false);
  }

  return (
    <>
      <div className="min-h-screen flex flex-col">
        {/* Booking Modal Integration */}
        <BookingModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
        />
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} handleOpenBooking={handleOpenBooking} />
        <main className="flex-grow pt-20">
          <HeroSection handleOpenBooking={handleOpenBooking} />
          <ServicesSection handleOpenBooking={handleOpenBooking} />
          <TransformationSection />
          <FaqSection />
          <ContactSection />
        </main>
      </div>
    </>
  )
}

export default App
