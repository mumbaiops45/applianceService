"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const services = [
  "Washing Machine",
  "Refrigerator",
  "Television",
  
];

export default function CustomerEnquiryPopup({ onSubmitSuccess }) {
  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    name: "",
    service: "",
    phone: "",
    email: "",
    address: "",
    pincode: "",
    city: "",
  });

  useEffect(() => {
    const popupClosed = sessionStorage.getItem("popupClosed");

    if (!popupClosed) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 800);

      return () => clearTimeout(timer);
    }
  }, []);

  const closePopup = () => {
    sessionStorage.setItem("popupClosed", "true");
    setShow(false);
    onSubmitSuccess?.();
  };

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("🎉 Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.");
        closePopup();
      } else {
        toast.error(data.message || "Submission failed.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong.");
    }
  };

  return (
    <>
      {/* Toaster – always rendered so messages appear outside the popup */}
      <Toaster position="top-center" reverseOrder={false} />

      {show && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-5">
          <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={closePopup}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white hover:text-red-600 transition"
            >
              ✕
            </button>

            {/* Header */}
            <div className="bg-gradient-to-r from-red-700 to-red-500 px-5 py-5 sm:px-8 sm:py-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Customer Enquiry
              </h2>
              <p className="mt-1 text-sm sm:text-base text-white/90">
                Book your appliance repair service. Our technician will contact
                you shortly.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 sm:p-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter Full Name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Service
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                >
                  <option value="">Select Service</option>
                  {services.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  maxLength={10}
                  placeholder="9876543210"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="example@gmail.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  rows={3}
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                  placeholder="Enter Complete Address"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm resize-none outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* Pincode */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleChange}
                  required
                  maxLength={6}
                  placeholder="560001"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  required
                  placeholder="Bangalore"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-red-700 to-red-500 py-3.5 text-base font-semibold text-white transition duration-300 hover:from-red-800 hover:to-red-600 hover:shadow-lg"
                >
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}