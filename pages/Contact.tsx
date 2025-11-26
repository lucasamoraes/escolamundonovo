import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
       <div className="bg-orange text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-baloo text-4xl md:text-5xl font-bold mb-4">Fale Conosco</h1>
          <p className="font-nunito text-xl max-w-2xl mx-auto opacity-90">
            Estamos ansiosos para receber sua visita e apresentar nossa escola.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <SectionTitle title="Informações de Contato" align="left" />
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-turquoise/10 p-3 rounded-full text-turquoise">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-baloo text-xl font-bold text-brown">Endereço</h3>
                  <p className="font-nunito text-gray-600">Rua das Flores, 123<br/>Jardim Novo Mundo, São Paulo - SP</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-turquoise/10 p-3 rounded-full text-turquoise">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-baloo text-xl font-bold text-brown">Telefones</h3>
                  <p className="font-nunito text-gray-600">(11) 9999-9999<br/>(11) 98888-8888 (WhatsApp)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-turquoise/10 p-3 rounded-full text-turquoise">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-baloo text-xl font-bold text-brown">E-mail</h3>
                  <p className="font-nunito text-gray-600">contato@escolanovomundo.com.br<br/>secretaria@escolanovomundo.com.br</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-turquoise/10 p-3 rounded-full text-turquoise">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-baloo text-xl font-bold text-brown">Horário de Atendimento</h3>
                  <p className="font-nunito text-gray-600">Segunda a Sexta: 07h às 19h</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden shadow-inner flex items-center justify-center relative">
               <img 
                 src="https://picsum.photos/seed/map_location/600/300" 
                 alt="Mapa da localização" 
                 className="absolute inset-0 w-full h-full object-cover opacity-50"
               />
               <span className="relative z-10 bg-white px-4 py-2 rounded shadow font-bold text-gray-500">Google Maps Embed Aqui</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-8 rounded-3xl shadow-lg border border-gray-100">
            <h3 className="font-baloo text-2xl font-bold text-brown mb-6">Envie uma mensagem</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1 font-nunito">Nome Completo</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 outline-none transition-all" placeholder="Seu nome" />
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1 font-nunito">E-mail</label>
                  <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 outline-none transition-all" placeholder="seu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1 font-nunito">Telefone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 outline-none transition-all" placeholder="(11) 99999-9999" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1 font-nunito">Assunto</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 outline-none transition-all bg-white">
                  <option>Agendamento de Visita</option>
                  <option>Matrículas</option>
                  <option>Dúvidas Pedagógicas</option>
                  <option>Outros</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1 font-nunito">Mensagem</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 outline-none transition-all" placeholder="Como podemos ajudar?"></textarea>
              </div>

              <Button fullWidth size="lg" className="mt-4">Enviar Mensagem</Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;