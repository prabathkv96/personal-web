import { Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <div>
            <span className="font-serif text-2xl tracking-wider text-gold">
              Prabath Vitharana
            </span>
            <p className="mt-2 text-xs text-muted-foreground">
              Chef & Culinary Educator, Sri Lanka
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-8">
            {["About", "Dishes", "Experience", "Testimonials", "Contact"].map(
              (link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-300 hover:text-gold"
                >
                  {link}
                </a>
              )
            )}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-all duration-300 hover:border-gold hover:text-gold"
              aria-label="Follow on Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="flex h-9 w-9 items-center justify-center border border-border text-muted-foreground transition-all duration-300 hover:border-gold hover:text-gold"
              aria-label="Follow on X"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
            {"© 2026 Prabath Vitharana. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
