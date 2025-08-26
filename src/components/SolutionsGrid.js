import { Link } from 'react-router-dom';

const SolutionsGrid = () => {
  const solutions = [
    {
      id: 1,
      title: 'Automatização de Projetos',
      description: 'Desenvolvemos projetos personalizados para otimizar seus processos, garantindo eficiência e redução de custos desde o planejamento até a execução.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Automação Industrial',
      description: 'Soluções integradas para controle de máquinas e processos industriais, aumentando a produtividade e a segurança operacional.',
      image: 'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Diagnóstico de Manutenção',
      description: 'Realizamos análises preditivas e preventivas para evitar falhas, reduzir custos e garantir a continuidade dos seus processos.',
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Automação Residencial',
      description: 'Tecnologia inteligente para transformar sua casa em um ambiente conectado, com conforto, segurança e economia de energia.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-iso-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title text-iso-dark mb-4">
            Principais Soluções
          </h2>
          <p className="text-lg text-iso-gray max-w-2xl mx-auto">
            Descubra como nossas soluções podem transformar seu negócio e elevar sua operação a um novo patamar de eficiência.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {solutions.map((solution) => (
            <Link
              key={solution.id}
              to="/servicos"
              className="group bg-card rounded-lg shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={solution.image}
                  alt={solution.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                
                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-iso-white/90 rounded-full flex items-center justify-center text-iso-red">
                  {solution.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-card-title text-iso-dark mb-3 group-hover:text-iso-red transition-colors duration-200">
                  {solution.title}
                </h3>
                <p className="text-iso-gray leading-relaxed text-sm">
                  {solution.description}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="px-6 pb-6">
                <div className="flex items-center text-iso-red opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span className="text-sm font-medium">Saiba mais</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;