import React from 'react';
import SectionTitle from '../components/SectionTitle';

const ValueCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-turquoise transition-colors">
    <h3 className="font-baloo text-xl font-bold text-turquoise mb-2">{title}</h3>
    <p className="text-gray-600 font-nunito">{description}</p>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Image */}
      <div className="relative h-64 md:h-80 w-full overflow-hidden">
        <img 
          src="https://picsum.photos/seed/school_building/1920/600" 
          alt="Escola Novo Mundo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="font-baloo text-4xl md:text-5xl font-bold text-white">Sobre a Escola</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Mission / Message */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-md mb-16 -mt-24 relative z-10">
          <SectionTitle title="Mensagem Institucional" align="center" />
          <blockquote className="text-center font-nunito text-xl text-gray-700 italic leading-relaxed">
            "A Escola Novo Mundo acredita em uma educação que transforma vidas. Aqui, cada criança é
            acolhida, respeitada e estimulada a crescer como ser humano completo — emocional, intelectual e
            socialmente. Nosso propósito é preparar cidadãos confiantes, criativos e capazes de construir um
            novo mundo."
          </blockquote>
        </div>

        {/* History & Pedagogy */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
           <div className="order-2 md:order-1">
             <img 
              src="https://picsum.photos/seed/teacher_talking/800/600" 
              alt="Professora com alunos" 
              className="rounded-3xl shadow-lg rotate-1 hover:rotate-0 transition-transform duration-500"
            />
           </div>
           <div className="order-1 md:order-2 space-y-6">
             <h2 className="font-baloo text-3xl font-bold text-brown">Nossa Proposta Pedagógica</h2>
             <p className="font-nunito text-gray-600 leading-relaxed">
               Nossa metodologia combina o ensino tradicional de excelência com abordagens inovadoras que colocam o aluno como protagonista do aprendizado. Valorizamos a construção do conhecimento através da experiência, do questionamento e da interação.
             </p>
             <p className="font-nunito text-gray-600 leading-relaxed">
               Adotamos uma abordagem humanista, onde o desenvolvimento socioemocional tem o mesmo peso que o desenvolvimento cognitivo. Acreditamos que aprender deve ser um ato de alegria e descoberta.
             </p>
           </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <SectionTitle title="Valores e Diferenciais" subtitle="Os pilares que sustentam nossa educação" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ValueCard title="Acolhimento" description="Atenção individualizada para que cada aluno se sinta seguro e amado." />
            <ValueCard title="Humanismo" description="Olhar para o ser humano em sua totalidade, respeitando sua essência." />
            <ValueCard title="Integralidade" description="Desenvolvimento físico, cognitivo, emocional e social integrados." />
            <ValueCard title="Propósito" description="Ensino contextualizado que faz sentido para a vida do aluno." />
            <ValueCard title="Qualificação" description="Professores especialistas e em constante aprimoramento." />
            <ValueCard title="Parceria" description="Conexão profunda e transparente com as famílias." />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;