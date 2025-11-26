import React from 'react';
import { CheckCircle2, Clock, Calendar, BookOpen, Palette, Brain } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

interface EducationPageProps {
  type: 'infantil' | 'fundamental' | 'integral';
}

const Education: React.FC<EducationPageProps> = ({ type }) => {
  
  const content = {
    infantil: {
      title: "Educação Infantil",
      subtitle: "Creche e Pré-Escola: Onde a descoberta começa.",
      heroImage: "https://picsum.photos/seed/kids_playing_paint/1920/600",
      description: "Na Educação Infantil, o brincar é a principal linguagem. Oferecemos um ambiente rico em estímulos onde a criança desenvolve sua autonomia e protagonismo.",
      details: [
        { label: "Faixas Etárias", value: "Maternal I e II, Jardim I e II" },
        { label: "Foco", value: "Desenvolvimento integral: cognitivo, motor, emocional e social" },
      ],
      features: [
        "Autonomia e protagonismo infantil",
        "Rodas de conversa e hora do conto",
        "Psicomotricidade e expressão corporal",
        "Artes e musicalização",
        "Atividades sensoriais e lúdicas",
        "Brinquedoteca e ampla área externa"
      ],
      routine: "Rotina equilibrada com momentos de atividade dirigida, brincadeira livre, higiene e descanso."
    },
    fundamental: {
      title: "Ensino Fundamental",
      subtitle: "Anos Iniciais: Construindo bases sólidas.",
      heroImage: "https://picsum.photos/seed/kids_reading_book/1920/600",
      description: "Nos Anos Iniciais, focamos na alfabetização estruturada e no desenvolvimento do raciocínio lógico, preparando o aluno para os desafios acadêmicos futuros sem perder a ludicidade.",
      details: [
        { label: "Ciclo", value: "1º ao 5º ano" },
        { label: "Foco", value: "Alfabetização, letramento e raciocínio lógico" },
      ],
      features: [
        "Alfabetização sólida e estruturada",
        "Projetos interdisciplinares",
        "Leitura diária e interpretação de texto",
        "Acompanhamento individualizado",
        "Desenvolvimento socioemocional integrado",
        "Aulas especializadas (Música, Artes, Ed. Física)"
      ],
      routine: "Aulas dinâmicas que integram Linguagens, Matemática, Ciências, História e Geografia."
    },
    integral: {
      title: "Ensino Integral",
      subtitle: "Mais tempo para aprender, brincar e crescer.",
      heroImage: "https://picsum.photos/seed/kids_eating/1920/600",
      description: "O período integral é um diferencial da Escola Novo Mundo, oferecendo segurança para as famílias e enriquecimento curricular para as crianças.",
      details: [
        { label: "Disponibilidade", value: "Opcional para todos os ciclos" },
        { label: "Alimentação", value: "Refeições supervisionadas e balanceadas" },
      ],
      features: [
        "Acompanhamento pedagógico (lição de casa)",
        "Oficinas culturais e artísticas",
        "Recreação guiada e esportes",
        "Desenvolvimento socioemocional",
        "Momentos de descanso apropriados",
        "Segurança e tranquilidade para a família"
      ],
      routine: "Uma extensão da escola com rotina planejada que equilibra deveres e lazer."
    }
  };

  const data = content[type];

  return (
    <div className="bg-white pb-20">
      {/* Hero */}
      <div className="relative h-72 md:h-96 w-full overflow-hidden">
        <img 
          src={data.heroImage}
          alt={data.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-turquoise/80 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="font-baloo text-4xl md:text-6xl font-bold text-white mb-2">{data.title}</h1>
            <p className="font-nunito text-xl text-white/90 max-w-xl">{data.subtitle}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <SectionTitle title="Sobre o Ciclo" align="left" color="orange" />
              <p className="font-nunito text-lg text-gray-700 leading-relaxed mb-8">
                {data.description}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {data.details.map((item, idx) => (
                  <div key={idx} className="bg-gray-50 p-4 rounded-xl border-l-4 border-turquoise">
                    <span className="block text-sm text-gray-500 font-bold uppercase">{item.label}</span>
                    <span className="font-baloo text-lg text-brown font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-baloo text-2xl font-bold text-brown mb-6 flex items-center gap-2">
                <Brain className="text-turquoise" /> O que oferecemos
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {data.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm border border-gray-100">
                    <CheckCircle2 size={20} className="text-green mt-1 shrink-0" />
                    <span className="font-nunito text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery Mini-Section */}
            <div>
              <h3 className="font-baloo text-2xl font-bold text-brown mb-6 flex items-center gap-2">
                <Palette className="text-orange" /> Galeria de Fotos
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[1,2,3,4].map((i) => (
                   <img 
                    key={i}
                    src={`https://picsum.photos/seed/${type}_${i}/300/300`} 
                    alt="Atividade escolar" 
                    className="rounded-xl w-full h-32 object-cover hover:scale-105 transition-transform cursor-pointer shadow-sm"
                  />
                 ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-beige rounded-3xl p-8 sticky top-24">
              <h3 className="font-baloo text-2xl font-bold text-brown mb-4">Rotina</h3>
              <p className="font-nunito text-gray-700 mb-6">{data.routine}</p>
              
              <hr className="border-gray-300 my-6" />
              
              <h4 className="font-baloo text-xl font-bold text-brown mb-4">Atividades Extras</h4>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700 font-nunito"><div className="w-2 h-2 bg-orange rounded-full"></div>Música e Ritmo</li>
                <li className="flex items-center gap-2 text-gray-700 font-nunito"><div className="w-2 h-2 bg-orange rounded-full"></div>Artes Visuais</li>
                <li className="flex items-center gap-2 text-gray-700 font-nunito"><div className="w-2 h-2 bg-orange rounded-full"></div>Projetos Temáticos</li>
              </ul>

              <Link to="/contato" className="block">
                <Button fullWidth>Agendar Visita</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;