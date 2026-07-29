"use client";

import Link from "next/link";
import {
  PhoneCall,
  SearchCheck,
  Wrench,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Book Your Service",
    desc: "Schedule your appliance repair online or call our support team. We offer flexible appointment slots for your convenience.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: SearchCheck,
    title: "Expert Inspection",
    desc: "Our certified engineer visits your home, performs a detailed inspection, and provides an accurate repair estimate.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Wrench,
    title: "Repair & Testing",
    desc: "We repair your appliance using genuine spare parts and thoroughly test it before completing the service.",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: BadgeCheck,
    title: "Warranty & Support",
    desc: "Enjoy a service warranty along with dedicated customer support even after the repair is completed.",
    color: "from-amber-500 to-orange-500",
  },
];

export default function Process() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100 py-24">

      {/* Background Blur */}
      <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-red-100 blur-3xl opacity-50"></div>

      <div className="absolute -bottom-24 -right-20 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-40"></div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px),linear-gradient(90deg,#000 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-red-50 px-5 py-2 text-sm font-semibold tracking-wide text-red-600">

            HOW IT WORKS

          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Our Appliance Repair <span className="text-[#E0293D]">Process</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            We follow a streamlined repair process to ensure every customer
            receives quick, transparent, and professional appliance service.

          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Horizontal Line */}

          <div className="absolute left-10 right-10 top-10 hidden h-1 rounded-full bg-slate-200 xl:block"></div>

          <div className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-4">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={index} className="relative flex h-full">

                  {/* Arrow */}
                  {index !== steps.length - 1 && (
                    <div className="absolute -right-6 top-1/2 z-20 hidden -translate-y-1/2 xl:flex">
                      <div className="rounded-full bg-white p-2 shadow-lg border border-slate-200">
                        <ArrowRight size={22} className="text-red-500" />
                      </div>
                    </div>
                  )}

                  {/* Card */}
                  <div className="group relative flex min-h-105 w-full flex-col rounded-[28px] border border-slate-200 bg-white/90 p-8 shadow-lg backdrop-blur-md transition-all duration-500 hover:-translate-y-4 hover:border-red-500 hover:shadow-2xl">

                    {/* Glow */}
                    <div className="absolute inset-0 rounded-[28px] bg-linear-to-br from-red-50 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100"></div>

                    {/* Step Number */}
                    <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r from-red-600 to-red-500 text-lg font-bold text-white shadow-xl">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div
                      className={`relative mt-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${step.color} text-white shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                    >
                      <Icon size={36} strokeWidth={2.2} />
                    </div>

                    {/* Title */}
                    <h3 className="mt-8 text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 flex-1 leading-7 text-slate-600">
                      {step.desc}
                    </p>

                    {/* Divider */}
                    <div className="my-6 h-px bg-slate-200"></div>

                    {/* Bottom */}
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
  );
}
