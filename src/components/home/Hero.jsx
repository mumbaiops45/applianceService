// components/sections/Hero.jsx
'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import CustomerEnquiryPopup from "@/components/CustomerEnquiryPopup";
// ============================================
// 📞 CLIENT CONTACT DETAILS
// ============================================
const CLIENT_PHONE = "1800202257";
const CLIENT_PHONE_DISPLAY = "1800-202-257";
// ============================================
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center">

      <CustomerEnquiryPopup />
      {/* Background + overlays + glow, clipped to the hero box only */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/banner.jpg')" }}
        />
        {/* Premium overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0B1A2E]/85 via-[#0B1A2E]/65 to-[#0B1A2E]/35" />
        <div className="absolute inset-0 bg-linear-to-t from-[#071120]/80 via-transparent to-transparent" />

        {/* Decorative crimson glow */}
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#E0293D]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#E0293D]/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-8 md:pt-12 pb-24 md:pb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Small intro line */}
            <p className="text-lg md:text-xl text-white/70 font-medium mb-3">
              Welcome to <span className="text-white font-semibold">Customer Care</span>
            </p>

            {/* Big headline — the actual service statement */}
            <h1 className="text-4xl md:text-4xl xl:text-6xl font-black leading-[1.1] text-white lg:whitespace-nowrap">
              Bangalore's No.1 Appliances{" "}
              <span className="text-[#E0293D]">Service Provider</span>
            </h1>

            {/* Typewriter */}
            <div className="mt-6 text-xl md:text-2xl font-medium text-white min-h-10 flex items-center">
              <span className="text-white/60 mr-2 font-mono text-base uppercase tracking-wider hidden sm:inline">Repairs for</span>
              <span className="text-[#E0293D]">
                <Typewriter
                  words={[
                    "LG Washing Machines",
                    "Samsung Refrigerators",
                    "Sony Smart TVs",
                    "Bosch Washing Machines",
                    "Whirlpool Refrigerators",
                    "All Major Brands",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={50}
                />
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-lg text-white/70 leading-8">
              Certified technicians providing same‑day doorstep repair for
              Washing Machines, Refrigerators and TVs using genuine spare parts.
            </p>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#E0293D] to-[#B81F30] hover:from-[#B81F30] hover:to-[#8F1826] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-[#E0293D]/30 transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                Book Service
              </Link>
              <a
                href={`tel:${CLIENT_PHONE}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-[#0B1A2E] transition duration-300 backdrop-blur-sm"
              >
                Call Now
              </a>
            </motion.div>

            {/* Trust Badges */}
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-2"><span className="text-[#E0293D]">●</span> 15+ Years Experience</span>
              <span className="flex items-center gap-2"><span className="text-[#E0293D]">●</span> 25K+ Happy Customers</span>
              <span className="flex items-center gap-2"><span className="text-[#E0293D]">●</span> 4.9/5 TrustScore</span>
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
}