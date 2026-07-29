// components/service/RepairProcess.jsx

'use client';

import { SectionTitle } from '../ui/SectionTitle';

export function RepairProcess({ steps = [] }) {
  if (!steps.length) return null;
  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="container mx-auto px-4">
        <SectionTitle tag="How we work" title="Our Repair Process" subtitle="A clear, professional workflow that keeps the experience smooth from the first call to the final handover." align="center" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={idx} className="rounded-[28px] border border-slate-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E0293D] text-xl font-black text-white shadow-lg">{idx + 1}</div>
              <p className="mt-6 text-lg font-semibold text-[#0B1A2E]">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RepairProcess;