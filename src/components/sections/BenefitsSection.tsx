import { CheckCircle } from "lucide-react"

export default function BenefitsSection() {
  const benefits = [
    "Experiência comprovada – Clientes de alto nível, como a Sabesp.",
    "Flexibilidade e personalização – Serviços sob medida para cada demanda.", 
    "Foco em eficiência – Redução de custos e aumento da produtividade.",
    "Conformidade legal – Segurança e tranquilidade jurídica.",
    "Equipe treinada e qualificada – Alto padrão de atendimento.",
    "Gestão próxima e ágil – Comunicação rápida e eficiente."
  ]

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
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Por que a Geneva?
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-dark backdrop-blur-lg border border-white/20 rounded-xl p-6 flex items-center gap-4">
              <CheckCircle className="w-6 h-6 text-teal-300 flex-shrink-0" />
              <p className="text-lg text-white">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}