import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { Send, User, Calendar, Phone, BookOpen, MessageSquare } from 'lucide-react';

const Enrollment: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    birthDate: '',
    grade: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format the message for WhatsApp
    const text = `*Olá! Gostaria de informações sobre Matrículas na Escola Novo Mundo.* 🏫\n\n` +
      `👤 *Nome do Responsável:* ${formData.parentName}\n` +
      `👶 *Nome do Aluno(a):* ${formData.studentName}\n` +
      `🎂 *Data de Nascimento:* ${formData.birthDate}\n` +
      `📚 *Etapa de Interesse:* ${formData.grade}\n` +
      `📱 *Telefone:* ${formData.phone}\n` +
      `💬 *Mensagem/Obs:* ${formData.message || 'Sem observações'}`;

    const phoneNumber = '5532999682048'; // User provided number
    const encodedMessage = encodeURIComponent(text);
    
    // Open WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-turquoise text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
          <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFFFFF" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.1,34.3C60,45.7,49.1,54.9,37.3,62.8C25.5,70.7,12.7,77.3,-0.9,78.9C-14.5,80.5,-29,77.1,-41.8,69.7C-54.6,62.3,-65.7,50.9,-73.9,37.6C-82.1,24.3,-87.4,9.1,-86.1,-5.6C-84.8,-20.3,-76.9,-34.5,-66.2,-46.3C-55.5,-58.1,-42,-67.5,-28.4,-75.1C-14.8,-82.7,-1.1,-88.5,13,-89.2L27.1,-89.9Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="font-baloo text-4xl md:text-5xl font-bold mb-4">Matrículas Abertas</h1>
          <p className="font-nunito text-xl max-w-2xl mx-auto opacity-90">
            Garanta o futuro do seu filho em uma escola que acolhe e transforma.
            Preencha o formulário abaixo para iniciar o atendimento via WhatsApp.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <SectionTitle title="Ficha de Interesse" subtitle="Envie seus dados e nossa equipe entrará em contato instantaneamente." align="center" />

          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            
            {/* Responsável */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="col-span-2">
                <label className="block text-gray-700 font-bold font-nunito mb-2 flex items-center gap-2">
                  <User size={18} className="text-turquoise" /> Nome do Responsável
                </label>
                <input 
                  type="text" 
                  name="parentName"
                  required
                  value={formData.parentName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 outline-none transition-all"
                  placeholder="Seu nome completo"
                />
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700 font-bold font-nunito mb-2 flex items-center gap-2">
                  <Phone size={18} className="text-turquoise" /> Telefone / WhatsApp
                </label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 outline-none transition-all"
                  placeholder="(DDD) 99999-9999"
                />
              </div>
              
               <div className="col-span-2 md:col-span-1">
                <label className="block text-gray-700 font-bold font-nunito mb-2 flex items-center gap-2">
                  <BookOpen size={18} className="text-turquoise" /> Etapa de Interesse
                </label>
                <select 
                  name="grade"
                  required
                  value={formData.grade}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 outline-none transition-all bg-white"
                >
                  <option value="">Selecione...</option>
                  <option value="Educação Infantil (1 a 5 anos)">Educação Infantil (1 a 5 anos)</option>
                  <option value="Ensino Fundamental (1º ao 5º ano)">Ensino Fundamental (1º ao 5º ano)</option>
                  <option value="Período Integral">Período Integral</option>
                  <option value="Ainda não sei">Ainda não sei</option>
                </select>
              </div>
            </div>

            {/* Aluno */}
            <div className="bg-beige/30 p-6 rounded-2xl border border-beige space-y-6">
              <h3 className="font-baloo text-xl font-bold text-brown">Dados do Aluno(a)</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="block text-gray-700 font-bold font-nunito mb-2 flex items-center gap-2">
                    <User size={18} className="text-orange" /> Nome da Criança
                  </label>
                  <input 
                    type="text" 
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all"
                    placeholder="Nome do aluno"
                  />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label className="block text-gray-700 font-bold font-nunito mb-2 flex items-center gap-2">
                    <Calendar size={18} className="text-orange" /> Data de Nascimento
                  </label>
                  <input 
                    type="date" 
                    name="birthDate"
                    required
                    value={formData.birthDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-orange focus:ring-2 focus:ring-orange/20 outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Mensagem */}
            <div>
              <label className="block text-gray-700 font-bold font-nunito mb-2 flex items-center gap-2">
                <MessageSquare size={18} className="text-turquoise" /> Mensagem ou Dúvidas (Opcional)
              </label>
              <textarea 
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-turquoise focus:ring-2 focus:ring-turquoise/20 outline-none transition-all"
                placeholder="Gostaria de saber valores, horários, etc..."
              ></textarea>
            </div>

            <div className="pt-4">
              <Button type="submit" fullWidth size="lg" className="flex items-center justify-center gap-3 py-4 text-xl shadow-xl hover:shadow-2xl hover:-translate-y-1">
                <Send size={24} />
                Enviar Solicitação pelo WhatsApp
              </Button>
              <p className="text-center text-sm text-gray-500 mt-4 font-nunito">
                Ao clicar em enviar, você será redirecionado para o WhatsApp da escola.
              </p>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;