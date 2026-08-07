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
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

// ============================================
// 📞 CLIENT CONTACT DETAILS - UPDATE THESE ONLY
// ============================================
const CLIENT_PHONE = "1800202257";
const CLIENT_PHONE_DISPLAY = "1800-202-257";
const CLIENT_EMAIL = "buildsmart0@gmail.com";
const CLIENT_ADDRESS = "Bengaluru, Karnataka, India";
// ============================================

// ============================================
// 📧 FORMSUBMIT.CO ENDPOINT
// ============================================
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CLIENT_EMAIL}`;
// ============================================

const serviceBrands = {
  "Washing Machine": ["LG", "Samsung", "Bosch", "IFB"],
  Refrigerator: ["LG", "Samsung", "Whirlpool", "Godrej"],
  Television: ["Samsung", "LG", "Sony", "Vu"],
};

export default function ContactClient() {
  const [loading, setLoading] = useState(false);
  const [fetchingCity, setFetchingCity] = useState(false);
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
  });

  const [errors, setErrors] = useState({});

const validateField = (name, value) => {
  switch (name) {
    case "name":
      if (!value || value.trim() === "") {
        return "Full name is required.";
      }
      if (!/^[A-Za-z\s]+$/.test(value)) {
        return "Name should contain only alphabets and spaces.";
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
      return "";

    case "message":
      return "";

    default:
      return "";
  }
};

 const handleChange = (e) => {
  const { name, value } = e.target;

  // Special handling for service field
  if (name === "service") {
    setForm((prev) => ({
      ...prev,
      service: value,
      brand: "",
    }));

    setErrors((prev) => ({
      ...prev,
      service: "",
      brand: "",
    }));
    return;
  }

  // Name field - block invalid characters
  if (name === "name") {
    if (value && !/^[A-Za-z\s]*$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        name: "Name should contain only alphabets and spaces.",
      }));
      return;
    }
  }

  // Phone field - block invalid characters
  if (name === "phone") {
    if (value && !/^[0-9]*$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Phone number should contain only digits.",
      }));
      return;
    }
  }

  // Pincode field - block invalid characters
  if (name === "pincode") {
    if (value && !/^[0-9]*$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        pincode: "Pincode should contain only digits.",
      }));
      return;
    }
  }

  // City field - block invalid characters
  if (name === "city") {
    if (value && !/^[A-Za-z\s]*$/.test(value)) {
      setErrors((prev) => ({
        ...prev,
        city: "City should contain only alphabets and spaces.",
      }));
      return;
    }
  }

  // Update form
  setForm((prev) => ({
    ...prev,
    [name]: value,
  }));

  // Real-time validation for touched fields
  if (touched[name]) {
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  }
};

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    // Mark field as touched
    setTouched((prev) => ({ ...prev, [name]: true }));
    
    // Validate on blur
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handlePincodeBlur = (e) => {
    const pincode = e.target.value;
    
    // Validate pincode
    const error = validateField("pincode", pincode);
    setErrors((prev) => ({ ...prev, pincode: error }));
    setTouched((prev) => ({ ...prev, pincode: true }));

    // Auto-fetch city
    if (pincode && pincode.length === 6) {
      fetchCityFromPincode(pincode);
    }
  };

  const fetchCityFromPincode = async (pincode) => {
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
            // Validate city after auto-fill
            const cityError = validateField("city", cityName);
            setErrors((prev) => ({ ...prev, city: cityError }));
          }
        }
      }
    } catch (error) {
      console.error("Error fetching city:", error);
    } finally {
      setFetchingCity(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    // Validate all fields
    Object.keys(form).forEach((key) => {
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

    // Mark all fields as touched
    const allTouched = {};
    Object.keys(form).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    // Validate form
    if (!validateForm()) {
      toast.error("Please fix all the errors before submitting.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Enquiry from ${form.name} - ${form.service || "Service Request"}`,
          ...form,
        }),
      });

      const data = await response.json();

      // formsubmit.co returns { success: "true", message: "..." }
      if (response.ok && (data.success === "true" || data.success === true)) {
        toast.success("✅ Your query has been submitted successfully!", {
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
        // Reset form
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
        setErrors({});
        setTouched({});
      } else {
        toast.error(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Unable to submit request. Please try again later.");
    }

    setLoading(false);
  };

  // Helper to get input className based on validation state
  const getInputClassName = (fieldName) => {
    const baseClass = "w-full rounded-2xl border px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none transition-all duration-200";
    const errorClass = errors[fieldName] && touched[fieldName] ? "border-[#E0293D] bg-white/5 focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/20" : "border-white/10 bg-white/10 focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/20";
    return `${baseClass} ${errorClass}`;
  };

  return (
    <>
      <Toaster position="top-center" />

      <div className="min-h-screen bg-[linear-gradient(135deg,_#fdf2f4_0%,_#ffffff_50%,_#eef4ff_100%)]">
        <section className="px-4 pb-18 pt-28 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl rounded-[36px] border border-slate-200/80 bg-white/80 p-8 shadow-2xl shadow-slate-200/70 backdrop-blur md:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
              {/* Left Section */}
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
                  <a 
                    href={`tel:${CLIENT_PHONE.replace(/\s/g, '')}`} 
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[#E0293D] hover:bg-white"
                  >
                    <Phone className="text-[#E0293D]" size={18} />
                    <span className="font-semibold text-[#0B1A2E]">{CLIENT_PHONE_DISPLAY}</span>
                  </a>
                  
                  <a 
                    href={`mailto:${CLIENT_EMAIL}`} 
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[#E0293D] hover:bg-white"
                  >
                    <Mail className="text-[#E0293D]" size={18} />
                    <span className="font-semibold text-[#0B1A2E]">{CLIENT_EMAIL}</span>
                  </a>
                  
                  <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <MapPin className="text-[#E0293D]" size={18} />
                    <span className="font-semibold text-[#0B1A2E]">{CLIENT_ADDRESS}</span>
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
                        Full Name <span className="text-[#E0293D]">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your full name"
                        className={getInputClassName("name")}
                      />
                      {errors.name && touched.name && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-[#E0293D]">
                          <AlertCircle size={12} />
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Phone Number <span className="text-[#E0293D]">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        maxLength={10}
                        placeholder="Enter 10-digit ph number"
                        className={getInputClassName("phone")}
                      />
                      {errors.phone && touched.phone && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-[#E0293D]">
                          <AlertCircle size={12} />
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: Service + Brand */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Select Service <span className="text-[#E0293D]">*</span>
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClassName("service")}
                      >
                        <option value="" className="text-black">Select Service</option>
                        {Object.keys(serviceBrands).map((service) => (
                          <option key={service} value={service} className="text-black">
                            {service}
                          </option>
                        ))}
                      </select>
                      {errors.service && touched.service && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-[#E0293D]">
                          <AlertCircle size={12} />
                          {errors.service}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Select Brand <span className="text-[#E0293D]">*</span>
                      </label>
                      <select
                        name="brand"
                        value={form.brand}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={!form.service}
                        className={getInputClassName("brand")}
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
                      {errors.brand && touched.brand && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-[#E0293D]">
                          <AlertCircle size={12} />
                          {errors.brand}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Email + Address */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Email Address <span className="text-[#E0293D]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your email address"
                        className={getInputClassName("email")}
                      />
                      {errors.email && touched.email && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-[#E0293D]">
                          <AlertCircle size={12} />
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Address <span className="text-[#E0293D]">*</span>
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={form.address}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Street, locality, landmark"
                        className={getInputClassName("address")}
                      />
                      {errors.address && touched.address && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-[#E0293D]">
                          <AlertCircle size={12} />
                          {errors.address}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Pincode + City */}
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Pincode <span className="text-[#E0293D]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="pincode"
                          value={form.pincode}
                          onChange={handleChange}
                          onBlur={handlePincodeBlur}
                          maxLength={6}
                          placeholder="Enter 6-digit pincode"
                          className={getInputClassName("pincode")}
                        />
                        {fetchingCity && (
                          <div className="absolute right-3 top-1/2 -translate-y-1/2">
                            <Loader2 size={20} className="animate-spin text-slate-300" />
                          </div>
                        )}
                      </div>
                      {errors.pincode && touched.pincode && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-[#E0293D]">
                          <AlertCircle size={12} />
                          {errors.pincode}
                        </p>
                      )}
                      <p className="mt-1 text-xs text-slate-400">
                        Blur after typing 6 digits to auto‑fill city
                      </p>
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        City <span className="text-[#E0293D]">*</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your city"
                        className={getInputClassName("city")}
                      />
                      {errors.city && touched.city && (
                        <p className="mt-1 flex items-center gap-1 text-xs text-[#E0293D]">
                          <AlertCircle size={12} />
                          {errors.city}
                        </p>
                      )}
                      <p className="mt-1 text-xs text-slate-400">
                        Auto‑filled from pincode – you can edit it
                      </p>
                    </div>
                  </div>

                  {/* Row 5: Message */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-200">
                      Describe the Issue <span className="text-[#E0293D]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Example: Washing machine is not spinning properly..."
                      className={getInputClassName("message")}
                    />
                    {errors.message && touched.message && (
                      <p className="mt-1 flex items-center gap-1 text-xs text-[#E0293D]">
                        <AlertCircle size={12} />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#E0293D] px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#B81F30] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Sending Request...
                      </>
                    ) : (
                      <>
                        Send Request
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    By submitting, you agree to our terms and privacy policy.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}