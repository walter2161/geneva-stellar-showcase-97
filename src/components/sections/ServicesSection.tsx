import { Monitor, Building2, Headphones, Settings, UserCheck } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: Monitor,
      title: "Recepção e Administrativo",
      description: "Recepcionistas, gestão e manutenção predial, controlador de acesso."
    },
    {
      icon: Building2,
      title: "Limpeza e Conservação",
      description: "Limpeza, jardinagem, copa e facilities em geral."
    },
    {
      icon: Headphones,
      title: "Serviços de Atendimento", 
      description: "Atendimento ao cliente (gestão de call center/SAC)."
    },
    {
      icon: Settings,
      title: "Tecnologia e Processos",
      description: "Suporte técnico, desenvolvimento de sistemas, segurança da informação."
    },
    {
      icon: UserCheck,
      title: "Apoio Administrativo",
      description: "Auxiliares e analistas nas áreas: administrativa, logística, jurídica, financeiro."
    }
  ]

  return (
    <section id="servicos" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-geneva-accent/10 text-geneva-primary mb-6">
            Nossas Especialidades
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary max-w-4xl mx-auto leading-tight">
            Oferecemos soluções completas em terceirização de serviços
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover-lift text-center group">
              <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-geneva-accent transition-colors duration-300">
                <service.icon className="w-8 h-8 text-text-secondary group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                {service.description}
              </p>
              <p className="text-geneva-accent font-semibold text-sm">
                E mais!
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}