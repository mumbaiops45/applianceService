// // "use client";

// // import { useEffect, useState } from "react";
// // import toast, { Toaster } from "react-hot-toast";

// // const services = [
// //   "Washing Machine",
// //   "Refrigerator",
// //   "Television",

// // ];

// // export default function CustomerEnquiryPopup({ onSubmitSuccess }) {
// //   const [show, setShow] = useState(false);

// //   const [form, setForm] = useState({
// //     name: "",
// //     service: "",
// //     phone: "",
// //     email: "",
// //     address: "",
// //     pincode: "",
// //     city: "",
// //   });

// //   useEffect(() => {
// //     const popupClosed = sessionStorage.getItem("popupClosed");

// //     if (!popupClosed) {
// //       const timer = setTimeout(() => {
// //         setShow(true);
// //       }, 800);

// //       return () => clearTimeout(timer);
// //     }
// //   }, []);

// //   const closePopup = () => {
// //     sessionStorage.setItem("popupClosed", "true");
// //     setShow(false);
// //     onSubmitSuccess?.();
// //   };

// //   const handleChange = (e) => {
// //     setForm((prev) => ({
// //       ...prev,
// //       [e.target.name]: e.target.value,
// //     }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await fetch("/api/enquiry", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(form),
// //       });

// //       const data = await res.json();

// //       if (data.success) {
// //         toast.success("🎉 Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.");
// //         closePopup();
// //       } else {
// //         toast.error(data.message || "Submission failed.");
// //       }
// //     } catch (err) {
// //       console.error(err);
// //       toast.error("Something went wrong.");
// //     }
// //   };

// //   return (
// //     <>
// //       {/* Toaster – always rendered so messages appear outside the popup */}
// //       <Toaster position="top-center" reverseOrder={false} />

// //       {show && (
// //         <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-3 sm:p-5">
// //           <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto">
// //             {/* Close button */}
// //             <button
// //               onClick={closePopup}
// //               className="absolute top-3 right-3 sm:top-4 sm:right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white hover:bg-white hover:text-red-600 transition"
// //             >
// //               ✕
// //             </button>

// //             {/* Header */}
// //             <div className="bg-gradient-to-r from-red-700 to-red-500 px-5 py-5 sm:px-8 sm:py-6">
// //               <h2 className="text-2xl sm:text-3xl font-bold text-white">
// //                 Customer Enquiry
// //               </h2>
// //               <p className="mt-1 text-sm sm:text-base text-white/90">
// //                 Book your appliance repair service. Our technician will contact
// //                 you shortly.
// //               </p>
// //             </div>

// //             {/* Form */}
// //             <form
// //               onSubmit={handleSubmit}
// //               className="grid grid-cols-1 md:grid-cols-2 gap-4 p-5 sm:p-6"
// //             >
// //               {/* Name */}
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-700 mb-1">
// //                   Name
// //                 </label>
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   value={form.name}
// //                   onChange={handleChange}
// //                   required
// //                   placeholder="Enter Full Name"
// //                   className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
// //                 />
// //               </div>

// //               {/* Service */}
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-700 mb-1">
// //                   Service
// //                 </label>
// //                 <select
// //                   name="service"
// //                   value={form.service}
// //                   onChange={handleChange}
// //                   required
// //                   className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
// //                 >
// //                   <option value="">Select Service</option>
// //                   {services.map((item) => (
// //                     <option key={item}>{item}</option>
// //                   ))}
// //                 </select>
// //               </div>

// //               {/* Phone */}
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-700 mb-1">
// //                   Phone Number
// //                 </label>
// //                 <input
// //                   type="tel"
// //                   name="phone"
// //                   value={form.phone}
// //                   onChange={handleChange}
// //                   required
// //                   maxLength={10}
// //                   placeholder="9876543210"
// //                   className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
// //                 />
// //               </div>

// //               {/* Email */}
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-700 mb-1">
// //                   Email ID
// //                 </label>
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   value={form.email}
// //                   onChange={handleChange}
// //                   required
// //                   placeholder="example@gmail.com"
// //                   className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
// //                 />
// //               </div>

// //               {/* Address */}
// //               <div className="md:col-span-2">
// //                 <label className="block text-sm font-semibold text-gray-700 mb-1">
// //                   Address
// //                 </label>
// //                 <textarea
// //                   rows={3}
// //                   name="address"
// //                   value={form.address}
// //                   onChange={handleChange}
// //                   required
// //                   placeholder="Enter Complete Address"
// //                   className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm resize-none outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
// //                 />
// //               </div>

// //               {/* Pincode */}
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-700 mb-1">
// //                   Pincode
// //                 </label>
// //                 <input
// //                   type="text"
// //                   name="pincode"
// //                   value={form.pincode}
// //                   onChange={handleChange}
// //                   required
// //                   maxLength={6}
// //                   placeholder="560001"
// //                   className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
// //                 />
// //               </div>

// //               {/* City */}
// //               <div>
// //                 <label className="block text-sm font-semibold text-gray-700 mb-1">
// //                   City
// //                 </label>
// //                 <input
// //                   type="text"
// //                   name="city"
// //                   value={form.city}
// //                   onChange={handleChange}
// //                   required
// //                   placeholder="Bangalore"
// //                   className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-red-600 focus:ring-2 focus:ring-red-100"
// //                 />
// //               </div>

// //               {/* Submit */}
// //               <div className="md:col-span-2 mt-2">
// //                 <button
// //                   type="submit"
// //                   className="w-full rounded-lg bg-gradient-to-r from-red-700 to-red-500 py-3.5 text-base font-semibold text-white transition duration-300 hover:from-red-800 hover:to-red-600 hover:shadow-lg"
// //                 >
// //                   Submit Enquiry
// //                 </button>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import toast, { Toaster } from "react-hot-toast";
// import { ArrowRight, Loader2 } from "lucide-react";

// const serviceBrands = {
//     "Washing Machine": ["LG", "Samsung", "Bosch", "IFB"],
//     Refrigerator: ["LG", "Samsung", "Whirlpool", "Godrej"],
//     Television: ["Samsung", "LG", "Sony", "Vu"],
// };

// export default function CustomerEnquiryPopup({ onSubmitSuccess }) {
//     const router = useRouter();
//     const [show, setShow] = useState(false);
//     const [isVisible, setIsVisible] = useState(false);
//     const [loading, setLoading] = useState(false);
//     const [fetchingCity, setFetchingCity] = useState(false);

//     const [form, setForm] = useState({
//         name: "",
//         phone: "",
//         email: "",
//         address: "",
//         pincode: "",
//         city: "",
//         service: "",
//         brand: "",
//         message: "",
//     });

//     useEffect(() => {
//         const popupClosed = sessionStorage.getItem("popupClosed");

//         if (!popupClosed) {
//             const timer = setTimeout(() => {
//                 setShow(true);
//                 requestAnimationFrame(() => {
//                     setIsVisible(true);
//                 });
//             }, 800);

//             return () => clearTimeout(timer);
//         }
//     }, []);

//     const closePopup = () => {
//         setIsVisible(false);
//         setTimeout(() => {
//             setShow(false);
//             sessionStorage.setItem("popupClosed", "true");
//             onSubmitSuccess?.();
//         }, 300);
//     };

//     const handleCancel = () => {
//         setIsVisible(false);
//         setTimeout(() => {
//             setShow(false);
//             sessionStorage.setItem("popupClosed", "true");
//             if (onSubmitSuccess) {
//                 onSubmitSuccess();
//             }
//         }, 300);
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         if (name === "service") {
//             setForm((prev) => ({
//                 ...prev,
//                 service: value,
//                 brand: "",
//             }));
//             return;
//         }

//         setForm((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     // Auto-fetch city from pincode
//     const fetchCityFromPincode = async (pincode) => {
//         if (!pincode || pincode.length !== 6) return;
//         if (form.city && form.city.trim() !== "") {
//             // If city already has a value, don't override (user manual override)
//             return;
//         }

//         setFetchingCity(true);
//         try {
//             const res = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
//             const data = await res.json();
//             if (data && data[0] && data[0].Status === "Success") {
//                 const postOffices = data[0].PostOffice;
//                 if (postOffices && postOffices.length > 0) {
//                     const cityName = postOffices[0].District || postOffices[0].Region || postOffices[0].Name;
//                     if (cityName) {
//                         setForm((prev) => ({ ...prev, city: cityName }));
//                     }
//                 }
//             }
//         } catch (error) {
//             console.error("Error fetching city:", error);
//         } finally {
//             setFetchingCity(false);
//         }
//     };

//     const handlePincodeBlur = (e) => {
//         const pincode = e.target.value;
//         fetchCityFromPincode(pincode);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!form.service) return toast.error("Please select a service.");
//         if (!form.brand) return toast.error("Please select a brand.");

//         if (form.phone.length < 10) {
//             toast.error("Please enter a valid 10-digit phone number.");
//             return;
//         }

//         if (form.pincode.length < 6) {
//             toast.error("Please enter a valid 6-digit pincode.");
//             return;
//         }

//         setLoading(true);

//         try {
//             const response = await fetch("/api/enquiry", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(form),
//             });

//             const data = await response.json();

//             if (data.success) {
//                 toast.success("🎉 Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.", {
//                     duration: 5000,
//                     style: {
//                         background: "#10B981",
//                         color: "#fff",
//                         fontWeight: "600",
//                         padding: "16px 24px",
//                         borderRadius: "12px",
//                         boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
//                     },
//                     icon: "✅",
//                 });
//                 setForm({
//                     name: "",
//                     phone: "",
//                     email: "",
//                     address: "",
//                     pincode: "",
//                     city: "",
//                     service: "",
//                     brand: "",
//                     message: "",
//                 });
//                 closePopup();
//             } else {
//                 toast.error(data.message || "Submission failed. Please try again.");
//             }
//         } catch {
//             toast.error("Something went wrong. Please try again.");
//         }

//         setLoading(false);
//     };

//     if (!show) return <Toaster position="top-center" reverseOrder={false} />;

//     return (
//         <>
//             <Toaster position="top-center" reverseOrder={false} />

//             <div
//                 className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md p-3 sm:p-5 transition-opacity duration-300"
//                 style={{ opacity: isVisible ? 1 : 0 }}
//                 onClick={closePopup}
//             >
//                 <div
//                     className="relative w-full max-w-4xl bg-[#0B1A2E] rounded-2xl shadow-2xl overflow-hidden max-h-[92vh] overflow-y-auto transition-all duration-300 ease-out"
//                     style={{
//                         transform: isVisible ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
//                         opacity: isVisible ? 1 : 0,
//                     }}
//                     onClick={(e) => e.stopPropagation()}
//                 >
//                     {/* Close button */}
//                     <button
//                         onClick={closePopup}
//                         className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-[#0B1A2E] transition-all duration-200 shadow-lg backdrop-blur-sm"
//                         aria-label="Close popup"
//                     >
//                         <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
//                             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                         </svg>
//                     </button>

//                     {/* Header */}
//                     <div className="relative bg-gradient-to-br from-[#E0293D] to-[#B81F30] px-6 py-7 sm:px-10 sm:py-8 overflow-hidden">
//                         <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
//                         <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-48 w-48 rounded-full bg-white/5 blur-2xl" />

//                         <div className="relative">
//                             <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
//                                 Start Your Service Request
//                             </h2>
//                             <p className="mt-2 text-sm sm:text-base text-white/90 max-w-lg">
//                                 Fill in the details below and our support team will contact you
//                                 shortly to schedule your appliance repair.
//                             </p>
//                         </div>

//                         {/* Decorative badge */}
//                         {/* <div className="absolute top-6 right-6 hidden sm:block">
//                             <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
//                                 <span className="relative flex h-2 w-2">
//                                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
//                                     <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
//                                 </span>
//                                 Quick Response
//                             </span>
//                         </div> */}
//                     </div>

//                     {/* Form */}
//                     <form onSubmit={handleSubmit} className="p-5 sm:p-8">
//                         <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
//                             {/* Name */}
//                             <div className="space-y-1.5">
//                                 <label className="block text-sm font-medium text-slate-200">
//                                     Full Name <span className="text-[#E0293D]">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="name"
//                                     value={form.name}
//                                     onChange={handleChange}
//                                     required
//                                     placeholder="Enter your full name"
//                                     className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
//                                 />
//                             </div>

//                             {/* Phone */}
//                             <div className="space-y-1.5">
//                                 <label className="block text-sm font-medium text-slate-200">
//                                     Phone Number <span className="text-[#E0293D]">*</span>
//                                 </label>
//                                 <input
//                                     type="tel"
//                                     name="phone"
//                                     value={form.phone}
//                                     onChange={handleChange}
//                                     required
//                                     maxLength={10}
//                                     placeholder="9876543210"
//                                     className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
//                                 />
//                             </div>

//                             {/* Service */}
//                             <div className="space-y-1.5">
//                                 <label className="block text-sm font-medium text-slate-200">
//                                     Select Service <span className="text-[#E0293D]">*</span>
//                                 </label>
//                                 <select
//                                     name="service"
//                                     value={form.service}
//                                     onChange={handleChange}
//                                     required
//                                     className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none transition-all duration-200 appearance-none cursor-pointer focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
//                                     style={{
//                                         backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2394a3b8' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
//                                         backgroundRepeat: "no-repeat",
//                                         backgroundPosition: "right 1rem center",
//                                         backgroundSize: "12px",
//                                     }}
//                                 >
//                                     <option value="" className="text-black">Select Service</option>
//                                     {Object.keys(serviceBrands).map((service) => (
//                                         <option key={service} value={service} className="text-black">
//                                             {service}
//                                         </option>
//                                     ))}
//                                 </select>
//                             </div>

//                             {/* Brand */}
//                             <div className="space-y-1.5">
//                                 <label className="block text-sm font-medium text-slate-200">
//                                     Select Brand <span className="text-[#E0293D]">*</span>
//                                 </label>
//                                 <select
//                                     name="brand"
//                                     value={form.brand}
//                                     onChange={handleChange}
//                                     required
//                                     disabled={!form.service}
//                                     className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none transition-all duration-200 appearance-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
//                                     style={{
//                                         backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2394a3b8' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
//                                         backgroundRepeat: "no-repeat",
//                                         backgroundPosition: "right 1rem center",
//                                         backgroundSize: "12px",
//                                     }}
//                                 >
//                                     <option value="" className="text-black">
//                                         {form.service ? "Select Brand" : "Select Service First"}
//                                     </option>
//                                     {form.service &&
//                                         serviceBrands[form.service].map((brand) => (
//                                             <option key={brand} value={brand} className="text-black">
//                                                 {brand}
//                                             </option>
//                                         ))}
//                                 </select>
//                             </div>

//                             {/* Email */}
//                             <div className="space-y-1.5">
//                                 <label className="block text-sm font-medium text-slate-200">
//                                     Email Address <span className="text-[#E0293D]">*</span>
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     value={form.email}
//                                     onChange={handleChange}
//                                     required
//                                     placeholder="example@gmail.com"
//                                     className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
//                                 />
//                             </div>

//                             {/* Address */}
//                             <div className="space-y-1.5">
//                                 <label className="block text-sm font-medium text-slate-200">
//                                     Address
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="address"
//                                     value={form.address}
//                                     onChange={handleChange}
//                                     placeholder="Street, locality"
//                                     className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
//                                 />
//                             </div>

//                             {/* Pincode */}
//                             <div className="space-y-1.5">
//                                 <label className="block text-sm font-medium text-slate-200">
//                                     Pincode <span className="text-[#E0293D]">*</span>
//                                 </label>
//                                 <div className="relative">
//                                     <input
//                                         type="text"
//                                         name="pincode"
//                                         value={form.pincode}
//                                         onChange={handleChange}
//                                         onBlur={handlePincodeBlur}
//                                         required
//                                         maxLength={6}
//                                         placeholder="560001"
//                                         className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
//                                     />
//                                     {fetchingCity && (
//                                         <div className="absolute right-3 top-1/2 -translate-y-1/2">
//                                             <Loader2 size={20} className="animate-spin text-slate-300" />
//                                         </div>
//                                     )}
//                                 </div>
//                                 <p className="mt-1 text-xs text-slate-400">
//                                     Blur after typing 6 digits to auto‑fill city
//                                 </p>
//                             </div>

//                             {/* City */}
//                             <div className="space-y-1.5">
//                                 <label className="block text-sm font-medium text-slate-200">
//                                     City <span className="text-[#E0293D]">*</span>
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="city"
//                                     value={form.city}
//                                     onChange={handleChange}
//                                     required
//                                     placeholder="Bangalore"
//                                     className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
//                                 />
//                                 <p className="mt-1 text-xs text-slate-400">
//                                     Auto‑filled from pincode – you can edit it
//                                 </p>
//                             </div>

//                             {/* Message - full width */}
//                             <div className="md:col-span-2 space-y-1.5">
//                                 <label className="block text-sm font-medium text-slate-200">
//                                     Describe the Issue <span className="text-[#E0293D]">*</span>
//                                 </label>
//                                 <textarea
//                                     rows={3}
//                                     name="message"
//                                     value={form.message}
//                                     onChange={handleChange}
//                                     required
//                                     placeholder="Example: Washing machine is not spinning properly..."
//                                     className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
//                                 />
//                             </div>
//                         </div>

//                         {/* Footer / Submit */}
//                         <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6">
//                             {/* <p className="text-xs text-slate-400 text-center sm:text-left">
//                                 <span className="text-[#E0293D]">*</span> Required fields.
//                                 <br className="sm:hidden" />
//                                 We'll never share your data with third parties.
//                             </p> */}
//                             <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
//                                 <button
//                                     type="button"
//                                     onClick={handleCancel}
//                                     disabled={loading}
//                                     className="w-full rounded-2xl border border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
//                                 >
//                                     Cancel
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     disabled={loading}
//                                     className="relative w-full min-w-[200px] rounded-2xl bg-[#E0293D] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#B81F30] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2 sm:w-auto"
//                                 >
//                                     {loading ? (
//                                         <>
//                                             <svg
//                                                 className="h-5 w-5 animate-spin"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                             >
//                                                 <circle
//                                                     className="opacity-25"
//                                                     cx="12"
//                                                     cy="12"
//                                                     r="10"
//                                                     stroke="currentColor"
//                                                     strokeWidth="4"
//                                                 />
//                                                 <path
//                                                     className="opacity-75"
//                                                     fill="currentColor"
//                                                     d="M12 2a10 10 0 00-10 10h4a6 6 0 016-6V2z"
//                                                 />
//                                             </svg>
//                                             Sending Request...
//                                         </>
//                                     ) : (
//                                         <>
//                                             Send Request
//                                             <ArrowRight size={18} />
//                                         </>
//                                     )}
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// }



"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { ArrowRight, Loader2, X } from "lucide-react";

const serviceBrands = {
    "Washing Machine": ["LG", "Samsung", "Bosch", "IFB"],
    Refrigerator: ["LG", "Samsung", "Whirlpool", "Godrej"],
    Television: ["Samsung", "LG", "Sony", "Vu"],
};

export default function CustomerEnquiryPopup({ onSubmitSuccess }) {
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
        brand: "",
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

    const handleCancel = () => {
        setIsVisible(false);
        setTimeout(() => {
            setShow(false);
            sessionStorage.setItem("popupClosed", "true");
            if (onSubmitSuccess) {
                onSubmitSuccess();
            }
        }, 300);
    };

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

            {/* Backdrop */}
            <div
                className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-md p-4 transition-opacity duration-300"
                style={{ opacity: isVisible ? 1 : 0 }}
                onClick={handleCancel}
            >
                {/* Popup Container */}
                <div
                    className="relative w-full max-w-5xl bg-[#0B1A2E] rounded-3xl shadow-2xl overflow-hidden max-h-[95vh] overflow-y-auto transition-all duration-300 ease-out"
                    style={{
                        transform: isVisible ? "scale(1) translateY(0)" : "scale(0.95) translateY(20px)",
                        opacity: isVisible ? 1 : 0,
                    }}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close/Cancel button - X button */}
                    <button
                        onClick={handleCancel}
                        className="absolute top-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-[#0B1A2E] transition-all duration-200 shadow-lg backdrop-blur-sm"
                        aria-label="Close popup"
                    >
                        <X size={22} />
                    </button>

                    {/* Header */}
                    <div className="relative bg-gradient-to-br from-[#E0293D] to-[#B81F30] px-8 py-8 sm:px-10 sm:py-9 overflow-hidden">
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
                        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-48 w-48 rounded-full bg-white/5 blur-2xl" />

                        <div className="relative">
                            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                Start Your Service Request
                            </h2>
                            <p className="mt-2 text-sm sm:text-base text-white/90 max-w-2xl">
                                Fill in the details below and our support team will contact you
                                shortly to schedule your appliance repair.
                            </p>
                        </div>

                        {/* Decorative badge */}
                        <div className="absolute top-6 right-20 hidden sm:block">
                            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                                </span>
                                Quick Response
                            </span>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="p-6 sm:p-8 md:p-10">
                        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2">
                            {/* Name */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-medium text-slate-200">
                                    Full Name <span className="text-[#E0293D]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
                                />
                            </div>

                            {/* Phone */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-medium text-slate-200">
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
                                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
                                />
                            </div>

                            {/* Service */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-medium text-slate-200">
                                    Select Service <span className="text-[#E0293D]">*</span>
                                </label>
                                <select
                                    name="service"
                                    value={form.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none transition-all duration-200 appearance-none cursor-pointer focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
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

                            {/* Brand */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-medium text-slate-200">
                                    Select Brand <span className="text-[#E0293D]">*</span>
                                </label>
                                <select
                                    name="brand"
                                    value={form.brand}
                                    onChange={handleChange}
                                    required
                                    disabled={!form.service}
                                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white outline-none transition-all duration-200 appearance-none cursor-pointer disabled:cursor-not-allowed disabled:opacity-60 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
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
                                        serviceBrands[form.service].map((brand) => (
                                            <option key={brand} value={brand} className="text-black">
                                                {brand}
                                            </option>
                                        ))}
                                </select>
                            </div>

                            {/* Email */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-medium text-slate-200">
                                    Email Address <span className="text-[#E0293D]">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="example@gmail.com"
                                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
                                />
                            </div>

                            {/* Address */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-medium text-slate-200">
                                    Address <span className="text-[#E0293D]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    value={form.address}
                                    onChange={handleChange}
                                    required
                                    placeholder="Street, locality, landmark"
                                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
                                />
                            </div>

                            {/* Pincode */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-medium text-slate-200">
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
                                        className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
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

                            {/* City */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-medium text-slate-200">
                                    City <span className="text-[#E0293D]">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={form.city}
                                    onChange={handleChange}
                                    required
                                    placeholder="Bangalore"
                                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
                                />
                                <p className="mt-1 text-xs text-slate-400">
                                    Auto‑filled from pincode – you can edit it
                                </p>
                            </div>

                            {/* Message - full width */}
                            <div className="md:col-span-2 space-y-1.5">
                                <label className="block text-sm font-medium text-slate-200">
                                    Describe the Issue <span className="text-[#E0293D]">*</span>
                                </label>
                                <textarea
                                    rows={3}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Example: Washing machine is not spinning properly..."
                                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-3.5 text-white placeholder:text-slate-400 outline-none transition-all duration-200 focus:border-[#E0293D] focus:ring-4 focus:ring-[#E0293D]/20"
                                />
                            </div>
                        </div>

                        {/* Footer / Buttons */}
                        <div className="mt-8 sm:mt-10 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 sm:pt-8">
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-slate-300 hover:text-white transition-colors duration-200 rounded-xl hover:bg-white/5"
                            >
                                Cancel
                            </button>
                            
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full sm:w-auto min-w-[200px] rounded-2xl bg-[#E0293D] px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-[#B81F30] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Sending Request...
                                    </>
                                ) : (
                                    <>
                                        Send Request
                                        <ArrowRight size={18} />
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