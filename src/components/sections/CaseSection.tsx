import { GenevaButton } from "@/components/ui/geneva-button"

export default function CaseSection() {
  return (
    <section className="py-24 bg-gradient-section text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-20 animate-float" 
             style={{ background: 'radial-gradient(circle, hsl(174 84% 40% / 0.2), transparent)' }}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full opacity-20 animate-float"
             style={{ 
               background: 'radial-gradient(circle, hsl(217 91% 60% / 0.2), transparent)',
               animationDelay: '-3s' 
             }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white mb-6">
            Case de Sucesso
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Atendemos a Sabesp
          </h2>
          <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
            Companhia listada na B3 e referência mundial em saneamento. Essa parceria reforça nosso compromisso em entregar soluções eficientes, seguras e de confiança, à altura dos maiores players do mercado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div className="space-y-8">
            <div className="text-center p-6">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">+200</div>
              <div className="text-teal-200 text-lg">Funcionários Ativos</div>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl md:text-6xl font-bold text-white mb-2">+10</div>
              <div className="text-teal-200 text-lg">Contratos</div>
            </div>
            <div className="text-center">
              <GenevaButton variant="white" size="lg">
                Confira Nossos Atestados Técnicos
              </GenevaButton>
            </div>
          </div>

          {/* Sabesp Logo */}
          <div className="glass-dark backdrop-blur-lg border border-white/20 rounded-3xl p-16 text-center">
            <div className="text-5xl md:text-6xl font-bold text-white mb-4">
              sabesp
            </div>
            <p className="text-teal-200 text-lg">Parceiro Estratégico</p>
          </div>
        </div>
      </div>
    </section>
  )
}