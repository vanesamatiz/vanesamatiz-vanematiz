import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, ClipboardCheck, RefreshCw, Flower2, MessageCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { cn } from '@/lib/utils';
import { WHATSAPP_URL } from '@/constants';

const questions = [
  {
    id: 1,
    text: "¿Cómo describirías tu deseo sexual actualmente?",
    options: [
      { text: "Alto y frecuente", score: 0 },
      { text: "Estable", score: 1 },
      { text: "Ha disminuido", score: 2 },
      { text: "Muy bajo o casi inexistente", score: 3 }
    ]
  },
  {
    id: 2,
    text: "¿Te sientes cómoda y conectada con tu cuerpo?",
    options: [
      { text: "Sí, la mayor parte del tiempo", score: 0 },
      { text: "A veces", score: 1 },
      { text: "Pocas veces", score: 2 },
      { text: "No", score: 3 }
    ]
  },
  {
    id: 3,
    text: "¿Logras sentir placer durante los encuentros sexuales?",
    options: [
      { text: "Casi siempre", score: 0 },
      { text: "Algunas veces", score: 1 },
      { text: "Pocas veces", score: 2 },
      { text: "Casi nunca", score: 3 }
    ]
  },
  {
    id: 4,
    text: "¿Experimentas dolor o incomodidad durante las relaciones sexuales?",
    options: [
      { text: "Nunca", score: 0 },
      { text: "Ocasionalmente", score: 1 },
      { text: "Frecuentemente", score: 2 },
      { text: "Casi siempre", score: 3 }
    ]
  },
  {
    id: 5,
    text: "¿Sientes presión o ansiedad por cumplir expectativas sexuales?",
    options: [
      { text: "Nunca", score: 0 },
      { text: "Algunas veces", score: 1 },
      { text: "Frecuentemente", score: 2 },
      { text: "Casi siempre", score: 3 }
    ]
  },
  {
    id: 6,
    text: "¿Sientes que puedes hablar abiertamente sobre sexualidad con tu pareja?",
    options: [
      { text: "Sí, con facilidad", score: 0 },
      { text: "Algunas veces", score: 1 },
      { text: "Poco", score: 2 },
      { text: "No", score: 3 }
    ]
  },
  {
    id: 7,
    text: "¿Sientes que la rutina ha afectado la intimidad en tu relación?",
    options: [
      { text: "No", score: 0 },
      { text: "Un poco", score: 1 },
      { text: "Bastante", score: 2 },
      { text: "Mucho", score: 3 }
    ]
  },
  {
    id: 8,
    text: "¿Cómo describirías tu relación con tu cuerpo actualmente?",
    options: [
      { text: "Positiva", score: 0 },
      { text: "Neutral", score: 1 },
      { text: "Crítica", score: 2 },
      { text: "Negativa", score: 3 }
    ]
  },
  {
    id: 9,
    text: "¿Sientes que tienes espacio para explorar tu propio placer?",
    options: [
      { text: "Sí", score: 0 },
      { text: "Algunas veces", score: 1 },
      { text: "Poco", score: 2 },
      { text: "No", score: 3 }
    ]
  },
  {
    id: 10,
    text: "¿Consideras que tu bienestar íntimo podría mejorar?",
    options: [
      { text: "No", score: 0 },
      { text: "Un poco", score: 1 },
      { text: "Bastante", score: 2 },
      { text: "Mucho", score: 3 }
    ]
  }
];

export default function FemaleWellbeingTest() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);
    
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);

  const getResult = () => {
    if (totalScore <= 10) {
      return {
        title: "Bienestar íntimo estable",
        description: "Tu sexualidad parece encontrarse en un momento relativamente equilibrado, aunque siempre es posible seguir explorando y fortaleciendo el bienestar íntimo.",
        color: "text-green-600",
        bg: "bg-green-50"
      };
    } else if (totalScore <= 20) {
      return {
        title: "Bienestar íntimo con señales de desgaste",
        description: "Algunas áreas de tu vida íntima podrían beneficiarse de mayor atención, comunicación o autoconocimiento.",
        color: "text-orange-600",
        bg: "bg-orange-50"
      };
    } else {
      return {
        title: "Bienestar íntimo afectado",
        description: "Es posible que estés atravesando dificultades en tu relación con el placer, tu cuerpo o tu vida sexual. Un espacio terapéutico puede ayudarte a comprender y transformar esta experiencia.",
        color: "text-brand-wine",
        bg: "bg-brand-pink-light"
      };
    }
  };

  const result = getResult();
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <SEO 
        title="Test de Bienestar Íntimo Femenino | Vanesa Matiz" 
        description="Evalúa tu bienestar sexual, tu relación con el placer y tu cuerpo con este test interactivo diseñado para mujeres por Vanesa Matiz."
        keywords="test bienestar femenino, sexualidad femenina test, placer femenino, Vanesa Matiz test"
      />

      <div className="container-custom py-12">
        <div className="max-w-2xl mx-auto">
          {!showResult ? (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-brand-pink/20"
            >
              <div className="text-center mb-10">
                <Flower2 className="mx-auto text-brand-wine mb-4" size={48} />
                <h1 className="text-3xl font-bold mb-2">¿Cómo está tu bienestar íntimo y sexual?</h1>
                <p className="text-gray-500">La sexualidad femenina puede verse influenciada por factores emocionales, relacionales y corporales. Este test es una herramienta de reflexión.</p>
              </div>

              <div className="mb-8">
                <div className="flex justify-between text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">
                  <span>Pregunta {currentStep + 1} de {questions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-brand-wine" 
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-xl font-bold text-gray-800 mb-8">{questions[currentStep].text}</h2>
                  <div className="grid grid-cols-1 gap-4">
                    {questions[currentStep].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(option.score)}
                        className="w-full text-left p-5 rounded-2xl border-2 border-gray-100 hover:border-brand-wine hover:bg-brand-pink-light/30 transition-all group flex justify-between items-center"
                      >
                        <span className="font-medium text-gray-700 group-hover:text-brand-wine">{option.text}</span>
                        <ArrowRight size={18} className="text-gray-300 group-hover:text-brand-wine group-hover:translate-x-1 transition-all" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-brand-pink/20 text-center"
            >
              <div className={cn("inline-flex p-4 rounded-full mb-6", result.bg)}>
                <Flower2 className={result.color} size={48} />
              </div>
              <h2 className={cn("text-3xl font-bold mb-4", result.color)}>{result.title}</h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                {result.description}
              </p>

              <div className="bg-gray-50 p-6 rounded-2xl mb-10 text-sm text-gray-600 italic">
                "Si sientes que tu bienestar íntimo necesita atención, un espacio terapéutico puede ayudarte a comprender mejor lo que está ocurriendo."
              </div>

              <div className="space-y-4">
                <Link to="/agendar" className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-2">
                  Agenda tu sesión <ArrowRight size={20} />
                </Link>
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-[#25D366] font-bold hover:underline"
                >
                  <MessageCircle size={20} />
                  Consultar por WhatsApp
                </a>
                <button 
                  onClick={resetTest}
                  className="w-full flex items-center justify-center gap-2 text-gray-400 hover:text-brand-wine transition-colors text-sm font-medium"
                >
                  <RefreshCw size={16} /> Repetir el test
                </button>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h4 className="text-sm font-bold text-gray-500 mb-4 uppercase tracking-widest">Test Relacionado</h4>
                <Link 
                  to="/test-lenguajes-amor"
                  className="flex items-center gap-4 p-4 bg-brand-pink-light/20 rounded-2xl border border-brand-pink/10 hover:border-brand-wine transition-all group"
                >
                  <div className="p-2 bg-white rounded-xl">
                    <Heart className="text-brand-wine" size={20} />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-800 text-sm group-hover:text-brand-wine transition-colors">Test de Lenguajes del Amor</p>
                    <p className="text-xs text-gray-500">Descubre cómo expresas y recibes afecto.</p>
                  </div>
                  <ArrowRight size={16} className="ml-auto text-gray-300 group-hover:text-brand-wine group-hover:translate-x-1 transition-all" />
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
