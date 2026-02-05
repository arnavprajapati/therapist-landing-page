"use client";
import React from 'react';
import { motion } from "framer-motion";

const testimonials = [
    {
        text: "Dr. Maya helped me understand my anxiety in a way no one else could. Her approach is warm, practical, and I finally feel like myself again.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Sarah M.",
        role: "Marketing Executive",
    },
    {
        text: "After years of burnout, I finally feel like myself again. The EMDR work was transformative. Highly recommend Dr. Maya.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "James R.",
        role: "Software Engineer",
    },
    {
        text: "I was skeptical about therapy, but Dr. Maya created such a safe space. My panic attacks have reduced significantly.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Emily K.",
        role: "Entrepreneur",
    },
    {
        text: "The mindfulness techniques I learned have completely changed how I handle stress at work. I sleep better and worry less.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Michael T.",
        role: "Finance Director",
    },
    {
        text: "Dr. Maya's trauma-informed approach helped me process things I'd been carrying for years. I feel lighter and more present.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Amanda L.",
        role: "Creative Director",
    },
    {
        text: "As a perfectionist, I was always anxious. Therapy helped me find balance and self-compassion I didn't know was possible.",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Jessica H.",
        role: "Attorney",
    },
    {
        text: "The telehealth sessions are so convenient. I can do therapy from home and still feel completely connected.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
        name: "David P.",
        role: "Product Manager",
    },
    {
        text: "I came in for anxiety but learned so much about myself. Dr. Maya helped me understand my patterns and triggers.",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Rachel W.",
        role: "Healthcare Professional",
    },
    {
        text: "After my first session, I knew I found the right therapist. Warm, professional, and truly understands high-achievers.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
        name: "Chris B.",
        role: "Startup Founder",
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = ({ className, testimonials: items, duration = 10 }) => {
    return (
        <div className={className}>
            <motion.ul
                animate={{
                    translateY: "-50%",
                }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop",
                }}
                className="flex flex-col gap-6 pb-6 bg-transparent transition-colors duration-300 list-none m-0 p-0"
            >
                {[...Array(2)].map((_, index) => (
                    <React.Fragment key={index}>
                        {items.map(({ text, image, name, role }, i) => (
                            <motion.li
                                key={`${index}-${i}`}
                                aria-hidden={index === 1 ? "true" : "false"}
                                tabIndex={index === 1 ? -1 : 0}
                                whileHover={{
                                    scale: 1.03,
                                    y: -8,
                                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)",
                                    transition: { type: "spring", stiffness: 400, damping: 17 }
                                }}
                                className="p-8 rounded-2xl border border-gray-100 shadow-sm max-w-xs w-full bg-white transition-all duration-300 cursor-default select-none group focus:outline-none focus:ring-2 focus:ring-[#2d5a4a]/30"
                            >
                                <blockquote className="m-0 p-0">
                                    <p className="text-gray-600 leading-[1.8] tracking-wide font-normal m-0 text-[15px]">
                                        "{text}"
                                    </p>
                                    <footer className="flex items-center gap-3 mt-5">
                                        <img
                                            width={40}
                                            height={40}
                                            src={image}
                                            alt={`${name}`}
                                            className="h-10 w-10 rounded-full object-cover ring-2 ring-gray-100 group-hover:ring-[#2d5a4a]/30 transition-all duration-300 ease-in-out"
                                        />
                                        <div className="flex flex-col">
                                            <cite className="font-semibold not-italic tracking-tight leading-5 text-gray-900 text-sm">
                                                {name}
                                            </cite>
                                            <span className="text-xs leading-5 tracking-tight text-gray-400 mt-0.5">
                                                {role}
                                            </span>
                                        </div>
                                    </footer>
                                </blockquote>
                            </motion.li>
                        ))}
                    </React.Fragment>
                ))}
            </motion.ul>
        </div>
    );
};

export default function TestimonialsSection() {
    return (
        <section
            aria-labelledby="testimonials-heading"
            className="bg-transparent py-16 relative overflow-hidden"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                }}
                className="container px-4 z-10 mx-auto"
            >
                <div className="flex flex-col items-center justify-center max-w-md mx-auto mb-12">
                    <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-3 text-center">
                        What clients say
                    </h2>
                    <p className="text-center text-gray-600 text-[16px] leading-[1.8] tracking-wide">
                        Real experiences from people who found relief from anxiety, trauma, and burnout.
                    </p>
                </div>

                <div
                    className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] overflow-hidden"
                    role="region"
                    aria-label="Scrolling Testimonials"
                >
                    <TestimonialsColumn testimonials={firstColumn} duration={15} />
                    <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
                    <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
                </div>
            </motion.div>
        </section>
    );
}
