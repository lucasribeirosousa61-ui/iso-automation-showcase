const CompanyPresentation = () => {
  return (
    <section className="py-16 lg:py-24 bg-background-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 text-iso-gray leading-relaxed">
            <p className="text-lg md:text-xl">
              Na <span className="font-bold text-iso-red">ISO-Automação</span>, unimos expertise e inovação para revolucionar a automação industrial e residencial. Com anos de experiência no mercado, somos especialistas em transformar desafios em soluções inteligentes, desde a concepção de projetos até a implementação de sistemas de controle de última geração.
            </p>
            
            <p className="text-lg md:text-xl">
              Nossa missão é clara: oferecer tecnologias avançadas que elevem a segurança, a eficiência e a sustentabilidade dos seus processos. Seja para otimizar a produtividade da sua indústria ou para trazer conforto e praticidade para o seu lar, estamos prontos para ser seu parceiro estratégico na jornada da automação.
            </p>
            
            <p className="text-lg md:text-xl">
              Em um mundo onde a tecnologia avança a cada dia, a <span className="font-bold text-iso-red">ISO-Automação</span> está aqui para garantir que seu negócio esteja sempre um passo à frente.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-iso-red mb-2">500+</div>
              <div className="text-iso-gray">Projetos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-iso-red mb-2">15+</div>
              <div className="text-iso-gray">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-iso-red mb-2">98%</div>
              <div className="text-iso-gray">Satisfação dos Clientes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyPresentation;