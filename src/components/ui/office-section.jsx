"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const officeImages = [
    {
        id: 1,
        src: "/office1.jpeg",
        alt: "Therapy office - comfortable seating area",
        caption: "Comfortable seating area"
    },
    {
        id: 2,
        src: "/office2.jpeg",
        alt: "Therapy office - private session room",
        caption: "Private session room"
    }
];

export default function OfficeSection() {
    const [activeImage, setActiveImage] = useState(0);

    return (
        <section className="py-20 bg-[#faf8f5]">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3">
                        The Office
                    </h2>
                    <p className="text-gray-600 max-w-md mx-auto text-[16px] leading-[1.8] tracking-wide">
                        A quiet, private space designed to feel calm and grounding.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start">

                    <div className="w-full md:w-2/5">
                        <p className="text-gray-500 text-[15px] leading-[1.8] tracking-wide mb-8">
                            Natural light and a comfortable, uncluttered environment for your sessions.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-[#f0f7f4] rounded-2xl p-5" role="group" aria-label="Office location">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm" aria-hidden="true">
                                        📍
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Santa Monica Office</p>
                                        <address className="text-[14px] font-medium text-gray-500 leading-[1.8] tracking-wide not-italic">
                                            123th Street 45 W, Santa Monica, CA 90401
                                        </address>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#f0f7f4] rounded-2xl p-5" role="group" aria-label="Telehealth information">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-xl shadow-sm" aria-hidden="true">
                                        💻
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900">Telehealth Available</p>
                                        <p className="text-[14px] font-medium text-gray-500 leading-[1.8] tracking-wide">
                                            Secure online sessions for California residents
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-3/5">
                        <div className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-[4/3] shadow-xl">
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={activeImage}
                                    src={officeImages[activeImage].src}
                                    alt={officeImages[activeImage].alt}
                                    className="w-full h-full object-cover"
                                    initial={{ opacity: 0, scale: 1.05 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4 }}
                                />
                            </AnimatePresence>

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                                <p className="text-white text-[15px] tracking-wide">
                                    {officeImages[activeImage].caption}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-4" role="tablist" aria-label="Office images">
                            {officeImages.map((img, index) => (
                                <button
                                    key={img.id}
                                    onClick={() => setActiveImage(index)}
                                    aria-label={`View ${img.caption}`}
                                    aria-selected={index === activeImage}
                                    role="tab"
                                    className={cn(
                                        "flex-1 rounded-xl overflow-hidden aspect-video transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2d5a4a]",
                                        index === activeImage
                                            ? "ring-2 ring-[#2d5a4a] ring-offset-2"
                                            : "opacity-60 hover:opacity-100"
                                    )}
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
