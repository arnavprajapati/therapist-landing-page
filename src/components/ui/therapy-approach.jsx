"use client";

import { useState } from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const therapyApproaches = [
    {
        id: 1,
        title: "Cognitive Behavioral Therapy (CBT)",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600&h=450",
        description:
            "CBT helps you identify and change negative thought patterns that contribute to anxiety and stress. Together, we'll work on practical strategies to reframe unhelpful thinking, develop healthier coping mechanisms, and build skills you can use in everyday life. It's structured, goal-oriented, and highly effective for anxiety, panic, and depression.",
    },
    {
        id: 2,
        title: "EMDR Therapy",
        image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&q=80&w=600&h=450",
        description:
            "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful approach for processing trauma and distressing memories. Using bilateral stimulation, EMDR helps your brain reprocess traumatic experiences so they no longer trigger intense emotional reactions. It's particularly effective for PTSD, anxiety, and the lingering effects of difficult past experiences.",
    },
    {
        id: 3,
        title: "Mindfulness-Based Practices",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600&h=450",
        description:
            "Mindfulness helps you stay grounded in the present moment rather than getting lost in anxious thoughts about the future or ruminating on the past. I integrate mindfulness techniques to help you develop greater awareness of your thoughts and emotions, reduce reactivity, and find more peace in your daily life.",
    },
    {
        id: 4,
        title: "Somatic & Body-Oriented Techniques",
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600&h=450",
        description:
            "Anxiety and trauma live in the body, not just the mind. Somatic techniques help you tune into physical sensations, release stored tension, and regulate your nervous system. By connecting mind and body, you'll learn to recognize stress signals early and develop tools to feel more calm and grounded.",
    },
];

export default function TherapyApproach() {
    const [activeTabId, setActiveTabId] = useState(1);
    const [activeImage, setActiveImage] = useState(therapyApproaches[0].image);

    return (
        <section className="py-16 bg-[#faf8f5]">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3">
                        Therapy Approach
                    </h2>
                    <p className="text-gray-600 max-w-lg mx-auto text-[16px] leading-[1.8] tracking-wide">
                        I integrate evidence-based methods tailored to your unique needs and goals.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                    <div className="w-full md:w-1/2">
                        <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                            {therapyApproaches.map((item) => (
                                <AccordionItem key={item.id} value={`item-${item.id}`}>
                                    <AccordionTrigger
                                        onClick={() => {
                                            setActiveImage(item.image);
                                            setActiveTabId(item.id);
                                        }}
                                        className="cursor-pointer py-5 !no-underline transition text-left"
                                    >
                                        <span
                                            className={`text-base md:text-lg font-semibold transition-colors ${item.id === activeTabId
                                                ? "text-[#2d5a4a]"
                                                : "text-gray-600"
                                                }`}
                                        >
                                            {item.title}
                                        </span>
                                    </AccordionTrigger>
                                    <AccordionContent>
                                        <p className="text-gray-600 text-[15px] leading-[1.8] tracking-wide font-normal">
                                            {item.description}
                                        </p>
                                        <div className="mt-4 md:hidden">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-48 rounded-xl object-cover"
                                            />
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <div className="hidden md:block w-1/2">
                        <div className="sticky top-8">
                            <div className="rounded-2xl overflow-hidden bg-gray-100">
                                <img
                                    src={activeImage}
                                    alt={therapyApproaches.find(t => t.image === activeImage)?.title || 'Therapy approach illustration'}
                                    className="w-full aspect-[4/3] object-cover transition-all duration-300"
                                />
                            </div>
                            <p className="text-sm text-gray-400 mt-3 text-center">
                                Evidence-based methods for lasting change
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
