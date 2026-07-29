"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarCheck, Phone, ShieldCheck, Clock3, Sparkles, BadgeCheck } from 'lucide-react';

const applianceImages = {
  'washing-machine': '/service1.jpg',
  refrigerator: '/service2.jpg',
  tv: '/service3.jpg',
};

const brandLogos = {
  lg: '/lg.jpg',
  samsung: '/samsung.jpg',
  bosch: '/bosch.jpg',
  whirlpool: '/whirlpool.jpg',
  sony: '/sony.jpg',
  ifb: '/ifb.jpg',
  godrej: '/godrej.jpg',
  vu: '/brand5.jpg',
};

export default function ServiceHero({
  title,
  description,
  brand,
  brandSlug,
  category,
  categorySlug,
  badge,
  stats = [],
  heroImage,
}) {
  const routeCategory = categorySlug || (typeof category === 'string' ? category.toLowerCase().replace(/\s+/g, '-') : '');
  const imageSrc = heroImage || applianceImages[routeCategory] || '/hero.jpg';
  const logoSrc = brandSlug ? brandLogos[brandSlug] : brandLogos[brand?.toLowerCase()];

  const titleWords = title?.split(' ') || [];
  const titlePrefix = titleWords.slice(0, -1).join(' ');
  const titleSuffix = titleWords.slice(-1)[0] || '';

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(224,41,61,0.12),_transparent_30%),linear-gradient(135deg,_#fffaf9_0%,_#f6f8fc_45%,_#ffffff_100%)] pt-28 pb-20 md:pt-36">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-600">
          <Link href="/" className="font-medium hover:text-[#E0293D]">Home</Link>
          <span>/</span>
          <Link href={routeCategory ? `/${routeCategory}` : '/'} className="capitalize hover:text-[#E0293D]">
            {category || routeCategory.replace(/-/g, ' ') || 'Service'}
          </Link>
          <span>/</span>
          <span className="font-semibold text-[#E0293D]">{brand}</span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E0293D]/20 bg-white/90 px-4 py-2 text-sm font-semibold text-[#B81F30] shadow-sm backdrop-blur">
                <Sparkles size={16} />
                {badge || 'Same Day Doorstep Service'}
              </div>

              <div className="mt-6 grid gap-4 rounded-[32px] border border-slate-200/80 bg-white p-5 shadow-sm sm:grid-cols-[1.5fr_1fr]">
                <div className="flex items-center gap-3 rounded-3xl bg-[#FEF3F2] p-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-sm">
                    {logoSrc ? (
                      <Image src={logoSrc} alt={`${brand} logo`} width={52} height={52} className="rounded-full object-cover" />
                    ) : (
                      <span className="text-xl font-black text-[#E0293D]">{brand?.[0] || 'A'}</span>
                    )}
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Premium Brand Repair</p>
                    <p className="mt-2 text-lg font-semibold text-[#0B1A2E]">{brand} service with a premium experience</p>
                  </div>
                </div>
                <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-[#0B1A2E]">Trusted repair for {brand} {category?.toLowerCase()}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">Our technicians deliver polished service, genuine parts, and clear communication through every repair.</p>
                </div>
              </div>

              <h1 className="mt-8 text-4xl font-black leading-tight text-[#0B1A2E] sm:text-5xl lg:text-6xl">
                {titlePrefix} <span className="text-[#E0293D]">{titleSuffix}</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="tel:+91 xxxxx xxxxx" className="inline-flex items-center gap-2 rounded-full bg-[#E0293D] px-7 py-3.5 font-semibold text-white shadow-lg shadow-red-200 transition hover:-translate-y-0.5 hover:bg-[#B81F30]">
                  <Phone size={18} /> Call Now
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#0B1A2E]/10 bg-white px-7 py-3.5 font-semibold text-[#0B1A2E] transition hover:border-[#E0293D] hover:text-[#E0293D]">
                  <CalendarCheck size={18} /> Book Service
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((item, index) => (
                  <motion.div key={index} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 * index }} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-xl font-black text-[#E0293D]">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-600">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="relative">
            <div className="absolute inset-8 rounded-full bg-[#E0293D]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-4 shadow-[0_25px_80px_rgba(7,17,32,0.12)] backdrop-blur">
              <Image src={imageSrc} alt={title} width={640} height={640} className="h-full w-full rounded-[24px] object-cover" />
              <div className="absolute inset-x-8 bottom-8 flex items-center justify-between gap-3 rounded-full border border-white/80 bg-white/95 px-4 py-3 text-sm text-[#0B1A2E] shadow-lg">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-[#E0293D]" />
                  <span>24/7 Expert Support</span>
                </div>
                <span className="rounded-full bg-[#E0293D]/10 px-3 py-1 text-xs font-semibold text-[#E0293D]">Premium care</span>
              </div>
            </div>
            <div className="mt-5 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center gap-3 text-[#0B1A2E]">
                <BadgeCheck className="text-[#E0293D]" size={20} />
                <span className="font-semibold">Trusted by homeowners and businesses</span>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  { label: 'Certified technicians', icon: <ShieldCheck size={16} /> },
                  { label: 'Genuine spare parts', icon: <BadgeCheck size={16} /> },
                  { label: 'Same-day visits', icon: <Clock3 size={16} /> },
                ].map((item, index) => (
                  <div key={index} className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#E0293D]/10 text-[#E0293D]">{item.icon}</div>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export { ServiceHero };
