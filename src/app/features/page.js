import Link from 'next/link';
import { ArrowRight, CheckCircle2, HeartHandshake, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Features',
  description: 'Explore the premium features of ApplianceCare’s appliance repair service, from warranty coverage to doorstep support.',
};

const featureList = [
  'Same-day support on common appliance issues',
  'Genuine replacement parts with warranty protection',
  'Transparent pricing and no surprise costs',
  'Friendly support from booking to completion',
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#fdf2f4_0%,_#ffffff_50%,_#eef4ff_100%)]">
      <section className="px-4 pb-18 pt-28 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl rounded-[36px] border border-slate-200/80 bg-white/80 p-8 shadow-2xl shadow-slate-200/70 backdrop-blur md:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E0293D]/20 bg-[#FFF5F6] px-4 py-2 text-sm font-semibold text-[#B81F30]">
                <Sparkles size={16} /> Premium features
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight text-[#0B1A2E] sm:text-5xl">
                Everything you want in a professional repair <span className="text-[#E0293D]">experience.</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We combine practical expertise, elegant service, and honest communication to make appliance repair feel simple and reassuring.
              </p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E0293D] px-7 py-3.5 font-semibold text-white transition hover:bg-[#B81F30]">
                Get started <ArrowRight size={18} />
              </Link>
            </div>

            <div className="space-y-4">
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-center gap-3 text-[#E0293D]">
                  <ShieldCheck size={22} />
                  <h3 className="text-xl font-semibold text-[#0B1A2E]">Warranty-backed repairs</h3>
                </div>
                <p className="mt-3 text-slate-600">Reliable repairs supported by clear service guarantees and professional standards.</p>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="flex items-center gap-3 text-[#E0293D]">
                  <HeartHandshake size={22} />
                  <h3 className="text-xl font-semibold text-[#0B1A2E]">Customer-first support</h3>
                </div>
                <p className="mt-3 text-slate-600">From booking to final testing, our team keeps you informed and comfortable throughout.</p>
              </div>
              <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <ul className="space-y-3">
                  {featureList.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-slate-700">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-[#E0293D]" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
