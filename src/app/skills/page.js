import Link from 'next/link';
import { ArrowRight, Cpu, Gauge, Rocket, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Our Skills',
  description: 'See the specialist skills and technical expertise behind ApplianceCare’s premium repair service.',
};

const skillCards = [
  { icon: <Cpu size={24} />, title: 'Advanced diagnostics', text: 'Precise fault detection for modern appliances, electronic controls, and smart features.' },
  { icon: <Gauge size={24} />, title: 'Performance tuning', text: 'We restore efficiency, reduce noise, and improve the long-term reliability of every unit.' },
  { icon: <Rocket size={24} />, title: 'Fast turnaround', text: 'Our teams work carefully and efficiently so your routine is disrupted as little as possible.' },
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#fdf2f4_0%,_#ffffff_50%,_#eef4ff_100%)]">
      <section className="px-4 pb-18 pt-28 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl rounded-[36px] border border-slate-200/80 bg-white/80 p-8 shadow-2xl shadow-slate-200/70 backdrop-blur md:p-12 lg:p-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#E0293D]/20 bg-[#FFF5F6] px-4 py-2 text-sm font-semibold text-[#B81F30]">
              <Sparkles size={16} /> Our expertise
            </div>
            <h1 className="mt-6 text-4xl font-black leading-tight text-[#0B1A2E] sm:text-5xl">
              Specialist skills built around real appliance <span className="text-[#E0293D]">challenges.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              From electrical fault-finding to leak prevention and board-level repairs, our capabilities are designed to deliver premium outcomes for every customer.
            </p>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E0293D] px-7 py-3.5 font-semibold text-white transition hover:bg-[#B81F30]">
              Request support <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {skillCards.map((card, index) => (
              <div key={index} className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E0293D]/10 text-[#E0293D]">{card.icon}</div>
                <h3 className="mt-5 text-xl font-semibold text-[#0B1A2E]">{card.title}</h3>
                <p className="mt-3 text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
