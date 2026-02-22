import { Award, Star, ChefHat, GraduationCap } from "lucide-react"

const timeline = [
  {
    year: "2019 — 2021",
    role: "Commis / Junior Chef",
    venue: "Professional Kitchen Experience",
    description:
      "Built a strong foundation in classical and contemporary cooking techniques, learning discipline, speed, and consistency in high-pressure kitchen environments.",
  },
  {
    year: "2021 — 2023",
    role: "Chef de Partie",
    venue: "Fine Dining & Hotel Kitchens, Sri Lanka",
    description:
      "Took ownership of key sections, refining skills in flavour development, plating, and menu execution while blending Sri Lankan culinary traditions with international techniques.",
  },
  {
    year: "2023 — Present",
    role: "Lecturer in Culinary Arts",
    venue: "William Angliss Institute, Sri Lanka",
    description:
      "Currently shaping the next generation of culinary professionals — teaching kitchen fundamentals, food science, and the art of creative cooking to aspiring chefs.",
  },
]

const accolades = [
  { icon: ChefHat, label: "Professional Chef" },
  { icon: GraduationCap, label: "Culinary Lecturer" },
  { icon: Star, label: "Sri Lankan Cuisine" },
  { icon: Award, label: "Awards (Coming Soon)" },
]

export function Experience() {
  return (
    <section id="experience" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            03
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            Experience
          </span>
        </div>

        <h2 className="mb-20 font-serif text-4xl leading-tight text-cream md:text-5xl text-balance">
          A Journey Through
          <br />
          Kitchens & Classrooms
        </h2>

        {/* Accolades */}
        <div className="mb-20 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {accolades.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-4 border border-border bg-card p-6 text-center transition-colors duration-300 hover:border-gold/40"
            >
              <item.icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
              <span className="text-xs uppercase tracking-[0.15em] text-cream">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:block" />

          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div key={index} className="relative md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-1 hidden h-2 w-2 -translate-x-[3.5px] rounded-full bg-gold md:block" />

                <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-16">
                  <div className="shrink-0 md:w-44">
                    <span className="text-xs uppercase tracking-[0.2em] text-gold">
                      {item.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-cream">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-gold/70">{item.venue}</p>
                    <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
