import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Instagram, Youtube, Linkedin, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { SOCIAL_LINKS, WHATSAPP_URL } from '@/constants';

export default function ThankYou() {
  return (
    <div className="pt-20 min-h-screen bg-brand-pink-light/20 flex items-center">
      <SEO 
        title="¡Gracias! | Vanesa Matiz" 
        description="Gracias por ponerte en contacto o agendar tu sesión. Pronto nos comunicaremos contigo."
      />

      <div className="container-custom py-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl border border-brand-pink/20"
          >
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={48} />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-brand-wine mb-6">¡Muchas Gracias!</h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Tu solicitud ha sido recibida con éxito. Estoy muy feliz de poder acompañarte en este camino hacia tu bienestar.
            </p>

            <div className="bg-brand-pink-light/30 rounded-2xl p-6 mb-10 text-left">
              <h3 className="font-bold text-brand-wine mb-2">¿Qué sigue ahora?</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="w-5 h-5 bg-brand-wine text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5">1</span>
                  <span>Si agendaste una sesión, recibirás un correo de confirmación con el enlace de conexión.</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-5 h-5 bg-brand-wine text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5">2</span>
                  <span>Si enviaste un mensaje, te responderé en un plazo máximo de 24-48 horas hábiles.</span>
                </li>
                <li className="flex gap-2">
                  <span className="w-5 h-5 bg-brand-wine text-white rounded-full flex items-center justify-center text-[10px] shrink-0 mt-0.5">3</span>
                  <span>Si tienes una duda urgente, puedes escribirme directamente por WhatsApp.</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-4 rounded-full font-bold hover:shadow-lg transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp Directo
              </a>
              <Link to="/" className="btn-primary flex items-center justify-center gap-2">
                Volver al Inicio <ArrowRight size={20} />
              </Link>
            </div>

            <div className="pt-10 border-t border-brand-pink/10">
              <p className="text-sm font-bold text-brand-wine mb-6 uppercase tracking-widest">Sígueme para más contenido</p>
              <div className="flex justify-center gap-6">
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-wine hover:text-brand-pink transition-colors">
                  <Instagram size={28} />
                </a>
                <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="text-brand-wine hover:text-brand-pink transition-colors">
                  <Youtube size={28} />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-wine hover:text-brand-pink transition-colors">
                  <Linkedin size={28} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
