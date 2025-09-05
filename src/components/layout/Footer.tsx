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

        <p className="text-slate-400">
          © 2024 Geneva Serviços e Facilities. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}