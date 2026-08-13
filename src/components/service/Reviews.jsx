'use client';

import { SectionTitle } from '../ui/SectionTitle';

export function Reviews({
  testimonials = [],
  title = 'Trusted By Thousands of Families',
  subtitle = 'We deliver a reliable Home Appliance Repair Service with certified engineers, genuine spare parts, and same-day doorstep service.',
}) {
  if (!testimonials.length) return null;
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <SectionTitle tag="Happy Clients" title={title} subtitle={subtitle} align="center" tagAs="p" titleAs="h2" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t, idx) => (
            <div key={idx} className="rounded-[30px] border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E0293D]/10 text-[#E0293D] font-bold">{(t.name || 'U').split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
                <div>
                  <div className="font-semibold text-[#0B1A2E]">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
              <div className="mt-4 flex text-[#E0293D]">{[...Array(5)].map((_, i) => (<span key={i}>{i < Math.floor(t.rating || 5) ? '★' : '☆'}</span>))}</div>
              <p className="mt-5 text-lg leading-8 text-slate-600">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;