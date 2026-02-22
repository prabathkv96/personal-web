"use client"

import Image from "next/image"
import { useState } from "react"
import { BASE_URL } from "@/lib/utils"

const dishes = [
  {
    id: 1,
    name: "Spiced Wagyu Rendition",
    category: "Main Course",
    description:
      "Slow-cooked wagyu with a Sri Lankan spice rub, coconut sambol, and roasted root vegetables.",
    image: `${BASE_URL}/images/dish-1.jpg`,
  },
  {
    id: 2,
    name: "Lagoon Scallops",
    category: "Starter",
    description:
      "Pan-seared scallops with a coconut and lemongrass beurre blanc, finished with curry leaf oil.",
    image: `${BASE_URL}/images/dish-2.jpg`,
  },
  {
    id: 3,
    name: "Midnight Sphere",
    category: "Dessert",
    description:
      "Dark chocolate sphere with Ceylon cinnamon dust, passion fruit coulis, and kithul treacle cream.",
    image: `${BASE_URL}/images/dish-3.jpg`,
  },
  {
    id: 4,
    name: "Heritage Terrine",
    category: "Starter",
    description:
      "Spiced terrine with tamarind chutney, pickled shallots, and toasted coconut roti crumble.",
    image: `${BASE_URL}/images/dish-4.jpg`,
  },
]

export function SignatureDishes() {
  const [hoveredDish, setHoveredDish] = useState<number | null>(null)

  return (
    <section id="dishes" className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-6 flex items-center gap-4">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            02
          </span>
          <span className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            Signature Dishes
          </span>
        </div>

        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-serif text-4xl leading-tight text-cream md:text-5xl text-balance">
            Crafted with Passion,
            <br />
            Served with Soul
          </h2>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Each dish is a culmination of the finest seasonal ingredients,
            classical technique, and modern creativity.
          </p>
        </div>

        {/* Dishes Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="group relative cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredDish(dish.id)}
              onMouseLeave={() => setHoveredDish(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredDish === dish.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-background/60 transition-opacity duration-500 ${
                    hoveredDish === dish.id ? "opacity-80" : "opacity-40"
                  }`}
                />

                {/* Overlay Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold">
                    {dish.category}
                  </span>
                  <h3 className="mt-2 font-serif text-2xl text-cream md:text-3xl">
                    {dish.name}
                  </h3>
                  <p
                    className={`mt-3 max-w-sm text-sm leading-relaxed text-cream/80 transition-all duration-500 ${
                      hoveredDish === dish.id
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    {dish.description}
                  </p>
                </div>
              </div>

              {/* Gold border on hover */}
              <div
                className={`absolute inset-0 border transition-all duration-500 ${
                  hoveredDish === dish.id
                    ? "border-gold/60"
                    : "border-transparent"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
