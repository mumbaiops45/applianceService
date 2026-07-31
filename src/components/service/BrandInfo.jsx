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
const CLIENT_WHATSAPP = "6366949496";
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

export default function BrandInfo({ 
  title, 
  description, 
  highlights = [], 
  stats = [],
  brand,
  brandSlug,
}) {
  const featureCards = highlights.length ? highlights : defaultHighlights;
  const statCards = stats.length
    ? stats
    : [
        { value: '15+', label: 'Years Experience' },
        { value: '25K+', label: 'Repairs Completed' },
        { value: '100%', label: 'Customer Satisfaction' },
        { value: '4.9★', label: 'Customer Rating' },
      ];

  // Check if the brand is Samsung for color switching
  const isSamsung = brand?.toLowerCase() === 'samsung' || brandSlug?.toLowerCase() === 'samsung';
  const primaryColor = isSamsung ? '#1428A0' : '#E0293D';
  const primaryDark = isSamsung ? '#0E1D7A' : '#B81F30';
  const lightBg = isSamsung ? 'bg-[#1428A0]/10' : 'bg-red-50';
  const lightBgHover = isSamsung ? 'group-hover:bg-[#1428A0]' : 'group-hover:bg-[#E0293D]';
  const cardHoverBorder = isSamsung ? 'hover:border-[#1428A0]' : 'hover:border-[#E0293D]';
  const ctaBg = isSamsung ? 'bg-[#F0F4FF]' : 'bg-gradient-to-r from-[#FFF1F2] via-[#FEF6F8] to-[#F8FAFC]';
  const statText = isSamsung ? 'text-[#1428A0]' : 'text-[#E0293D]';
  const iconBg = isSamsung ? 'bg-[#1428A0]/10 text-[#1428A0]' : 'bg-red-50 text-[#E0293D]';
  const checkColor = isSamsung ? 'text-[#1428A0]' : 'text-green-600';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#F8FAFC] to-[#EEF2F7] py-24">
      <div className="absolute -top-20 right-0 h-96 w-96 rounded-full bg-red-100/60 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <span className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold tracking-wide ${isSamsung ? 'bg-[#1428A0]/10 text-[#1428A0]' : 'bg-red-50 text-[#E0293D]'}`}>
            <Sparkles size={16} /> PROFESSIONAL REPAIR SERVICE
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-[#0B1A2E] md:text-5xl">
            Expert {title} <span style={{ color: primaryColor }}>Repair</span> Service
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full" style={{ backgroundColor: primaryColor }} />
          <p className="mt-8 text-lg leading-8 text-gray-600">{description}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((item, index) => (
            <div key={index} className={`rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${cardHoverBorder}`}>
              <h3 className={`text-4xl font-black ${statText}`}>{item.value}</h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featureCards.map((item, index) => (
            <div key={index} className={`group rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 ${cardHoverBorder} hover:shadow-2xl`}>
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${iconBg} transition ${lightBgHover} group-hover:text-white`}>
                {item.icon || <Wrench size={24} />}
              </div>
              <h3 className="mt-6 text-xl font-bold text-[#0B1A2E]">{item.title}</h3>
              <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* ============================================ */}
        {/* 📞 CTA Section - UPDATED WITH CLIENT DETAILS */}
        {/* ============================================ */}
        <div className={`mt-20 flex flex-col items-center justify-between gap-8 rounded-[32px] ${ctaBg} p-10 md:flex-row md:p-14`}>
          <div>
            <h3 className="text-3xl font-bold text-[#0B1A2E]">Need Immediate {title} Repair?</h3>
            <p className="mt-3 max-w-xl text-slate-600">Our certified technicians are available for same-day doorstep service with genuine spare parts, clear pricing, and a premium repair experience.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a 
              href={`tel:${CLIENT_PHONE}`} 
              className={`rounded-full px-8 py-4 font-semibold text-white transition hover:shadow-lg hover:-translate-y-0.5`}
              style={{ backgroundColor: primaryColor }}
            >
              Call Now
            </a>
            <a 
              href="/contact" 
              className={`rounded-full border bg-white px-8 py-4 font-semibold transition hover:shadow-lg hover:-translate-y-0.5 ${isSamsung ? 'border-[#1428A0] text-[#1428A0] hover:bg-[#1428A0] hover:text-white' : 'border-slate-300 text-[#0B1A2E] hover:border-[#E0293D] hover:text-[#E0293D]'}`}
            >
              Book Service
            </a>
          </div>
        </div>
        {/* ============================================ */}

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {['Certified Engineers', 'Genuine Spare Parts', 'Same-Day Doorstep Service'].map((item, index) => (
            <div key={index} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-lg font-medium text-[#0B1A2E] shadow-sm">
              <CheckCircle2 className={checkColor} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { BrandInfo };