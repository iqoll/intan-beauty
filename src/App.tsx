import { useState, useEffect } from "react";
import Nav from "./components/layout/Nav";
import BookingModal from "./components/modals/BookingModal";
import TimedModal from "./components/modals/TimedModal";
import HeroSection from "./components/home/HeroSection";
import ServicesSection from "./components/home/ServicesSection";
import TransformationSection from "./components/home/TransformationSection";
import FaqSection from "./components/home/FaqSection";
import ContactSection from "./components/home/ContactSection";
import Footer from "./components/layout/Footer";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isTimedModalOpen, setIsTimedModalOpen] = useState(false);

  // Trigger timed modal after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTimedModalOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

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

        {/* Timed Modal Integration */}
        <TimedModal
          isOpen={isTimedModalOpen}
          onClose={() => setIsTimedModalOpen(false)}
          onBook={() => setIsBookingModalOpen(true)}
        />
        <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} handleOpenBooking={handleOpenBooking} />
        <main className="flex-grow pt-20">
          <HeroSection handleOpenBooking={handleOpenBooking} />
          <ServicesSection handleOpenBooking={handleOpenBooking} />
          <TransformationSection />
          <FaqSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
