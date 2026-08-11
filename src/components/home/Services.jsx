'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import { serviceCategories } from '../data/services';

const highlightMap = {
  'washing-machine': [
    'Motor and drum issues',
    'Drainage and leak repair',
    'Noise and vibration fixes',
  ],
  refrigerator: [
    'Cooling and compressor support',
    'Water leakage solutions',
    'Temperature stabilization',
  ],
  tv: [
    'Display and screen repair',
    'Power and audio troubleshooting',
    'Smart TV and connectivity support',
  ],
};

function ServiceImage({ src, alt, emoji }) {
  const [error, setError] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  // Log the path for debugging
  useEffect(() => {
    console.log('Attempting to load image:', src);
  }, [src]);

  // If image fails, try to load with a different extension (fallback)
  const handleError = () => {
    console.error('Failed to load image:', src);
    setError(true);
  };

  if (error) {
    return (
      <div className="w-full h-52 bg-linear-to-br from-[#FDE7E9] to-[#F1F0EE] flex items-center justify-center">
        <div className="text-6xl">{emoji}</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-52 overflow-hidden bg-slate-100">
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onError={handleError}
        unoptimized
        priority={false}
      />
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/20 via-transparent to-transparent" />
      <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#0B1A2E] shadow-sm">
        {emoji} {alt}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="section-paper py-20 md:py-24 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E0293D]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0B1A2E]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container relative z-10">
        <SectionTitle
          tag="What We Repair"
          title="Our Services"
          subtitle="Expert Home Appliance Repair Service for major household appliances – fast, reliable, professional, and backed by quality service.
"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {serviceCategories.map((cat, index) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="group h-full flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[#E0293D]/10 border border-gray-100/50 hover:border-[#E0293D]/20"
            >
              {/* Large Image */}
              <ServiceImage src={cat.image} alt={cat.label} emoji={cat.icon} />

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-[#10202E] group-hover:text-[#E0293D] transition-colors duration-300">
                  {cat.label}
                </h3>

                <div className="mt-6 space-y-3">
                  {highlightMap[cat.slug].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#E0293D]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {cat.brands.map((brand) => (
                    <span
                      key={brand.slug}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700"
                    >
                      {brand.label}
                      {brand.isOptional && <span className="inline-flex h-2.5 w-2.5 rounded-full bg-amber-400" />}
                    </span>
                  ))}
                </div>

                <div className="mt-8 rounded-[28px] bg-[#FAFAFF] p-5 text-sm text-slate-700 shadow-sm">
                  <p className="font-semibold text-[#0B1A2E]">Service focus</p>
                  <p className="mt-2 leading-6 text-slate-600">
                    Real appliance repair categories with straight-to-the-point service coverage and no unnecessary clicks.
                  </p>
                </div>

                <div className="mt-auto">
                  <a
                    href="tel:+91 1800202257"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#E0293D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#B81F30]"
                  >
                    Call for Service
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}