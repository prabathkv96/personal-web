import Image from "next/image"
import { BASE_URL } from "@/lib/utils"

const stats = [
  { value: "5+", label: "Years of Experience" },
  { value: "100+", label: "Students Mentored" },
  { value: "Sri Lanka", label: "Based In" },
  { value: "1000+", label: "Guests Served" },
]

export function About() {
  return (
    <section id="about" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            01
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            The Story
          </span>
        </div>

        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={`${BASE_URL}/images/chef-kitchen.jpg`}
              alt="Chef Prabath Vitharana preparing a dish with precision"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 border border-gold/20" />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-4xl leading-tight text-cream md:text-5xl text-balance">
              From the Kitchen
              <br />
              to the Classroom
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Growing up in Sri Lanka, my journey into the culinary world began
                with the rich, vibrant flavours of home — where spice, technique,
                and tradition are inseparable from everyday life.
              </p>
              <p>
                After years of training and working in professional kitchens, I
                developed a deep respect for both classical technique and the bold,
                aromatic cooking of my roots. Every dish I create draws on that
                duality — precision meets passion.
              </p>
              <p>
                Today, as a Lecturer at William Angliss Institute, I channel that
                experience into shaping the next generation of culinary talent —
                teaching them not just how to cook, but how to think, taste, and
                create with intention.
              </p>
            </div>

            <div className="mt-6">
              <span className="font-serif text-2xl italic text-gold">
                Prabath Vitharana
              </span>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-12 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-3xl text-gold">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
