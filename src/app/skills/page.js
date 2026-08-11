"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Search,
  CheckCircle2,
  Wrench,
  ShieldCheck,
  Clock,
  Settings,
  HelpCircle,
  ChevronDown,
  PhoneCall,
  MessageCircle,
  Tv,
  Refrigerator,
  Flame,
  Zap,
  Activity,
  Award,
  Layers,
  Check,
} from "lucide-react";

const CLIENT_PHONE = "+91 98765 43210";
const whatsappNumber = "919876543210";

// --- DATA STRUCTURES ---
const diagnosticsList = [
  "Electrical fault detection",
  "Electronic control inspection",
  "Sensor testing",
  "Wiring checks",
  "Error-code assessment",
  "Power testing",
  "Mechanical inspection",
  "Smart appliance troubleshooting",
];
const categoryTabs = [
  {
    id: "washing-machine",
    label: "Washing Machines",
    icon: Settings,
    title: "Washing Machine Diagnostics & Repair",
    paragraphs: [
      "Our technicians handle motor, drum, drainage, water supply, spin-cycle, vibration, leakage, door, and electronic control issues.",
      "Our Certified Appliance Technicians support major brands including LG, Samsung, Bosch, and IFB."
    ],
  },
  {
    id: "refrigerator",
    label: "Refrigerators",
    icon: Refrigerator,
    title: "Refrigerator Diagnostics & Repair",
    paragraphs: [
      "We assist with cooling problems, compressor-related issues, temperature fluctuations, water leakage, unusual sounds, and other refrigerator faults."
    ],
  },
  {
    id: "television",
    label: "Televisions",
    icon: Tv,
    title: "Television Diagnostics & Repair",
    paragraphs: [
      "Our team handles common display, power, sound, connectivity, and Smart TV issues for brands such as LG, Samsung, Sony, and Vu."
    ],
  },
  {
    id: "other-appliances",
    label: "Other Home Appliances",
    icon: Flame,
    title: "Other Home Appliance Expertise",
    paragraphs: [
      "We also provide technical support for selected dishwashers, microwaves, chimneys, and other kitchen and laundry appliances."
    ],
  },
];

const whyChooseTeam = [
  {
    title: "Certified Appliance Technicians",
    desc: "Our Certified Appliance Technicians understand modern household appliances and common technical problems across different brands and models.",
    icon: Award,
  },
  {
    title: "Practical Diagnostic Approach",
    desc: "We focus on identifying the actual source of a problem instead of relying only on visible symptoms.",
    icon: Search,
  },
  {
    title: "Multi-Brand Knowledge",
    desc: "Our team supports major appliance brands across washing machines, refrigerators, televisions, and selected kitchen and laundry appliances.",
    icon: Layers,
  },
  {
    title: "Customer-Focused Service",
    desc: "We combine technical assistance with convenient scheduling, transparent recommendations, and after-service support.",
    icon: Activity,
  },
  {
    title: "Warranty Support",
    desc: "Eligible repairs can include applicable service warranty support, providing additional confidence after the repair.",
    icon: ShieldCheck,
  },
];

const technicalProcess = [
  {
    step: "01",
    title: "Understand the Problem",
    desc: "We collect details about the appliance, brand, reported symptoms, and issue.",
  },
  {
    step: "02",
    title: "Inspect & Diagnose",
    desc: "Our Certified Appliance Technicians inspect relevant components and perform appropriate diagnostic checks.",
  },
  {
    step: "03",
    title: "Explain the Solution",
    desc: "The identified issue and recommended repair are explained clearly before work begins.",
  },
  {
    step: "04",
    title: "Repair & Test",
    desc: "The approved repair is completed using suitable tools and components, followed by operational testing.",
  },
  {
    step: "05",
    title: "Support After Repair",
    desc: "Customers receive applicable warranty information and service-related assistance.",
  },
];

const skillsFaqs = [
  {
    q: "1. What skills do your appliance technicians have?",
    a: "Our Certified Appliance Technicians have practical knowledge of electrical, mechanical, and electronic appliance systems.",
  },
  {
    q: "2. What appliances can your technicians diagnose?",
    a: "We diagnose supported washing machines, refrigerators, televisions, dishwashers, microwaves, chimneys, and other household appliances.",
  },
  {
    q: "3. Do you provide Professional Appliance Repair for major brands?",
    a: "Yes. We provide Professional Appliance Repair support for major brands including LG, Samsung, Bosch, IFB, Whirlpool, Godrej, Sony, and Vu, depending on the appliance category.",
  },
  {
    q: "4. Do technicians test the appliance after repair?",
    a: "Yes. After an approved repair, the technician performs appropriate operational checks to confirm that the appliance is functioning correctly.",
  },
  {
    q: "5. Do you use genuine spare parts?",
    a: "We prioritize genuine or suitable quality replacement components based on the appliance, brand, model, and repair requirement.",
  },
];

const coreCapabilities = [
  "Advanced appliance diagnostics",
  "Electrical fault detection",
  "Electronic troubleshooting",
  "Mechanical inspection",
  "Board-level repair support",
  "Performance testing",
  "Genuine spare parts",
  "Same-day support when available",
  "Warranty-backed service",
];

export default function SkillsPage() {
  const [activeTab, setActiveTab] = useState(categoryTabs[0].id);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const activeCategory = categoryTabs.find((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* ================= HERO SECTION (KEPT EXACTLY AS REQUESTED) ================= */}
      <section className="bg-[linear-gradient(135deg,_#fdf2f4_0%,_#ffffff_50%,_#eef4ff_100%)] px-4 pb-18 pt-28 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl rounded-[36px] border border-slate-200/80 bg-white/80 p-8 shadow-2xl shadow-slate-200/70 backdrop-blur md:p-12 lg:p-16">
          <div className="max-w-5xl">
            <h2 className="inline-flex items-center gap-2 rounded-full border border-[#E0293D]/20 bg-[#FFF5F6] px-4 py-2 text-sm font-semibold text-[#B81F30]">
              <Sparkles size={16} /> Our expertise
            </h2>
            <h1 className="mt-6 text-4xl font-black leading-tight text-[#0B1A2E] sm:text-5xl">
              Skilled{" "}
              <span className="text-[#E0293D]">Appliance Repair Technicians</span>{" "}
              for Reliable Home Appliance Repairs
            </h1>
            <h3 className="mt-4 text-3xl font-black text-[#0B1A2E]">
              Specialist Skills Built Around Real Appliance Challenges
            </h3>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              At ApplianceCare, our technical capabilities are built around real appliance
              problems. From electrical fault-finding and leak prevention to electronic
              controls and board-level repairs, our{" "}
              <strong>Certified Appliance Technicians</strong> use professional tools and
              practical knowledge to identify issues accurately.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our <strong>Professional Appliance Repair</strong> approach focuses on
              careful diagnosis, quality workmanship, and clear communication for washing
              machines, refrigerators, televisions, dishwashers, microwaves, chimneys,
              and other home appliances.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#E0293D] px-7 py-3.5 font-semibold text-white transition hover:bg-[#B81F30]"
            >
              Request support <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================= ADVANCED APPLIANCE DIAGNOSTICS ================= */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <span className="inline-flex rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-red-600">
                Advanced Appliance Diagnostics
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-[#0B1A2E] sm:text-4xl lg:text-5xl">
                Precise Fault Detection
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Our Certified Appliance Technicians inspect electrical components, mechanical parts, sensors, wiring, electronic controls, and smart features to identify the source of appliance problems.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                This structured approach supports accurate Professional Appliance Repair while helping avoid unnecessary component replacement.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50/80 p-8 shadow-xl backdrop-blur">
                <h3 className="text-xl font-bold text-[#0B1A2E] mb-6 flex items-center gap-2">
                  <Search className="text-[#E0293D]" size={22} />
                  Our Diagnostic Capabilities Include:
                </h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {diagnosticsList.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-slate-100 transition hover:border-red-200 hover:shadow-md"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#E0293D]">
                        <Check size={18} strokeWidth={2.5} />
                      </div>
                      <span className="font-semibold text-slate-800 text-sm sm:text-base">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* ================= APPLIANCE-SPECIFIC TECHNICAL EXPERTISE ================= */}
      <section className="bg-slate-100/70 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-[#E0293D]">
              Specialized Care
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0B1A2E] sm:text-4xl lg:text-5xl">
              Appliance-Specific Technical Expertise
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Select a category below to explore our technical diagnostic and repair setup.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {categoryTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2.5 rounded-2xl px-6 py-3.5 text-base font-bold transition-all duration-300 ${
                    isActive
                      ? "bg-[#E0293D] text-white shadow-lg shadow-red-500/30 scale-105"
                      : "bg-white text-slate-700 border border-slate-200 hover:border-red-300 hover:bg-red-50/50"
                  }`}
                >
                  <TabIcon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Display */}
          {activeCategory && (
            <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-xl">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-bold text-[#0B1A2E] sm:text-3xl">
                  {activeCategory.title}
                </h3>
                {activeCategory.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="mt-4 text-lg leading-8 text-slate-600">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ================= PERFORMANCE TUNING & SPEED ================= */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Card 1: Performance Tuning */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 sm:p-10 shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-[#E0293D]">
                <Zap size={28} />
              </div>
              <span className="mt-6 inline-block text-xs font-bold uppercase tracking-wider text-[#E0293D]">
                Performance Tuning
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#0B1A2E] sm:text-3xl">
                Restore Efficiency & Reliability
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                Repair is not only about fixing the immediate fault. Our Certified Appliance Technicians also check relevant operating components and test appliance performance after approved repairs.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                This approach supports Professional Appliance Repair by combining fault correction with appropriate post-repair testing.
              </p>
            </div>

            {/* Card 2: Fast Technical Support */}
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 sm:p-10 shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                <Clock size={28} />
              </div>
              <span className="mt-6 inline-block text-xs font-bold uppercase tracking-wider text-blue-600">
                Fast & Efficient Technical Support
              </span>
              <h2 className="mt-2 text-2xl font-bold text-[#0B1A2E] sm:text-3xl">
                Minimize Disruption to Your Routine
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                We understand how appliance problems can interrupt everyday activities. Our Certified Appliance Technicians work efficiently while maintaining professional service standards.
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                From booking and inspection to repair and testing, we aim to reduce unnecessary delays.
              </p>
            </div>
          </div>

          {/* Clear Repair Recommendations Banner */}
          <div className="mt-8 rounded-3xl bg-[#0B1A2E] p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Clear Repair Recommendations
              </h3>
              <p className="mt-2 text-slate-300 max-w-3xl">
                Our technicians explain the identified issue and recommended solution before approved repair work begins, helping customers make informed decisions.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 rounded-full bg-[#E0293D] px-6 py-3 font-semibold text-white transition hover:bg-red-700"
            >
              Contact Technicians
            </Link>
          </div>
        </div>
      </section>

      {/* ================= GENUINE SPARE PARTS ================= */}
      <section className="bg-slate-50 py-20 lg:py-24 border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-[#E0293D]">
              <Wrench size={32} />
            </div>
            <h2 className="mt-6 text-3xl font-black text-[#0B1A2E] sm:text-4xl">
              Genuine Spare Parts & Professional Tools
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Quality repair requires the right tools and suitable replacement components. We use trusted parts based on the appliance brand, model, and repair requirement.
            </p>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Combining appropriate equipment with technical expertise helps deliver reliable Professional Appliance Repair and dependable appliance performance.
            </p>
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE OUR TECHNICAL TEAM ================= */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-red-50 px-4 py-1.5 text-sm font-semibold text-[#E0293D]">
              Key Advantages
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0B1A2E] sm:text-4xl lg:text-5xl">
              Why Choose Our Technical Team?
            </h2>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseTeam.map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-[#E0293D] transition-colors group-hover:bg-[#E0293D] group-hover:text-white">
                    <ItemIcon size={26} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-[#0B1A2E]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= OUR TECHNICAL SERVICE PROCESS ================= */}
      <section className="bg-slate-900 py-20 lg:py-28 text-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-red-500/20 px-4 py-1.5 text-sm font-semibold text-red-400">
              Step-by-Step Workflow
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Our Technical Service Process
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {technicalProcess.map((proc, pIdx) => (
              <div
                key={pIdx}
                className="relative rounded-2xl border border-slate-800 bg-slate-800/50 p-6 backdrop-blur flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-red-500">
                    {proc.step}
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-white">
                    {proc.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {proc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-red-100 px-4 py-1.5 text-sm font-semibold text-[#E0293D]">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#0B1A2E] sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-4">
              {skillsFaqs.map((faq, fIdx) => (
                <div
                  key={fIdx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition hover:border-red-300"
                >
                  <button
                    onClick={() => toggleFaq(fIdx)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="font-bold text-[#0B1A2E] text-base sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`transition-transform duration-300 text-slate-400 ${
                        openFaqIndex === fIdx ? "rotate-180 text-red-600" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === fIdx && (
                    <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Support Widget Side Card */}
            <div className="lg:col-span-4">
              <div className="rounded-3xl bg-[#E0293D] p-8 text-white shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                  <PhoneCall size={28} />
                </div>
                <h3 className="mt-6 text-2xl font-bold">Have Specific Questions?</h3>
                <p className="mt-3 text-red-100 text-sm leading-relaxed">
                  Our technical support team is available to assist with your appliance concerns and schedule technician visits.
                </p>
                <div className="mt-8 space-y-3">
                  <a
                    href={`tel:${CLIENT_PHONE.replace(/\s/g, "")}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3.5 font-bold text-[#E0293D] transition hover:bg-slate-100"
                  >
                    <PhoneCall size={18} />
                    Call Us Now
                  </a>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 py-3.5 font-bold text-white transition hover:bg-white/20"
                  >
                    <MessageCircle size={18} />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= APPLIANCECARE - CORE CAPABILITIES & FOOTER CALLOUT ================= */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-red-50/30 p-8 sm:p-12 lg:p-16 shadow-xl">
            <div className="max-w-7xl">
              <h2 className="text-3xl font-extrabold text-[#0B1A2E] sm:text-4xl">
                ApplianceCare – Technical Expertise You Can Trust
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                ApplianceCare combines technical knowledge, diagnostic capabilities, quality components, and customer-focused support. Our Certified Appliance Technicians focus on accurate diagnosis, careful repair, and appropriate testing.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Whether you need assistance with a washing machine, refrigerator, television, or another supported appliance, our team is ready to help.
              </p>

              <div className="mt-10">
                <h3 className="text-lg font-bold text-[#0B1A2E]">
                  Our Core Capabilities
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {coreCapabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2.5">
                      <CheckCircle2 size={18} className="text-[#E0293D] shrink-0" />
                      <span className="text-sm font-semibold text-slate-700">
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200">
                <h4 className="text-xl font-bold text-[#0B1A2E]">
                  Professional Technical Support
                </h4>
                <p className="mt-2 text-slate-600">
                  Our goal is to make appliance repair straightforward, transparent, and convenient.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#E0293D] px-8 py-3.5 font-semibold text-white transition hover:bg-red-700 shadow-lg shadow-red-500/20"
                  >
                    Request Technical Support <ArrowRight size={18} />
                  </Link>
                </div>
                <p className="mt-4 text-xs text-slate-500">
                  Contact ApplianceCare to discuss your appliance issue and arrange a suitable appointment with our technical team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}