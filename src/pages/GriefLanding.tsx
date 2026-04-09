import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  MessageCircle, 
  Clock, 
  Globe, 
  CheckCircle2, 
  CloudRain, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Sun,
  Wind
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { BOOKING_URL, WHATSAPP_URL, IMAGES } from '@/constants';
import { cn } from '@/lib/utils';

// Test Questions
const TEST_QUESTIONS = [
  {
    q: "¿Con qué frecuencia piensas en tu ex pareja?",
    options: ["Raramente", "Algunas veces al día", "Frecuentemente", "Casi todo el tiempo"]
  },
  {
    q: "Cuando recuerdas la relación, lo que más sientes es:",
    options: ["Tranquilidad", "Nostalgia", "Tristeza", "Dolor intenso"]
  },
  {
    q: "¿Te cuesta aceptar que la relación terminó?",
    options: ["No", "Un poco", "Bastante", "Mucho"]
  },
  {
    q: "¿Revisas las redes sociales de tu ex pareja?",
    options: ["No", "Ocasionalmente", "Frecuentemente", "Muy seguido"]
  },
  {
    q: "¿Cómo te sientes cuando ves o recuerdas a tu ex pareja?",
    options: ["Neutral", "Nostálgico", "Triste", "Muy afectado emocionalmente"]
  },
  {
    q: "¿Te cuesta imaginar tu vida sin esa persona?",
    options: ["No", "A veces", "Frecuentemente", "Mucho"]
  },
  {
    q: "¿Sientes que la ruptura afectó tu autoestima?",
    options: ["No", "Un poco", "Bastante", "Mucho"]
  },
  {
    q: "¿Has logrado retomar actividades o proyectos personales?",
    options: ["Sí", "Algunos", "Pocos", "Casi ninguno"]
  },
  {
    q: "¿Sientes que el dolor de la ruptura ha disminuido con el tiempo?",
    options: ["Sí", "Un poco", "Muy poco", "No"]
  },
  {
    q: "¿Sientes que necesitas ayuda para cerrar este ciclo emocional?",
    options: ["No", "Tal vez", "Probablemente", "Sí"]
  }
];

export default function GriefLanding() {
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
    const totalScore = scores.reduce((a, b) => a + b, 0);
    const avgScore = totalScore / TEST_QUESTIONS.length;

    if (avgScore < 1) {
      return {
        title: "Duelo en proceso saludable",
        desc: "Es normal experimentar emociones después de una ruptura. Tu proceso parece estar avanzando gradualmente.",
        color: "text-brand-wine"
      };
    } else if (avgScore < 2.2) {
      return {
        title: "Duelo con dificultades emocionales",
        desc: "La ruptura parece seguir generando impacto emocional en tu vida. Un espacio terapéutico puede ayudarte a comprender mejor lo que estás viviendo.",
        color: "text-amber-600"
      };
    } else {
      return {
        title: "Duelo profundo",
        desc: "La ruptura parece estar afectando significativamente tu bienestar emocional. Buscar acompañamiento psicológico puede ayudarte a reconstruir tu estabilidad emocional.",
        color: "text-red-600"
      };
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <SEO 
        title="Duelo por Ruptura | Cómo Soltar y Sanar | Vanesa Matiz" 
        description="¿Te cuesta superar tu ruptura? Realiza nuestro test de duelo y descubre cómo sanar. Acompañamiento psicológico con Vanesa Matiz."
        keywords="duelo por ruptura, superar ex pareja, sanar corazón roto, duelo amoroso, Vanesa Matiz terapia"
      />

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-brand-pink/5 pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-brand-pink/20 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-wine mb-8 leading-tight">
                Terminaste la relación… pero aún no logras soltar
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                Las rupturas pueden dejar preguntas, dolor y sensación de vacío. A veces seguimos adelante por fuera, pero por dentro aún estamos intentando entender lo que pasó.
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                {[
                  "Piensas constantemente en tu ex pareja",
                  "Sientes tristeza o vacío después de la ruptura",
                  "Te cuesta aceptar que la relación terminó",
                  "Revisas sus redes sociales con frecuencia",
                  "Sientes culpa o preguntas sin respuesta",
                  "Te cuesta imaginar tu vida sin esa persona"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 bg-brand-cream/20 rounded-2xl border border-brand-pink/10"
                  >
                    <CloudRain size={20} className="text-brand-pink shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
                <div className="pt-6">
                  <p className="text-gray-600 leading-relaxed">
                    El duelo por una separación es un proceso emocional profundo que puede tomar tiempo. En algunos casos, contar con orientación profesional puede ayudar a comprender lo que sentimos y reconstruir nuestra vida emocional.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/grief-separation/800/1000" 
                  alt="Proceso de duelo" 
                  className="rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-pink text-brand-wine p-8 rounded-2xl shadow-xl max-w-xs font-medium italic">
                  "Superar una ruptura no significa olvidar, sino reconstruirte."
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
              <h2 className="text-3xl font-bold text-brand-wine mb-4">Test: ¿Cómo está tu proceso de duelo después de la ruptura?</h2>
              <p className="text-gray-600">Este test te ayudará a reflexionar sobre cómo estás viviendo el proceso emocional después de terminar una relación.</p>
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
                      <Wind className="text-brand-wine" size={40} />
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed italic">
                      "Las rupturas pueden generar tristeza, confusión, rabia o sensación de vacío. Este test no busca darte un diagnóstico, sino ayudarte a reflexionar sobre cómo estás viviendo este proceso."
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
                        Cerrar un ciclo emocional no siempre es fácil. Un espacio terapéutico puede ayudarte a comprender lo que sientes, sanar la ruptura y reconstruir tu bienestar emocional.
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
            <h2 className="text-3xl font-bold text-brand-wine text-center mb-12">Historias de reconstrucción</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-brand-pink/10 italic text-gray-600"
              >
                "Sentía que nunca iba a poder soltar ese dolor. Vanesa me acompañó a transitar el duelo de una forma compasiva. Hoy me siento lista para empezar de nuevo."
                <p className="mt-4 font-bold text-brand-wine not-italic">— Elena</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-brand-pink/10 italic text-gray-600"
              >
                "La ruptura me dejó destruido. En las sesiones encontré las herramientas para reconstruir mi autoestima y entender que el final de una relación no es el final de mi vida."
                <p className="mt-4 font-bold text-brand-wine not-italic">— Gabriel</p>
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
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-bold text-brand-wine mb-6">Vanesa Matiz</h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  Psicóloga de pareja y sexóloga clínica con más de 15 años de experiencia acompañando a personas en procesos de crisis relacionales, duelo por separación y reconstrucción emocional.
                </p>
                <p>
                  Su trabajo se enfoca en ayudar a las personas a comprender sus emociones, cerrar ciclos y reconstruir su bienestar personal.
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
                  <div className="text-xl text-brand-pink/60">72 USD (Internacional)</div>
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
              Superar una ruptura no significa olvidar, sino reconstruirte
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Las separaciones pueden dejar heridas emocionales profundas, pero también pueden convertirse en un momento de crecimiento y transformación. Un espacio terapéutico puede ayudarte a comprender lo que estás viviendo y avanzar hacia una nueva etapa de tu vida.
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
