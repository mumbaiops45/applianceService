'use client';

import { useState } from 'react';
import { SectionTitle } from '../ui/SectionTitle';
import toast, { Toaster } from 'react-hot-toast';
import { ArrowRight, Loader2, Phone, AlertCircle } from 'lucide-react';

// ============================================
// 📞 CLIENT CONTACT DETAILS
// ============================================
const CLIENT_PHONE = "1800202257";
const CLIENT_PHONE_DISPLAY = "1800-202-257";
// ============================================

const serviceBrands = {
  "Washing Machine": ["LG", "Samsung", "Bosch", "IFB"],
  Refrigerator: ["LG", "Samsung", "Whirlpool", "Godrej"],
  Television: ["Samsung", "LG", "Sony", "Vu"],
};

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [fetchingCity, setFetchingCity] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState({});

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

  const [errors, setErrors] = useState({});

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case "name":
        if (!value || value.trim() === "") {
          return "Full name is required.";
        }
        if (!/^[A-Za-z\s]+$/.test(value)) {
          return "Name should contain only alphabets and spaces.";
        }
        if (value.trim().split(/\s+/).length < 2) {
          return "Please enter your full name (first and last name).";
        }
        return "";

      case "phone":
        if (!value || value.trim() === "") {
          return "Phone number is required.";
        }
        if (!/^[0-9]{10}$/.test(value)) {
          return "Please enter a valid 10-digit phone number.";
        }
        return "";

      case "email":
        if (!value || value.trim() === "") {
          return "Email address is required.";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email address.";
        }
        return "";

      case "service":
        if (!value) {
          return "Please select a service.";
        }
        return "";

      case "brand":
        if (!value) {
          return "Please select a brand.";
        }
        return "";

      case "address":
        if (!value || value.trim() === "") {
          return "Address is required.";
        }
        if (value.trim().length < 10) {
          return "Please enter a complete address (minimum 10 characters).";
        }
        return "";

      case "pincode":
        if (!value || value.trim() === "") {
          return "Pincode is required.";
        }
        if (!/^[0-9]{6}$/.test(value)) {
          return "Please enter a valid 6-digit pincode.";
        }
        return "";

      case "city":
        if (!value || value.trim() === "") {
          return "City is required.";
        }
        if (!/^[A-Za-z\s]+$/.test(value)) {
          return "City should contain only alphabets and spaces.";
        }
        return "";

      case "message":
        if (!value || value.trim() === "") {
          return "Please describe the issue.";
        }
        if (value.trim().split(/\s+/).length < 3) {
          return "Please provide a more detailed description (minimum 3 words).";
        }
        if (value.length < 20) {
          return "Please provide more details (minimum 20 characters).";
        }
        return "";

      case "date":
        if (value && value.trim() !== "") {
          const selectedDate = new Date(value);
          const today = new Date();
          today.setHours(0, 0, 0, 0);
          if (selectedDate < today) {
            return "Please select today or a future date.";
          }
        }
        return "";

      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "service") {
      setForm((prev) => ({
        ...prev,
        service: value,
        brand: "",
      }));
      setErrors((prev) => ({ ...prev, service: "", brand: "" }));
      return;
    }

    // Name field - block invalid characters
    if (name === "name") {
      if (value && !/^[A-Za-z\s]*$/.test(value)) {
        setErrors((prev) => ({ 
          ...prev, 
          name: "Name should contain only alphabets and spaces." 
        }));
        return;
      }
    }

    // Phone field - block invalid characters
    if (name === "phone") {
      if (value && !/^[0-9]*$/.test(value)) {
        setErrors((prev) => ({ 
          ...prev, 
          phone: "Phone number should contain only digits." 
        }));
        return;
      }
    }

    // City field - block invalid characters
    if (name === "city") {
      if (value && !/^[A-Za-z\s]*$/.test(value)) {
        setErrors((prev) => ({ 
          ...prev, 
          city: "City should contain only alphabets and spaces." 
        }));
        return;
      }
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const fetchCityFromPincode = async (pincode) => {
    if (!pincode || pincode.length !== 6) return;
    if (form.city && form.city.trim() !== "") return;

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
            const cityError = validateField("city", cityName);
            setErrors((prev) => ({ ...prev, city: cityError }));
            setTouched((prev) => ({ ...prev, city: true }));
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
    const error = validateField("pincode", pincode);
    setErrors((prev) => ({ ...prev, pincode: error }));
    setTouched((prev) => ({ ...prev, pincode: true }));
    if (pincode && pincode.length === 6) {
      fetchCityFromPincode(pincode);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    Object.keys(form).forEach((key) => {
      if (key === "date" && !form[key]) {
        newErrors[key] = "";
        return;
      }
      const error = validateField(key, form[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allTouched = {};
    Object.keys(form).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    if (!validateForm()) {
      toast.error("Please fix all the errors before submitting.");
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
        setErrors({});
        setTouched({});
        setSubmitted(true);
      } else {
        toast.error(data.message || "Submission failed. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  const getInputClassName = (fieldName) => {
    const baseClass = "w-full rounded-2xl border p-3.5 text-sm outline-none transition focus:ring-2 bg-white";
    const errorClass = errors[fieldName] && touched[fieldName] 
      ? "border-[#E0293D] focus:border-[#E0293D] focus:ring-[#E0293D]/20" 
      : "border-slate-200 focus:border-[#E0293D] focus:ring-[#E0293D]/10";
    return `${baseClass} ${errorClass}`;
  };

  const getSelectClassName = (fieldName) => {
    const baseClass = "w-full rounded-2xl border p-3.5 text-sm outline-none transition focus:ring-2 bg-white appearance-none cursor-pointer";
    const errorClass = errors[fieldName] && touched[fieldName] 
      ? "border-[#E0293D] focus:border-[#E0293D] focus:ring-[#E0293D]/20" 
      : "border-slate-200 focus:border-[#E0293D] focus:ring-[#E0293D]/10";
    return `${baseClass} ${errorClass}`;
  };

  return (
    <section className="bg-white py-14">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="mx-auto max-w-2xl px-4">
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
          <form onSubmit={handleSubmit} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 rounded-[24px] bg-[#F8FAFC] p-5 text-sm leading-6 text-slate-600 border border-slate-100">
              <p>📋 Tell us the appliance model and issue briefly so our team can prepare the right technician and spare parts.</p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* Name */}
              <div>
                <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Full Name <span className="text-[#E0293D]">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your full name"
                  type="text"
                  className={getInputClassName("name")}
                />
                {errors.name && touched.name && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E0293D]">
                    <AlertCircle size={13} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="contact-phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Phone Number <span className="text-[#E0293D]">*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter 10-digit phone number"
                  type="tel"
                  maxLength={10}
                  className={getInputClassName("phone")}
                />
                {errors.phone && touched.phone && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E0293D]">
                    <AlertCircle size={13} />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Email Address <span className="text-[#E0293D]">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your email address"
                  type="email"
                  className={getInputClassName("email")}
                />
                {errors.email && touched.email && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E0293D]">
                    <AlertCircle size={13} />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Date */}
              <div>
                <label htmlFor="contact-date" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Preferred Date
                </label>
                <input
                  id="contact-date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className={getInputClassName("date")}
                />
                {errors.date && touched.date && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E0293D]">
                    <AlertCircle size={13} />
                    {errors.date}
                  </p>
                )}
              </div>

              {/* Service */}
              <div>
                <label htmlFor="contact-service" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Select Service <span className="text-[#E0293D]">*</span>
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getSelectClassName("service")}
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
                {errors.service && touched.service && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E0293D]">
                    <AlertCircle size={13} />
                    {errors.service}
                  </p>
                )}
              </div>

              {/* Brand */}
              <div>
                <label htmlFor="contact-brand" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Select Brand <span className="text-[#E0293D]">*</span>
                </label>
                <select
                  id="contact-brand"
                  name="brand"
                  value={form.brand}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={!form.service}
                  className={getSelectClassName("brand")}
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
                {errors.brand && touched.brand && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E0293D]">
                    <AlertCircle size={13} />
                    {errors.brand}
                  </p>
                )}
              </div>

              {/* Address - Full Width */}
              <div className="md:col-span-2">
                <label htmlFor="contact-address" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Address <span className="text-[#E0293D]">*</span>
                </label>
                <input
                  id="contact-address"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Street, locality, landmark"
                  type="text"
                  className={getInputClassName("address")}
                />
                {errors.address && touched.address && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E0293D]">
                    <AlertCircle size={13} />
                    {errors.address}
                  </p>
                )}
              </div>

              {/* Pincode */}
              <div>
                <label htmlFor="contact-pincode" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Pincode <span className="text-[#E0293D]">*</span>
                </label>
                <div className="relative">
                  <input
                    id="contact-pincode"
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    onBlur={handlePincodeBlur}
                    placeholder="Enter 6-digit pincode"
                    type="text"
                    maxLength={6}
                    className={getInputClassName("pincode")}
                  />
                  {fetchingCity && (
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2">
                      <Loader2 size={18} className="animate-spin text-slate-400" />
                    </div>
                  )}
                </div>
                {errors.pincode && touched.pincode && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E0293D]">
                    <AlertCircle size={13} />
                    {errors.pincode}
                  </p>
                )}
                <p className="mt-1 text-xs text-slate-400">
                  💡 Blur after typing 6 digits to auto‑fill city
                </p>
              </div>

              {/* City */}
              <div>
                <label htmlFor="contact-city" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  City <span className="text-[#E0293D]">*</span>
                </label>
                <input
                  id="contact-city"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Enter your city"
                  type="text"
                  className={getInputClassName("city")}
                />
                {errors.city && touched.city && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E0293D]">
                    <AlertCircle size={13} />
                    {errors.city}
                  </p>
                )}
                <p className="mt-1 text-xs text-slate-400">
                  🔄 Auto‑filled from pincode – you can edit it
                </p>
              </div>

              {/* Message - Full Width */}
              <div className="md:col-span-2">
                <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Describe the Issue <span className="text-[#E0293D]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Describe the issue, model and any error codes (minimum 20 characters)"
                  rows="4"
                  className={getInputClassName("message")}
                />
                {errors.message && touched.message && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-[#E0293D]">
                    <AlertCircle size={13} />
                    {errors.message}
                  </p>
                )}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-[#E0293D] py-3.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-10"
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
                href={`tel:${CLIENT_PHONE}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
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