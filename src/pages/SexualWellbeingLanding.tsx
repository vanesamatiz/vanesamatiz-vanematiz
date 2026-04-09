import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  MessageCircle, 
  Clock, 
  Globe, 
  CheckCircle2, 
  Flame, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Zap,
  Activity
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { BOOKING_URL, WHATSAPP_URL, IMAGES } from '@/constants';
import { cn } from '@/lib/utils';

// Test Questions
const TEST_QUESTIONS = [
  {
    q: "¿Cómo describirías tu deseo sexual actualmente?",
    options: ["Alto", "Estable", "Ha disminuido", "Muy bajo"]
  },
  {
    q: "¿Sientes ansiedad o presión durante los encuentros sexuales?",
    options: ["Nunca", "Algunas veces", "Frecuentemente", "Casi siempre"]
  },
  {
    q: "¿Te sientes satisfecho con tu vida sexual?",
    options: ["Sí", "Parcialmente", "Poco", "No"]
  },
  {
    q: "¿Te resulta fácil hablar de sexualidad con tu pareja?",
    options: ["Sí", "A veces", "Poco", "No"]
  },
  {
    q: "¿Has experimentado dificultades para sentir placer o excitación?",
    options: ["No", "Ocasionalmente", "Frecuentemente", "Casi siempre"]
  },
  {
    q: "¿Sientes que el estrés o las preocupaciones afectan tu vida sexual?",
    options: ["No", "A veces", "Frecuentemente", "Mucho"]
  },
  {
    q: "¿Sientes conexión emocional durante la intimidad?",
    options: ["Sí", "A veces", "Poco", "No"]
  },
  {
    q: "¿Evitas los encuentros sexuales por inseguridad o incomodidad?",
    options: ["No", "Algunas veces", "Frecuentemente", "Casi siempre"]
  },
  {
    q: "¿Sientes que la rutina ha afectado tu vida sexual?",
    options: ["No", "Un poco", "Bastante", "Mucho"]
  },
  {
    q: "¿Te gustaría mejorar tu bienestar sexual?",
    options: ["No", "Un poco", "Bastante", "Mucho"]
  }
];

export default function SexualWellbeingLanding() {
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
        title: "Bienestar sexual estable",
        desc: "Tu sexualidad parece encontrarse en un momento relativamente equilibrado, aunque siempre es posible seguir explorando y fortaleciendo el bienestar íntimo.",
        color: "text-brand-wine"
      };
    } else if (avgScore < 2.2) {
      return {
        title: "Bienestar sexual con señales de desgaste",
        desc: "Algunos factores emocionales o relacionales podrían estar afectando tu bienestar sexual.",
        color: "text-amber-600"
      };
    } else {
      return {
        title: "Bienestar sexual afectado",
        desc: "Las dificultades sexuales parecen estar generando impacto en tu bienestar o en tu relación. Un espacio terapéutico puede ayudarte a comprender mejor lo que está ocurriendo.",
        color: "text-red-600"
      };
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <SEO 
        title="Bienestar Sexual y Sexología Clínica | Vanesa Matiz" 
        description="¿Tu vida sexual ya no es como antes? Realiza nuestro test de bienestar sexual y recupera tu plenitud. Sexología clínica con Vanesa Matiz."
        keywords="sexología clínica, bienestar sexual, problemas sexuales, falta de deseo, Vanesa Matiz sexóloga"
      />

      {/* Hero Section */}
      <header className="relative overflow-hidden bg-brand-pink/10 pt-20 pb-24 lg:pt-32 lg:pb-40">
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-brand-wine/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-wine mb-8 leading-tight">
                ¿Tu vida sexual ya no es como antes?
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                Muchas personas atraviesan momentos de dificultad en su sexualidad: pérdida del deseo, ansiedad, inseguridad o problemas en la intimidad. Hablar de esto puede ser difícil, pero comprender lo que está pasando puede marcar una gran diferencia.
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
                  "Pérdida del deseo sexual",
                  "Dificultad para sentir placer",
                  "Ansiedad por rendimiento sexual",
                  "Eyaculación precoz",
                  "Dificultad para mantener la erección",
                  "Dolor durante las relaciones sexuales",
                  "Dificultad para alcanzar el orgasmo",
                  "Desconexión emocional en la intimidad"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-4 bg-brand-cream/20 rounded-2xl border border-brand-pink/10"
                  >
                    <Activity size={20} className="text-brand-pink shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
                <div className="pt-6">
                  <p className="text-gray-600 leading-relaxed italic">
                    Las dificultades sexuales son más comunes de lo que muchas personas imaginan. En muchos casos están relacionadas con factores emocionales, relacionales o de estrés.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://picsum.photos/seed/sexual-wellbeing/800/1000" 
                  alt="Bienestar sexual" 
                  className="rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -bottom-6 -right-6 bg-brand-wine text-white p-8 rounded-2xl shadow-xl max-w-xs font-medium italic">
                  "La sexualidad también puede transformarse."
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
              <h2 className="text-3xl font-bold text-brand-wine mb-4">Test: ¿Cómo está tu bienestar sexual?</h2>
              <p className="text-gray-600">Responde algunas preguntas para reflexionar sobre tu bienestar sexual y tu experiencia en la intimidad.</p>
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
                      <Flame className="text-brand-wine" size={40} />
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed italic">
                      "La sexualidad puede verse influenciada por factores emocionales, relacionales y corporales. Este test es una herramienta de reflexión para ayudarte a identificar cómo se encuentra actualmente tu bienestar sexual."
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
                        Las dificultades sexuales son más comunes de lo que imaginamos y muchas veces tienen solución cuando se comprenden desde un enfoque profesional.
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
            <h2 className="text-3xl font-bold text-brand-wine text-center mb-12">Testimonios de bienestar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-brand-pink/10 italic text-gray-600"
              >
                "Me daba mucha vergüenza hablar de mi falta de deseo. Vanesa lo hizo sentir tan natural y profesional que pude abrirme. Mi vida íntima ha mejorado muchísimo."
                <p className="mt-4 font-bold text-brand-wine not-italic">— Sofía</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-brand-pink/10 italic text-gray-600"
              >
                "La ansiedad por el rendimiento me estaba alejando de mi pareja. Entender los factores emocionales detrás de esto cambió por completo mi seguridad en la intimidad."
                <p className="mt-4 font-bold text-brand-wine not-italic">— Javier</p>
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
                  Psicóloga de pareja y sexóloga clínica con más de 15 años de experiencia acompañando a personas y parejas en procesos relacionados con bienestar íntimo, sexualidad y relaciones.
                </p>
                <p>
                  Su trabajo integra psicología y sexología clínica para ayudar a las personas a comprender y transformar las dificultades que pueden aparecer en la vida sexual.
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
              La sexualidad también puede transformarse
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Las dificultades en la vida sexual pueden generar frustración, inseguridad o distancia en la relación. Comprender lo que está ocurriendo puede ser el primer paso hacia una experiencia íntima más consciente y satisfactoria.
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
