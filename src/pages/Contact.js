const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-section-title text-iso-dark mb-6">
            Entre em Contato
          </h1>
          <div className="bg-card rounded-lg shadow-card p-12">
            <div className="w-16 h-16 bg-iso-red rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-iso-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-iso-dark mb-4">
              Em Desenvolvimento
            </h2>
            <p className="text-iso-gray leading-relaxed mb-6">
              Nossa página de contato está sendo desenvolvida com formulários interativos, informações de localização e múltiplos canais de comunicação. Em breve você poderá solicitar orçamentos e esclarecer dúvidas de forma mais prática.
            </p>
            
            <div className="bg-background-secondary rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-iso-dark mb-3">Contato Temporário</h3>
              <div className="space-y-2 text-sm text-iso-gray">
                <p>📧 contato@iso-automacao.com.br</p>
                <p>📱 (11) 99999-9999</p>
              </div>
            </div>
            
            <div className="text-sm text-iso-red font-medium">
              🚧 Página em construção
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;