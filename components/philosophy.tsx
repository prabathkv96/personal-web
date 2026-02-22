export function Philosophy() {
  return (
    <section className="relative overflow-hidden bg-background py-24 lg:py-32">
      {/* Decorative Lines */}
      <div className="absolute left-0 top-0 h-full w-px bg-gold/10" />
      <div className="absolute right-0 top-0 h-full w-px bg-gold/10" />

      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <div className="mb-8 flex items-center justify-center gap-6">
          <span className="h-px w-16 bg-gold/40" />
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            Philosophy
          </span>
          <span className="h-px w-16 bg-gold/40" />
        </div>

        <blockquote className="font-serif text-3xl leading-relaxed text-cream italic md:text-4xl lg:text-5xl text-pretty">
          {"\"Cooking is the ultimate act of "}
          <span className="text-gold">generosity</span>
          {" — transforming the simplest ingredients into something that nourishes both body and soul.\""}
        </blockquote>

        <div className="mt-10">
          <span className="font-serif text-lg text-gold">
            — Prabath Vitharana
          </span>
        </div>
      </div>
    </section>
  )
}
