export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="container relative mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl font-bold tracking-tight text-secondary-foreground md:text-6xl text-balance">
          Fragrâncias Exclusivas
        </h2>
        <p className="mt-4 text-lg text-secondary-foreground/80 md:text-xl max-w-2xl mx-auto text-pretty">
          Descubra perfumes premium durante sua viagem e receba em casa
        </p>
      </div>
    </section>
  )
}
