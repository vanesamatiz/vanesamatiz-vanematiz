import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  MessageCircle, 
  Clock, 
  Globe, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  Sparkles,
  Users,
  ShieldCheck,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { BOOKING_URL, WHATSAPP_URL, WHATSAPP_DISPLAY, IMAGES } from '@/constants';
import { cn } from '@/lib/utils';

// Test Questions
const TEST_QUESTIONS = [
  "¿Sientes que las discusiones en tu relación son cada vez más frecuentes y difíciles de resolver?",
  "¿Has notado un distanciamiento emocional o falta de conexión con tu pareja últimamente?",
  "¿Sientes que la comunicación se ha vuelto superficial o que evitan hablar de temas importantes?",
  "¿Ha disminuido el deseo sexual o la intimidad física de manera significativa?",
  "¿Dudas frecuentemente sobre el futuro de la relación o si vale la pena continuar?"
];

export default function CoupleLanding() {
  const [testStep, setTestStep] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    
    if (testStep < TEST_QUESTIONS.length - 1) {
      setTestStep(testStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setTestStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const getResult = () => {
    const yesCount = answers.filter(a => a).length;
    if (yesCount >= 4) {
      return {
        title: "Señales de Crisis Profunda",
        desc: "Tu relación muestra señales claras de desgaste significativo. Es un momento crucial para buscar apoyo profesional y evitar que el distanciamiento sea irreversible.",
        color: "text-red-600"
      };
    } else if (yesCount >= 2) {
      return {
        title: "Señales de Alerta",
        desc: "Existen focos de conflicto que están afectando la armonía. Abordarlos ahora puede prevenir una crisis mayor y ayudar a reconstruir la conexión.",
        color: "text-amber-600"
      };
    } else {
      return {
        title: "Desgaste Leve",
        desc: "Aunque hay armonía, existen áreas de mejora. La prevención es la mejor herramienta para mantener una relación saludable a largo plazo.",
        color: "text-brand-wine"
      };
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream/30 font-sans text-gray-900">
      <SEO 
        title="¿Tu relación está pasando por una crisis? | Terapia de Pareja | Vanesa Matiz" 
        description="Descubre si tu relación está en crisis con nuestro test gratuito. Terapia de pareja online con Vanesa Matiz, psicóloga y sexóloga clínica."
        keywords="crisis de pareja, terapia de pareja online, problemas de pareja, salvar mi relación, Vanesa Matiz terapia"
      />

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-32">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-brand-wine/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-brand-pink/20 text-brand-wine text-xs font-bold uppercase tracking-widest mb-6">
                Terapia de Pareja Online
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-wine mb-8 leading-tight">
                ¿Tu relación está pasando por una crisis?
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                Muchas parejas atraviesan momentos de distancia, discusiones constantes o pérdida del deseo. A veces lo que se necesita es un espacio profesional para comprender lo que está pasando y encontrar nuevas formas de conexión.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-lg py-4 px-10 shadow-xl shadow-brand-wine/20"
                >
                  Agenda tu primera sesión
                </a>
                <a 
                  href="#test"
                  className="flex items-center justify-center gap-2 text-brand-wine font-semibold hover:underline"
                >
                  Hacer el test gratuito <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Problems Section */}
      <section className="py-20 bg-brand-wine text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Si algo de esto está pasando en tu relación, no estás solo
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                "Discusiones constantes",
                "Distanciamiento emocional",
                "Pérdida del deseo sexual",
                "Falta de comunicación",
                "Celos e inseguridad",
                "Infidelidad",
                "Rutina en la relación",
                "Dudas sobre continuar juntos"
              ].map((problem, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/5"
                >
                  <AlertCircle size={20} className="text-brand-pink shrink-0" />
                  <span className="font-medium">{problem}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center bg-white/5 p-8 rounded-2xl border border-white/10">
              <p className="text-lg text-brand-pink/90 leading-relaxed">
                Muchas parejas intentan resolver estas dificultades por sí mismas durante mucho tiempo. Sin embargo, contar con orientación profesional puede ayudar a comprender lo que está ocurriendo y abrir nuevas posibilidades para la relación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Test Section */}
      <section id="test" className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-wine mb-4">Test gratuito: ¿Tu relación está pasando por una crisis?</h2>
              <p className="text-gray-600">Responde algunas preguntas y descubre si tu relación podría estar atravesando señales de desgaste o crisis.</p>
            </div>

            <div className="bg-brand-cream/20 rounded-3xl p-8 md:p-12 border border-brand-pink/20 shadow-sm min-h-[400px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!showResult ? (
                  <motion.div
                    key={testStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-bold text-brand-wine/40 uppercase tracking-widest">Pregunta {testStep + 1} de {TEST_QUESTIONS.length}</span>
                      <div className="flex gap-1">
                        {TEST_QUESTIONS.map((_, i) => (
                          <div key={i} className={cn("h-1 w-4 rounded-full transition-colors", i <= testStep ? "bg-brand-wine" : "bg-brand-wine/10")} />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-brand-wine leading-tight">
                      {TEST_QUESTIONS[testStep]}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <button 
                        onClick={() => handleAnswer(true)}
                        className="py-4 px-6 bg-white border-2 border-brand-wine/10 rounded-2xl font-bold text-brand-wine hover:border-brand-wine hover:bg-brand-wine/5 transition-all"
                      >
                        Sí, me pasa
                      </button>
                      <button 
                        onClick={() => handleAnswer(false)}
                        className="py-4 px-6 bg-white border-2 border-brand-wine/10 rounded-2xl font-bold text-gray-500 hover:border-gray-300 hover:bg-gray-50 transition-all"
                      >
                        No realmente
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6"
                  >
                    <div className="w-16 h-16 bg-brand-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="text-brand-wine" size={32} />
                    </div>
                    <h3 className={cn("text-2xl font-bold", getResult().color)}>
                      {getResult().title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {getResult().desc}
                    </p>
                    <div className="pt-6 flex flex-col gap-4">
                      <a 
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full py-4"
                      >
                        Agendar sesión de orientación
                      </a>
                      <button 
                        onClick={resetTest}
                        className="text-sm text-gray-400 hover:text-brand-wine underline"
                      >
                        Repetir el test
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* About Therapy Section */}
      <section className="py-24 bg-brand-cream/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/therapy-couple/800/1000" 
                  alt="Terapia de pareja" 
                  className="rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
                  <Heart className="text-brand-pink mb-4" size={32} />
                  <p className="text-sm font-medium text-brand-wine italic">
                    "El objetivo no es solo dejar de pelear, sino volver a encontrarse."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-wine mb-8">
                Un espacio para comprender y transformar la relación
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                La terapia de pareja ofrece un espacio seguro para hablar, comprender lo que está ocurriendo en la relación y construir nuevas formas de comunicación, intimidad y conexión.
              </p>
              
              <h4 className="font-bold text-brand-wine mb-4 uppercase tracking-widest text-xs">Durante las sesiones trabajamos:</h4>
              <ul className="space-y-4">
                {[
                  "Comunicación en pareja",
                  "Reconstrucción de la confianza",
                  "Deseo sexual",
                  "Gestión de conflictos",
                  "Intimidad emocional"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-pink/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-brand-wine" />
                    </div>
                    <span className="font-medium text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Vanesa Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto bg-brand-wine rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row">
            <div className="md:w-2/5 relative">
              <img 
                src={IMAGES.bio} 
                alt="Vanesa Matiz" 
                className="w-full h-full object-cover min-h-[400px]"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-3/5 p-10 md:p-16 flex flex-col justify-center text-white">
              <h2 className="text-3xl font-bold mb-6">Vanesa Matiz</h2>
              <div className="space-y-6 text-brand-pink/80 leading-relaxed">
                <p>
                  Psicóloga de pareja y sexóloga clínica con más de 15 años de experiencia acompañando a personas y parejas en procesos de transformación emocional, relacional y sexual.
                </p>
                <p>
                  Su trabajo integra psicología, sexología y educación sexual para ayudar a las parejas a comprender sus dificultades y construir relaciones más saludables y conscientes.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-brand-wine bg-brand-pink/20 flex items-center justify-center text-[10px] font-bold">
                      {i === 3 ? "+15" : ""}
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold uppercase tracking-widest">Años de experiencia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-brand-cream/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-wine text-center mb-12">Lo que dicen las parejas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-brand-pink/10 italic text-gray-600"
              >
                "Llegamos a consulta sintiendo que ya no había nada que hacer. Vanesa nos ayudó a escucharnos de nuevo y a redescubrir por qué nos elegimos. Hoy nuestra comunicación es mucho más sana."
                <p className="mt-4 font-bold text-brand-wine not-italic">— Marta y Jorge</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-brand-pink/10 italic text-gray-600"
              >
                "Las discusiones eran constantes y agotadoras. Gracias a la terapia, aprendimos a gestionar los conflictos sin lastimarnos. Fue la mejor decisión para nuestra familia."
                <p className="mt-4 font-bold text-brand-wine not-italic">— Andrés y Lucía</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-brand-cream/30">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-wine mb-12">Primera sesión de orientación</h2>
            
            <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-brand-pink/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-pink text-brand-wine py-2 px-8 font-bold text-xs uppercase tracking-widest rotate-45 translate-x-8 translate-y-4">
                Online
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-wine">
                    <Clock size={24} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Duración</span>
                  <span className="text-xl font-bold text-brand-wine">60 minutos</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-wine">
                    <Globe size={24} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-400">Modalidad</span>
                  <span className="text-xl font-bold text-brand-wine">100% Online</span>
                </div>
              </div>

              <div className="mb-12">
                <span className="text-sm font-bold uppercase tracking-widest text-gray-400 block mb-2">Inversión</span>
                <div className="space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-brand-wine">250.000 COP</div>
                  <div className="text-xl text-gray-500">72 USD (Internacional)</div>
                </div>
              </div>

              <div className="space-y-4">
                <a 
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full py-5 text-xl shadow-lg shadow-brand-wine/20"
                >
                  Agendar sesión ahora
                </a>
                <p className="text-xs text-gray-400">
                  * El pago se realiza antes de confirmar la reserva. Integrado con Google Calendar.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-gray-500 mb-6">¿Tienes dudas antes de agendar?</p>
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 py-3 px-8 bg-green-500 text-white rounded-full font-bold hover:bg-green-600 transition-all shadow-md"
              >
                <MessageCircle size={20} />
                Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-wine text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-white rounded-full" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
              A veces una conversación puede cambiar el rumbo de una relación
            </h2>
            <p className="text-xl text-brand-pink/80 mb-12 leading-relaxed">
              Si sientes que tu relación necesita un espacio para comprender lo que está pasando, la terapia puede ser un primer paso hacia nuevas formas de conexión.
            </p>
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary bg-white text-brand-wine hover:bg-brand-pink hover:text-brand-wine text-xl py-6 px-12 inline-block"
            >
              Agenda tu sesión
            </a>
          </div>
        </div>
      </section>

      {/* Simple Footer for Landing */}
      <footer className="py-12 bg-white border-t border-brand-pink/10 text-center">
        <div className="container-custom">
          <div className="mb-6">
            <span className="text-xl font-bold text-brand-wine tracking-tighter">VANESA MATIZ</span>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Psicóloga & Sexóloga Clínica</p>
          </div>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Vanesa Matiz. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
