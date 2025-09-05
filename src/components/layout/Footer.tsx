import { useState } from "react"
import { Instagram } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export default function Footer() {
  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Brand */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg overflow-hidden">
            <img 
              src="/lovable-uploads/a71129c9-ec1f-490c-8c0b-88097ef2811c.png" 
              alt="Geneva Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl font-bold">Geneva</h2>
            <p className="text-xs text-slate-400">Serviços e Facilities</p>
          </div>
        </div>

        {/* Social Links and Legal */}
        <div className="flex items-center justify-center gap-6 mb-6">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            <Instagram size={20} />
          </a>
          
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-slate-400 hover:text-white transition-colors text-sm">
                Política de Privacidade
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Política de Privacidade</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm">
                <p>Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.</p>
                <h3 className="font-semibold">Coleta de Dados</h3>
                <p>Coletamos informações que você nos fornece diretamente, como nome, e-mail e telefone quando você entra em contato conosco.</p>
                <h3 className="font-semibold">Uso dos Dados</h3>
                <p>Utilizamos suas informações para responder às suas solicitações e melhorar nossos serviços.</p>
                <h3 className="font-semibold">Proteção</h3>
                <p>Implementamos medidas de segurança adequadas para proteger suas informações pessoais.</p>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <button className="text-slate-400 hover:text-white transition-colors text-sm">
                LGPD
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Lei Geral de Proteção de Dados</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 text-sm">
                <p>A Geneva está em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).</p>
                <h3 className="font-semibold">Seus Direitos</h3>
                <p>Você tem o direito de acessar, corrigir, excluir ou portar seus dados pessoais a qualquer momento.</p>
                <h3 className="font-semibold">Base Legal</h3>
                <p>O tratamento de seus dados é baseado no seu consentimento e no interesse legítimo para prestação de nossos serviços.</p>
                <h3 className="font-semibold">Contato</h3>
                <p>Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados, entre em contato conosco.</p>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="space-y-4">
          <p className="text-slate-400">
            © 2025 Geneva Serviços e Facilities. Todos os direitos reservados.
          </p>
          
          {/* Led Marketing Attribution */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-slate-400 text-sm">by:</span>
            <a 
              href="https://ledmarketing.com.br" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img 
                src="/lovable-uploads/431aa2a6-9f71-4807-9729-4a73589945d7.png" 
                alt="Led Marketing" 
                className="h-6 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}