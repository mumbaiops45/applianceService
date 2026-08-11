"use client";

import {
  ShieldCheck,
  Wrench,
  BadgeCheck,
  Clock3,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

// ============================================
// 📞 CLIENT CONTACT DETAILS
// ============================================
const CLIENT_PHONE = "1800202257";
// ============================================

const defaultHighlights = [
  {
    icon: <Wrench size={24} />,
    title: 'Expert Technicians',
    text: 'Certified engineers with years of experience repairing all major appliance brands.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Genuine Spare Parts',
    text: 'We use only high-quality genuine replacement parts for long-lasting repairs.',
  },
  {
    icon: <Clock3 size={24} />,
    title: 'Same-Day Service',
    text: 'Fast doorstep repair service with quick response across your city.',
  },
  {
    icon: <BadgeCheck size={24} />,
    title: 'Service Warranty',
    text: 'Enjoy complete peace of mind with our repair warranty on every service.',
  },
];

export function BrandInfo({ title, description, highlights = [], stats = [] }) {
  const featureCards = highlights.length ? highlights : defaultHighlights;
  const statCards = stats.length
    ? stats
    : [
        { value: '15+', label: 'Years Experience' },
        { value: '25K+', label: 'Repairs Completed' },
        { value: '100%', label: 'Customer Satisfaction' },
        { value: '4.9★', label: 'Customer Rating' },
      ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF2F7] py-24">
      <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-red-100/60 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="inline-flex items-center gap-2 rounded-full bg-red-50 px-5 py-2 text-sm font-semibold tracking-wide text-[#E0293D]">
            <Sparkles size={16} /> PROFESSIONAL REPAIR SERVICE
          </h2>

          <h3 className="mt-6 text-4xl font-extrabold leading-tight text-[#0B1A2E] md:text-5xl">
            Expert {title} <span className="text-[#E0293D]">Repair</span> Service
          </h3>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#E0293D]" />
          <p className="mt-8 text-lg leading-8 text-gray-600">{description}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((item, index) => (
            <div key={index} className="rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <h3 className="text-4xl font-black text-[#E0293D]">{item.value}</h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((item, index) => (
            <div key={index} className="group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#E0293D] hover:shadow-2xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[#E0293D] transition group-hover:bg-[#E0293D] group-hover:text-white">
                {item.icon || <Wrench size={24} />}
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#0B1A2E]">{item.title}</h3>
              <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-8 rounded-[32px] bg-gradient-to-r from-[#FFF1F2] via-[#FEF6F8] to-[#F8FAFC] p-10 md:flex-row md:p-14">
          <div>
            <h2 className="text-3xl font-bold text-[#0B1A2E]">Need Immediate {title} Repair?</h2>
            <p className="mt-3 max-w-xl text-slate-600">Our certified technicians are available for same-day doorstep service with genuine spare parts, clear pricing, and a premium repair experience.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${CLIENT_PHONE}`} className="rounded-full bg-[#E0293D] px-8 py-4 font-semibold text-white transition hover:bg-[#B81F30]">Call Now</a>
            <a href="/contact" className="rounded-full border border-slate-300 bg-white px-8 py-4 font-semibold text-[#0B1A2E] transition hover:border-[#E0293D] hover:text-[#E0293D]">Book Service</a>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {['Certified Engineers', 'Genuine Spare Parts', 'Same-Day Doorstep Service'].map((item, index) => (
            <div key={index} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-lg font-medium text-[#0B1A2E] shadow-sm">
              <CheckCircle2 className="text-green-600" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BrandInfo;