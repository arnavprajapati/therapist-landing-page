"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const expectationSteps = [
    {
        step: "Step 1",
        title: "Feel More Calm & Grounded",
        content: "Learn to regulate your nervous system and feel more at ease in your daily life. You'll develop tools to manage anxiety before it overwhelms you.",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
        icon: "🧘",
    },
    {
        step: "Step 2",
        title: "Sleep Better, Worry Less",
        content: "Break the cycle of racing thoughts at night. Through CBT and mindfulness techniques, you'll develop healthier sleep patterns.",
        image: "https://images.unsplash.com/photo-1515894203077-9cd36032142f?auto=format&fit=crop&q=80&w=800",
        icon: "😴",
    },
    {
        step: "Step 3",
        title: "Understand Your Patterns",
        content: "Gain insight into the triggers and patterns that keep you stuck. Together, we'll explore the roots of your anxiety.",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=800",
        icon: "💡",
    },
    {
        step: "Step 4",
        title: "Build Lasting Resilience",
        content: "Develop a stronger relationship with yourself and build confidence that lasts. You'll leave therapy with practical skills.",
        image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&q=80&w=800",
        icon: "💪",
    },
];

export default function ExpectationSteps({ className }) {
    const [currentStep, setCurrentStep] = useState(0);
    const autoPlayInterval = 4000;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentStep((prev) => (prev + 1) % expectationSteps.length);
        }, autoPlayInterval);

        return () => clearInterval(timer);
    }, [currentStep]);

    return (
        <section className={cn("py-12 md:py-20 bg-[#faf8f5]", className)}>
            <div className="max-w-5xl mx-auto px-4 md:px-6">
                <div className="text-center mb-8 md:mb-14">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3">
                        What You Can Expect
                    </h2>
                    <p className="text-gray-600 max-w-md mx-auto text-[14px] md:text-[16px] leading-[1.8] tracking-wide">
                        Your journey to feeling better, one step at a time.
                    </p>
                </div>

                <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-16 items-center">
                    <div className="order-1 relative w-full max-w-[280px] md:max-w-none mx-auto">
                        <div className="relative h-[320px] md:h-[400px] w-full overflow-hidden rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl">
                            <AnimatePresence mode="wait">
                                {expectationSteps.map(
                                    (step, index) =>
                                        index === currentStep && (
                                            <motion.div
                                                key={index}
                                                className="absolute inset-0"
                                                initial={{ scale: 1.1, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 0.95, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: "easeOut" }}
                                            >
                                                <img
                                                    src={step.image}
                                                    alt={step.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                                                <div className="absolute bottom-6 left-6 right-6">
                                                    <div className="flex items-center gap-3">
                                                        <span className="text-3xl">{step.icon}</span>
                                                        <div>
                                                            <p className="text-white font-semibold text-lg">{step.title}</p>
                                                            <p className="text-white/70 text-sm">Step {index + 1} of {expectationSteps.length}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="flex justify-center gap-2 mt-4" role="tablist" aria-label="Expectation steps navigation">
                            {expectationSteps.map((step, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setCurrentStep(index);
                                    }}
                                    aria-label={`Go to step ${index + 1}: ${step.title}`}
                                    aria-selected={index === currentStep}
                                    role="tab"
                                    className={cn(
                                        "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",
                                        index === currentStep
                                            ? "w-8 bg-[#1a1a1a]"
                                            : "bg-gray-300 hover:bg-gray-400"
                                    )}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="order-2 space-y-3 md:space-y-4 w-full" role="tabpanel">
                        {expectationSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                role="button"
                                tabIndex={0}
                                aria-label={`Step ${index + 1}: ${step.title}`}
                                aria-pressed={index === currentStep}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        e.preventDefault();
                                        setCurrentStep(index);
                                    }
                                }}
                                className={cn(
                                    "flex items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2d5a4a]/50",
                                    index === currentStep
                                        ? "bg-[#f5f0eb] shadow-sm"
                                        : "hover:bg-gray-50"
                                )}
                                onClick={() => {
                                    setCurrentStep(index);
                                }}
                            >
                                <div
                                    className={cn(
                                        "w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 transition-all text-lg md:text-xl",
                                        index === currentStep
                                            ? "bg-[#1a1a1a] text-white shadow-lg"
                                            : index < currentStep
                                                ? "bg-[#1a1a1a]/10 text-[#1a1a1a]"
                                                : "bg-gray-100 text-gray-400"
                                    )}
                                >
                                    {index < currentStep ? "✓" : step.icon}
                                </div>

                                <div className="flex-1 min-w-0">
                                    <h3 className={cn(
                                        "font-semibold mb-1 transition-colors text-[15px] md:text-base",
                                        index === currentStep ? "text-[#1a1a1a]" : "text-gray-700"
                                    )}>
                                        {step.title}
                                    </h3>
                                    <p className={cn(
                                        "text-[13px] md:text-[15px] leading-[1.7] md:leading-[1.8] tracking-wide",
                                        index === currentStep ? "text-gray-600" : "text-gray-400"
                                    )}>
                                        {step.content}
                                    </p>

                                    {index === currentStep && (
                                        <div className="mt-2 md:mt-3 h-1 md:h-1.5 bg-white rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-[#1a1a1a] rounded-full"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                transition={{ duration: 4, ease: "linear" }}
                                                key={currentStep}
                                            />
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
