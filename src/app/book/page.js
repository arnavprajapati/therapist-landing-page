"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Video, MapPin, Clock, Calendar, CheckCircle, Star } from "lucide-react";

const services = [
    {
        id: "free-consultation",
        type: "Video",
        duration: "15 mins",
        title: "Free Consultation",
        description: "Let's discuss if we're a good fit.",
        price: "FREE",
        popular: true,
    },
    {
        id: "initial-assessment",
        type: "In-person / Online",
        duration: "50 mins",
        title: "Initial Assessment",
        description: "First session to understand your needs.",
        price: "$200",
    },
    {
        id: "therapy-session",
        type: "In-person / Online",
        duration: "50 mins",
        title: "Therapy Session",
        description: "CBT, EMDR & mindfulness therapy.",
        price: "$175",
    },
    {
        id: "emdr-session",
        type: "In-person",
        duration: "90 mins",
        title: "EMDR Trauma Session",
        description: "Specialized trauma processing.",
        price: "$250",
    },
];

export default function BookingPage() {
    const [selectedService, setSelectedService] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        concern: "",
        sessionType: "online",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-[#faf8f5] flex items-center justify-center p-6">
                <div className="bg-white rounded-2xl p-10 max-w-sm w-full text-center shadow-sm border border-gray-100">
                    <div className="w-16 h-16 bg-[#f5f0eb] rounded-full flex items-center justify-center mx-auto mb-5">
                        <CheckCircle className="w-8 h-8 text-[#1a1a1a]" />
                    </div>
                    <h2 className="text-xl font-bold text-[#1a1a1a] mb-3 tracking-wide">Request Sent!</h2>
                    <p className="text-gray-600 text-[15px] leading-[1.8] tracking-wide mb-6">
                        Dr. Maya will contact you within 24 hours.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-[15px] text-gray-500 hover:text-gray-900 tracking-wide transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#faf8f5]">
            <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
                    {selectedService ? (
                        <button
                            onClick={() => setSelectedService(null)}
                            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 cursor-pointer text-[16px] tracking-wide transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </button>
                    ) : (
                        <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 text-[15px] cursor-pointer tracking-wide transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Link>
                    )}
                    <div className="flex items-center gap-3">
                        <img
                            src="/Dr. Maya Reynolds.png"
                            alt="Dr. Maya Reynolds"
                            className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                        />
                        <span className="text-[15px] font-medium text-gray-900 tracking-wide">Dr. Maya Reynolds</span>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-8">
                {!selectedService ? (
                    <>
                        <div className="bg-white rounded-2xl p-6 mb-8 border border-gray-100 shadow-sm">
                            <div className="flex items-start gap-5">
                                <img
                                    src="/Dr. Maya Reynolds.png"
                                    alt="Dr. Maya Reynolds"
                                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                                />
                                <div className="flex-1">
                                    <h1 className="text-xl font-semibold text-gray-900 tracking-wide">Dr. Maya Reynolds, PsyD</h1>
                                    <p className="text-[15px] text-gray-500 tracking-wide mt-1">Licensed Clinical Psychologist</p>
                                    <div className="flex items-center gap-4 mt-3 text-[14px] text-gray-400 tracking-wide">
                                        <span className="flex items-center gap-1.5">
                                            <MapPin className="w-3.5 h-3.5" /> Santa Monica
                                        </span>
                                        <span className="flex items-center gap-1.5">
                                            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" /> 5.0
                                        </span>
                                        <span>10+ years</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-2xl font-semibold text-gray-900 mb-5 tracking-wide">Book a Session</h2>
                        <div className="grid sm:grid-cols-2 gap-4" role="list" aria-label="Available services">
                            {services.map((service) => (
                                <div
                                    key={service.id}
                                    onClick={() => setSelectedService(service)}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            e.preventDefault();
                                            setSelectedService(service);
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                    aria-label={`${service.title}, ${service.type}, ${service.duration}, ${service.price}`}
                                    className="bg-white rounded-2xl p-5 cursor-pointer hover:shadow-lg transition-all border border-gray-100 hover:border-gray-200 group focus:outline-none focus:ring-2 focus:ring-[#2d5a4a]"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <span className="text-[13px] text-gray-400 tracking-wide">{service.type} · {service.duration}</span>
                                        {service.popular && (
                                            <span className="text-[12px] bg-[#e8f5e9] text-[#2d5a4a] px-2.5 py-1 rounded-full font-medium">Popular</span>
                                        )}
                                    </div>
                                    <h3 className="font-semibold text-gray-900 text-[17px] mb-1.5 tracking-wide">{service.title}</h3>
                                    <p className="text-[14px] text-gray-500 mb-4 tracking-wide leading-relaxed">{service.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className={`text-lg font-semibold ${service.price === "FREE" ? "text-[#2d5a4a]" : "text-gray-900"}`}>
                                            {service.price}
                                        </span>
                                        <span className="w-9 h-9 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white text-sm group-hover:bg-[#2d5a4a] transition-colors" aria-hidden="true">
                                            →
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <div className="max-w-lg mx-auto">
                        <div className="bg-white rounded-2xl p-5 mb-5 border border-gray-100 shadow-sm">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[13px] text-gray-400 tracking-wide mb-1">{selectedService.type} · {selectedService.duration}</p>
                                    <h2 className="font-semibold text-gray-900 text-lg tracking-wide">{selectedService.title}</h2>
                                </div>
                                <span className={`text-lg font-semibold ${selectedService.price === "FREE" ? "text-[#2d5a4a]" : "text-gray-900"}`}>
                                    {selectedService.price}
                                </span>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                            <h3 className="font-semibold text-gray-900 text-lg mb-5 tracking-wide">Your Details</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-[14px] font-medium text-gray-600 mb-2 tracking-wide">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        autoComplete="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[15px] tracking-wide focus:outline-none focus:border-[#2d5a4a] focus:ring-1 focus:ring-[#2d5a4a]/20 transition-all"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-[14px] font-medium text-gray-600 mb-2 tracking-wide">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        autoComplete="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[15px] tracking-wide focus:outline-none focus:border-[#2d5a4a] focus:ring-1 focus:ring-[#2d5a4a]/20 transition-all"
                                        placeholder="you@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-[14px] font-medium text-gray-600 mb-2 tracking-wide">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        autoComplete="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[15px] tracking-wide focus:outline-none focus:border-[#2d5a4a] focus:ring-1 focus:ring-[#2d5a4a]/20 transition-all"
                                        placeholder="(555) 000-0000"
                                    />
                                </div>

                                <fieldset>
                                    <legend className="block text-[14px] font-medium text-gray-600 mb-2 tracking-wide">Session Type</legend>
                                    <div className="flex gap-3" role="radiogroup" aria-label="Session type selection">
                                        <button
                                            type="button"
                                            role="radio"
                                            aria-checked={formData.sessionType === "online"}
                                            onClick={() => setFormData({ ...formData, sessionType: "online" })}
                                            className={`flex-1 py-3 rounded-xl text-[15px] font-medium transition-all flex items-center justify-center gap-2 tracking-wide focus:outline-none focus:ring-2 focus:ring-[#2d5a4a] ${formData.sessionType === "online"
                                                ? "bg-[#1a1a1a] text-white shadow-md"
                                                : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                                                }`}
                                        >
                                            <Video className="w-4 h-4" aria-hidden="true" />
                                            Online
                                        </button>
                                        <button
                                            type="button"
                                            role="radio"
                                            aria-checked={formData.sessionType === "in-person"}
                                            onClick={() => setFormData({ ...formData, sessionType: "in-person" })}
                                            className={`flex-1 py-3 rounded-xl text-[15px] font-medium transition-all flex items-center justify-center gap-2 tracking-wide focus:outline-none focus:ring-2 focus:ring-[#2d5a4a] ${formData.sessionType === "in-person"
                                                ? "bg-[#1a1a1a] text-white shadow-md"
                                                : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200"
                                                }`}
                                        >
                                            <MapPin className="w-4 h-4" aria-hidden="true" />
                                            In-Person
                                        </button>
                                    </div>
                                </fieldset>

                                <div>
                                    <label htmlFor="concern" className="block text-[14px] font-medium text-gray-600 mb-2 tracking-wide">What brings you here?</label>
                                    <textarea
                                        id="concern"
                                        name="concern"
                                        value={formData.concern}
                                        onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                                        rows={3}
                                        className="w-full px-4 py-3 border border-gray-200 rounded-xl text-[15px] tracking-wide focus:outline-none focus:border-[#2d5a4a] focus:ring-1 focus:ring-[#2d5a4a]/20 transition-all resize-none"
                                        placeholder="Optional..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-[#1a1a1a] text-white py-3.5 rounded-xl font-medium hover:bg-black transition-colors text-[16px] cursor-pointer tracking-wide mt-2"
                                >
                                    Request Appointment
                                </button>

                                <p className="text-[13px] text-gray-400 text-center tracking-wide pt-1">
                                    🔒 Confidential & secure
                                </p>
                            </form>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}
