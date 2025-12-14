"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedSection } from "@/components/featured-section"
import { ProductGrid } from "@/components/product-grid"
import { Cart } from "@/components/cart"
import { CartButton } from "@/components/cart-button"
import type { Product } from "@/types/product"

export default function Home() {
  const [cartItems, setCartItems] = useState<(Product & { quantity: number })[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id)
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== id))
    } else {
      setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, quantity } : item)))
    }
  }

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id))
  }

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedSection onAddToCart={addToCart} />
      <ProductGrid onAddToCart={addToCart} />

      <CartButton count={cartCount} onClick={() => setIsCartOpen(true)} />

      <Cart
        items={cartItems}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
      />
    </div>
  )
}
