  'use client';

  import { useState } from 'react';
  import { SectionTitle } from '../ui/SectionTitle';

  export function FAQSection({ faq = [] }) {
    const [open, setOpen] = useState(null);
    const toggle = (idx) => setOpen(open === idx ? null : idx);
    if (!faq.length) return null;

    return (
      <section className="bg-[#F8FAFC] py-14">
        <div className="mx-auto max-w-xl px-4">
          <SectionTitle
            tag="Common questions"
            title="Frequently Asked Questions"
            subtitle="Clear answers for your appliance service booking."
            align="center"
          />
          <div className="space-y-3">
            {faq.map((item, idx) => (
              <div key={idx} className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-md">
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left text-sm font-semibold text-slate-900 transition duration-200 hover:bg-red-50"
                  aria-expanded={open === idx}
                >
                  <span>{item.q}</span>
                  <span className="text-xl font-bold text-[#E0293D]">{open === idx ? '−' : '+'}</span>
                </button>
                {open === idx && (
                  <div className="border-t border-slate-100 px-4 pb-4 pt-3 text-sm leading-6 text-slate-600">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  export default FAQSection;