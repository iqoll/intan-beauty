import { useState } from "react";
import Nav from "./components/layout/Nav";
import BookingModal from "./components/modals/BookingModal";

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
      </div>
    </>
  )
}

export default App
