"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CalendarCheck, Phone, ShieldCheck, Clock3, Sparkles, BadgeCheck } from 'lucide-react';

// ============================================
// 📞 CLIENT CONTACT DETAILS
// ============================================
const CLIENT_PHONE = "1800202257";
// ============================================
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

// Samsung brand colors
const samsungColors = {
    primary: '#1428A0',
    primaryDark: '#0E1D7A',
    secondary: '#FFFFFF',
    accent: '#E5E9F7',
    gradient: 'from-[#1428A0] to-[#0E1D7A]',
    lightBg: 'bg-[#F0F4FF]',
    border: 'border-[#1428A0]/20',
    text: 'text-[#1428A0]',
    textHover: 'hover:text-[#1428A0]',
    shadow: 'shadow-blue-200/50',
    ring: 'ring-[#1428A0]/20',
};

// Default red brand colors
const defaultColors = {
    primary: '#E0293D',
    primaryDark: '#B81F30',
    secondary: '#FFFFFF',
    accent: '#FFF5F6',
    gradient: 'from-[#E0293D] to-[#B81F30]',
    lightBg: 'bg-[#FEF3F2]',
    border: 'border-[#E0293D]/20',
    text: 'text-[#E0293D]',
    textHover: 'hover:text-[#E0293D]',
    shadow: 'shadow-red-200/50',
    ring: 'ring-[#E0293D]/20',
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
    cardText,
}) {
    const routeCategory = categorySlug || (typeof category === 'string' ? category.toLowerCase().replace(/\s+/g, '-') : '');
    const imageSrc = heroImage || applianceImages[routeCategory] || '/hero.jpg';
    const logoSrc = brandSlug ? brandLogos[brandSlug] : brandLogos[brand?.toLowerCase()];

    const titleWords = title?.split(' ') || [];
    const titlePrefix = titleWords.slice(0, -1).join(' ');
    const titleSuffix = titleWords.slice(-1)[0] || '';

    // Check if the brand is Samsung
    const isSamsung = brand?.toLowerCase() === 'samsung' || brandSlug?.toLowerCase() === 'samsung';
    const colors = isSamsung ? samsungColors : defaultColors;

    // Dynamic background for Samsung
    const bgClass = isSamsung
        ? 'bg-[radial-gradient(circle_at_top_left,_rgba(20,40,160,0.08),_transparent_30%),linear-gradient(135deg,_#f5f8ff_0%,_#e8edf9_45%,_#ffffff_100%)]'
        : 'bg-[radial-gradient(circle_at_top_left,_rgba(224,41,61,0.12),_transparent_30%),linear-gradient(135deg,_#fffaf9_0%,_#f6f8fc_45%,_#ffffff_100%)]';

    return (
        <section className={`relative overflow-hidden ${bgClass} pt-28 pb-20 md:pt-36`}>
            <div className="container mx-auto px-4">
                {/* Breadcrumbs */}
                <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-600">
                    <Link href="/" className={`font-medium transition-colors ${isSamsung ? 'hover:text-[#1428A0]' : 'hover:text-[#E0293D]'}`}>
                        Home
                    </Link>
                    <span className="text-slate-400">/</span>
                    <Link
                        href={routeCategory ? `/${routeCategory}` : '/'}
                        className={`capitalize transition-colors ${isSamsung ? 'hover:text-[#1428A0]' : 'hover:text-[#E0293D]'}`}
                    >
                        {category || routeCategory.replace(/-/g, ' ') || 'Service'}
                    </Link>
                    <span className="text-slate-400">/</span>
                    <span className={`font-semibold ${colors.text}`}>{brand}</span>
                </div>

                <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                    {/* Left Column - Content */}
                    <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
                        <div>
                            {/* Badge */}
                            <div className={`inline-flex items-center gap-2 rounded-full border ${colors.border} bg-white/90 px-4 py-2 text-sm font-semibold ${colors.text} shadow-sm backdrop-blur`}>
                                <Sparkles size={16} />
                                {badge || 'Same Day Doorstep Service'}
                            </div>

                            {/* Brand & Logo Card */}
                            <div className="mt-6 grid gap-4 rounded-[32px] border border-slate-200/80 bg-white p-5 shadow-sm sm:grid-cols-[1.5fr_1fr]">
                                <div className={`flex items-center gap-4 rounded-3xl ${isSamsung ? 'bg-[#F0F4FF]' : 'bg-[#FEF3F2]'} p-4`}>
                                    <div className={`flex items-center justify-center rounded-3xl bg-white shadow-sm ${isSamsung ? 'h-32 w-32' : 'h-28 w-28'}`}>
                                        {logoSrc ? (
                                            <Image
                                                src={logoSrc}
                                                alt={`${brand} logo`}
                                                width={isSamsung ? 120 : 100}
                                                height={isSamsung ? 120 : 100}
                                                className={`rounded-8xl object-contain p-2 ${isSamsung ? 'scale-110' : ''}`}
                                            />
                                        ) : (
                                            <span className={`text-xl font-black ${colors.text} ${isSamsung ? 'text-3xl' : ''}`}>
                                                {brand?.[0] || 'A'}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-sm uppercase tracking-[0.24em] text-slate-500 font-semibold">Premium Brand Repair</p>
                                        <p className="mt-2 text-lg font-semibold text-[#0B1A2E]">
                                            {brand} service with a premium experience
                                        </p>
                                    </div>
                                </div>
                                <div className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5">
                                    <p className="text-sm font-semibold text-[#0B1A2E]">
                                        Trusted Repair for {brand} {category}
                                    </p>
                                    <p className="mt-3 text-sm leading-7 text-slate-600">
                                        {cardText || 'Our technicians deliver polished service, genuine parts, and clear communication through every repair.'}
                                    </p>
                                </div>
                            </div>

                            {/* Title */}
                            <h1 className="mt-8 text-4xl font-black leading-tight text-[#0B1A2E] sm:text-5xl lg:text-6xl">
                                {titlePrefix} <span className={colors.text}>{titleSuffix}</span>
                            </h1>
                            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{description}</p>

                            {/* CTA Buttons */}
                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href={`tel:${CLIENT_PHONE}`}
                                    className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${colors.gradient} px-7 py-3.5 font-semibold text-white shadow-lg ${colors.shadow} transition hover:-translate-y-0.5 hover:shadow-xl`}
                                >
                                    <Phone size={18} /> Call Now
                                </a>
                                <Link
                                    href="/contact"
                                    className={`inline-flex items-center gap-2 rounded-full border border-[#0B1A2E]/10 bg-white px-7 py-3.5 font-semibold text-[#0B1A2E] transition ${colors.textHover} hover:border-[#1428A0]`}
                                >
                                    <CalendarCheck size={18} /> Book Service
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="mt-10 grid gap-4 sm:grid-cols-3">
                                {stats.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.12 * index }}
                                        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <p className={`text-xl font-black ${colors.text}`}>{item.value}</p>
                                        <p className="mt-2 text-sm text-slate-600">{item.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 24 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className={`absolute inset-8 rounded-full ${isSamsung ? 'bg-[#1428A0]/10' : 'bg-[#E0293D]/10'} blur-3xl`} />
                        <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/80 p-4 shadow-[0_25px_80px_rgba(7,17,32,0.12)] backdrop-blur">
                            <Image
                                src={imageSrc}
                                alt={title}
                                width={640}
                                height={640}
                                className="h-full w-full rounded-[24px] object-cover"
                            />
                            <div className="absolute inset-x-8 bottom-8 flex items-center justify-between gap-3 rounded-full border border-white/80 bg-white/95 px-4 py-3 text-sm text-[#0B1A2E] shadow-lg">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck size={16} className={colors.text} />
                                    <span>24/7 Expert Support</span>
                                </div>
                                <span className={`rounded-full ${isSamsung ? 'bg-[#1428A0]/10 text-[#1428A0]' : 'bg-[#E0293D]/10 text-[#E0293D]'} px-3 py-1 text-xs font-semibold`}>
                                    Premium care
                                </span>
                            </div>
                        </div>

                        {/* Features Footer */}
                        <div className="mt-5 rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
                            <div className="flex items-center gap-3 text-[#0B1A2E]">
                                <BadgeCheck className={colors.text} size={20} />
                                <span className="font-semibold">Trusted by homeowners and businesses</span>
                            </div>
                            <div className="mt-4 grid gap-3 sm:grid-cols-3">
                                {[
                                    { label: 'Certified technicians', icon: <ShieldCheck size={16} /> },
                                    { label: 'Genuine spare parts', icon: <BadgeCheck size={16} /> },
                                    { label: 'Same-day visits', icon: <Clock3 size={16} /> },
                                ].map((item, index) => (
                                    <div key={index} className="rounded-2xl bg-slate-50 p-3 text-sm text-slate-600">
                                        <div className={`mb-2 flex h-8 w-8 items-center justify-center rounded-full ${isSamsung ? 'bg-[#1428A0]/10 text-[#1428A0]' : 'bg-[#E0293D]/10 text-[#E0293D]'}`}>
                                            {item.icon}
                                        </div>
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