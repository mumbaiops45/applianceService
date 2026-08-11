"use client";

import {
  ShieldCheck,
  Wrench,
  Clock3,
  BadgeCheck,
  Star,
  Headphones,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified Engineers",
    desc: "Experienced and factory-trained technicians for all major appliance brands.",
  },
  {
    icon: Wrench,
    title: "Genuine Spare Parts",
    desc: "We use original replacement parts to ensure long-lasting appliance performance.",
  },
  {
    icon: Clock3,
    title: "Same Day Service",
    desc: "Quick doorstep repair with fast response and minimal downtime.",
  },
  {
    icon: BadgeCheck,
    title: "Warranty Support",
    desc: "Every repair comes with service warranty and quality assurance.",
  },
  {
    icon: Star,
    title: "Top Rated Service",
    desc: "Thousands of satisfied customers trust us for reliable appliance repairs.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    desc: "Friendly support team available to help you schedule repairs anytime.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-linear-to-b from-slate-50 via-white to-slate-100 overflow-hidden">

      {/* Background Effects */}
      <div className="absolute -top-32 right-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex px-5 py-2 rounded-full bg-[#E0293D]/10 text-[#E0293D] font-semibold text-sm">

            WHY CHOOSE US

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0B1A2E]">
            Trusted Home Appliance <span className="text-[#E0293D]">Repair Experts</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

         We deliver a reliable Home Appliance Repair Service backed by experienced engineers, genuine spare parts, and outstanding customer support. Our Doorstep Appliance Repair approach ensures convenient, professional assistance with a focus on quality workmanship and long-lasting solutions.

          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">

          {reasons.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="group bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >

                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-[#E0293D] to-[#ff6b7c] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition">

                  <Icon size={30} />

                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#0B1A2E]">

                  {item.title}

                </h3>

                <p className="mt-4 text-slate-600 leading-7">

                  {item.desc}

                </p>

              </div>

            );

          })}

        </div>

       
      </div>

    </section>
  );
}