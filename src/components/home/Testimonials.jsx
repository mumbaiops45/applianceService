"use client";

import {
  Star,
  BadgeCheck,
  Quote,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

import { globalTestimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#fee2e2,transparent_35%),radial-gradient(circle_at_bottom_right,#dbeafe,transparent_35%)]"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">

            CUSTOMER REVIEWS

          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Trusted By <span className="text-[#E0293D]">Thousands</span> of Families
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">

            We deliver reliable appliance repair with certified engineers,
            genuine spare parts and same-day doorstep service.

          </p>

        </div>

        {/* Main Layout */}

        <div className="mt-20 grid gap-10 lg:grid-cols-12">

          {/* Left Rating Card */}

          <div className="lg:col-span-4">

            <div className="sticky top-24 rounded-[32px] bg-linear-to-br from-red-600 to-red-500 p-10 text-white shadow-2xl">

              <div className="flex items-center gap-2">

                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    size={24}
                    className="fill-yellow-300 text-yellow-300"
                  />
                ))}

              </div>

              <h2 className="mt-6 text-6xl font-bold">

                4.9

              </h2>

              <p className="mt-2 text-red-100">

                Average Customer Rating

              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center justify-between border-b border-white/20 pb-4">

                  <span>Happy Customers</span>

                  <strong>25,000+</strong>

                </div>

                <div className="flex items-center justify-between border-b border-white/20 pb-4">

                  <span>Repairs Completed</span>

                  <strong>50,000+</strong>

                </div>

                <div className="flex items-center justify-between border-b border-white/20 pb-4">

                  <span>Success Rate</span>

                  <strong>98%</strong>

                </div>

                <div className="flex items-center justify-between">

                  <span>Experience</span>

                  <strong>15+ Years</strong>

                </div>

              </div>

              <Link href="/contact" className="mt-10 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 font-semibold text-red-600 transition hover:scale-105">

                Book Service

                <ArrowRight size={18} />

              </Link>

            </div>

          </div>

          {/* Reviews */}

          <div className="lg:col-span-8">

            <div className="grid gap-8 md:grid-cols-2">
              {globalTestimonials.map((t, index) => (
                <div
                  key={t.id}
                  className={`group relative flex min-h-[320px] flex-col rounded-[28px] border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-red-500 ${index % 2 === 1 ? "md:mt-12" : ""
                    }`}
                >
                  {/* Quote Icon */}
                  <div className="absolute right-6 top-6 opacity-10 group-hover:opacity-20 transition">
                    <Quote size={70} />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}

                  </div>

                  {/* Review */}

                  <p className="mt-6 flex-1 text-[16px] leading-8 text-slate-600">

                    "{t.text}"

                  </p>

                  {/* Customer */}

                  <div className="mt-8 flex items-center">

                    {/* Avatar */}

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-red-500 to-red-600 text-2xl font-bold text-white shadow-lg">

                      {t.name.charAt(0)}

                    </div>

                    <div className="ml-4 flex-1">

                      <div className="flex items-center gap-2">

                        <h4 className="font-bold text-slate-900">

                          {t.name}

                        </h4>

                        <BadgeCheck
                          size={18}
                          className="fill-blue-500 text-white"
                        />

                      </div>

                      <p className="mt-1 text-sm text-slate-500">

                        {t.role}

                      </p>

                    </div>

                  </div>

                  {/* Bottom */}

                  <div className="mt-8 flex items-center justify-between border-t pt-5">

                    <span className="text-sm font-semibold text-red-600">

                      Verified Customer

                    </span>

                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">

                      ✔ Completed

                    </span>

                  </div>

                </div>
              ))}
            </div>


          </div>

        </div>
        </div>

    </section>
  );
}
