"use client";

import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  PhoneCall,
  MessageCircle,
} from "lucide-react";

import { globalFaq } from "../data/faq";

// ============================================
// 📞 CLIENT CONTACT DETAILS - UPDATE THESE ONLY
// ============================================
const CLIENT_PHONE = "1800202257"; // ← Client's phone number
const CLIENT_PHONE_DISPLAY = "1800-202-257"; // ← Display format
const CLIENT_WHATSAPP = "6366949496"; // ← Client's WhatsApp number
// ============================================

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // WhatsApp number format (remove any spaces)
  const whatsappNumber = CLIENT_WHATSAPP.replace(/\s/g, '');

  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100 py-24">

      {/* Background */}
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-red-100 blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-30"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-red-50 px-5 py-2 text-sm font-semibold text-red-600">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Have Questions? <span className="text-[#E0293D]">We've Got Answers</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find answers to the most common questions about our appliance repair services.
          </p>
        </div>

        {/* Layout */}
        <div className="mt-20 grid gap-10 lg:grid-cols-12">

          {/* FAQ */}
          <div className="lg:col-span-8 space-y-5">
            {globalFaq.map((item, idx) => (
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
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.q}
                    </h3>
                  </div>
                  <ChevronDown
                    size={24}
                    className={`transition-all duration-300 ${
                      openIndex === idx
                        ? "rotate-180 text-red-600"
                        : "text-slate-400"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    openIndex === idx
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
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

          {/* Support Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 overflow-hidden rounded-[32px] bg-linear-to-br from-red-600 via-red-500 to-red-700 p-10 text-white shadow-2xl">
              <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur">
                <PhoneCall size={40} />
              </div>

              <h3 className="mt-8 text-3xl font-bold">
                Still Need Help?
              </h3>

              <p className="mt-5 leading-8 text-red-100">
                Our customer support team is available to answer your questions,
                schedule your repair, and provide instant assistance.
              </p>

              <div className="mt-10 space-y-4">
                {/* ============================================ */}
                {/* 📞 CALL NOW BUTTON - UPDATED */}
                {/* ============================================ */}
                <a
                  href={`tel:${CLIENT_PHONE.replace(/\s/g, '')}`}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white py-4 font-semibold text-red-600 transition-all duration-300 hover:scale-105"
                >
                  <PhoneCall size={20} />
                  Call Now
                </a>

                {/* ============================================ */}
                {/* 💬 WHATSAPP US BUTTON - UPDATED */}
                {/* ============================================ */}
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
                <h4 className="font-semibold">
                  Working Hours
                </h4>
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
  );
}