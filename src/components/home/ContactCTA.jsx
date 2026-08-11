"use client";

import Link from "next/link";
import {
  PhoneCall,
  CalendarCheck,
  ShieldCheck,
  Clock3,
  BadgeCheck,
} from "lucide-react";

// ============================================
// 📞 CLIENT CONTACT DETAILS
// ============================================
const CLIENT_PHONE = "1800202257";
const CLIENT_PHONE_DISPLAY = "1800-202-257";
// ============================================

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-900 to-red-900"></div>

      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-red-600/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <span className="inline-flex rounded-full bg-red-500/20 px-5 py-2 text-sm font-semibold tracking-wide text-red-300">
              READY TO BOOK A SERVICE?
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
              Fast & Reliable <span className="text-[#E0293D]">Appliance Repair</span> at Your Doorstep
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Our certified technicians provide reliable{" "}
              <strong>Home Appliance Repair Service</strong> for washing machines,
              refrigerators, televisions, microwaves, dishwashers, chimneys, and more,
              using genuine spare parts for dependable repairs.
            </p>

            {/* Trust Points */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Genuine Spare Parts
                  </h4>
                  <p className="text-sm text-slate-300">
                    Original parts with warranty.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
                  <Clock3 size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Same Day Service
                  </h4>
                  <p className="text-sm text-slate-300">
                    Quick doorstep repair.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
                  <BadgeCheck size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Certified Engineers
                  </h4>
                  <p className="text-sm text-slate-300">
                    Skilled & experienced experts.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 backdrop-blur-sm border border-white/10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
                  <CalendarCheck size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white">
                    Easy Online Booking
                  </h4>
                  <p className="text-sm text-slate-300">
                    Book in less than 1 minute.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div>

            <div className="rounded-[36px] border border-white/10 bg-white/10 p-10 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.35)]">

              <span className="inline-flex rounded-full bg-red-500/20 px-4 py-2 text-sm font-semibold text-red-300">
                AVAILABLE 7 DAYS A WEEK
              </span>

              <h3 className="mt-6 text-4xl font-bold text-white">
                Book Your Appliance Repair Today
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Our service team is ready to repair your washing machine,
                refrigerator, television, microwave, dishwasher and more.
              </p>

              {/* Stats */}

              <div className="mt-10 grid grid-cols-3 gap-5">

                <div className="rounded-2xl bg-white/5 p-5 text-center">

                  <h4 className="text-3xl font-bold text-red-400">
                    15+
                  </h4>

                  <p className="mt-2 text-sm text-slate-300">
                    Years
                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 p-5 text-center">

                  <h4 className="text-3xl font-bold text-red-400">
                    50K+
                  </h4>

                  <p className="mt-2 text-sm text-slate-300">
                    Repairs
                  </p>

                </div>

                <div className="rounded-2xl bg-white/5 p-5 text-center">

                  <h4 className="text-3xl font-bold text-red-400">
                    4.9★
                  </h4>

                  <p className="mt-2 text-sm text-slate-300">
                    Rating
                  </p>

                </div>

              </div>

              {/* Buttons */}

              <div className="mt-10 flex flex-col gap-4">

                <a
                  href={`tel:${CLIENT_PHONE}`}
                  className="flex items-center justify-center gap-3 rounded-2xl bg-red-600 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
                >
                  <PhoneCall size={22} />
                  Call Now
                </a>

                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-3 rounded-2xl border border-white/20 bg-white/10 py-4 text-lg font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-slate-900"
                >
                  <CalendarCheck size={22} />
                  Book Service Online
                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}