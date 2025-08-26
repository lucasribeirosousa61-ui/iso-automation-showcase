const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-section-title text-iso-dark mb-6">
            Nossos Serviços
          </h1>
          <div className="bg-card rounded-lg shadow-card p-12">
            <div className="w-16 h-16 bg-iso-red rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-iso-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-iso-dark mb-4">
              Em Desenvolvimento
            </h2>
            <p className="text-iso-gray leading-relaxed">
              Nossa página de serviços está sendo desenvolvida com informações detalhadas sobre todas as nossas soluções em automação industrial e residencial. Em breve você terá acesso a um catálogo completo com especificações técnicas, casos de sucesso e muito mais.
            </p>
            <div className="mt-8 text-sm text-iso-red font-medium">
              🚧 Página em construção
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;