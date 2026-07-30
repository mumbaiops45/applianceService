"use client";

import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Loader2,
} from "lucide-react";

const serviceBrands = {
  "Washing Machine": [
    "LG",
    "Samsung",
    "Bosch",
    "IFB",
    
  ],
  Refrigerator: [
    "LG",
    "Samsung",
    "Whirlpool",
    "Godrej",
    
    
  ],
  Television: [
    "Samsung",
    "LG",
    "Sony",
    "Vu",
    
  ],
};

export default function ContactClient() {
  const [loading, setLoading] = useState(false);
  const [fetchingCity, setFetchingCity] = useState(false);

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
      // If city already has a value, don't override (user manual override)
      return;
    }

    setFetchingCity(true);
    try {
      const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await res.json();
      if (data && data[0] && data[0].Status === "Success") {
        const postOffices = data[0].PostOffice;
        if (postOffices && postOffices.length > 0) {
          // Use District or Region; fallback to Name
          const cityName = postOffices[0].District || postOffices[0].Region || postOffices[0].Name;
          if (cityName) {
            setForm((prev) => ({ ...prev, city: cityName }));
          }
        }
      } else {
        // No data – silently ignore or you can show a toast
        console.log("No city found for pincode");
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

    if (!form.service) return toast.error("Please select a service.");
    if (!form.brand) return toast.error("Please select a brand.");

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
        toast.success("Thank you! Our team will contact you shortly.");
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
        });
      } else {
        toast.error(data.message);
      }
    } catch {
      toast.error("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <>
      <Toaster position="top-center" />

      <div className="min-h-screen bg-[linear-gradient(135deg,_#fdf2f4_0%,_#ffffff_50%,_#eef4ff_100%)]">
        <section className="px-4 pb-18 pt-28 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl rounded-[36px] border border-slate-200/80 bg-white/80 p-8 shadow-2xl shadow-slate-200/70 backdrop-blur md:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              {/* Left Section (unchanged) */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#E0293D]/20 bg-[#FFF5F6] px-4 py-2 text-sm font-semibold text-[#B81F30]">
                  <Sparkles size={16} />
                  Contact Us
                </div>

                <h1 className="mt-6 text-4xl font-black leading-tight text-[#0B1A2E] sm:text-5xl">
                  Reach out for fast, premium appliance{" "}
                  <span className="text-[#E0293D]">support.</span>
                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Need appliance repair? Our experienced technicians provide
                  fast doorstep service with genuine spare parts and reliable
                  support for all major appliance brands.
                </p>

                  <div className="mt-8 space-y-4">
                <a href="tel:+91 xxxxx xxxxx" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[#E0293D] hover:bg-white">
                  <Phone className="text-[#E0293D]" size={18} />
                  <span className="font-semibold text-[#0B1A2E]">+91 xxxxx xxxxx</span>
                </a>
                <a href="mailto:support@appliancecare.com" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[#E0293D] hover:bg-white">
                  <Mail className="text-[#E0293D]" size={18} />
                  <span className="font-semibold text-[#0B1A2E]">support@appliancecare.com</span>
                </a>
                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <MapPin className="text-[#E0293D]" size={18} />
                  <span className="font-semibold text-[#0B1A2E]">Doorstep service across Delhi NCR</span>
                </div>
              </div>
              </div>

              {/* Right Section – Form */}
              <div className="rounded-[30px] border border-slate-200 bg-[#0B1A2E] p-8 text-white shadow-2xl">
                <h2 className="text-3xl font-bold text-[#E0293D]">
                  Start Your Service Request
                </h2>
                <p className="mt-3 text-slate-300">
                  Fill in the details below and our support team will contact you
                  shortly to schedule your appliance repair.
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  {/* Row 1: Name + Phone */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#E0293D] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        maxLength={10}
                        required
                        placeholder="9876543210"
                        className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#E0293D] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Service + Brand */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Select Service
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        required
                        className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white focus:border-[#E0293D] focus:outline-none"
                      >
                        <option value="" className="text-black">
                          Select Service
                        </option>
                        {Object.keys(serviceBrands).map((service) => (
                          <option key={service} value={service} className="text-black">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Select Brand
                      </label>
                      <select
                        name="brand"
                        value={form.brand}
                        onChange={handleChange}
                        required
                        disabled={!form.service}
                        className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white disabled:cursor-not-allowed disabled:opacity-60 focus:border-[#E0293D] focus:outline-none"
                      >
                        <option value="" className="text-black">
                          {form.service ? "Select Brand" : "Select Service First"}
                        </option>
                        {form.service &&
                          serviceBrands[form.service].map((brand) => (
                            <option key={brand} value={brand} className="text-black">
                              {brand}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3: Email + Address */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="example@gmail.com"
                        className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#E0293D] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        placeholder="Street, locality"
                        className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#E0293D] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 4: Pincode + City (with auto‑fill) */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Pincode
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="pincode"
                          value={form.pincode}
                          onChange={handleChange}
                          onBlur={handlePincodeBlur}
                          maxLength={6}
                          placeholder="560001"
                          className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#E0293D] focus:outline-none"
                        />
                        {fetchingCity && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Loader2 size={20} className="animate-spin text-slate-300" />
                          </div>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-slate-400">
                        Blur after typing 6 digits to auto‑fill city
                      </p>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="Bangalore"
                        className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#E0293D] focus:outline-none"
                      />
                      <p className="mt-1 text-xs text-slate-400">
                        Auto‑filled from pincode – you can edit it
                      </p>
                    </div>
                  </div>

                  {/* Row 5: Message (full width) */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">
                      Describe the Issue
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder="Example: Washing machine is not spinning properly..."
                      className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400 focus:border-[#E0293D] focus:outline-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#E0293D] px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#B81F30] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="h-5 w-5 animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M12 2a10 10 0 00-10 10h4a6 6 0 016-6V2z"
                          />
                        </svg>
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Send Request
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}