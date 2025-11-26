import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Heart, Clock, Users, Shield, Lightbulb, MapPin, Navigation } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; color: string }> = ({ icon, title, description, color }) => (
  <div className="bg-white p-6 rounded-3xl shadow-lg border-b-4 hover:-translate-y-2 transition-transform duration-300" style={{ borderColor: color }}>
    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 text-white" style={{ backgroundColor: color }}>
      {icon}
    </div>
    <h3 className="font-baloo text-xl font-bold mb-2 text-brown">{title}</h3>
    <p className="text-gray-600 font-nunito">{description}</p>
  </div>
);

const StageCard: React.FC<{ title: string; age: string; image: string; link: string; color: string }> = ({ title, age, image, link, color }) => (
  <Link to={link} className="group relative overflow-hidden rounded-[2rem] shadow-xl aspect-[4/5] block">
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
    <img 
      src={image} 
      alt={title} 
      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      loading="lazy"
    />
    <div className="absolute bottom-0 left-0 p-6 z-20 text-white w-full">
      <div className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 uppercase tracking-wide" style={{ backgroundColor: color }}>
        {age}
      </div>
      <h3 className="font-baloo text-2xl font-bold mb-1 group-hover:text-yellow transition-colors">{title}</h3>
      <div className="flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
        Saiba mais <ArrowRight size={16} />
      </div>
    </div>
  </Link>
);

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/school_hero/1920/1080" 
            alt="Crianças brincando" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brown/40 mix-blend-multiply"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="font-baloo text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 drop-shadow-md">
              Experiências que <span className="text-yellow">transformam</span>
            </h1>
            <p className="font-nunito text-xl md:text-2xl mb-8 leading-relaxed text-gray-100">
              Uma escola que acolhe, respeita e estimula o desenvolvimento integral do seu filho.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contato">
                <Button size="lg" className="w-full sm:w-auto">Agendar Visita</Button>
              </Link>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto bg-green hover:bg-green/90 border-none">
                  Fale no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-[calc(100%+1.3px)] h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FAFAFA"></path>
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Bem-vindo à Escola Novo Mundo" 
            subtitle="Nosso propósito é preparar cidadãos confiantes, criativos e capazes de construir um novo mundo."
            color="turquoise"
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-turquoise rounded-full opacity-50 blur-xl"></div>
              <img 
                src="https://picsum.photos/seed/kids_learning/600/400" 
                alt="Alunos aprendendo" 
                className="rounded-3xl shadow-xl relative z-10 w-full"
                loading="lazy"
              />
            </div>
            <div className="space-y-6">
              <p className="font-nunito text-lg text-gray-700">
                Acreditamos em uma educação que transforma vidas. Aqui, cada criança é acolhida como um ser humano completo — emocional, intelectual e socialmente.
              </p>
              <ul className="space-y-3 font-nunito">
                {[
                  'Acolhimento e atenção individualizada',
                  'Ambiente lúdico, seguro e estimulante',
                  'Foco no desenvolvimento integral',
                  'Professores qualificados'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="bg-beige p-1 rounded-full">
                      <Star size={16} className="text-orange" fill="currentColor" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/sobre" className="inline-block mt-4">
                <Button variant="outline">Conheça nossa História</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Stages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle title="Nossos Ciclos Educacionais" subtitle="Uma jornada de aprendizado respeitando cada fase do desenvolvimento." />
          
          <div className="grid md:grid-cols-3 gap-8">
            <StageCard 
              title="Educação Infantil" 
              age="1 a 5 anos" 
              image="https://picsum.photos/seed/infant_school/400/500" 
              link="/infantil" 
              color="#0EAD9C" // Turquoise
            />
            <StageCard 
              title="Ensino Fundamental" 
              age="Anos Iniciais" 
              image="https://picsum.photos/seed/elementary_school/400/500" 
              link="/fundamental" 
              color="#E4742F" // Orange
            />
             <StageCard 
              title="Período Integral" 
              age="Opcional" 
              image="https://picsum.photos/seed/after_school/400/500" 
              link="/integral" 
              color="#F4C842" // Yellow
            />
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-beige/30">
        <div className="container mx-auto px-4">
          <SectionTitle title="Por que escolher a Novo Mundo?" align="center" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={<Heart size={24} />} 
              title="Socioemocional" 
              description="Desenvolvimento de empatia, cooperação e autoconfiança integrados ao currículo." 
              color="#F26A5F"
            />
            <FeatureCard 
              icon={<Lightbulb size={24} />} 
              title="Projetos Inovadores" 
              description="Metodologia ativa com projetos interdisciplinares que despertam a curiosidade." 
              color="#F4C842"
            />
            <FeatureCard 
              icon={<Shield size={24} />} 
              title="Ambiente Seguro" 
              description="Monitoramento constante e protocolos de segurança para sua tranquilidade." 
              color="#0EAD9C"
            />
             <FeatureCard 
              icon={<Users size={24} />} 
              title="Parceria Família" 
              description="Comunicação aberta e constante através de app, reuniões e eventos." 
              color="#E4742F"
            />
             <FeatureCard 
              icon={<Clock size={24} />} 
              title="Rotina Planejada" 
              description="Equilíbrio entre aprendizado, brincadeira, descanso e alimentação." 
              color="#7EC34D"
            />
             <FeatureCard 
              icon={<Star size={24} />} 
              title="Equipe Qualificada" 
              description="Educadores em constante formação e apaixonados pelo que fazem." 
              color="#3E3534"
            />
          </div>
        </div>
      </section>

      {/* Location / Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
            {/* Content Side */}
            <div className="p-8 md:p-12 md:w-1/3 flex flex-col justify-center bg-turquoise/5">
              <div className="inline-flex items-center gap-2 text-turquoise font-bold uppercase tracking-wider text-sm mb-4">
                <MapPin size={18} />
                Localização
              </div>
              <h2 className="font-baloo text-3xl font-bold text-brown mb-4">
                Venha nos visitar
              </h2>
              <p className="font-nunito text-lg text-gray-600 mb-8">
                Estamos localizados em um bairro tranquilo e de fácil acesso. Agende sua visita e venha conhecer nossa estrutura.
              </p>
              
              <div className="space-y-2 mb-8 font-nunito text-gray-700">
                <p><strong>Rua das Flores, 123</strong></p>
                <p>Jardim Novo Mundo</p>
                <p>São Paulo - SP</p>
              </div>

              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Rua+das+Flores,+123,+Sao+Paulo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button className="w-full flex items-center justify-center gap-2">
                  <Navigation size={20} />
                  Traçar Rota Agora
                </Button>
              </a>
            </div>

            {/* Map Side */}
            <div className="md:w-2/3 h-80 md:h-auto relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197586022881!2d-46.65207798440701!3d-23.561348884683057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1623345678901!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-turquoise text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-baloo text-3xl md:text-4xl font-bold mb-6">
            Venha fazer parte da nossa história
          </h2>
          <p className="font-nunito text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Agende uma visita e conheça de perto nossa estrutura e proposta pedagógica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link to="/contato">
               <button className="px-8 py-3.5 bg-white text-turquoise font-baloo font-bold text-lg rounded-full hover:shadow-lg hover:scale-105 transition-all">
                 Agendar Visita Agora
               </button>
             </Link>
             <Link to="/estrutura">
               <button className="px-8 py-3.5 border-2 border-white text-white font-baloo font-bold text-lg rounded-full hover:bg-white/10 transition-all">
                 Ver Estrutura
               </button>
             </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;