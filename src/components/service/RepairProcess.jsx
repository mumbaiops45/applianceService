// components/service/RepairProcess.jsx

'use client';

import { SectionTitle } from '../ui/SectionTitle';

export function RepairProcess({
  steps = [],
  title = 'Our Repair Process',
  subtitle = 'A clear and professional workflow keeps your service experience smooth from the first call to final handover.',
}) {
  if (!steps.length) return null;

  const normalized = steps.map((step) =>
    typeof step === 'string' ? { title: step, description: '' } : step
  );

  return (
    <section className="bg-[#F8FAFC] py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          tag=" How We Work"
          title={title}
          subtitle={subtitle}
          align="center"
          tagAs="p"
          titleAs="h2"
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {normalized.map((step, idx) => (
            <div key={idx} className="rounded-[28px] border border-slate-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#E0293D] text-xl font-black text-white shadow-lg">{idx + 1}</div>
              <h3 className="mt-6 text-lg font-semibold text-[#0B1A2E]">{step.title}</h3>
              {step.description ? <p className="mt-3 leading-7 text-slate-600">{step.description}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RepairProcess;
