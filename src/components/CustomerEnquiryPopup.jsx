"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight, Loader2, X, User, Phone, Mail, MapPin, Home, Building2, FileText, AlertCircle, Lock } from "lucide-react";

const serviceBrands = {
    "Washing Machine": ["LG", "Samsung", "Bosch", "IFB"],
    Refrigerator: ["LG", "Samsung", "Whirlpool", "Godrej"],
    Television: ["Samsung", "LG", "Sony", "Vu"],
};

// ============================================
// 📞 CLIENT CONTACT DETAILS
// ============================================
const CLIENT_PHONE = "1800202257";
const CLIENT_EMAIL = "buildsmart0@gmail.com";
// ============================================

// ============================================
// 📧 FORMSUBMIT.CO ENDPOINT
// ============================================
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${CLIENT_EMAIL}`;
// ============================================

/**
 * Works with NO props (homepage) — service AND brand both selectable:
 *   <CustomerEnquiryPopup />
 *
 * Works WITH a brand prop (brand pages) — brand is locked, only service is picked:
 *   <CustomerEnquiryPopup brand="LG" />
 *
 * Opens automatically ~800ms after the page loads, once per PAGE per browser
 * session (uses the current route in the storage key, so closing it on the
 * homepage does not stop it opening again on a brand page, and vice versa).
 */
export default function CustomerEnquiryPopup({ onSubmitSuccess, brand: defaultBrand = "" }) {
    const isBrandLocked = Boolean(defaultBrand);

    const router = useRouter();
    const pathname = usePathname();
    const storageKey = `popupClosed:${pathname || "/"}`;

    const [show, setShow] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
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
        brand: isBrandLocked ? defaultBrand : "",
        message: "",
    });

    const [errors, setErrors] = useState({
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

    // Warm up the thank-you route so the redirect after submit feels instant
    useEffect(() => {
        router.prefetch("/thank-you");
    }, [router]);

    useEffect(() => {
        const popupClosed = sessionStorage.getItem(storageKey);

        if (!popupClosed) {
            const timer = setTimeout(() => {
                setShow(true);
                setTimeout(() => {
                    setIsVisible(true);
                }, 50);
            }, 800);

            return () => clearTimeout(timer);
        }
        // storageKey changes whenever the route changes, so this re-runs per page
    }, [storageKey]);

    // Close popup on Escape key press
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && show) {
                handleCancel();
            }
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, [show]);

    // Close the popup for good and hand the user over to the thank-you page
    const handleSuccessRedirect = () => {
        setIsVisible(false);
        setShow(false);
        sessionStorage.setItem(storageKey, "true");
        router.push("/thank-you");
    };

    const handleCancel = () => {
        setIsVisible(false);
        setTimeout(() => {
            setShow(false);
            sessionStorage.setItem(storageKey, "true");
            if (onSubmitSuccess) {
                onSubmitSuccess();
            }
        }, 300);
    };

    // Validation function for individual fields
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
                brand: isBrandLocked ? prev.brand : "",
            }));
            setErrors((prev) => ({ ...prev, service: "", brand: "" }));
            return;
        }

        if (name === "brand") {
            if (isBrandLocked) return; // locked, ignore
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
        // Pincode field - block invalid characters
        if (name === "pincode") {
            if (value && !/^[0-9]*$/.test(value)) {
                setErrors((prev) => ({
                    ...prev,
                    pincode: "Pincode should contain only digits."
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

        // Update form
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Real-time validation for touched fields
        if (touched[name]) {
            const error = validateField(name, value);
            setErrors((prev) => ({ ...prev, [name]: error }));
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
                        // Validate city after auto-fill
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
        // Validate pincode
        const error = validateField("pincode", pincode);
        setErrors((prev) => ({ ...prev, pincode: error }));
        setTouched((prev) => ({ ...prev, pincode: true }));
        // Fetch city
        fetchCityFromPincode(pincode);
    };

    const validateForm = () => {
        const newErrors = {};
        let isValid = true;

        // Validate all fields
        Object.keys(form).forEach((key) => {
            // Skip message validation if empty (optional)
            if (key === "message" && !form[key]) {
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

            if (response.ok && (data.success === "true" || data.success === true)) {
                setForm({
                    name: "",
                    phone: "",
                    email: "",
                    address: "",
                    pincode: "",
                    city: "",
                    service: "",
                    brand: isBrandLocked ? defaultBrand : "",
                    message: "",
                });

                setErrors({});
                setTouched({});

                handleSuccessRedirect(); // Send the user to the thank-you page
                return; // keep the button disabled while the navigation happens
            } else {
                toast.error(
                    data.message ||
                    "Something went wrong. Your query could not be submitted. Please try again.",
                    {
                        duration: 5000,
                        style: {
                            background: "#DC2626",
                            color: "#fff",
                            fontWeight: "600",
                            padding: "16px 24px",
                            borderRadius: "12px",
                            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                        },
                        icon: "❌",
                    }
                );

                handleCancel(); // Close popup after failure
            }
        } catch {
            toast.error(
                "❌ Something went wrong. Your query could not be submitted. Please try again.",
                {
                    duration: 5000,
                    style: {
                        background: "#DC2626",
                        color: "#fff",
                        fontWeight: "600",
                        padding: "16px 24px",
                        borderRadius: "12px",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                    },
                    icon: "❌",
                }
            );

            handleCancel(); // Close popup after network error
        }

        setLoading(false);
    };

    // Helper to get input className based on validation state
    const getInputClassName = (fieldName) => {
        const baseClass = "w-full rounded-xl border px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:ring-2 focus:bg-white/10";
        const errorClass = errors[fieldName] && touched[fieldName] ? "border-[#E0293D] bg-white/5 focus:border-[#E0293D] focus:ring-[#E0293D]/20" : "border-white/10 bg-white/5 focus:border-[#E0293D] focus:ring-[#E0293D]/20";
        return `${baseClass} ${errorClass}`;
    };

    const lockedFieldClassName =
        "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white flex items-center justify-between";

    if (!show) {
        return <Toaster position="top-center" reverseOrder={false} />;
    }

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />

            {/* Backdrop */}
            <div
                className="fixed  inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-300 pt-28 md:pt-12"
                style={{ opacity: isVisible ? 1 : 0 }}
            >
                {/* Popup Container */}
                <div
                    className="relative w-full max-w-4xl bg-[#0B1A2E] rounded-2xl shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto transition-all duration-300 ease-out"
                    style={{
                        transform: isVisible ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
                        opacity: isVisible ? 1 : 0,
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close/Cancel button - X button */}
                    <button
                        onClick={handleCancel}
                        className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-[#0B1A2E] transition-all duration-200 shadow-lg backdrop-blur-sm"
                        aria-label="Close popup"
                    >
                        <X size={20} />
                    </button>

                    {/* Header */}
                    <div className="relative bg-gradient-to-r from-[#E0293D] to-[#B81F30] px-6 py-6 sm:px-8 sm:py-7 overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-48 w-48 rounded-full bg-white/5 blur-2xl" />

                        <div className="relative flex items-start justify-between">
                            <div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                    Book Your Service
                                </h2>
                                <p className="mt-1.5 text-sm sm:text-base text-white/90 max-w-xl">
                                    Fill in your details and our expert technician will reach out to you at the earliest.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-5 sm:p-7 md:p-8">
                        {/* 2-Column Grid Layout */}
                        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">

                            {/* Row 1: Name */}
                            <div className="space-y-1.5">
                                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                    <User size={15} className="text-[#E0293D]" />
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

                            {/* Row 1: Phone */}
                            <div className="space-y-1.5">
                                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                    <Phone size={15} className="text-[#E0293D]" />
                                    Phone Number <span className="text-[#E0293D]">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    maxLength={10}
                                    placeholder="Enter 10-digit phone number"
                                    className={getInputClassName("phone")}
                                />
                                {errors.phone && touched.phone && (
                                    <p className="mt-1 flex items-center gap-1 text-xs text-[#E0293D]">
                                        <AlertCircle size={12} />
                                        {errors.phone}
                                    </p>
                                )}
                            </div>

                            {/* Row 2: Email */}
                            <div className="space-y-1.5">
                                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                    <Mail size={15} className="text-[#E0293D]" />
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

                            {/* Row 2: Service */}
                            <div className="space-y-1.5">
                                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                    <FileText size={15} className="text-[#E0293D]" />
                                    Select Service <span className="text-[#E0293D]">*</span>
                                </label>
                                <select
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    className={getInputClassName("service")}
                                    style={{
                                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2394a3b8' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundPosition: "right 1rem center",
                                        backgroundSize: "12px",
                                    }}
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

                            {/* Row 2b: Brand */}
                            <div className="md:col-span-2 space-y-1.5">
                                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                    <FileText size={15} className="text-[#E0293D]" />
                                    Select Brand <span className="text-[#E0293D]">*</span>
                                </label>

                                {isBrandLocked ? (
                                    <div className={lockedFieldClassName}>
                                        <span>{form.brand}</span>
                                        <Lock size={14} className="text-slate-400" />
                                    </div>
                                ) : (
                                    <select
                                        name="brand"
                                        value={form.brand}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        disabled={!form.service}
                                        className={getInputClassName("brand")}
                                        style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2394a3b8' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "right 1rem center",
                                            backgroundSize: "12px",
                                        }}
                                    >
                                        <option value="" className="text-black">
                                            {form.service ? "Select Brand" : "Select Service First"}
                                        </option>
                                        {form.service &&
                                            serviceBrands[form.service]?.map((b) => (
                                                <option key={b} value={b} className="text-black">
                                                    {b}
                                                </option>
                                            ))}
                                    </select>
                                )}
                                {errors.brand && touched.brand && (
                                    <p className="mt-1 flex items-center gap-1 text-xs text-[#E0293D]">
                                        <AlertCircle size={12} />
                                        {errors.brand}
                                    </p>
                                )}
                            </div>

                            {/* Row 3: Address (Full Width) */}
                            <div className="md:col-span-2 space-y-1.5">
                                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                    <Home size={15} className="text-[#E0293D]" />
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

                            {/* Row 4: Pincode */}
                            <div className="space-y-1.5">
                                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                    <MapPin size={15} className="text-[#E0293D]" />
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
                                            <Loader2 size={18} className="animate-spin text-slate-400" />
                                        </div>
                                    )}
                                </div>
                                {errors.pincode && touched.pincode && (
                                    <p className="mt-1 flex items-center gap-1 text-xs text-[#E0293D]">
                                        <AlertCircle size={12} />
                                        {errors.pincode}
                                    </p>
                                )}
                                <p className="text-[10px] text-slate-500">
                                    Blur after typing 6 digits to auto‑fill city
                                </p>
                            </div>

                            {/* Row 4: City */}
                            <div className="space-y-1.5">
                                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                    <Building2 size={15} className="text-[#E0293D]" />
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
                                <p className="text-[10px] text-slate-500">
                                    Auto‑filled from pincode – you can edit it
                                </p>
                            </div>

                            {/* Row 5: Message (Full Width) - Optional */}
                            <div className="md:col-span-2 space-y-1.5">
                                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                    <FileText size={15} className="text-[#E0293D]" />
                                    Describe the Issue <span className="text-slate-400">(Optional)</span>
                                </label>
                                <textarea
                                    rows={3}
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
                        </div>

                        {/* Footer / Buttons */}
                        <div className="mt-6 sm:mt-8 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 sm:gap-4 border-t border-white/10 pt-5 sm:pt-6">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-slate-400 hover:text-white transition-colors duration-200 rounded-xl hover:bg-white/5"
                            >
                                Cancel
                            </button>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full sm:w-auto min-w-[180px] rounded-xl bg-[#E0293D] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#B81F30] hover:shadow-lg hover:shadow-red-500/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Submit Enquiry
                                        <ArrowRight size={16} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}