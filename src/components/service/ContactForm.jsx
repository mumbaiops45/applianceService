'use client';

import { useState, useEffect } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import toast, { Toaster } from 'react-hot-toast';
import { ArrowRight, Loader2, Phone } from 'lucide-react';

const serviceBrands = {
  "Washing Machine": ["LG", "Samsung", "Bosch", "IFB"],
  Refrigerator: ["LG", "Samsung", "Whirlpool", "Godrej"],
  Television: ["Samsung", "LG", "Sony", "Vu"],
};

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [fetchingCity, setFetchingCity] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    city: "",
    service: "",
    brand: "",
    message: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "service") {
      setForm((prev) => ({
        ...prev,
        service: value,
        brand: "",
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Auto-fetch city from pincode
  const fetchCityFromPincode = async (pincode) => {
    if (!pincode || pincode.length !== 6) return;
    if (form.city && form.city.trim() !== "") {
      return;
    }

    setFetchingCity(true);
    try {
      const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await res.json();
      if (data && data[0] && data[0].Status === "Success") {
        const postOffices = data[0].PostOffice;
        if (postOffices && postOffices.length > 0) {
          const cityName = postOffices[0].District || postOffices[0].Region || postOffices[0].Name;
          if (cityName) {
            setForm((prev) => ({ ...prev, city: cityName }));
          }
        }
      }
    } catch (error) {
      console.error("Error fetching city:", error);
    } finally {
      setFetchingCity(false);
    }
  };

  const handlePincodeBlur = (e) => {
    const pincode = e.target.value;
    fetchCityFromPincode(pincode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.service) {
      toast.error("Please select a service.");
      return;
    }
    if (!form.brand) {
      toast.error("Please select a brand.");
      return;
    }
    if (form.phone.length < 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    if (form.pincode.length < 6) {
      toast.error("Please enter a valid 6-digit pincode.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("🎉 Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.", {
          duration: 5000,
          style: {
            background: "#10B981",
            color: "#fff",
            fontWeight: "600",
            padding: "16px 24px",
            borderRadius: "12px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
          },
          icon: "✅",
        });
        setForm({
          name: "",
          phone: "",
          email: "",
          address: "",
          pincode: "",
          city: "",
          service: "",
          brand: "",
          message: "",
          date: "",
        });
        setSubmitted(true);
      } else {
        toast.error(data.message || "Submission failed. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="bg-white py-14">
      <Toaster position="top-center" reverseOrder={false} />

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
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700">
                  Name <span className="text-[#E0293D]">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm outline-none transition focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/10"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-700">
                  Phone <span className="text-[#E0293D]">*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Mobile number"
                  type="tel"
                  required
                  maxLength={10}
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm outline-none transition focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/10"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700">
                  Email <span className="text-[#E0293D]">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email (optional)"
                  type="email"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm outline-none transition focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/10"
                />
              </div>

              {/* Date */}
              <div>
                <label htmlFor="contact-date" className="block text-sm font-medium text-slate-700">
                  Preferred Date
                </label>
                <input
                  id="contact-date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm outline-none transition focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/10"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="contact-service" className="block text-sm font-medium text-slate-700">
                  Service <span className="text-[#E0293D]">*</span>
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm outline-none transition appearance-none cursor-pointer focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "12px",
                  }}
                >
                  <option value="">Select Service</option>
                  {Object.keys(serviceBrands).map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brand */}
              <div>
                <label htmlFor="contact-brand" className="block text-sm font-medium text-slate-700">
                  Brand <span className="text-[#E0293D]">*</span>
                </label>
                <select
                  id="contact-brand"
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  required
                  disabled={!form.service}
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm outline-none transition appearance-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    backgroundSize: "12px",
                  }}
                >
                  <option value="">
                    {form.service ? "Select Brand" : "Select Service First"}
                  </option>
                  {form.service &&
                    serviceBrands[form.service].map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                </select>
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label htmlFor="contact-address" className="block text-sm font-medium text-slate-700">
                  Address
                </label>
                <input
                  id="contact-address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  placeholder="Street, locality, landmark"
                  type="text"
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm outline-none transition focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/10"
                />
              </div>

              {/* Pincode */}
              <div>
                <label htmlFor="contact-pincode" className="block text-sm font-medium text-slate-700">
                  Pincode <span className="text-[#E0293D]">*</span>
                </label>
                <div className="relative mt-2">
                  <input
                    id="contact-pincode"
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    onBlur={handlePincodeBlur}
                    placeholder="560001"
                    type="text"
                    required
                    maxLength={6}
                    className="w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm outline-none transition focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/10"
                  />
                  {fetchingCity && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <Loader2 size={18} className="animate-spin text-slate-400" />
                    </div>
                  )}
                </div>
                <p className="mt-1 text-xs text-slate-400">
                  Blur after typing 6 digits to auto‑fill city
                </p>
              </div>

              {/* City */}
              <div>
                <label htmlFor="contact-city" className="block text-sm font-medium text-slate-700">
                  City <span className="text-[#E0293D]">*</span>
                </label>
                <input
                  id="contact-city"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="Bangalore"
                  type="text"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm outline-none transition focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/10"
                />
                <p className="mt-1 text-xs text-slate-400">
                  Auto‑filled from pincode – you can edit it
                </p>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700">
                  Message <span className="text-[#E0293D]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Describe the issue, model and any error codes"
                  rows="4"
                  required
                  className="mt-2 w-full rounded-2xl border border-slate-300 bg-slate-50 p-3 text-sm resize-none outline-none transition focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/10"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-[#E0293D] py-3 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
              <a
                href="tel:+91 xxxxx xxxxx"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                <Phone size={18} />
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