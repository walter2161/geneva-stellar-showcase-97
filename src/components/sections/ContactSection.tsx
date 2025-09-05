import { Phone, Mail, MapPin, Globe } from "lucide-react"
import { GenevaButton } from "@/components/ui/geneva-button"

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      details: ["(11) 2896-2008", "(11) 96156-2263"]
    },
    {
      icon: Mail,
      title: "Email", 
      details: ["contato@genevaservicos.com.br"]
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: ["R. Dom José de Alarcão, 55", "Ipiranga - São Paulo / SP"]
    },
    {
      icon: Globe,
      title: "Website",
      details: ["www.genevaservicos.com.br"]
    }
  ]

  return (
    <section id="contato" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-geneva-accent/10 text-geneva-primary mb-6">
            Entre em Contato
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-4">
            Escolher a Geneva é optar por um parceiro confiável
          </h2>
          <p className="text-xl text-text-secondary">
            Que une qualidade, tecnologia e redução de custos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-text-secondary">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Solicite um Orçamento
            </h3>
            
            <form className="space-y-6" onSubmit={(e) => { 
              e.preventDefault(); 
              const formData = new FormData(e.target as HTMLFormElement);
              const nome = formData.get('nome');
              const email = formData.get('email');
              const telefone = formData.get('telefone');
              const empresa = formData.get('empresa');
              const mensagem = formData.get('mensagem');
              
              const whatsappMessage = `Olá! Meu nome é ${nome}${empresa ? ` da empresa ${empresa}` : ''}.\n\nEmail: ${email}\nTelefone: ${telefone}\n\nMensagem: ${mensagem}`;
              const url = `https://wa.me/5511961562263?text=${encodeURIComponent(whatsappMessage)}`;
              window.open(url, '_blank');
            }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nome"
                  placeholder="Nome"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-geneva-accent focus:border-transparent"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-geneva-accent focus:border-transparent"
                />
              </div>
              
              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-geneva-accent focus:border-transparent"
              />
              
              <input
                type="text"
                name="empresa"
                placeholder="Empresa"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-geneva-accent focus:border-transparent"
              />
              
              <textarea
                name="mensagem"
                placeholder="Mensagem"
                rows={4}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-geneva-accent focus:border-transparent resize-vertical"
              />
              
              <GenevaButton variant="primary" size="form" type="submit">
                Enviar Mensagem
              </GenevaButton>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}