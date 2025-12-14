"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
}

interface MenuItemCardProps {
  item: MenuItem
  onAddToCart: (item: { id: string; name: string; price: number }) => void
}

export function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative w-full h-48 bg-muted overflow-hidden">
          <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <h4 className="text-lg font-semibold text-card-foreground mb-2">{item.name}</h4>
        <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <span className="text-2xl font-bold text-primary">R$ {item.price.toFixed(2)}</span>
        <Button
          onClick={() => onAddToCart({ id: item.id, name: item.name, price: item.price })}
          size="icon"
          className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
        >
          <Plus className="h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  )
}
