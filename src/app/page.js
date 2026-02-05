"use client";
import Link from "next/link";
import TestimonialsSection from "@/components/ui/testimonial-v2";
import TherapyApproach from "@/components/ui/therapy-approach";
import ExpectationSteps from "@/components/ui/expectation-steps";
import OfficeSection from "@/components/ui/office-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf8f5]">

      <section className="py-20 bg-[#faf8f5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-8 border-4 border-white shadow-xl ring-4 ring-[#1a1a1a]/5">
            <img
              src="/Dr. Maya Reynolds.png"
              alt="Dr. Maya Reynolds"
              className="object-cover w-full h-full"
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4 tracking-tight">
            Anxiety Therapist in Santa Monica
          </h1>

          <div className="flex items-center justify-center gap-2 mb-6">
            <p className="text-[#1a1a1a] text-[17px] tracking-wide font-semibold">Dr. Maya Reynolds, PsyD</p>
            <span className="text-gray-300">·</span>
            <p className="text-gray-500 text-[16px] tracking-wide">Licensed Clinical Psychologist</p>
          </div>

          <p className="text-gray-600 max-w-lg mx-auto mb-10 text-[17px] leading-[1.9] tracking-wide">
            Helping high-achieving adults find calm, clarity, and relief from anxiety, burnout, and trauma.
          </p>

          <Link
            href="/book"
            className="bg-[#1a1a1a] text-white px-10 py-4 rounded-full font-medium hover:bg-black transition-all hover:shadow-lg inline-flex items-center gap-2 text-[16px] tracking-wide cursor-pointer"
          >
            Book Free Consultation
            <span>→</span>
          </Link>

          <p className="text-[15px] text-gray-400 mt-4 tracking-wide">15-min video call · No commitment</p>
        </div>
      </section>

      <section className="py-20 bg-[#faf8f5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-4">
                About Me
              </h2>
              <p className="text-gray-600 text-[16px] leading-[1.9] tracking-wide mb-6">
                Hi, I'm Dr. Maya. I work with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
              </p>
              <p className="text-gray-600 text-[16px] leading-[1.9] tracking-wide">
                Many of my clients are high-achieving and thoughtful—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-6">
                I can help with
              </h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['Anxiety', 'Panic Attacks', 'Trauma & PTSD', 'Burnout', 'Stress', 'Overthinking', 'Perfectionism', 'Sleep Issues'].map((item) => (
                  <span
                    key={item}
                    className="px-3 py-2 md:px-5 md:py-2.5 bg-[#f5f0eb] rounded-full text-[13px] md:text-[15px] text-[#1a1a1a] font-medium tracking-wide border border-[#e5ddd3] hover:border-[#c9bfb3] transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TherapyApproach />

      <ExpectationSteps />

      <OfficeSection />

      <TestimonialsSection />

      <div className="max-w-3xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <section className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 text-center border border-gray-100 mb-10 md:mb-16 shadow-sm">
          <h2 className="text-2xl md:text-4xl font-bold text-[#1a1a1a] mb-3 md:mb-4">Ready to feel better?</h2>
          <p className="text-gray-600 text-[15px] md:text-[18px] leading-[1.8] tracking-wide mb-6 md:mb-8 max-w-md mx-auto">Take the first step. Book a free consultation to see if we're a good fit.</p>
          <Link
            href="/book"
            className="bg-[#1a1a1a] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-semibold hover:bg-black transition-colors inline-block text-[15px] md:text-[17px] cursor-pointer"
          >
            Book Free Consultation →
          </Link>
        </section>

        <footer className="text-center text-[16px] text-gray-500 tracking-wide pb-12">
          <p className="mb-3">📍 Santa Monica, CA · Online sessions available</p>
          <p>© 2026 Dr. Maya Reynolds, PsyD</p>
        </footer>

      </div>
    </div>
  );
}
