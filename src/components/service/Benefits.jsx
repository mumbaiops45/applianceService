// components/service/Benefits.jsx

'use client';

import { SectionTitle } from '../ui/SectionTitle';

export function Benefits({
  features = [],
  title = 'Features & Benefits',
  subtitle = 'We deliver a reliable Home Appliance Repair Service backed by experienced engineers, genuine spare parts, and outstanding customer support. Our Doorstep Appliance Repair approach ensures convenient, professional assistance with a focus on quality workmanship and long-lasting solutions.',
}) {
  if (!features.length) return null;

  const normalized = features.map((feature) =>
    typeof feature === 'string' ? { title: feature, text: '' } : feature
  );

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionTitle tag="Why choose us" title={title} subtitle={subtitle} align="center" tagAs="p" titleAs="h2" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {normalized.map((feature, idx) => (
            <div key={idx} className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E0293D]/10 text-2xl font-black text-[#E0293D]">✓</div>
              <h3 className="mt-5 text-xl font-semibold text-[#0B1A2E]">{feature.title}</h3>
              {feature.text ? <p className="mt-3 text-slate-600">{feature.text}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;