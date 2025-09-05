import { useState, useEffect } from "react"
import { GenevaButton } from "@/components/ui/geneva-button"
import { scrollToSection, isDarkSection } from "@/lib/scroll"

export default function Header() {
  const [isOnDarkSection, setIsOnDarkSection] = useState(true)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsOnDarkSection(isDarkSection())
    }
    
    // Check initial state
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    scrollToSection(sectionId)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="glass backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden animate-glow">
                <img 
                  src="/lovable-uploads/a71129c9-ec1f-490c-8c0b-88097ef2811c.png" 
                  alt="Geneva Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className={`text-xl font-bold transition-colors ${isOnDarkSection ? 'text-white' : 'text-text-primary'}`}>Geneva</h2>
                <p className={`text-xs transition-colors ${isOnDarkSection ? 'text-white/80' : 'text-text-secondary'}`}>Serviços e Facilities</p>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a 
                href="#sobre" 
                onClick={(e) => handleNavClick(e, 'sobre')}
                className={`font-medium transition-colors ${isOnDarkSection ? 'text-white/80 hover:text-white' : 'text-text-secondary hover:text-geneva-accent'}`}
              >
                Sobre
              </a>
              <a 
                href="#servicos" 
                onClick={(e) => handleNavClick(e, 'servicos')}
                className={`font-medium transition-colors ${isOnDarkSection ? 'text-white/80 hover:text-white' : 'text-text-secondary hover:text-geneva-accent'}`}
              >
                Serviços
              </a>
              <a 
                href="#valores" 
                onClick={(e) => handleNavClick(e, 'valores')}
                className={`font-medium transition-colors ${isOnDarkSection ? 'text-white/80 hover:text-white' : 'text-text-secondary hover:text-geneva-accent'}`}
              >
                Valores
              </a>
              <a 
                href="#contato" 
                onClick={(e) => handleNavClick(e, 'contato')}
                className={`font-medium transition-colors ${isOnDarkSection ? 'text-white/80 hover:text-white' : 'text-text-secondary hover:text-geneva-accent'}`}
              >
                Contato
              </a>
            </div>

            {/* CTA Button */}
            <GenevaButton 
              variant="primary"
              onClick={() => scrollToSection('contato')}
            >
              Fale Conosco
            </GenevaButton>
          </div>
        </div>
      </nav>
    </header>
  )
}