"use client"

import { MapPin, Mail, Clock, Instagram, ArrowUpRight } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Sri Lanka",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@prabathvitharana.com",
  },
  {
    icon: Clock,
    label: "Currently",
    value: "Lecturer, William Angliss Institute",
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            05
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            Contact
          </span>
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div>
            <h2 className="font-serif text-4xl leading-tight text-cream md:text-5xl text-balance">
              Let{"'"}s Connect
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Whether you{"'"}re interested in a private dining experience, culinary
              collaboration, or just want to say hello — I{"'"}d love to hear from you.
            </p>

            {/* Contact Details */}
            <div className="mt-12 space-y-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <item.icon
                    className="mt-0.5 h-5 w-5 shrink-0 text-gold"
                    strokeWidth={1.5}
                  />
                  <div>
                    <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {item.label}
                    </div>
                    <div className="mt-1 text-sm text-cream">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="border border-border bg-card p-8 lg:p-10">
            <h3 className="font-serif text-2xl text-cream">
              Send a Message
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Drop me a line and I{"'"}ll get back to you shortly.
            </p>

            <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="mt-2 block w-full border-b border-border bg-transparent px-0 py-2.5 text-sm text-cream outline-none transition-colors focus:border-gold"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="mt-2 block w-full border-b border-border bg-transparent px-0 py-2.5 text-sm text-cream outline-none transition-colors focus:border-gold"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  className="mt-2 block w-full border-b border-border bg-transparent px-0 py-2.5 text-sm text-cream outline-none transition-colors focus:border-gold"
                  placeholder="Collaboration, private dining, etc."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-xs uppercase tracking-[0.15em] text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-2 block w-full resize-none border-b border-border bg-transparent px-0 py-2.5 text-sm text-cream outline-none transition-colors focus:border-gold"
                  placeholder="Tell me about your enquiry..."
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2 bg-gold px-8 py-4 text-xs uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-gold-light"
              >
                Send Message
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
