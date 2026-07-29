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
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background Glow */}

      <div className="absolute -top-44 left-0 h-96 w-96 rounded-full bg-red-600/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      {/* ================= CTA ================= */}

      <div className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-12">

          <div className="rounded-[32px] bg-gradient-to-r from-red-600 via-red-500 to-red-700 p-10 shadow-2xl">

            <div className="grid items-center gap-10 lg:grid-cols-2">

              {/* Left */}

              <div>

                <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">

                  24×7 Doorstep Support

                </span>

                <h2 className="mt-6 text-4xl font-bold leading-tight">

                  Need Emergency Appliance Repair?

                </h2>

                <p className="mt-5 max-w-xl text-red-100 leading-8">

                  Our certified technicians are available for
                  washing machine, refrigerator, television,
                  microwave and dishwasher repair with same-day
                  doorstep service.

                </p>

              </div>

              {/* Right */}

              <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">

                <a
                  href="tel:+91 xxxxx xxxxx"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-red-600 transition hover:scale-105"
                >
                  <Phone size={20} />

                  Call Now

                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/40 px-8 py-4 font-semibold transition hover:bg-white hover:text-red-600"
                >
                  Book Service

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================= Main Footer ================= */}

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}
          {/* ================= Company ================= */}

          <div>

            <Link href="/" className="inline-flex items-center gap-3">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700 text-xl font-bold shadow-lg">
                AC
              </div>

              <div>

                <h2 className="text-3xl font-extrabold">
                  <span className="text-red-500">Appliance</span>
                  <span className="text-white">Care</span>
                </h2>

                <p className="text-sm text-slate-400">
                  Doorstep Repair Experts
                </p>

              </div>

            </Link>

            <p className="mt-8 leading-8 text-slate-400">

              We provide fast, affordable and reliable repair services for
              Washing Machines, Refrigerators, TVs, Dishwashers, Microwaves,
              Chimneys and other home appliances using genuine spare parts
              and certified technicians.

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
                  Same Day Doorstep Support
                </span>

              </div>

            </div>

            {/* Social */}

            <div className="mt-10 flex gap-4">

              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-red-600"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-pink-600"
              >
                <FaInstagram />
              </Link>

              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-sky-500"
              >
                <FaTwitter />
              </Link>

              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-red-700"
              >
                <FaYoutube />
              </Link>

              <Link
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-white/10 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600"
              >
                <FaLinkedinIn />
              </Link>

            </div>

          </div>

          {/* ================= Services ================= */}

          <div>

            <h3 className="mb-8 text-2xl font-bold text-white">
              Our Services
            </h3>

            <ul className="space-y-5 text-slate-400">

              <li>
                <Link
                  href="/washing-machine/lg"
                  className="transition hover:text-red-400"
                >
                  Washing Machine Repair
                </Link>
              </li>

              <li>
                <Link
                  href="/refrigerator/lg"
                  className="transition hover:text-red-400"
                >
                  Refrigerator Repair
                </Link>
              </li>

              <li>
                <Link
                  href="/tv/lg"
                  className="transition hover:text-red-400"
                >
                  LED / Smart TV Repair
                </Link>
              </li>

              <li>
                <Link
                  href="/microwave/lg"
                  className="transition hover:text-red-400"
                >
                  Microwave Repair
                </Link>
              </li>

              <li>
                <Link
                  href="/dishwasher/lg"
                  className="transition hover:text-red-400"
                >
                  Dishwasher Repair
                </Link>
              </li>

              <li>
                <Link
                  href="/chimney/lg"
                  className="transition hover:text-red-400"
                >
                  Kitchen Chimney Repair
                </Link>
              </li>

            </ul>

          </div>

          {/* ================= Quick Links ================= */}

          <div>

            <h3 className="mb-8 text-2xl font-bold text-white">
              Quick Links
            </h3>

            <ul className="space-y-5 text-slate-400">

              <li>
                <Link href="/" className="transition hover:text-red-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-red-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/services" className="transition hover:text-red-400">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/brands" className="transition hover:text-red-400">
                  Brands
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-red-400">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link href="/privacy-policy" className="transition hover:text-red-400">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="transition hover:text-red-400">
                  Terms & Conditions
                </Link>
              </li>

            </ul>

          </div>

          {/* ================= Contact ================= */}

          <div>

            <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-md">

              <h3 className="text-2xl font-bold text-white">
                Contact Info
              </h3>

              <div className="mt-8 space-y-6">

                <div className="flex items-start gap-4">

                  <div className="rounded-xl bg-red-600 p-3">
                    <Phone size={18} />
                  </div>

                  <div>

                    <p className="text-sm text-slate-500">
                      Call Us
                    </p>

                    <p className="font-medium text-white">
                      +91 xxxxx xxxxx
                    </p>

                  </div>

                </div>
<div className="flex items-center gap-4">

  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-600">
    <Mail size={20} className="text-white" />
  </div>

  <div className="min-w-0 flex-1">

    <p className="text-sm text-slate-500">
      Email
    </p>

    <p className="break-all text-sm font-medium text-white">
      support@appliancecare.com
    </p>

  </div>

</div>

                <div className="flex items-start gap-4">

                  <div className="rounded-xl bg-red-600 p-3">
                    <MapPin size={18} />
                  </div>

                  <div>

                    <p className="text-sm text-slate-500">
                      Location
                    </p>

                    <p className="font-medium text-white">
                      Bengaluru, Karnataka
                    </p>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <div className="rounded-xl bg-red-600 p-3">
                    <Clock3 size={18} />
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

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 lg:flex-row">

          {/* Left */}

          <div className="text-center lg:text-left">

            <p className="text-slate-400">

              © {new Date().getFullYear()}{" "}

              <span className="font-semibold text-white">

                ApplianceCare

              </span>

              . All Rights Reserved.

            </p>

            <p className="mt-2 text-sm text-slate-500">

              Professional Washing Machine, Refrigerator, TV,
              Microwave & Dishwasher Repair Services.

            </p>

          </div>

          {/* Center */}

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">

            <Link
              href="/privacy-policy"
              className="transition hover:text-red-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition hover:text-red-400"
            >
              Terms & Conditions
            </Link>


          </div>

          {/* Right */}

          <div className="border border-white/10 bg-white/5 px-5 py-3">
            <p className="text-sm text-slate-300">
              Developed by{" "}
              <a
                href="https://nakshatranamahacreations.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-red-500 hover:text-red-400 transition-colors"
              >
                Nakshatra Namaha Creations
              </a>
            </p>
          </div>

        </div>

      </div>

    </footer>
  );
}