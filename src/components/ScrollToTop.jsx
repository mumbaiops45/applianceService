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
  const [showContact, setShowContact] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show scroll‑to‑top after scrolling past hero (e.g., 400px)
      setShowScroll(scrollY > 400);

      // Show WhatsApp & Call only when in hero area (top 500px)
      // AND not near the bottom (footer)
      const isNearBottom = windowHeight + scrollY >= documentHeight - 300;
      const isInHero = scrollY < 500;

      setShowContact(isInHero && !isNearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Button – shown only in hero area */}
      {showContact && (
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1ebe5c] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
          aria-label="Chat on WhatsApp"
        >
          <FaWhatsapp className="w-7 h-7 text-white transition-transform duration-300 group-hover:scale-110" />
        </a>
      )}

      {/* Phone Call Button – shown only in hero area */}
      {showContact && (
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="group w-14 h-14 rounded-full bg-[#1a8cff] hover:bg-[#0077ed] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110"
          aria-label="Call us"
        >
          <Phone className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
        </a>
      )}

      {/* Scroll to Top Button – appears after scrolling past hero */}
      <button
        onClick={scrollToTop}
        className={`group w-14 h-14 rounded-full bg-[#E0293D] hover:bg-[#B81F30] shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-110 ${
          showScroll
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-8 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110" />
      </button>
    </div>
  );
}