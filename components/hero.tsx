import Image from "next/image"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-chef.jpg"
          alt="Chef Prabath Vitharana in his kitchen"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="mb-8 flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gold" />
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            Chef & Educator
          </span>
          <span className="h-px w-12 bg-gold" />
        </div>

        <h1 className="font-serif text-5xl leading-tight tracking-wide text-cream md:text-7xl lg:text-8xl text-balance">
          Prabath Vitharana
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Where tradition meets innovation. Over 5 years of crafting
          unforgettable culinary experiences — from professional kitchens
          to the classroom at William Angliss Institute, Sri Lanka.
        </p>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6">
          <a
            href="#dishes"
            className="bg-gold px-10 py-3.5 text-xs uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-gold-light"
          >
            View My Work
          </a>
          <a
            href="#about"
            className="border border-gold/40 px-10 py-3.5 text-xs uppercase tracking-[0.2em] text-gold transition-all duration-300 hover:border-gold hover:bg-gold/10"
          >
            My Story
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <div className="h-10 w-px animate-pulse bg-gold/50" />
        </div>
      </div>
    </section>
  )
}
