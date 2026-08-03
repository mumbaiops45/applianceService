"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight, Loader2, X, User, Phone, Mail, MapPin, Home, Building2, FileText, AlertCircle } from "lucide-react";

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

export default function CustomerEnquiryPopup({ onSubmitSuccess }) {
    const router = useRouter();
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
        message: "",
    });

    useEffect(() => {
        const popupClosed = sessionStorage.getItem("popupClosed");

        if (!popupClosed) {
            const timer = setTimeout(() => {
                setShow(true);
                setTimeout(() => {
                    setIsVisible(true);
                }, 50);
            }, 800);

            return () => clearTimeout(timer);
        }
    }, []);

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

    const handleCancel = () => {
        setIsVisible(false);
        setTimeout(() => {
            setShow(false);
            sessionStorage.setItem("popupClosed", "true");
            if (onSubmitSuccess) {
                onSubmitSuccess();
            }
            router.push("/");
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
                // Message is optional, but if provided, validate
                if (value && value.trim() !== "") {
                    if (value.trim().split(/\s+/).length < 3) {
                        return "Please provide a more detailed description (minimum 3 words).";
                    }
                    if (value.length < 20) {
                        return "Please provide more details (minimum 20 characters).";
                    }
                }
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
            }));
            // Clear error when service is selected
            if (errors.service) {
                setErrors((prev) => ({ ...prev, service: "" }));
            }
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
                    message: "",
                });
                setErrors({});
                setTouched({});
                handleCancel();
            } else {
                toast.error(data.message || "Submission failed. Please try again.");
            }
        } catch {
            toast.error("Something went wrong. Please try again.");
        }

        setLoading(false);
    };

    // Helper to get input className based on validation state
    const getInputClassName = (fieldName) => {
        const baseClass = "w-full rounded-xl border px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:ring-2 focus:bg-white/10";
        const errorClass = errors[fieldName] && touched[fieldName] ? "border-[#E0293D] bg-white/5 focus:border-[#E0293D] focus:ring-[#E0293D]/20" : "border-white/10 bg-white/5 focus:border-[#E0293D] focus:ring-[#E0293D]/20";
        return `${baseClass} ${errorClass}`;
    };

    if (!show) {
        return <Toaster position="top-center" reverseOrder={false} />;
    }

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />

            {/* Backdrop */}
            <div
                className="fixed  inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-300 pt-40 md:pt-12"
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
                            {/* <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                                </span>
                                Quick Response
                            </div> */}
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