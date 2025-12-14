"use client"

import { X, Minus, Plus, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/types/product"

interface CartProps {
  items: (Product & { quantity: number })[]
  isOpen: boolean
  onClose: () => void
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemove: (id: number) => void
}

export function Cart({ items, isOpen, onClose, onUpdateQuantity, onRemove }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const sendToWhatsApp = () => {
    if (items.length === 0) return

    const message = `🛍️ *Novo Pedido - Essence Perfumes*\n\n${items
      .map(
        (item) => `*${item.name}*\nQuantidade: ${item.quantity}\nPreço: R$ ${(item.price * item.quantity).toFixed(2)}`,
      )
      .join("\n\n")}\n\n*Total: R$ ${total.toFixed(2)}*\n\nObrigado pela preferência!`

    const phoneNumber = "5511999999999" // Substitua pelo número do WhatsApp Business
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-background shadow-xl sm:max-w-lg">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border p-4">
            <h2 className="font-serif text-2xl font-bold text-secondary">Seu Carrinho</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {items.length === 0 ? (
            <div className="flex flex-1 items-center justify-center p-8 text-center">
              <div>
                <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground" />
                <p className="mt-4 text-lg font-medium text-muted-foreground">Seu carrinho está vazio</p>
                <p className="mt-2 text-sm text-muted-foreground">Adicione perfumes ao carrinho para continuar</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 rounded-lg border border-border p-4">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        className="h-20 w-20 rounded-md object-cover"
                      />
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-secondary">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onRemove(item.id)}>
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="mt-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 bg-transparent"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="h-8 w-8 bg-transparent"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <span className="font-bold text-secondary">R$ {(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-border p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-secondary">Total</span>
                  <span className="text-2xl font-bold text-secondary">R$ {total.toFixed(2)}</span>
                </div>
                <Button size="lg" className="w-full gap-2" onClick={sendToWhatsApp}>
                  <Send className="h-5 w-5" />
                  Enviar Pedido pelo WhatsApp
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Você será redirecionado para o WhatsApp Business
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

function ShoppingBag({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}
