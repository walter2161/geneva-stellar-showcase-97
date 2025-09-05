import { Building, Users, Award } from "lucide-react"
import { GenevaButton } from "@/components/ui/geneva-button"
import { scrollToSection } from "@/lib/scroll"
import ImageCarousel from "./ImageCarousel"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero py-24">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Floating blur elements */}
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full opacity-20 animate-float" 
             style={{ background: 'radial-gradient(circle, hsl(174 84% 40% / 0.3), transparent)' }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-20 animate-float"
             style={{ 
               background: 'radial-gradient(circle, hsl(217 91% 60% / 0.3), transparent)',
               animationDelay: '-3s' 
             }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <div className="text-center lg:text-left text-white">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-geneva-accent/20 text-geneva-light border border-geneva-accent/30 mb-6">
              Fundada em 2022 • +100 colaboradores
            </div>

            {/* Main Heading */}
            <div className="mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                Transformamos<br />
                <span className="text-gradient">Terceirização</span><br />
                em Excelência
              </h1>
              <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                Oferecemos serviços terceirizados com foco em qualidade, eficiência, tecnologia e redução de custos para órgãos públicos e empresas privadas.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-12">
              <GenevaButton 
                variant="hero" 
                size="lg"
                onClick={() => scrollToSection('servicos')}
              >
                Conheça Nossos Serviços
              </GenevaButton>
              <GenevaButton 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('sobre')}
              >
                Nossa História
              </GenevaButton>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass-dark backdrop-blur-lg border border-white/20 rounded-xl p-4 hover-lift">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 mx-auto lg:mx-0">
                  <Building className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1">Experiência Comprovada</h3>
                <p className="text-slate-300 text-xs">
                  Atendemos clientes de alto nível como a Sabesp
                </p>
              </div>

              <div className="glass-dark backdrop-blur-lg border border-white/20 rounded-xl p-4 hover-lift">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 mx-auto lg:mx-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1">+200 Funcionários</h3>
                <p className="text-slate-300 text-xs">
                  Equipe qualificada e em constante crescimento
                </p>
              </div>

              <div className="glass-dark backdrop-blur-lg border border-white/20 rounded-xl p-4 hover-lift">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 mx-auto lg:mx-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-1">+10 Contratos</h3>
                <p className="text-slate-300 text-xs">
                  Soluções personalizadas e resultados garantidos
                </p>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative h-96 lg:h-[500px]">
            <ImageCarousel />
          </div>
        </div>
      </div>
    </section>
  )
}