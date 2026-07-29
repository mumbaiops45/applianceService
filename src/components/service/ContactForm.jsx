'use client';

import { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-xl px-4">
        <SectionTitle
          tag="Get in touch"
          title="Send Us a Message"
          subtitle="Share your appliance issue and our team will respond with the right support plan."
          align="center"
        />
        {submitted ? (
          <div className="rounded-[24px] border border-green-200 bg-green-50 p-6 text-center text-green-700">
            ✅ Your message has been received. We will get back to you shortly with the best next step.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm md:p-7">
            <div className="mb-4 rounded-[24px] bg-[#F8FAFC] p-4 text-sm leading-6 text-slate-600">
              Tell us the appliance model and issue briefly so our team can prepare the right technician and spare parts.
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  placeholder="Your full name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm outline-none focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/10"
                />
              </div>
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700">Phone</label>
                <input
                  id="contact-phone"
                  name="phone"
                  placeholder="Mobile number"
                  type="tel"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm outline-none focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/10"
                />
              </div>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-2">
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  placeholder="Email (optional)"
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm outline-none focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/10"
                />
              </div>
              <div>
                <label htmlFor="contact-date" className="block text-sm font-medium text-slate-700">Preferred Date</label>
                <input
                  id="contact-date"
                  name="date"
                  type="date"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm outline-none focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/10"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Describe the issue, model and any error codes"
                rows="4"
                required
                className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm outline-none focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/10"
              />
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="w-full rounded-full bg-[#E0293D] py-3 text-sm font-semibold text-white transition hover:bg-red-700 sm:w-auto sm:px-8">
                Send Message
              </button>
              <a href="tel:+91 xxxxx xxxxx" className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
                Or call us
              </a>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;