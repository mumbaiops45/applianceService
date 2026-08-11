"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  ShieldCheck,
  Sparkles,
  Users,
  PackageCheck,
  MessageSquare,
  CalendarClock,
  SearchCheck,
  Wrench,
  ChevronDown,
  HelpCircle,
  PhoneCall,
  MessageCircle,
} from "lucide-react";

// ============================================
// 📞 CLIENT CONTACT DETAILS - UPDATE THESE ONLY
// ============================================
const CLIENT_PHONE = "1800202257";
const CLIENT_WHATSAPP = "6366949496";
// ============================================

const highlights = [
  {
    icon: <ShieldCheck size={22} />,
    title: "Certified experts",
    text: "Every repair is handled by trained professionals who understand modern home appliances.",
  },
  {
    icon: <Clock3 size={22} />,
    title: "Fast response",
    text: "We value your time with prompt scheduling and same-day support whenever possible.",
  },
  {
    icon: <BadgeCheck size={22} />,
    title: "Trusted service",
    text: "We stand behind our work with transparent advice, warranty-backed repairs, and honest pricing.",
  },
];

const whyChoose = [
  {
    icon: <Users size={22} />,
    title: "Experienced Technicians",
    text: "Trained professionals who handle every appliance type, brand, and model with practical, hands-on expertise.",
  },
  {
    icon: <PackageCheck size={22} />,
    title: "Genuine Quality Parts",
    text: "Genuine or suitable quality replacement components used for reliable, long-lasting repairs.",
  },
  {
    icon: <MessageSquare size={22} />,
    title: "Transparent Communication",
    text: "Clear findings and repair recommendations explained before any work begins — no surprises.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Warranty Support",
    text: "Eligible repairs backed by service warranty, so you get peace of mind after the job is done.",
  },
];

const processSteps = [
  {
    icon: CalendarClock,
    title: "Easy Service Booking",
    desc: "Share your appliance type, brand, and the issue you are experiencing with our support team. Our Doorstep Appliance Repair service makes it convenient to schedule a technician visit at a suitable time.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: SearchCheck,
    title: "Professional Inspection",
    desc: "Our technician visits your location and carefully inspects the appliance to identify the cause of the problem. We explain the findings and recommended solution clearly before proceeding with the repair.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Wrench,
    title: "Expert Repair & Testing",
    desc: "Once the repair is approved, our Appliance Repair Experts use appropriate tools and quality replacement components to complete the work. The appliance is thoroughly tested after the repair to ensure proper functionality.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: BadgeCheck,
    title: "Warranty & After-Service Support",
    desc: "Eligible repairs are supported by applicable service warranty. We remain available to assist customers with service-related queries and provide dependable Appliance Repair Service support even after the repair is completed.",
    color: "from-amber-500 to-orange-500",
  },
];

const aboutFaq = [
  {
    q: "1. What appliances does ApplianceCare repair?",
    a: "We provide repair assistance for washing machines, refrigerators, televisions, dishwashers, microwaves, chimneys, and other major household appliances. Service availability can depend on the appliance type, brand, model, and nature of the issue.",
  },
  {
    q: "2. Are your technicians experienced?",
    a: "Yes. Our technicians have practical experience working with different appliance categories and leading brands. They follow an inspection-based approach to understand the reported issue before recommending a repair.",
  },
  {
    q: "3. Do you use genuine spare parts?",
    a: "We prioritize genuine or suitable quality replacement components based on the appliance, brand, model, and repair requirement. Customers can discuss the required component with the technician before approving replacement work.",
  },
  {
    q: "4. Do you provide a warranty after appliance repair?",
    a: "Applicable repairs are supported by service warranty according to the repair performed and parts used. Customers can confirm the specific warranty terms before approving the service.",
  },
  {
    q: "5. How can I book an appliance repair service?",
    a: "You can contact ApplianceCare through the available booking and contact options. Share your appliance type, brand, and basic problem details, and our support team can help arrange a suitable appointment.",
  },
];

export default function AboutPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);
  const whatsappNumber = CLIENT_WHATSAPP.replace(/\s/g, "");

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
                About ApplianceCare, Trusted{" "}
                <span className="text-[#E0293D]">Appliance Repair Experts</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Premium appliance repair with fast, friendly service and trusted results.
              </p>
              <p className="mt-2 max-w-2xl text-lg leading-8 text-slate-600">
                ApplianceCare is committed to making appliance repairs simple, transparent,
                and convenient for households. Our{" "}
                <strong>Appliance Repair Experts</strong> combine practical experience,
                professional diagnostic methods, quality replacement components, and
                customer-focused service to restore essential appliances efficiently.
              </p>
              <p className="mt-2 max-w-2xl text-lg leading-8 text-slate-600">
                We support repairs for refrigerators, washing machines, televisions,
                dishwashers, microwaves, chimneys, and other major household appliances.
                Whether your appliance has stopped working completely or is showing signs
                of a recurring problem, our technicians carefully inspect the issue before
                recommending the right solution.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#E0293D] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#E0293D]/20 transition hover:bg-[#B81F30]"
                >
                  Book service <ArrowRight size={18} />
                </Link>
                <Link
                  href="/washing-machine/lg"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0B1A2E]/10 px-7 py-3.5 text-sm font-semibold text-[#0B1A2E] transition hover:border-[#E0293D] hover:text-[#E0293D]"
                >
                  Explore services
                </Link>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-[#0B1A2E]/95 p-8 text-white shadow-2xl">
              <div className="rounded-[28px] bg-[#07111F]/95 p-6 shadow-inner shadow-slate-950/20">
                <h2 className="text-xs uppercase tracking-[0.3em] text-[#E0293D]">
                  Trusted performance
                </h2>
                <p className="mt-4 text-3xl font-black text-white">
                  More than 25,000 trusted repairs delivered.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  We support homes across Bangalore with clear communication, professional
                  diagnostics, reliable service, and warranty-backed repairs. Our{" "}
                  <strong>Appliance Repair Experts</strong> use their experience across major
                  appliance brands to accurately identify problems, recommend the right
                  solutions, and deliver a smooth repair experience from booking to
                  completion.
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-white/10 p-5">
                  <h3 className="text-3xl font-black text-[#E0293D]">15+</h3>
                  <h3 className="mt-2 text-sm text-slate-300">Years experience</h3>
                </div>

                <div className="rounded-3xl bg-white/10 p-5">
                  <h3 className="text-3xl font-black text-[#E0293D]">24/7</h3>
                  <h3 className="mt-2 text-sm text-slate-300">Rapid booking support</h3>
                </div>

                <div className="rounded-3xl bg-white/10 p-5">
                  <h3 className="text-3xl font-black text-[#E0293D]">4.9/5</h3>
                  <h3 className="mt-2 text-sm text-slate-300">Average customer rating</h3>
                </div>
              </div>
              <div className="mt-8 space-y-4 rounded-[28px] bg-white/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-[#E0293D]/10 p-3 text-[#E0293D]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Genuine Parts Assurance</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      We use trusted <strong>genuine spare parts</strong> to restore
                      appliance performance and support reliable, long-lasting operation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-[#E0293D]/10 p-3 text-[#E0293D]">
                    <Clock3 size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Fast Appointment Booking</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Book a convenient slot, and our{" "}
                      <strong>Appliance Repair Experts</strong> arrive with the right tools
                      and provide a clear repair estimate.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 rounded-2xl bg-[#E0293D]/10 p-3 text-[#E0293D]">
                    <BadgeCheck size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Warranty-Backed Repair</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Eligible repairs include service warranty support, giving you greater
                      confidence and peace of mind after the repair is completed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_0.95fr] items-start">
            <div className="rounded-[32px] border border-slate-200/80 bg-slate-50 p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.32em] text-[#E0293D]">
                What We Do
              </p>

              <h2 className="mt-4 text-3xl font-black text-[#0B1A2E]">
                Appliance Repair Built Around Your Home
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                From leak detection to board repair, our{" "}
                <strong>Appliance Repair Experts</strong> diagnose and resolve appliance
                issues with care, transparency, and professional expertise. We support
                major brands and a wide range of essential home appliances.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <h3 className="font-semibold text-[#0B1A2E]">Refrigerators</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Cooling problems, compressor faults, ice maker issues, gas-related
                    concerns, and temperature problems.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <h3 className="font-semibold text-[#0B1A2E]">Washing Machines</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Drum repairs, water leaks, drainage issues, spin-cycle problems, and
                    electronic control faults.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <h3 className="font-semibold text-[#0B1A2E]">Televisions</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Display repairs, sound problems, Smart TV issues, connectivity
                    support, and power fault resolution.
                  </p>
                </div>

                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <h3 className="font-semibold text-[#0B1A2E]">Home Appliances</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    Comprehensive <strong>Appliance Repair Service</strong> for kitchen
                    and laundry appliances across leading brands.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200/80 bg-white p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.3em] text-[#E0293D]">
                Our Values
              </p>

              <div className="mt-6 space-y-5">
                <div className="rounded-3xl border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-[#E0293D]/10 p-3 text-[#E0293D]">
                      {highlights[0]?.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0B1A2E]">Certified Experts</h3>
                      <p className="mt-2 text-sm text-slate-600">
                        Every repair is handled by trained{" "}
                        <strong>Appliance Repair Experts</strong> who understand modern
                        home appliances, leading brands, and common technical issues.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-[#E0293D]/10 p-3 text-[#E0293D]">
                      {highlights[1]?.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0B1A2E]">Fast Response</h3>
                      <p className="mt-2 text-sm text-slate-600">
                        We value your time with prompt scheduling and{" "}
                        <strong>Same Day Appliance Repair</strong> support whenever
                        possible, helping minimize disruption to your daily routine.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl border border-slate-200 p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-[#E0293D]/10 p-3 text-[#E0293D]">
                      {highlights[2]?.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#0B1A2E]">Trusted Service</h3>
                      <p className="mt-2 text-sm text-slate-600">
                        We stand behind our work with transparent advice, reliable{" "}
                        <strong>Appliance Repair Service</strong>, warranty-backed
                        repairs, genuine spare parts, and honest pricing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

 {/* ================= WHY CHOOSE APPLIANCECARE ================= */}
      <section className="relative bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
              WHY CHOOSE US
            </span>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Why Choose <span className="text-[#E0293D]">ApplianceCare?</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Choosing a reliable repair provider can make a significant difference to the overall service experience. ApplianceCare combines experienced technicians, genuine or suitable quality replacement parts, convenient booking, transparent communication, and warranty support.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Our Appliance Repair Experts handle every service request with attention to the appliance type, brand, model, and reported problem. This structured approach helps us provide practical solutions while reducing unnecessary delays.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              We believe appliance repair should be more than simply fixing a fault. It should include clear communication, professional handling, appropriate testing, and helpful customer support.
            </p>
          </div>
        </div>
      </section>

      {/* ================= OUR APPLIANCE REPAIR PROCESS ================= */}
      <section className="bg-slate-50 py-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-red-50 px-5 py-2 text-sm font-semibold tracking-wide text-red-600">
              HOW IT WORKS
            </span>
            <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
              Our Appliance Repair <span className="text-[#E0293D]">Process</span>
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We follow a simple and transparent process to make every repair convenient, professional, and reliable. From booking the service to final testing, our team focuses on clear communication and quality workmanship.
            </p>
          </div>

          <div className="relative mt-24">
            <div className="absolute left-10 right-10 top-10 hidden h-1 rounded-full bg-slate-200 xl:block"></div>

            <div className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={index} className="relative flex h-full">
                    {index !== processSteps.length - 1 && (
                      <div className="absolute -right-6 top-1/2 z-20 hidden -translate-y-1/2 xl:flex">
                        <div className="rounded-full bg-white p-2 shadow-lg border border-slate-200">
                          <ArrowRight size={22} className="text-red-500" />
                        </div>
                      </div>
                    )}

                    <div className="group relative flex min-h-105 w-full flex-col rounded-[28px] border border-slate-200 bg-white/90 p-8 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-4 hover:border-red-500 hover:shadow-2xl">
                      <div className="absolute inset-0 rounded-[28px] bg-linear-to-br from-red-50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

                      <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r from-red-600 to-red-500 text-lg font-bold text-white shadow-xl">
                        {index + 1}
                      </div>

                      <div
                        className={`relative mt-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${step.color} text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <Icon size={36} strokeWidth={2.2} />
                      </div>

                      <h3 className="mt-8 text-2xl font-bold text-slate-900">
                        {step.title}
                      </h3>

                      <p className="mt-4 flex-1 leading-7 text-slate-600">{step.desc}</p>

                      <div className="my-6 h-px bg-slate-200"></div>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold uppercase tracking-wider text-red-600">
                          Step {index + 1}
                        </span>

                        <Link
                          href="/contact"
                          className="relative z-50 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-600"
                        >
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100 py-24">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-red-100 blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-30"></div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              Frequently Asked <span className="text-[#E0293D]">Questions</span>
            </h2>
          </div>

          <div className="mt-20 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-5">
              {aboutFaq.map((item, idx) => (
                <div
                  key={idx}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-red-500 hover:shadow-xl"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                        <HelpCircle size={22} />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900">{item.q}</h3>
                    </div>
                    <ChevronDown
                      size={24}
                      className={`transition-all duration-300 ${
                        openIndex === idx ? "rotate-180 text-red-600" : "text-slate-400"
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      openIndex === idx ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-slate-100 px-8 py-6 text-[16px] leading-8 text-slate-600">
                        {item.a}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-24 overflow-hidden rounded-[32px] bg-linear-to-br from-red-600 via-red-500 to-red-700 p-10 text-white shadow-2xl">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur">
                  <PhoneCall size={40} />
                </div>

                <h3 className="mt-8 text-3xl font-bold">Still Need Help?</h3>

                <p className="mt-5 leading-8 text-red-100">
                  Our customer support team is available to answer your questions,
                  schedule your repair, and provide instant assistance.
                </p>

                <div className="mt-10 space-y-4">
                  <a
                    href={`tel:${CLIENT_PHONE.replace(/\s/g, "")}`}
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 font-semibold text-red-600 transition-all duration-300 hover:scale-105"
                  >
                    <PhoneCall size={20} />
                    Call Now
                  </a>

                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/30 bg-white/10 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-red-600"
                  >
                    <MessageCircle size={20} />
                    WhatsApp Us
                  </a>
                </div>

                <div className="mt-10 rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <h4 className="font-semibold">Working Hours</h4>
                  <div className="mt-4 space-y-2 text-red-100">
                    <div className="flex justify-between">
                      <span>Mon - Sat</span>
                      <span>8:00 AM - 9:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}