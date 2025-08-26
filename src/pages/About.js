const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-section-title text-iso-dark mb-6">
            Sobre Nós
          </h1>
          <div className="bg-card rounded-lg shadow-card p-12">
            <div className="w-16 h-16 bg-iso-red rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-iso-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-iso-dark mb-4">
              Em Desenvolvimento
            </h2>
            <p className="text-iso-gray leading-relaxed">
              Estamos preparando uma página completa sobre nossa história, missão, visão e valores. Conheca nossa equipe de especialistas, nossa trajetória de sucesso e os diferenciais que fazem da ISO-Automação referência no mercado de automação.
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

export default About;