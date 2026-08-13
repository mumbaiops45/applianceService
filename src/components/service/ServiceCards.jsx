'use client';

import { motion } from 'framer-motion';
import { Wrench, Sparkles, ShieldCheck } from 'lucide-react';
import { SectionTitle } from '../ui/SectionTitle';

export default function ServiceCards({
  services = [],
  title = 'Our Core Services',
  subtitle = 'Expert Home Appliance Repair Service for major household appliances – fast, reliable, professional, and backed by quality service.',
}) {
  if (!services.length) return null;

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionTitle tag="What We Fix" title={title} subtitle={subtitle} align="center" tagAs="p" titleAs="h2" />
        <div className="grid gap-8 lg:grid-cols-3">
          {services.map((service, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="group rounded-[30px] border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-white p-8 shadow-sm hover:-translate-y-2 hover:shadow-2xl transition-all">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E0293D]/10 text-[#E0293D]">
                {idx === 0 ? <Wrench size={24} /> : idx === 1 ? <ShieldCheck size={24} /> : <Sparkles size={24} />}
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#0B1A2E]">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {service.points.map((point, pointIdx) => (
                  <li key={pointIdx} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#E0293D]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { ServiceCards };