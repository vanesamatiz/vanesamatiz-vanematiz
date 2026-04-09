import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube, MessageCircle, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { WhatsAppFloatingButton } from './WhatsAppFloatingButton';
import { WHATSAPP_DISPLAY, WHATSAPP_URL, SOCIAL_LINKS, EMAIL, ASSISTANT_EMAIL, LOCATION, BOOKING_URL } from '@/constants';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Tests Gratuitos', href: '/test' },
  { name: 'Terapia y Programas', href: '/terapia' },
  { name: 'Podcast', href: '/podcast' },
  { name: 'Recursos', href: '/recursos' },
  { name: 'Blog', href: '/blog' },
  { name: 'Conferencias', href: '/conferencias' },
  { name: 'Tienda', href: '/tienda' },
  { name: 'Sobre Vanesa', href: '/sobre-vanesa' },
  { name: 'Contacto', href: '/contacto' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-brand-pink/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-bold text-brand-wine tracking-tighter leading-none">VANESA MATIZ</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-medium">Psicóloga & Sexóloga Clínica</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-wine",
                  location.pathname === link.href ? "text-brand-wine" : "text-gray-600"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={BOOKING_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary py-2 px-5 text-sm"
            >
              Agendar Sesión
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-wine p-2">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-brand-pink/20 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 text-base font-medium rounded-md",
                    location.pathname === link.href ? "bg-brand-pink/10 text-brand-wine" : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center btn-primary"
                >
                  Agendar Sesión
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-wine text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col mb-6">
              <span className="text-2xl font-bold tracking-tighter leading-none">VANESA MATIZ</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-pink font-medium">Psicóloga & Sexóloga Clínica</span>
            </Link>
            <p className="text-brand-pink/80 text-sm leading-relaxed">
              Más de 15 años acompañando procesos de bienestar íntimo, sexualidad y relaciones de pareja.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3 text-brand-pink/70 text-sm">
              <li><Link to="/terapia" className="hover:text-white transition-colors">Terapia de Pareja</Link></li>
              <li><Link to="/terapia" className="hover:text-white transition-colors">Terapia Individual</Link></li>
              <li><Link to="/terapia" className="hover:text-white transition-colors">Programas Estructurados</Link></li>
              <li><Link to="/conferencias" className="hover:text-white transition-colors">Talleres y Conferencias</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces</h4>
            <ul className="space-y-3 text-brand-pink/70 text-sm">
              <li><Link to="/sobre-vanesa" className="hover:text-white transition-colors">Sobre Vanesa</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/podcast" className="hover:text-white transition-colors">Podcast Íntimamente</Link></li>
              <li><Link to="/tienda" className="hover:text-white transition-colors">Tienda de Bienestar</Link></li>
              <li><Link to="/formas-de-pago" className="hover:text-white transition-colors font-medium">Formas de Pago</Link></li>
              <li><Link to="/preguntas-frecuentes" className="hover:text-white transition-colors">Preguntas Frecuentes</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                title="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                title="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href={SOCIAL_LINKS.tiktok} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                title="TikTok"
              >
                <svg size={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
              <a 
                href={SOCIAL_LINKS.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                title="YouTube"
              >
                <Youtube size={18} />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                title="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
            <ul className="space-y-3 text-brand-pink/70 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="shrink-0 mt-0.5" />
                <span>{LOCATION}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <div className="flex flex-col">
                  <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
                  <a href={`mailto:${ASSISTANT_EMAIL}`} className="hover:text-white">{ASSISTANT_EMAIL}</a>
                </div>
              </li>
              <li>
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-white transition-colors"
                >
                  <MessageCircle size={16} className="shrink-0" />
                  <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-pink/50">
          <p>© {new Date().getFullYear()} Vanesa Matiz. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/legal" className="hover:text-white">Política de Privacidad</Link>
            <Link to="/legal" className="hover:text-white">Términos y Condiciones</Link>
          </div>
        </div>
      </div>
      <WhatsAppFloatingButton />
    </footer>
  );
}
