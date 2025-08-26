import { useState } from 'react';

const InteractiveMap = () => {
  const [activeTooltip, setActiveTooltip] = useState(null);

  const mapPoints = [
    {
      id: 'industria',
      x: '65%',
      y: '45%',
      title: 'Indústria',
      description: 'Automação Industrial - Controle de máquinas e aumento de produtividade.',
    },
    {
      id: 'campo',
      x: '25%',
      y: '30%',
      title: 'Campo',
      description: 'Automação Agrícola - Otimização de irrigação e colheita.',
    },
    {
      id: 'residencia',
      x: '45%',
      y: '55%',
      title: 'Residência',
      description: 'Automação Residencial - Conforto e economia de energia.',
    },
    {
      id: 'hoteis',
      x: '50%',
      y: '40%',
      title: 'Hotéis',
      description: 'Automação Hoteleira - Eficiência em gestão e segurança.',
    },
    {
      id: 'porto',
      x: '85%',
      y: '65%',
      title: 'Porto',
      description: 'Automação Portuária - Logística e operação otimizada.',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-background-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-section-title text-iso-dark mb-4">
            Áreas de Atuação
          </h2>
          <p className="text-lg text-iso-gray max-w-2xl mx-auto">
            Explore nossos campos de especialização e descubra como podemos atender às necessidades específicas do seu setor.
          </p>
        </div>

        {/* Interactive Map */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-iso-white rounded-lg shadow-card overflow-hidden">
            {/* Map Image */}
            <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
              <img
                src="/lovable-uploads/1c26f2e2-ba3e-4d93-aba0-bc71e65906f5.png"
                alt="Mapa interativo das áreas de atuação ISO-Automação"
                className="w-full h-full object-cover"
              />
              
              {/* Interactive Points */}
              {mapPoints.map((point) => (
                <div
                  key={point.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2"
                  style={{ left: point.x, top: point.y }}
                >
                  {/* Point Circle */}
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveTooltip(point.id)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <div className="w-6 h-6 bg-iso-red rounded-full cursor-pointer hover:scale-125 transition-transform duration-200 animate-pulse">
                      <div className="absolute inset-0 bg-iso-red rounded-full animate-ping opacity-75"></div>
                    </div>
                    
                    {/* Connection Line */}
                    <div className="absolute top-1/2 left-1/2 w-8 h-px bg-iso-dark opacity-60 transform -translate-y-1/2"></div>
                  </div>

                  {/* Tooltip */}
                  {activeTooltip === point.id && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 z-10">
                      <div className="bg-iso-dark text-iso-white px-4 py-3 rounded-lg shadow-lg max-w-xs min-w-[200px]">
                        <h4 className="font-semibold text-iso-red mb-1">{point.title}</h4>
                        <p className="text-sm text-gray-300">{point.description}</p>
                      </div>
                      {/* Arrow */}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-iso-dark"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-iso-white/95 backdrop-blur-sm rounded-lg p-4 shadow-card">
              <h4 className="font-semibold text-iso-dark mb-3 text-sm">Áreas de Especialização</h4>
              <div className="space-y-2">
                {mapPoints.map((point) => (
                  <div
                    key={point.id}
                    className="flex items-center space-x-2 text-xs cursor-pointer hover:text-iso-red transition-colors"
                    onMouseEnter={() => setActiveTooltip(point.id)}
                    onMouseLeave={() => setActiveTooltip(null)}
                  >
                    <div className="w-2 h-2 bg-iso-red rounded-full flex-shrink-0"></div>
                    <span className={activeTooltip === point.id ? 'text-iso-red font-medium' : 'text-iso-gray'}>
                      {point.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Instructions */}
            <div className="absolute top-4 right-4 bg-iso-white/95 backdrop-blur-sm rounded-lg p-3 shadow-card md:hidden">
              <p className="text-xs text-iso-gray">Toque nos pontos vermelhos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;