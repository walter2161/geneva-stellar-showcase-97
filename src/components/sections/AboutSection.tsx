export default function AboutSection() {
  return (
    <section id="sobre" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-geneva-accent/10 text-geneva-primary">
              Sobre a Geneva
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary leading-tight">
              A Geneva
            </h2>
            
            <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
              <p>
                Fundada em 2022, em São Paulo, a Geneva nasceu para oferecer serviços terceirizados com foco em{" "}
                <strong className="text-text-primary">qualidade</strong>,{" "}
                <strong className="text-text-primary">eficiência</strong>,{" "}
                <strong className="text-text-primary">tecnologia</strong> e{" "}
                <strong className="text-text-primary">redução de custos</strong>, atendendo órgãos públicos e empresas privadas em todo o Brasil.
              </p>
              
              <p>
                Com mais de <strong className="text-text-primary">100 colaboradores</strong> ativos, já conquistamos a confiança de grandes organizações, provando nossa capacidade de entregar soluções seguras e ágeis.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center p-6 bg-teal-50 rounded-2xl hover-lift">
                <div className="text-3xl font-bold text-geneva-accent mb-2">2022</div>
                <div className="text-text-secondary text-sm">Fundação</div>
              </div>
              <div className="text-center p-6 bg-teal-50 rounded-2xl hover-lift">
                <div className="text-3xl font-bold text-geneva-accent mb-2">+100</div>
                <div className="text-text-secondary text-sm">Colaboradores</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl hover-lift">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop&crop=faces"
                alt="Profissional sorrindo em ambiente corporativo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}