import { MenuItemCard } from "@/components/menu-item-card"

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
}

interface MenuSectionProps {
  category: string
  items: MenuItem[]
  onAddToCart: (item: { id: string; name: string; price: number }) => void
}

export function MenuSection({ category, items, onAddToCart }: MenuSectionProps) {
  return (
    <section>
      <h3 className="text-2xl font-bold text-foreground mb-6 pb-2 border-b-2 border-primary">{category}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  )
}
