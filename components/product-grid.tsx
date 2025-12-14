"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import type { Product } from "@/types/product"

const products: Product[] = [
  {
    id: 4,
    name: "Fresh Breeze",
    description: "Cítrico refrescante para o verão",
    price: 199.9,
    image: "/fresh-citrus-perfume.jpg",
    category: "Unissex",
  },
  {
    id: 5,
    name: "Black Velvet",
    description: "Intenso e marcante com couro e tabaco",
    price: 349.9,
    image: "/black-masculine-perfume.jpg",
    category: "Masculino",
  },
  {
    id: 6,
    name: "Fleur de Lys",
    description: "Delicado floral com lírio e jasmim",
    price: 269.9,
    image: "/lily-flower-perfume-bottle.jpg",
    category: "Feminino",
  },
  {
    id: 7,
    name: "Ocean Mist",
    description: "Aquático fresco inspirado no oceano",
    price: 229.9,
    image: "/aquatic-blue-perfume.jpg",
    category: "Unissex",
  },
  {
    id: 8,
    name: "Amber Nights",
    description: "Oriental quente com âmbar e patchouli",
    price: 299.9,
    image: "/amber-oriental-perfume.jpg",
    category: "Feminino",
  },
  {
    id: 9,
    name: "Green Forest",
    description: "Amadeirado verde com cedro e musgo",
    price: 259.9,
    image: "/green-woody-perfume.jpg",
    category: "Masculino",
  },
]

interface ProductGridProps {
  onAddToCart: (product: Product) => void
}

export function ProductGrid({ onAddToCart }: ProductGridProps) {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h3 className="mb-8 font-serif text-2xl font-bold tracking-tight text-secondary md:text-3xl">
          Catálogo Completo
        </h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
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
