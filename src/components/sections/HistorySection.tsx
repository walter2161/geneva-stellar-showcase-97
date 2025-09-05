export default function HistorySection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative lg:order-first">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Executivos em reunião de negócios"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-geneva-accent/10 text-geneva-primary">
              Nossa História
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary leading-tight">
              Nossa<br />História
            </h2>
            
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                A Geneva surgiu para atender um mercado em expansão:{" "}
                <strong className="text-text-primary">a terceirização de serviços por meio de licitações públicas</strong>.
              </p>
              
              <p>
                Em pouco tempo, conquistamos espaço ao oferecer soluções adaptadas às necessidades de cada cliente, com foco em conformidade legal, segurança e resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}