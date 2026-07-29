import Link from 'next/link';
import { ArrowRight, BadgeCheck, Clock3, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'About ApplianceCare',
  description: 'Learn about ApplianceCare’s premium appliance repair service, expert technicians, and customer-first promise.',
};

const highlights = [
  {
    icon: <ShieldCheck size={22} />,
    title: 'Certified experts',
    text: 'Every repair is handled by trained professionals who understand modern home appliances.',
  },
  {
    icon: <Clock3 size={22} />,
    title: 'Fast response',
    text: 'We value your time with prompt scheduling and same-day support whenever possible.',
  },
  {
    icon: <BadgeCheck size={22} />,
    title: 'Trusted service',
    text: 'We stand behind our work with transparent advice, warranty-backed repairs, and honest pricing.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(224,41,61,0.10),_transparent_25%),linear-gradient(180deg,_#fdf2f4_0%,_#eef4ff_100%)]">
      <section className="relative px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#E0293D]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] border border-slate-200/80 bg-white/90 px-6 py-10 shadow-2xl shadow-slate-200/70 backdrop-blur md:px-12 md:py-14 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E0293D]/20 bg-[#FFF5F6] px-4 py-2 text-sm font-semibold text-[#B81F30]">
                <Sparkles size={16} /> About ApplianceCare
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-black leading-tight text-[#0B1A2E] sm:text-5xl">
                Premium appliance repair with fast, friendly service and trusted <span className="text-[#E0293D]">results.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                ApplianceCare combines expert technicians, transparent pricing, and genuine parts to restore refrigerators, washing machines, and TVs quickly and confidently.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#E0293D] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#E0293D]/20 transition hover:bg-[#B81F30]">
                  Book service <ArrowRight size={18} />
                </Link>
                <Link href="/washing-machine/lg" className="inline-flex items-center gap-2 rounded-full border border-[#0B1A2E]/10 px-7 py-3.5 text-sm font-semibold text-[#0B1A2E] transition hover:border-[#E0293D] hover:text-[#E0293D]">
                  Explore services
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-[#0B1A2E]/95 p-8 text-white shadow-2xl">
              <div className="rounded-[28px] bg-[#07111F]/95 p-6 shadow-inner shadow-slate-950/20">
                <p className="text-xs uppercase tracking-[0.3em] text-[#E0293D]">Trusted performance</p>
                <p className="mt-4 text-3xl font-black text-white">More than 25,000 trusted repairs delivered.</p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  We support homes across Bangalore with clear communication, expert diagnostics, and service warranties you can count on.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/10 p-5">
                  <p className="text-3xl font-black text-[#E0293D]">15+</p>
                  <p className="mt-2 text-sm text-slate-300">Years experience</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-5">
                  <p className="text-3xl font-black text-[#E0293D]">24/7</p>
                  <p className="mt-2 text-sm text-slate-300">Rapid booking support</p>
                </div>
                <div className="rounded-3xl bg-white/10 p-5">
                  <p className="text-3xl font-black text-[#E0293D]">4.9/5</p>
                  <p className="mt-2 text-sm text-slate-300">Average customer rating</p>
                </div>
              </div>

              <div className="mt-8 space-y-4 rounded-[28px] bg-white/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-[#E0293D]/10 p-3 text-[#E0293D]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Genuine parts assurance</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">We use trusted replacement components to restore performance and protect your appliance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-[#E0293D]/10 p-3 text-[#E0293D]">
                    <Clock3 size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Fast appointment booking</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">Book a convenient slot and our technician arrives with the right tools and a clear estimate.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-[#E0293D]/10 p-3 text-[#E0293D]">
                    <BadgeCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Warranty-backed repair</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">All repairs are backed by service support, so you get confidence after the visit is complete.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.95fr] items-start">
            <div className="rounded-[32px] border border-slate-200/80 bg-slate-50 p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.32em] text-[#E0293D]">What we do</p>
              <h2 className="mt-4 text-3xl font-black text-[#0B1A2E]">Appliance repair built around your home.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                From leak detection to board repair, our technicians solve the issue the first time with care and transparency. We support major brands and most key home appliances.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="font-semibold text-[#0B1A2E]">Refrigerators</p>
                  <p className="mt-2 text-sm text-slate-600">Cooling problems, compressor faults, ice maker issues, and gas top-ups.</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="font-semibold text-[#0B1A2E]">Washing Machines</p>
                  <p className="mt-2 text-sm text-slate-600">Drum repairs, water leaks, spin cycle issues, and electronic control fixes.</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="font-semibold text-[#0B1A2E]">Televisions</p>
                  <p className="mt-2 text-sm text-slate-600">Display repairs, sound problems, smart TV updates, and power fault resolution.</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <p className="font-semibold text-[#0B1A2E]">Home appliances</p>
                  <p className="mt-2 text-sm text-slate-600">Comprehensive support for kitchens and laundry appliances across brands.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#E0293D]">Our values</p>
              <div className="mt-6 space-y-5">
                {highlights.map((item, index) => (
                  <div key={index} className="rounded-3xl border border-slate-200 p-5 shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="rounded-2xl bg-[#E0293D]/10 p-3 text-[#E0293D]">{item.icon}</div>
                      <div>
                        <h3 className="font-semibold text-[#0B1A2E]">{item.title}</h3>
                        <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
