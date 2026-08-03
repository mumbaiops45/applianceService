"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// ============================================
// 📞 CLIENT CONTACT DETAILS
// ============================================
const WHATSAPP_NUMBER = "6366949496"; // WhatsApp number (without + or spaces)
const PHONE_NUMBER = "1800202257"; // Phone number (without + or spaces)
const PHONE_DISPLAY = "1800-202-257"; // Display format
// ============================================

export default function ScrollToTop() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show scroll‑to‑top button after scrolling past hero (e.g., 400px)
      setShowScroll(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* LEFT CORNER: Phone Call Button (Always Visible) */}
      <div className="fixed bottom-8 left-6 z-50">
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#1a8cff] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#0077ed] hover:shadow-xl"
          aria-label="Call us"
        >
          <Phone className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
        </a>
      </div>

      {/* RIGHT CORNER: Stacked Buttons (Scroll-To-Top above WhatsApp) */}
      <div className="fixed bottom-8 right-6 z-50 flex flex-col items-center gap-4">
        {/* Scroll to Top Button (Placed Above WhatsApp) */}
        <button
          onClick={scrollToTop}
          className={`group flex h-14 w-14 items-center justify-center rounded-full bg-[#E0293D] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#B81F30] hover:shadow-xl ${
            showScroll
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none translate-y-8 opacity-0"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6 text-white transition-transform duration-300 group-hover:scale-110" />
        </button>

        {/* WhatsApp Button (Always Visible at Bottom Right) */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5c] hover:shadow-xl"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="h-7 w-7 text-white transition-transform duration-300 group-hover:scale-110" />
        </a>
      </div>
    </>
  );
}