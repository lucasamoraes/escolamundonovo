import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MapPin, Instagram, Facebook, Mail, MessageCircle, ChevronDown } from 'lucide-react';
import FloatingWhatsApp from './FloatingWhatsApp';
import Button from './Button';

// NavLink for simple items
const NavLink: React.FC<{ to: string; label: string; mobile?: boolean; onClick?: () => void; highlight?: boolean }> = ({ to, label, mobile, onClick, highlight }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  const baseClasses = "font-baloo font-bold transition-colors";
  const mobileClasses = `block py-3 text-xl border-b border-gray-100 ${highlight ? 'text-orange' : 'text-brown'} hover:text-turquoise`;
  const desktopClasses = `text-lg hover:text-turquoise ${isActive ? 'text-turquoise' : (highlight ? 'text-orange' : 'text-brown')}`;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
    >
      {label}
    </Link>
  );
};

// Dropdown for Desktop
const NavDropdown: React.FC<{ label: string; items: { label: string; path: string }[] }> = ({ label, items }) => {
  const location = useLocation();
  const isActive = items.some(item => item.path === location.pathname);

  return (
    <div className="relative group z-50">
      <button 
        className={`
          flex items-center gap-1 font-baloo font-bold text-lg transition-colors py-4
          ${isActive ? 'text-turquoise' : 'text-brown group-hover:text-turquoise'}
        `}
      >
        {label}
        <ChevronDown size={18} className="mt-0.5" />
      </button>
      
      {/* Dropdown Menu */}
      <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`
              block px-6 py-3 font-baloo font-semibold hover:bg-gray-50 text-lg
              ${location.pathname === item.path ? 'text-turquoise bg-turquoise/5' : 'text-brown'}
            `}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEducationOpen, setIsEducationOpen] = useState(true); // Default open on mobile for visibility

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const educationItems = [
    { label: 'Infantil', path: '/infantil' },
    { label: 'Fundamental', path: '/fundamental' },
    { label: 'Período Integral', path: '/integral' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm shadow-sm border-b-4 border-turquoise">
        <div className="container mx-auto px-4 md:px-6 h-24 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="bg-white p-1 rounded-full border-2 border-orange group-hover:scale-105 transition-transform">
               {/* Concept Tree Icon from Brand Guidelines */}
               <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22V12M12 22C10 22 8 20 8 18M12 22C14 22 16 20 16 18M12 12C14.5 12 16 10 16 7C16 4.5 14 2.5 12 2.5C10 2.5 8 4.5 8 7C8 10 9.5 12 12 12Z" stroke="#3E3534" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="6" stroke="#0EAD9C" strokeWidth="1.5" className="fill-beige" />
                  <circle cx="9" cy="6" r="1" fill="#E4742F" />
                  <circle cx="14" cy="8" r="1" fill="#F4C842" />
                  <circle cx="12" cy="4" r="1" fill="#7EC34D" />
                  <circle cx="10" cy="9" r="1" fill="#F26A5F" />
               </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-baloo text-2xl md:text-3xl font-bold text-turquoise">Escola</span>
              <span className="font-baloo text-2xl md:text-3xl font-bold text-turquoise">Novo Mundo</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/sobre" label="Sobre" />
            <NavDropdown label="Educação" items={educationItems} />
            <NavLink to="/estrutura" label="Estrutura" />
            <NavLink to="/matriculas" label="Matrículas" highlight />
            <NavLink to="/contato" label="Contato" />
            
            <Link to="/contato" className="ml-4">
              <Button size="md">Agendar Visita</Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-brown hover:text-turquoise transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-24 left-0 w-full bg-white border-t border-gray-100 shadow-xl p-6 flex flex-col h-[calc(100vh-6rem)] overflow-y-auto">
            <NavLink to="/" label="Home" mobile onClick={closeMenu} />
            <NavLink to="/sobre" label="Sobre" mobile onClick={closeMenu} />
            
            {/* Mobile Dropdown (Accordion) */}
            <div className="border-b border-gray-100 py-3">
              <button 
                className="flex items-center justify-between w-full font-baloo font-bold text-xl text-brown"
                onClick={() => setIsEducationOpen(!isEducationOpen)}
              >
                Educação
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform ${isEducationOpen ? 'rotate-180' : ''}`} 
                />
              </button>
              
              {isEducationOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {educationItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={closeMenu}
                      className="block py-2 text-lg text-gray-600 font-nunito hover:text-turquoise"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/estrutura" label="Estrutura" mobile onClick={closeMenu} />
            <NavLink to="/matriculas" label="Matrículas" mobile onClick={closeMenu} highlight />
            <NavLink to="/contato" label="Contato" mobile onClick={closeMenu} />
            
            <div className="mt-8">
              <Link to="/contato" onClick={closeMenu}>
                <Button fullWidth size="lg">Agendar Visita</Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brown text-white py-12">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          
          {/* Brand & Info */}
          <div>
            <h3 className="font-baloo text-2xl font-bold mb-4 text-turquoise">Escola Novo Mundo</h3>
            <p className="font-nunito text-gray-300 mb-6 text-lg">
              Preparando cidadãos confiantes, criativos e capazes de construir um novo mundo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-turquoise transition-colors"><Instagram size={24} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-turquoise transition-colors"><Facebook size={24} /></a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-turquoise transition-colors"><MessageCircle size={24} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-baloo text-xl font-bold mb-4 text-yellow">Links Rápidos</h4>
            <ul className="space-y-3 text-lg font-nunito">
              <li><Link to="/matriculas" className="hover:text-turquoise transition-colors">Matrículas Abertas</Link></li>
              <li><Link to="/sobre" className="hover:text-turquoise transition-colors">Sobre a Escola</Link></li>
              <li><Link to="/infantil" className="hover:text-turquoise transition-colors">Educação Infantil</Link></li>
              <li><Link to="/fundamental" className="hover:text-turquoise transition-colors">Ensino Fundamental</Link></li>
              <li><Link to="/integral" className="hover:text-turquoise transition-colors">Período Integral</Link></li>
              <li><Link to="/estrutura" className="hover:text-turquoise transition-colors">Nossa Estrutura</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-baloo text-xl font-bold mb-4 text-yellow">Contato</h4>
            <ul className="space-y-4 font-nunito text-lg">
              <li className="flex items-start gap-3">
                <MapPin className="text-orange mt-1 shrink-0" size={20} />
                <span>Rua das Flores, 123 - Jardim Novo Mundo<br/>São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-orange shrink-0" size={20} />
                <span>(11) 9999-9999</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-orange shrink-0" size={20} />
                <span>contato@escolanovomundo.com.br</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400 font-nunito">
          © {new Date().getFullYear()} Escola Novo Mundo. Todos os direitos reservados.
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;