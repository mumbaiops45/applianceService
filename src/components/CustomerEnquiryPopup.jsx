"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight, Loader2, X, User, Phone, Mail, MapPin, Home, Building2, FileText } from "lucide-react";

const serviceBrands = {
    "Washing Machine": ["LG", "Samsung", "Bosch", "IFB"],
    Refrigerator: ["LG", "Samsung", "Whirlpool", "Godrej"],
    Television: ["Samsung", "LG", "Sony", "Vu"],
};

export default function CustomerEnquiryPopup({ onSubmitSuccess }) {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
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
        if (!form.name.trim()) {
            toast.error("Please enter your name.");
            return;
        }
        if (form.phone.length < 10) {
            toast.error("Please enter a valid 10-digit phone number.");
            return;
        }
        if (!form.email.trim()) {
            toast.error("Please enter your email address.");
            return;
        }
        if (!form.address.trim()) {
            toast.error("Please enter your address.");
            return;
        }
        if (form.pincode.length < 6) {
            toast.error("Please enter a valid 6-digit pincode.");
            return;
        }
        if (!form.city.trim()) {
            toast.error("Please enter your city.");
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
                handleCancel();
            } else {
                toast.error(data.message || "Submission failed. Please try again.");
            }
        } catch {
            toast.error("Something went wrong. Please try again.");
        }

        setLoading(false);
    };

    if (!show) {
        return <Toaster position="top-center" reverseOrder={false} />;
    }

    return (
        <>
            <Toaster position="top-center" reverseOrder={false} />

            {/* Backdrop - NO onClick handler */}
            <div
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 transition-opacity duration-300"
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
                            {/* <div className="hidden sm:flex items-center gap-2.5 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
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
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/20 focus:bg-white/10"
                                />
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
                                    required
                                    maxLength={10}
                                    placeholder="9876543210"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/20 focus:bg-white/10"
                                />
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
                                    required
                                    placeholder="example@gmail.com"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/20 focus:bg-white/10"
                                />
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
                                    required
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-all duration-200 appearance-none cursor-pointer focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/20 focus:bg-white/10"
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
                                    required
                                    placeholder="Street, locality, landmark"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/20 focus:bg-white/10"
                                />
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
                                        required
                                        maxLength={6}
                                        placeholder="560001"
                                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/20 focus:bg-white/10"
                                    />
                                    {fetchingCity && (
                                        <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                            <Loader2 size={18} className="animate-spin text-slate-400" />
                                        </div>
                                    )}
                                </div>
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
                                    required
                                    placeholder="Bangalore"
                                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/20 focus:bg-white/10"
                                />
                                <p className="text-[10px] text-slate-500">
                                    Auto‑filled from pincode – you can edit it
                                </p>
                            </div>

                            {/* Row 5: Message (Full Width) */}
                            <div className="md:col-span-2 space-y-1.5">
                                <label className="flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                    <FileText size={15} className="text-[#E0293D]" />
                                    Describe the Issue <span className="text-slate-500">(Optional)</span>
                                </label>
                                <textarea
                                    rows={3}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Example: Washing machine is not spinning properly..."
                                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-2 focus:ring-[#E0293D]/20 focus:bg-white/10"
                                />
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