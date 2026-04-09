import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Heart, Users, Flower2, ShieldCheck, Sparkles, ArrowRight, Star, PlayCircle, BookOpen, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { cn } from '@/lib/utils';
import { WHATSAPP_URL, BOOKING_URL, IMAGES, PAYMENT_LINKS } from '@/constants';

export default function Home() {
  return (
    <div className="pt-20">
      <SEO 
        title="Psicóloga de Pareja y Sexóloga Clínica | Atención 100% Online" 
        description="Reconecta con tu bienestar íntimo y de pareja. Vanesa Matiz, psicóloga con 15 años de experiencia en terapia de pareja, sexualidad y crisis relacionales."
        keywords="psicóloga de pareja, terapia de pareja online, sexóloga clínica, terapia sexual, problemas de pareja, falta de deseo sexual, psicóloga online colombia, vanesa matiz"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-pink-light min-h-[90vh] flex items-center">
        <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-brand-pink-light z-10" />
          <img 
            src={IMAGES.hero} 
            alt="Vanesa Matiz" 
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="container-custom relative z-20">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-1 rounded-full bg-brand-wine/10 text-brand-wine text-sm font-semibold mb-6"
            >
              Más de 15 años de experiencia
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-tight mb-6"
            >
              Reconecta con tu <span className="text-brand-wine italic">bienestar íntimo</span> y de pareja
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-10 leading-relaxed"
            >
              Acompaño a personas y parejas a transformar sus relaciones, superar crisis y vivir una sexualidad consciente y plena.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href={BOOKING_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary text-center"
              >
                Agendar Sesión
              </a>
              <Link to="/sobre-vanesa" className="btn-secondary text-center">
                Conóceme
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Vanesa Matiz</h2>
              <p className="text-xl text-brand-wine font-medium mb-6">Psicóloga de pareja y sexóloga clínica</p>
              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>
                  Especialista en bienestar íntimo, sexualidad y relaciones de pareja. Mi enfoque integra la psicología clínica con la sexología para ofrecer soluciones profundas y duraderas.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Máster en Sexología",
                    "Junta Directiva ACSEX",
                    "Miembro de COLPSIC",
                    "Investigación Científica (ACSEX y COLPSIC)",
                    "Especialista en Terapia de Pareja",
                    "Conferencista Internacional"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Sparkles size={16} className="text-brand-pink" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/sobre-vanesa" className="text-brand-wine font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                Conoce mi trayectoria <ArrowRight size={20} />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-pink rounded-full blur-3xl opacity-50" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-brand-wine rounded-full blur-3xl opacity-20" />
              <img 
                src={IMAGES.session1} 
                alt="Terapia" 
                className="rounded-3xl shadow-2xl relative z-10 w-full aspect-[3/2] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tests Gratuitos Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Tests gratuitos</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Herramientas de reflexión diseñadas para ayudarte a identificar áreas de mejora en tu vida íntima y relacional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Test de crisis de pareja",
                desc: "¿Tu relación está pasando por una crisis? Descúbrelo aquí.",
                href: "/test/relacion",
                icon: <Users className="text-brand-wine" size={32} />,
                color: "bg-brand-pink-light"
              },
              {
                title: "Bienestar íntimo femenino",
                desc: "Reflexiona sobre tu relación con el placer y tu cuerpo.",
                href: "/test/femenino",
                icon: <Flower2 className="text-brand-wine" size={32} />,
                color: "bg-pink-50"
              },
              {
                title: "Bienestar sexual masculino",
                desc: "Analiza el impacto del estrés y el deseo en tu vida sexual.",
                href: "/test/masculino",
                icon: <ShieldCheck className="text-brand-wine" size={32} />,
                color: "bg-blue-50"
              }
            ].map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all text-center"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto", test.color)}>
                  {test.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{test.title}</h3>
                <p className="text-gray-500 text-sm mb-8">{test.desc}</p>
                <Link to={test.href} className="btn-secondary w-full py-3">
                  Hacer el test
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-8">Es momento de buscar apoyo si experimentas:</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center text-brand-wine">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Conflictos en la pareja</h4>
                    <p className="text-sm text-gray-600">Discusiones constantes, distanciamiento emocional o crisis por infidelidad.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center text-brand-wine">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Dificultades sexuales</h4>
                    <p className="text-sm text-gray-600">Pérdida del deseo, eyaculación precoz, disfunción eréctil o dolor en las relaciones.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-pink/20 rounded-full flex items-center justify-center text-brand-wine">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Desconexión personal</h4>
                    <p className="text-sm text-gray-600">Baja autoestima sexual, dificultad para alcanzar el orgasmo o ansiedad por rendimiento.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-brand-wine rounded-3xl p-10 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">Sesiones 100% Online</h3>
              <p className="text-brand-pink/80 mb-8 leading-relaxed">
                Atención profesional desde la comodidad de tu hogar o lugar seguro. 
                Sesiones de 55 minutos enfocadas en resultados reales, sin desplazamientos.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div>
                  <p className="text-xs uppercase tracking-wider text-brand-pink/60 mb-1">Colombia</p>
                  <p className="text-2xl font-bold">250.000 COP</p>
                  <a href={PAYMENT_LINKS.wompi} target="_blank" rel="noopener noreferrer" className="text-[10px] text-brand-pink hover:underline mt-1 block">Pagar con Wompi</a>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-brand-pink/60 mb-1">Internacional</p>
                  <p className="text-2xl font-bold">72 USD</p>
                  <a href={PAYMENT_LINKS.paypal} target="_blank" rel="noopener noreferrer" className="text-[10px] text-brand-pink hover:underline mt-1 block">Pagar con PayPal</a>
                </div>
              </div>
              <a 
                href={BOOKING_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary w-full text-center py-4"
              >
                Agendar mi primera sesión
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Lo que dicen mis pacientes</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              La confianza es la base de todo proceso terapéutico. Aquí comparto algunas experiencias de personas y parejas que han transformado su bienestar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sebastian",
                title: "Una guía fundamental",
                text: "Vanesa nos ayudó a recuperar la comunicación que creíamos perdida. Su enfoque profesional y cercano nos dio las herramientas para reconstruir nuestra relación desde el respeto y el deseo.",
                rating: 5
              },
              {
                name: "Maria",
                title: "Empatía y profesionalismo",
                text: "Como sexóloga, Vanesa tiene una capacidad increíble para hacerte sentir cómoda hablando de temas difíciles. Mi bienestar íntimo ha mejorado significativamente gracias a su acompañamiento.",
                rating: 5
              },
              {
                name: "Viviana y Camilo",
                title: "Transformación real",
                text: "Llegamos a consulta en una crisis profunda. Hoy, meses después, entendemos que buscar ayuda fue la mejor decisión. Vanesa es una experta en lo que hace.",
                rating: 5
              },
              {
                name: "Karen y Cristina",
                title: "Confianza total",
                text: "Su experiencia se nota desde la primera sesión. Te hace sentir escuchado y validado. Totalmente recomendada para quienes buscan mejorar su vida en pareja.",
                rating: 5
              },
              {
                name: "Daniela",
                title: "Bienestar y plenitud",
                text: "Gracias a las sesiones con Vanesa, he logrado reconectar con mi propio placer y vivir mi sexualidad de una manera mucho más libre y plena.",
                rating: 5
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-pink-light/20 p-8 rounded-[2rem] border border-brand-pink/10 relative"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-brand-wine text-brand-wine" />
                  ))}
                </div>
                <h4 className="text-lg font-bold mb-3 text-brand-wine">"{testimonial.title}"</h4>
                <p className="text-gray-600 italic mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-wine/10 flex items-center justify-center text-brand-wine font-bold text-xs">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="font-bold text-sm text-gray-800">{testimonial.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://www.doctoralia.co/vanesa-matiz/psicologo-sexologo/cartagena" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-wine font-bold hover:underline"
            >
              Ver más opiniones en Doctoralia <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Podcast & Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Podcast Íntimamente</h2>
              <p className="text-gray-600">Conversaciones reales sobre sexualidad, relaciones y bienestar con Lissy y Vanesa Matiz.</p>
            </div>
            <Link to="/podcast" className="btn-primary flex items-center gap-2">
              <PlayCircle size={20} /> Escuchar episodios
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: IMAGES.misc1, title: "Cómo mejorar la comunicación en pareja" },
              { img: IMAGES.misc2, title: "El deseo sexual en las relaciones largas" },
              { img: IMAGES.session2, title: "Bienestar íntimo y autocuidado" }
            ].map((episode, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm group">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <img 
                    src={episode.img} 
                    alt="Podcast" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <PlayCircle className="text-white" size={48} />
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-brand-wine uppercase tracking-widest">Episodio Reciente</span>
                  <h4 className="text-lg font-bold mt-2 mb-4">{episode.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-2">En este episodio exploramos las herramientas prácticas para hablar de lo que nos incomoda...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-brand-wine text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-brand-pink rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-pink rounded-full blur-3xl" />
        </div>
        <div className="container-custom relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Listo para dar el primer paso?</h2>
          <p className="text-xl text-brand-pink/80 mb-12 max-w-2xl mx-auto">
            Tu bienestar emocional e íntimo es la base de una vida plena. Agenda tu sesión hoy mismo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href={BOOKING_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary px-12 py-4 text-lg"
            >
              Agendar Sesión Online
            </a>
            <Link to="/blog" className="flex items-center justify-center gap-2 text-white hover:text-brand-pink transition-colors">
              <BookOpen size={20} /> Leer el Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-12 bg-gray-100 border-t border-gray-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-brand-pink/10">
            <div className="max-w-md text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-brand-wine">¿Tienes dudas antes de empezar?</h3>
              <p className="text-gray-600">Escríbeme directamente por WhatsApp y resolveré tus inquietudes sobre las sesiones.</p>
            </div>
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white px-10 py-5 rounded-full font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95"
            >
              <MessageCircle size={28} />
              Escríbeme por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
