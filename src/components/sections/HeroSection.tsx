import { Building, Users, Award } from "lucide-react"
import { GenevaButton } from "@/components/ui/geneva-button"
import { scrollToSection } from "@/lib/scroll"

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

      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-geneva-accent/20 text-geneva-light border border-geneva-accent/30 mb-8">
          Fundada em 2022 • +100 colaboradores
        </div>

        {/* Main Heading */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transformamos<br />
            <span className="text-gradient">Terceirização</span><br />
            em Excelência
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Oferecemos serviços terceirizados com foco em qualidade, eficiência, tecnologia e redução de custos para órgãos públicos e empresas privadas.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <GenevaButton 
            variant="hero" 
            size="xl"
            onClick={() => scrollToSection('servicos')}
          >
            Conheça Nossos Serviços
          </GenevaButton>
          <GenevaButton 
            variant="outline" 
            size="xl"
            onClick={() => scrollToSection('sobre')}
          >
            Nossa História
          </GenevaButton>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="glass-dark backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover-lift">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Building className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Experiência Comprovada</h3>
            <p className="text-slate-300 text-sm">
              Atendemos clientes de alto nível como a Sabesp
            </p>
          </div>

          <div className="glass-dark backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover-lift">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">+200 Funcionários</h3>
            <p className="text-slate-300 text-sm">
              Equipe qualificada e em constante crescimento
            </p>
          </div>

          <div className="glass-dark backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover-lift">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">+10 Contratos</h3>
            <p className="text-slate-300 text-sm">
              Soluções personalizadas e resultados garantidos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}