import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Contact ApplianceCare',
  description: 'Book a repair visit or get in touch with ApplianceCare for premium appliance support.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[linear-gradient(135deg,_#fdf2f4_0%,_#ffffff_50%,_#eef4ff_100%)]">
      <section className="px-4 pb-18 pt-28 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl rounded-[36px] border border-slate-200/80 bg-white/80 p-8 shadow-2xl shadow-slate-200/70 backdrop-blur md:p-12 lg:p-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E0293D]/20 bg-[#FFF5F6] px-4 py-2 text-sm font-semibold text-[#B81F30]">
                <Sparkles size={16} /> Contact us
              </div>
              <h1 className="mt-6 text-4xl font-black leading-tight text-[#0B1A2E] sm:text-5xl">
                Reach out for fast, premium appliance <span className="text-[#E0293D]">support.</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Whether you need urgent repair support or want to schedule a visit, our team is ready to help you with a calm and professional experience.
              </p>

              <div className="mt-8 space-y-4">
                <a href="tel:+91 xxxxx xxxxx" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[#E0293D] hover:bg-white">
                  <Phone className="text-[#E0293D]" size={18} />
                  <span className="font-semibold text-[#0B1A2E]">+91 98765 43210</span>
                </a>
                <a href="mailto:support@appliancecare.com" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[#E0293D] hover:bg-white">
                  <Mail className="text-[#E0293D]" size={18} />
                  <span className="font-semibold text-[#0B1A2E]">support@appliancecare.com</span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <MapPin className="text-[#E0293D]" size={18} />
                  <span className="font-semibold text-[#0B1A2E]">Doorstep service across Delhi NCR</span>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-[#0B1A2E] p-8 text-white shadow-xl">
              <h2 className="text-2xl font-bold">Start your service request</h2>
              <p className="mt-3 text-slate-300">Share a quick note with your appliance issue and we’ll get back to you with the best next step.</p>
              <form className="mt-6 space-y-4">
                <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-slate-300" placeholder="Your name" />
                <input className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-slate-300" placeholder="Phone number" />
                <textarea rows="4" className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 placeholder:text-slate-300" placeholder="Describe the issue" />
                <button type="button" className="inline-flex items-center gap-2 rounded-full bg-[#E0293D] px-6 py-3 font-semibold text-white transition hover:bg-[#B81F30]">
                  Send request <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
