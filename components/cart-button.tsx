"use client"

import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CartButtonProps {
  count: number
  onClick: () => void
}

export function CartButton({ count, onClick }: CartButtonProps) {
  return (
    <Button
      size="lg"
      onClick={onClick}
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full p-0 shadow-lg md:h-16 md:w-16"
    >
      <ShoppingBag className="h-6 w-6" />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-destructive text-xs font-bold text-destructive-foreground">
          {count}
        </span>
      )}
    </Button>
  )
}
