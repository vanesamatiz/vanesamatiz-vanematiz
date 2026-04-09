import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  MessageCircle, 
  Clock, 
  Globe, 
  CheckCircle2, 
  HelpCircle, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Compass
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { BOOKING_URL, WHATSAPP_URL, IMAGES } from '@/constants';
import { cn } from '@/lib/utils';

// Test Questions
const TEST_QUESTIONS = [
  {
    q: "Cuando pienso en mi pareja, lo que siento principalmente es:",
    options: ["Amor y tranquilidad", "Afecto pero también dudas", "Distancia emocional", "Confusión o desgaste"]
  },
  {
    q: "Cuando pasamos tiempo juntos, siento que:",
    options: ["Disfruto realmente su compañía", "A veces conectamos, a veces no", "Estamos más por costumbre", "Preferiría estar en otro lugar"]
  },
  {
    q: "En la intimidad y la conexión emocional siento que:",
    options: ["Seguimos conectando", "Ha cambiado pero aún existe", "Se ha debilitado mucho", "Prácticamente ha desaparecido"]
  },
  {
    q: "Cuando intento hablar de lo que siento con mi pareja:",
    options: ["Podemos dialogar", "A veces se logra hablar", "Termina en discusiones", "Prefiero evitar el tema"]
  },
  {
    q: "Si imaginara mi vida dentro de cinco años:",
    options: ["Me veo con esta pareja", "No estoy seguro", "Me cuesta imaginarlo", "No me veo con esta persona"]
  },
  {
    q: "Siento que sigo en esta relación principalmente por:",
    options: ["Amor y elección", "Historia compartida", "Costumbre", "Miedo a empezar de nuevo"]
  },
  {
    q: "Cuando imagino terminar la relación:",
    options: ["Me genera tristeza pero también claridad", "Me genera mucha duda", "Me genera miedo", "Me genera alivio"]
  },
  {
    q: "Siento que para sostener esta relación he tenido que:",
    options: ["Crecer y adaptarme", "Ceder en algunas cosas", "Dejar partes de mí", "Renunciar a lo que quiero"]
  },
  {
    q: "Si nada cambiara en esta relación:",
    options: ["Podría aceptarlo", "Me generaría frustración", "Me haría infeliz", "No podría continuar"]
  },
  {
    q: "Si pudiera elegir libremente lo que más me acerque a la vida que quiero:",
    options: ["Seguiría en esta relación", "No estoy seguro", "Tengo muchas dudas", "Probablemente elegiría otro camino"]
  }
];

export default function DecisionLanding() {
  const [testStep, setTestStep] = useState(-1); // -1 is intro
  const [scores, setScores] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (optionIndex: number) => {
    const newScores = [...scores, optionIndex];
    setScores(newScores);
    
    if (testStep < TEST_QUESTIONS.length - 1) {
      setTestStep(testStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    // Simple logic: higher index usually means more crisis/desire to leave
    const totalScore = scores.reduce((a, b) => a + b, 0);
    const avgScore = totalScore / TEST_QUESTIONS.length;

    if (avgScore < 1) {
      return {
        title: "Relación con bases pero con dudas",
        desc: "Puede haber dificultades o momentos de desgaste, pero aún existen elementos que pueden fortalecerse.",
        color: "text-brand-wine"
      };
    } else if (avgScore < 2.2) {
      return {
        title: "Relación en punto de decisión",
        desc: "Es posible que estés en una etapa donde necesitas mayor claridad para decidir si reconstruir o cerrar este ciclo.",
        color: "text-amber-600"
      };
    } else {
      return {
        title: "Relación en crisis profunda",
        desc: "Tu relación podría estar generando más desgaste emocional que bienestar. Tomar decisiones importantes merece un espacio de reflexión consciente.",
        color: "text-red-600"
      };
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <SEO 
        title="¿Quiero irme o quedarme? | Test de Reflexión | Vanesa Matiz" 
        description="¿No sabes si terminar tu relación? Realiza nuestro test de reflexión y encuentra claridad. Acompañamiento psicológico con Vanesa Matiz."
        keywords="terminar relación, dudas pareja, irse o quedarse, crisis matrimonial, Vanesa Matiz psicología"
      />

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-brand-cream/20 pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-wine mb-8 leading-tight">
                Quiero irme… pero no sé si es la decisión correcta
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                Cuando una relación comienza a generar más dudas que tranquilidad, es normal sentirse dividido entre quedarse o irse. Esta página ofrece un test de reflexión para ayudarte a comprender mejor lo que estás viviendo.
              </p>
              <a 
                href="#test"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('test')?.scrollIntoView({ behavior: 'smooth' });
                  if (testStep === -1) setTestStep(0);
                }}
                className="btn-primary text-lg py-4 px-12 shadow-xl shadow-brand-wine/20"
              >
                Hacer el test
              </a>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Identification Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-wine mb-6">Tal vez estás viviendo algo como esto</h2>
              <p className="text-lg text-gray-600">Muchas personas permanecen en relaciones donde ya no sienten la misma conexión, pero tampoco tienen claridad para tomar una decisión.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="font-bold text-brand-wine uppercase tracking-widest text-xs">Tal vez te estás preguntando:</p>
                <div className="space-y-4">
                  {[
                    "¿Sigo aquí por amor o por costumbre?",
                    "¿Estoy exagerando o realmente algo se rompió?",
                    "¿Será una etapa o el final de la relación?",
                    "¿Estoy dejando de ser yo para sostener esta relación?",
                    "¿Y si me arrepiento de irme?"
                  ].map((q, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 bg-brand-cream/30 rounded-2xl border border-brand-pink/10"
                    >
                      <HelpCircle size={20} className="text-brand-pink shrink-0 mt-1" />
                      <span className="text-gray-700 font-medium">{q}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="text-brand-wine font-semibold pt-4">Si alguna de estas preguntas resuena contigo, no estás solo.</p>
              </div>
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/decision-doubt/800/1000" 
                  alt="Reflexión de pareja" 
                  className="rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -left-6 bg-brand-wine text-white p-8 rounded-2xl shadow-xl max-w-xs">
                  <p className="text-sm italic">
                    "La duda no es el final, es el comienzo de una búsqueda de honestidad contigo mismo."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Section */}
      <section id="test" className="py-24 bg-brand-cream/20">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-brand-wine mb-4">Test: ¿Estoy en la relación correcta o solo tengo miedo de irme?</h2>
              <p className="text-gray-600">Este test está inspirado en el ejercicio de reflexión desarrollado por la psicóloga y sexóloga Vanesa Matiz para ayudar a las personas a ordenar sus pensamientos y reconocer lo que sienten sobre su relación.</p>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-brand-pink/20 shadow-xl min-h-[500px] flex flex-col justify-center relative overflow-hidden">
              <AnimatePresence mode="wait">
                {testStep === -1 ? (
                  <motion.div
                    key="intro"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center space-y-8"
                  >
                    <div className="w-20 h-20 bg-brand-pink/20 rounded-full flex items-center justify-center mx-auto">
                      <Compass className="text-brand-wine" size={40} />
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed italic">
                      "A veces el corazón se siente dividido entre lo que ha sido y lo que anhela ser. Este test no busca darte una respuesta absoluta, sino ayudarte a reconocer lo que sientes y reflexionar sobre tu relación."
                    </p>
                    <button 
                      onClick={() => setTestStep(0)}
                      className="btn-primary py-4 px-10 text-lg"
                    >
                      Iniciar test
                    </button>
                  </motion.div>
                ) : !showResult ? (
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
                          <div key={i} className={cn("h-1 w-3 rounded-full transition-colors", i <= testStep ? "bg-brand-wine" : "bg-brand-wine/10")} />
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-brand-wine leading-tight">
                      {TEST_QUESTIONS[testStep].q}
                    </h3>

                    <div className="grid grid-cols-1 gap-3">
                      {TEST_QUESTIONS[testStep].options.map((option, i) => (
                        <button 
                          key={i}
                          onClick={() => handleAnswer(i)}
                          className="text-left py-4 px-6 bg-brand-cream/10 border-2 border-brand-pink/5 rounded-2xl font-medium text-gray-700 hover:border-brand-wine hover:bg-brand-wine/5 transition-all flex justify-between items-center group"
                        >
                          <span>{option}</span>
                          <ChevronRight size={18} className="text-brand-pink opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                      ))}
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
                    <div className="bg-brand-cream/30 p-6 rounded-2xl border border-brand-pink/10 my-6">
                      <p className="text-sm text-brand-wine font-medium">
                        Tomar decisiones importantes sobre una relación puede generar confusión, miedo o culpa. Un espacio terapéutico puede ayudarte a ordenar lo que sientes y tomar decisiones más conscientes.
                      </p>
                    </div>
                    <div className="pt-4 flex flex-col gap-4">
                      <a 
                        href={BOOKING_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full py-4 text-lg"
                      >
                        Agenda tu sesión
                      </a>
                      <button 
                        onClick={() => {
                          setTestStep(0);
                          setScores([]);
                          setShowResult(false);
                        }}
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

      {/* Testimonials Section */}
      <section className="py-24 bg-brand-cream/10">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-brand-wine text-center mb-12">Experiencias de claridad</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-brand-pink/10 italic text-gray-600"
              >
                "Estuve meses paralizada por el miedo a equivocarme. El espacio con Vanesa me dio la claridad mental que necesitaba para tomar una decisión desde la paz y no desde la culpa."
                <p className="mt-4 font-bold text-brand-wine not-italic">— Carolina</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-brand-pink/10 italic text-gray-600"
              >
                "No sabía si quedarme por los niños o irme por mi bienestar. La orientación me ayudó a entender mis prioridades y a dar el paso con seguridad y respeto."
                <p className="mt-4 font-bold text-brand-wine not-italic">— Roberto</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Vanesa Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3">
              <div className="relative">
                <img 
                  src={IMAGES.bio} 
                  alt="Vanesa Matiz" 
                  className="rounded-[2.5rem] shadow-2xl w-full"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-brand-pink/20 rounded-full -z-10" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-brand-wine mb-6">Vanesa Matiz</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Psicóloga de pareja y sexóloga clínica con más de 15 años de experiencia acompañando a personas en procesos de crisis, decisiones relacionales y reconstrucción emocional.
                </p>
                <p>
                  Su trabajo integra psicología, sexología y educación emocional para ayudar a las personas a tomar decisiones más conscientes sobre su vida afectiva.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="flex items-center gap-2 text-brand-wine font-bold text-sm uppercase tracking-widest">
                  <ShieldCheck size={20} className="text-brand-pink" />
                  ACSEX
                </div>
                <div className="flex items-center gap-2 text-brand-wine font-bold text-sm uppercase tracking-widest">
                  <ShieldCheck size={20} className="text-brand-pink" />
                  COLPSIC
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-brand-wine text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">Sesión de orientación</h2>
            
            <div className="bg-white/10 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="flex flex-col items-center gap-3">
                  <Clock size={28} className="text-brand-pink" />
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-pink/60">Duración</span>
                  <span className="text-2xl font-bold">60 minutos</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Globe size={28} className="text-brand-pink" />
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-pink/60">Modalidad</span>
                  <span className="text-2xl font-bold">Online</span>
                </div>
              </div>

              <div className="mb-12">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-pink/60 block mb-4">Inversión</span>
                <div className="space-y-2">
                  <div className="text-5xl font-bold">250.000 COP</div>
                  <div className="text-xl text-brand-pink/60">72 USD</div>
                </div>
              </div>

              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary bg-white text-brand-wine hover:bg-brand-pink hover:text-brand-wine w-full py-5 text-xl"
              >
                Agendar sesión
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-brand-cream/30">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-wine mb-8">
              A veces no necesitamos una respuesta inmediata, sino un espacio para comprender lo que sentimos
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Tomar decisiones importantes en una relación puede generar miedo, culpa o confusión. Un espacio terapéutico puede ayudarte a ordenar tus pensamientos y tomar decisiones más conscientes.
            </p>
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xl py-6 px-12 inline-block shadow-2xl shadow-brand-wine/20"
            >
              Agenda tu sesión
            </a>
            <div className="mt-8">
              <a 
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 font-bold hover:underline"
              >
                <MessageCircle size={20} />
                ¿Tienes dudas? Escríbeme por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="py-12 bg-white border-t border-brand-pink/10 text-center">
        <div className="container-custom">
          <span className="text-xl font-bold text-brand-wine tracking-tighter">VANESA MATIZ</span>
          <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">Psicóloga & Sexóloga Clínica</p>
          <p className="text-xs text-gray-400 mt-6">© {new Date().getFullYear()} Vanesa Matiz. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
