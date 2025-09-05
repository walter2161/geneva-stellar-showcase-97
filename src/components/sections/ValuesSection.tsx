import { Shield, Heart, Users, Target, Send, Leaf } from "lucide-react"

export default function ValuesSection() {
  const values = [
    {
      icon: Shield,
      title: "Compromisso com a Qualidade",
      description: "Entregar sempre o melhor, buscando superar expectativas."
    },
    {
      icon: Heart,
      title: "Ética e Transparência", 
      description: "Atuar de forma clara, responsável e íntegra em todos os processos."
    },
    {
      icon: Users,
      title: "Valorização das Pessoas",
      description: "Respeitar e investir no desenvolvimento de toda a nossa equipe."
    },
    {
      icon: Target,
      title: "Foco no Cliente",
      description: "Entender, atender e antecipar as necessidades dos nossos parceiros."
    },
    {
      icon: Send,
      title: "Inovação e Melhoria Contínua",
      description: "Buscar sempre novas formas de otimizar processos e resultados."
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Atuar de forma consciente e responsável com a sociedade e meio ambiente."
    }
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-geneva-accent/10 text-geneva-primary mb-6">
            Nossos Princípios
          </div>
          <h2 id="valores" className="text-3xl md:text-5xl font-bold text-text-primary">
            Nossos Valores
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-lift">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-text-primary text-center mb-4">
                {value.title}
              </h3>
              <p className="text-text-secondary text-center leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}