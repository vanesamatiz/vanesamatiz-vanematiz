import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Youtube, Music, MessageCircle, ArrowRight, Star, Heart, ClipboardCheck, Headphones, BookOpen, ShoppingBag, Book, Flower2, ShieldCheck, Facebook, Linkedin } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { WHATSAPP_URL, SOCIAL_LINKS, BOOKING_URL, IMAGES } from '@/constants';
import { Calendar } from 'lucide-react';

const links = [
  {
    title: "Agenda tu sesión",
    description: "Reserva tu consulta individual o de pareja.",
    href: BOOKING_URL,
    icon: <Star className="text-brand-wine" />,
    primary: true,
    external: true
  },
  {
    title: "Test de relación",
    description: "¿Tu relación está pasando por una crisis? Descúbrelo aquí.",
    href: "/test/relacion",
    icon: <ClipboardCheck className="text-brand-wine" />,
    featured: true
  },
  {
    title: "Test Bienestar Femenino",
    description: "Reflexiona sobre tu relación con el placer y tu cuerpo.",
    href: "/test/femenino",
    icon: <Flower2 className="text-brand-wine" />
  },
  {
    title: "Test Bienestar Masculino",
    description: "Analiza el impacto del estrés y el deseo en tu vida sexual.",
    href: "/test/masculino",
    icon: <ShieldCheck className="text-brand-wine" />
  },
  {
    title: "Podcast Íntimamente",
    description: "Escucha el podcast sobre sexualidad, relaciones y bienestar íntimo.",
    href: "/podcast",
    icon: <Headphones className="text-brand-wine" />
  },
  {
    title: "Tienda de bienestar íntimo",
    description: "Explora productos diseñados para el bienestar íntimo.",
    href: "/tienda",
    icon: <ShoppingBag className="text-brand-wine" />
  },
  {
    title: "Blog",
    description: "Artículos sobre sexualidad, relaciones y bienestar emocional.",
    href: "/blog",
    icon: <BookOpen className="text-brand-wine" />
  },
  {
    title: "Recursos gratuitos",
    description: "Meditaciones y contenido educativo sobre bienestar emocional.",
    href: "/recursos",
    icon: <Book className="text-brand-wine" />
  },
  {
    title: "Conferencias y talleres",
    description: "Invita a Vanesa Matiz a conferencias o eventos.",
    href: "/conferencias",
    icon: <Star className="text-brand-wine" />
  }
];

export default function BioPage() {
  return (
    <div className="min-h-screen bg-brand-pink-light/30 pb-20">
      <SEO 
        title="Vanesa Matiz | Enlaces y Servicios" 
        description="Acceso rápido a los servicios, programas, tests y contenidos de Vanesa Matiz, Psicóloga y Sexóloga Clínica. Todo en un solo lugar."
        keywords="Vanesa Matiz enlaces, linktree Vanesa Matiz, servicios psicología, contacto Vanesa Matiz"
      />

      <div className="max-w-md mx-auto px-4 pt-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-brand-wine rounded-full scale-105 blur-md opacity-20" />
            <img 
              src={IMAGES.bio} 
              alt="Vanesa Matiz" 
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
              referrerPolicy="no-referrer"
            />
          </div>
          <h1 className="text-2xl font-bold text-brand-wine mb-2">Vanesa Matiz</h1>
          <div className="space-y-1 text-sm text-gray-600 mb-6">
            <p className="font-semibold">Psicóloga de pareja y sexóloga clínica</p>
            <p>Especialista en bienestar íntimo, sexualidad y relaciones</p>
            <p className="text-[10px] uppercase tracking-widest font-bold text-brand-wine/60 mt-2">Junta Directiva ACSEX | COLPSIC | Investigación Científica (ACSEX y COLPSIC)</p>
          </div>
          
          {/* Psychological conversion text */}
          <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-brand-pink/30 mb-8 shadow-sm">
            <p className="text-sm font-medium text-brand-wine leading-relaxed">
              "Tu bienestar no puede esperar. Si sientes que tu relación o tu paz interior se están agotando, este es el momento de actuar. Agenda hoy y comencemos a transformar tu realidad."
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-4">
          {links.map((link, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-2xl transition-all shadow-sm hover:shadow-md border",
                      link.primary 
                        ? "bg-brand-wine text-white border-brand-wine scale-105" 
                        : link.featured
                        ? "bg-brand-pink-light border-brand-pink text-brand-wine ring-2 ring-brand-wine/10"
                        : "bg-white text-gray-800 border-brand-pink/10 hover:border-brand-wine/30"
                    )}
                  >
                    <div className={cn(
                      "p-2 rounded-xl shrink-0",
                      link.primary ? "bg-white/20" : link.featured ? "bg-white" : "bg-brand-pink-light"
                    )}>
                      {React.cloneElement(link.icon as React.ReactElement, { 
                        className: link.primary ? "text-white" : "text-brand-wine",
                        size: 24 
                      })}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-sm">{link.title}</h3>
                      <p className={cn(
                        "text-[11px] leading-tight",
                        link.primary ? "text-brand-pink/80" : link.featured ? "text-brand-wine/60" : "text-gray-400"
                      )}>
                        {link.description}
                      </p>
                    </div>
                    <ArrowRight size={16} className={link.primary ? "text-brand-pink" : link.featured ? "text-brand-wine" : "text-gray-300"} />
                  </a>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "flex items-center gap-4 p-4 rounded-2xl transition-all shadow-sm hover:shadow-md border",
                      link.primary 
                        ? "bg-brand-wine text-white border-brand-wine scale-105" 
                        : link.featured
                        ? "bg-brand-pink-light border-brand-pink text-brand-wine ring-2 ring-brand-wine/10"
                        : "bg-white text-gray-800 border-brand-pink/10 hover:border-brand-wine/30"
                    )}
                  >
                    <div className={cn(
                      "p-2 rounded-xl shrink-0",
                      link.primary ? "bg-white/20" : link.featured ? "bg-white" : "bg-brand-pink-light"
                    )}>
                      {React.cloneElement(link.icon as React.ReactElement, { 
                        className: link.primary ? "text-white" : "text-brand-wine",
                        size: 24 
                      })}
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-sm">{link.title}</h3>
                      <p className={cn(
                        "text-[11px] leading-tight",
                        link.primary ? "text-brand-pink/80" : link.featured ? "text-brand-wine/60" : "text-gray-400"
                      )}>
                        {link.description}
                      </p>
                    </div>
                    <ArrowRight size={16} className={link.primary ? "text-brand-pink" : link.featured ? "text-brand-wine" : "text-gray-300"} />
                  </Link>
                )}
            </motion.div>
          ))}
        </div>

        {/* Socials */}
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <a 
            href={SOCIAL_LINKS.instagram} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brand-wine hover:scale-110 transition-transform"
            title="Instagram"
          >
            <Instagram size={24} />
          </a>
          <a 
            href={SOCIAL_LINKS.facebook} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brand-wine hover:scale-110 transition-transform"
            title="Facebook"
          >
            <Facebook size={24} />
          </a>
          <a 
            href={SOCIAL_LINKS.tiktok} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brand-wine hover:scale-110 transition-transform"
            title="TikTok"
          >
            <svg size={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
          </a>
          <a 
            href={SOCIAL_LINKS.youtube} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brand-wine hover:scale-110 transition-transform"
            title="YouTube"
          >
            <Youtube size={24} />
          </a>
          <a 
            href={SOCIAL_LINKS.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brand-wine hover:scale-110 transition-transform"
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-brand-wine hover:scale-110 transition-transform"
            title="WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
        </div>

        {/* Final CTA */}
        <div className="mt-16 bg-brand-wine text-white p-8 rounded-3xl text-center shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-brand-pink/20 rounded-full -ml-12 -mb-12 blur-xl" />
          
          <h2 className="text-xl font-bold mb-4 relative z-10">¿Lista para dar el primer paso?</h2>
          <p className="text-sm text-brand-pink/90 mb-8 relative z-10 leading-relaxed">
            No dejes para mañana la transformación que puedes empezar hoy. Reserva tu consulta ahora mismo.
          </p>
          <a 
            href={BOOKING_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-2 bg-white text-brand-wine px-8 py-4 rounded-full font-bold shadow-lg hover:bg-brand-pink-light transition-all hover:scale-105 active:scale-95 relative z-10"
          >
            <Star size={18} fill="currentColor" />
            RESERVAR MI CONSULTA
          </a>
        </div>

        <div className="text-center mt-12">
          <Link to="/" className="text-[10px] uppercase tracking-widest text-gray-400 font-bold hover:text-brand-wine transition-colors">
            Volver al sitio web principal
          </Link>
        </div>

        {/* Floating CTA for Mobile */}
        <div className="lg:hidden fixed bottom-6 left-6 z-40">
          <a 
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-brand-wine text-white p-4 rounded-full shadow-2xl animate-bounce"
          >
            <Calendar size={24} />
            <span className="font-bold text-sm pr-2">Agendar</span>
          </a>
        </div>
      </div>
    </div>
  );
}
