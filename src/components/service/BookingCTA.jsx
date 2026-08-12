'use client';

import Link from 'next/link';

// ============================================
// 📞 CLIENT CONTACT DETAILS
// ============================================
const CLIENT_PHONE = "1800202257";
// ============================================

export function BookingCTA({ brand, category, description }) {
  const isSamsung = brand?.toLowerCase() === 'samsung';

  const ctaText =
    description ||
    `Get a free estimate, schedule a convenient visit, and speak with a specialist about the fastest solution for your appliance. Our ${brand} ${category} Repair Service is designed to make the repair process convenient, transparent, and reliable.`;

  return (
    <section className={`${isSamsung ? 'bg-[linear-gradient(135deg,_#F8FAFF_0%,_#E5E9F7_100%)]' : 'bg-[linear-gradient(135deg,_#0B1A2E_0%,_#132B45_100%)]'} py-20 ${isSamsung ? 'text-[#0B1A2E]' : 'text-white'}`}>
      <div className="container mx-auto px-4 text-center">
        <div className={`mx-auto max-w-3xl rounded-[32px] border p-8 backdrop-blur md:p-12 ${isSamsung ? 'border-[#1428A0]/20 bg-white shadow-sm' : 'border-white/10 bg-white/10 shadow-2xl'}`}>
          <p className={`mb-4 font-mono text-xs font-semibold uppercase tracking-[0.28em] ${isSamsung ? 'text-[#1428A0]' : 'text-[#FF8A97]'}`}>Ready to book a service?</p>
          <h2 className={`text-3xl font-black md:text-4xl ${isSamsung ? 'text-[#0B1A2E]' : 'text-white'}`}>Book Your {brand} {category} Service <span className={isSamsung ? 'text-[#1428A0]' : 'text-[#E0293D]'}>Today</span></h2>
          <p className={`mx-auto mt-4 max-w-2xl text-lg ${isSamsung ? 'text-slate-600' : 'text-slate-100'}`}>{ctaText}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* ============================================ */}
            {/* 📞 CALL NOW - UPDATED WITH CLIENT NUMBER */}
            {/* ============================================ */}
            <a 
              href={`tel:${CLIENT_PHONE}`} 
              className={`rounded-full px-8 py-3.5 font-semibold transition hover:-translate-y-0.5 ${isSamsung ? 'bg-[#1428A0] text-white hover:bg-[#0E1D7A]' : 'bg-[#E0293D] text-white shadow-lg hover:bg-red-700'}`}
            >
              📞 Call Now
            </a>
            {/* ============================================ */}
            <Link 
              href="/contact" 
              className={`rounded-full border px-8 py-3.5 font-semibold transition hover:bg-white ${isSamsung ? 'border-[#1428A0] bg-white text-[#1428A0] hover:bg-[#F0F4FF]' : 'border-white/60 text-white hover:text-[#0B1A2E]'}`}
            >
              Book Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingCTA;