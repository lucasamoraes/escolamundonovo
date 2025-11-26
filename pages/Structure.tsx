import React from 'react';
import SectionTitle from '../components/SectionTitle';

const Structure: React.FC = () => {
  const spaces = [
    { title: "Salas de Aula", desc: "Amplas, ventiladas e com mobiliário adequado.", img: "classroom" },
    { title: "Parquinho", desc: "Área externa segura para recreação e socialização.", img: "playground" },
    { title: "Brinquedoteca", desc: "Espaço lúdico com materiais pedagógicos.", img: "toys" },
    { title: "Sala de Leitura", desc: "Acervo diversificado para incentivar o hábito de ler.", img: "library" },
    { title: "Refeitório", desc: "Adaptado para as crianças, limpo e organizado.", img: "cafeteria" },
    { title: "Sala de Artes", desc: "Espaço para criatividade e expressão.", img: "art_room" },
  ];

  return (
    <div className="min-h-screen bg-white">
       <div className="bg-turquoise text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-baloo text-4xl md:text-5xl font-bold mb-4">Nossa Estrutura</h1>
          <p className="font-nunito text-xl max-w-2xl mx-auto opacity-90">
            Um ambiente pensado em cada detalhe para estimular o desenvolvimento e garantir a segurança do seu filho.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {spaces.map((space, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-2xl shadow-lg mb-4 aspect-video relative">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>
                 <img 
                  src={`https://picsum.photos/seed/${space.img}/600/400`} 
                  alt={space.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-baloo text-2xl font-bold text-brown mb-2 group-hover:text-turquoise transition-colors">{space.title}</h3>
              <p className="font-nunito text-gray-600">{space.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gray-50 rounded-3xl p-8 md:p-12 text-center">
          <SectionTitle title="Segurança e Monitoramento" align="center" />
          <p className="max-w-3xl mx-auto font-nunito text-lg text-gray-700 mb-8">
            Contamos com portaria controlada, câmeras de monitoramento nas áreas comuns e protocolos rigorosos de entrada e saída de alunos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
             <span className="bg-white px-6 py-2 rounded-full shadow-sm text-turquoise font-bold font-baloo">Câmeras 24h</span>
             <span className="bg-white px-6 py-2 rounded-full shadow-sm text-turquoise font-bold font-baloo">Controle de Acesso</span>
             <span className="bg-white px-6 py-2 rounded-full shadow-sm text-turquoise font-bold font-baloo">Equipe Treinada</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;