"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  Clock3,
  MapPin,
  ArrowRight,
  ShieldCheck,
  BadgeCheck,
  Headphones,
  ExternalLink ,
} from "lucide-react";



export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Effects */}

      <div className="absolute -top-52 left-0 h-[420px] w-[420px] rounded-full bg-red-600/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-blue-600/20 blur-[140px]" />

      

      {/* ================= Main Footer ================= */}

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">

        <div className="grid grid-cols-1 gap-18 md:grid-cols-2 xl:grid-cols-4">

          {/* ================= Company ================= */}

          <div>

            <Link href="/" className="inline-flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-2xl font-bold shadow-lg">
                AC
              </div>

              <div>

                <h2 className="text-2xl font-extrabold sm:text-3xl">

                  <span className="text-red-500">
                    Appliance
                  </span>

                  <span className="text-white">
                    Care
                  </span>

                </h2>

                <p className="text-sm text-slate-400">
                  Doorstep Repair Experts
                </p>

              </div>

            </Link>

            <p className="mt-8 leading-7 text-slate-400">

              ApplianceCare provides fast, affordable and reliable
              repair services for Washing Machines,
              Refrigerators, Televisions,
              Dishwashers, Microwaves,
              Chimneys and other home appliances.

            </p>

            {/* Trust Badges */}

            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">

                <ShieldCheck
                  size={20}
                  className="text-red-500"
                />

                <span className="text-slate-300">
                  Genuine Spare Parts
                </span>

              </div>

              <div className="flex items-center gap-3">

                <BadgeCheck
                  size={20}
                  className="text-red-500"
                />

                <span className="text-slate-300">
                  Certified Engineers
                </span>

              </div>

              <div className="flex items-center gap-3">

                <Headphones
                  size={20}
                  className="text-red-500"
                />

                <span className="text-slate-300">
                  Same Day Support
                </span>

              </div>

            </div>



          </div>

          {/* ================= Services ================= */}

          <div>

            <h3 className="mb-8 text-2xl font-bold text-white">
              Our Services
            </h3>

            <div className="space-y-6">

              <div>

                <h4 className="mb-3 font-semibold text-red-400">
                  Washing Machine
                </h4>

                <ul className="space-y-2 text-slate-400">

                  <li><Link href="/washing-machine/lg" className="transition hover:text-white">LG Repair</Link></li>

                  <li><Link href="/washing-machine/samsung" className="transition hover:text-white">Samsung Repair</Link></li>

                  <li><Link href="/washing-machine/bosch" className="transition hover:text-white">Bosch Repair</Link></li>

                  <li><Link href="/washing-machine/ifb" className="transition hover:text-white">IFB Repair</Link></li>

                </ul>

              </div>

              <div>

                <h4 className="mb-3 font-semibold text-red-400">
                  Refrigerator
                </h4>

                <ul className="space-y-2 text-slate-400">

                  <li><Link href="/refrigerator/lg" className="transition hover:text-white">LG Repair</Link></li>

                  <li><Link href="/refrigerator/samsung" className="transition hover:text-white">Samsung Repair</Link></li>

                  <li><Link href="/refrigerator/whirlpool" className="transition hover:text-white">Whirlpool Repair</Link></li>

                  <li><Link href="/refrigerator/godrej" className="transition hover:text-white">Godrej Repair</Link></li>

                </ul>

              </div>

              <div>

                <h4 className="mb-3 font-semibold text-red-400">
                  Television
                </h4>

                <ul className="space-y-2 text-slate-400">

                  <li><Link href="/tv/lg" className="transition hover:text-white">LG TV Repair</Link></li>

                  <li><Link href="/tv/samsung" className="transition hover:text-white">Samsung TV Repair</Link></li>

                  <li><Link href="/tv/sony" className="transition hover:text-white">Sony TV Repair</Link></li>

                  <li><Link href="/tv/vu" className="transition hover:text-white">Vu TV Repair</Link></li>

                </ul>

              </div>

            </div>

          </div>

          {/* ==== PART 2 STARTS HERE (Quick Links) ==== */}
          {/* ================= Quick Links ================= */}

          <div>

            <h3 className="mb-8 text-2xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link
                  href="/"
                  className="transition hover:text-red-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-red-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-red-400"
                >
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="transition hover:text-red-400"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-red-400"
                >
                  Terms & Conditions
                </Link>
              </li>



            </ul>

          </div>

          {/* ================= Contact ================= */}

          <div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">

              <h3 className="text-2xl font-bold text-white">
                Contact Info
              </h3>

              <div className="mt-8 space-y-6">

                {/* Phone */}

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600">
                    <Phone size={20} className="text-white" />
                  </div>

                  <div>

                    <p className="text-sm text-slate-500">
                      Call Us
                    </p>

                    <a
                      href="tel:+919876543210"
                      className="font-medium text-white hover:text-red-400"
                    >
                      +91 xxxxx xxxxx
                    </a>

                  </div>

                </div>

                {/* Email */}

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600">
                    <Mail size={20} className="text-white" />
                  </div>

                  <div className="min-w-0">

                    <p className="text-sm text-slate-500">
                      Email
                    </p>

                    <a
                      href="mailto:buildsmart0@gmail.com"
                      className="break-all text-sm font-medium text-white hover:text-red-400"
                    >
                      buildsmart0@gmail.com
                    </a>

                  </div>

                </div>

                {/* Address */}

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600">
                    <MapPin size={20} className="text-white" />
                  </div>

                  <div>

                    <p className="text-sm text-slate-500">
                      Address
                    </p>

                    <p className="font-medium text-white">
                      Bengaluru, Karnataka, India
                    </p>

                  </div>

                </div>

                {/* Hours */}

                <div className="flex items-start gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-600">
                    <Clock3 size={20} className="text-white" />
                  </div>

                  <div>

                    <p className="text-sm text-slate-500">
                      Working Hours
                    </p>

                    <p className="font-medium text-white">
                      Mon – Sun • 8:00 AM – 9:00 PM
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= Bottom Footer ================= */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-5 py-8 text-center sm:px-6 lg:px-8 xl:flex-row xl:text-left">

          {/* Left */}

          <div>

            <p className="text-slate-400">

              © {new Date().getFullYear()}{" "}

              <span className="font-semibold text-white">
                ApplianceCare
              </span>

              . All Rights Reserved.

            </p>

            <p className="mt-2 text-sm text-slate-500">

              Professional Washing Machine, Refrigerator,
              Television, Microwave and Dishwasher Repair Services.

            </p>

          </div>



          {/* Right */}

          <div className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-center xl:w-auto">

            <p className="text-sm text-slate-300">

              Developed by{" "}

              <a
                href="https://nakshatranamahacreations.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 font-semibold text-red-500 underline-offset-4 transition-all duration-300 hover:text-red-400 hover:underline"
              >
                Nakshatra Namaha Creations

                <ExternalLink
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}