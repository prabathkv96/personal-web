"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Prabath has an incredible ability to break down complex techniques and make them accessible. His passion for food is truly contagious.",
    author: "A Former Student",
    role: "William Angliss Institute",
  },
  {
    quote:
      "His dishes carry the soul of Sri Lanka while embracing modern technique. A rare talent who understands that great cooking starts with great ingredients.",
    author: "Industry Colleague",
    role: "Professional Kitchen",
  },
  {
    quote:
      "Chef Prabath brings an unmatched energy and dedication to the classroom. His students don't just learn recipes — they learn to think like chefs.",
    author: "Faculty Peer",
    role: "William Angliss Institute",
  },
  {
    quote:
      "Every dish Prabath creates tells a story — rooted in tradition yet forward-thinking. He's the kind of chef who elevates everything around him.",
    author: "Dining Guest",
    role: "Private Dining Event",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () =>
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )

  return (
    <section id="testimonials" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            04
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            Press & Praise
          </span>
        </div>

        <div className="mx-auto max-w-4xl text-center">
          <Quote
            className="mx-auto mb-8 h-10 w-10 text-gold/40"
            strokeWidth={1}
          />

          <div className="relative min-h-[200px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === current
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0 pointer-events-none"
                }`}
              >
                <blockquote className="font-serif text-2xl leading-relaxed text-cream italic md:text-3xl text-pretty">
                  {`"${testimonial.quote}"`}
                </blockquote>

                <div className="mt-10">
                  <div className="text-sm uppercase tracking-[0.2em] text-gold">
                    {testimonial.author}
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="mt-16 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all duration-300 hover:border-gold hover:text-gold"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === current
                      ? "w-8 bg-gold"
                      : "w-1.5 bg-border hover:bg-gold/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center border border-border text-muted-foreground transition-all duration-300 hover:border-gold hover:text-gold"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
