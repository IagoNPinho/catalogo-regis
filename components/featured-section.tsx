"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Star } from "lucide-react"
import type { Product } from "@/types/product"

const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Midnight Rose",
    description: "Floral intenso com notas de rosa e baunilha",
    price: 289.9,
    image: "/luxury-perfume-bottle-black-gold.jpg",
    category: "Feminino",
    featured: true,
  },
  {
    id: 2,
    name: "Urban Legend",
    description: "Amadeirado sofisticado para o dia a dia",
    price: 319.9,
    image: "/mens-cologne-bottle-elegant.jpg",
    category: "Masculino",
    featured: true,
  },
  {
    id: 3,
    name: "Golden Oud",
    description: "Oriental luxuoso com oud e especiarias",
    price: 399.9,
    image: "/luxury-oud-perfume-gold.jpg",
    category: "Unissex",
    featured: true,
  },
]

interface FeaturedSectionProps {
  onAddToCart: (product: Product) => void
}

export function FeaturedSection({ onAddToCart }: FeaturedSectionProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-2xl font-bold tracking-tight text-secondary md:text-3xl">Destaques</h3>
            <p className="mt-1 text-sm text-muted-foreground">Os perfumes mais procurados</p>
          </div>
          <Star className="h-6 w-6 fill-primary text-primary" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Destaque
                  </span>
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-medium text-muted-foreground">{product.category}</span>
                <h4 className="mt-1 font-serif text-lg font-semibold text-secondary">{product.name}</h4>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-secondary">R$ {product.price.toFixed(2)}</span>
                  <Button size="sm" onClick={() => onAddToCart(product)} className="gap-2">
                    <ShoppingCart className="h-4 w-4" />
                    Adicionar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
