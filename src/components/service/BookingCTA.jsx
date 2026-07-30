'use client';

import Link from 'next/link';

export function BookingCTA({ brand, category }) {
  return (
    <section className="bg-[linear-gradient(135deg,_#0B1A2E_0%,_#132B45_100%)] py-20 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mx-auto max-w-3xl rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur md:p-12">
          <h2 className="text-3xl font-black md:text-4xl text-white">Book Your {brand} {category} Service <span className="text-[#E0293D]">Today</span></h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-100">Get a free estimate, schedule a visit, and speak with a specialist about the fastest fix for your appliance.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="tel:+91 xxxxx xxxxx" className="rounded-full bg-[#E0293D] px-8 py-3.5 font-semibold text-white shadow-lg shadow-red-200 transition hover:-translate-y-0.5 hover:bg-red-700">📞 Call Now</a>
            <Link href="/contact" className="rounded-full border border-white/60 px-8 py-3.5 font-semibold transition hover:bg-white hover:text-[#0B1A2E]">Book Online</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingCTA;