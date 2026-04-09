import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '@/components/SEO';
import { useNavigate } from 'react-router-dom';
import { 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  Instagram,
  Youtube,
  Linkedin
} from 'lucide-react';
import { WHATSAPP_URL, EMAIL, LOCATION, SOCIAL_LINKS } from '@/constants';

export default function Contact() {
  const navigate = useNavigate();
  const [formState, setFormState] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formspree.io/f/xkopeoza', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormState('success');
        navigate('/gracias');
      } else {
        setFormState('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormState('error');
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Contacto | Vanesa Matiz - Psicóloga y Sexóloga" 
        description="Ponte en contacto con Vanesa Matiz para consultas sobre terapia de pareja, sexología clínica y bienestar emocional. Atención 100% Online."
        keywords="contacto psicóloga, cita sexóloga, terapia online contacto, Vanesa Matiz teléfono"
      />

      {/* Header */}
      <section className="bg-brand-wine text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-brand-pink rounded-full blur-3xl" />
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Hablemos
          </motion.h1>
          <p className="text-xl text-brand-pink/80 max-w-2xl mx-auto">
            Estoy aquí para acompañarte en tu proceso. Elige el canal que prefieras para comunicarte.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-brand-wine mb-8">Información de Contacto</h2>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-pink-light rounded-2xl flex items-center justify-center text-brand-wine shrink-0">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Correo Electrónico</h4>
                      <p className="text-gray-600">{EMAIL}</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-pink-light rounded-2xl flex items-center justify-center text-brand-wine shrink-0">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Ubicación</h4>
                      <p className="text-gray-600">{LOCATION}</p>
                      <p className="text-xs text-gray-400 mt-1">Sesiones virtuales desde la comodidad de tu lugar seguro.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-brand-pink-light rounded-2xl flex items-center justify-center text-brand-wine shrink-0">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Horario de Atención</h4>
                      <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Sábados: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-brand-wine mb-6">Sígueme en Redes</h3>
                <div className="flex gap-4">
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-brand-wine text-white rounded-xl flex items-center justify-center hover:bg-brand-pink transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-brand-wine text-white rounded-xl flex items-center justify-center hover:bg-brand-pink transition-colors">
                    <Youtube size={24} />
                  </a>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-brand-wine text-white rounded-xl flex items-center justify-center hover:bg-brand-pink transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>

              <div className="bg-brand-pink-light/30 p-8 rounded-[2rem] border border-brand-pink/20">
                <h3 className="text-xl font-bold text-brand-wine mb-4 flex items-center gap-2">
                  <MessageCircle className="text-[#25D366]" /> Respuesta Rápida
                </h3>
                <p className="text-gray-600 mb-6">
                  Si necesitas una respuesta inmediata para agendar o resolver dudas urgentes, WhatsApp es el canal más efectivo.
                </p>
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-brand-pink/10">
              <h2 className="text-2xl font-bold text-brand-wine mb-8">Envía un mensaje</h2>
              
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">¡Mensaje Enviado!</h3>
                  <p className="text-gray-600">Gracias por escribir. Me pondré en contacto contigo lo antes posible.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-8 text-brand-wine font-bold hover:underline"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formState === 'error' && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium border border-red-100">
                      Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo o escríbeme por WhatsApp.
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Nombre Completo</label>
                      <input 
                        required
                        name="nombre"
                        type="text" 
                        placeholder="Tu nombre"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-wine focus:bg-white outline-none transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 ml-1">Correo Electrónico</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="tu@correo.com"
                        className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-wine focus:bg-white outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Asunto</label>
                    <select name="asunto" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-wine focus:bg-white outline-none transition-all">
                      <option>Consulta sobre Terapia Individual</option>
                      <option>Consulta sobre Terapia de Pareja</option>
                      <option>Información sobre Ebooks/Cursos</option>
                      <option>Colaboraciones o Prensa</option>
                      <option>Otro motivo</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Mensaje</label>
                    <textarea 
                      required
                      name="mensaje"
                      rows={5}
                      placeholder="¿En qué puedo ayudarte?"
                      className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:border-brand-wine focus:bg-white outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                  <button 
                    disabled={formState === 'submitting'}
                    type="submit" 
                    className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {formState === 'submitting' ? 'Enviando...' : (
                      <>
                        Enviar Mensaje <Send size={20} />
                      </>
                    )}
                  </button>
                  <p className="text-[10px] text-gray-400 text-center">
                    Al enviar este formulario, aceptas nuestra política de privacidad y el tratamiento de tus datos para fines de contacto.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
