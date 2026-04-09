import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, ArrowRight, ClipboardCheck, RefreshCw, MessageCircle, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { cn } from '@/lib/utils';
import { WHATSAPP_URL } from '@/constants';

const questions = [
  {
    id: 1,
    text: "¿Con qué frecuencia discutes con tu pareja?",
    options: [
      { text: "Casi nunca", score: 0 },
      { text: "Algunas veces", score: 1 },
      { text: "Frecuentemente", score: 2 },
      { text: "Casi siempre", score: 3 }
    ]
  },
  {
    id: 2,
    text: "¿Sientes que la comunicación entre ustedes ha empeorado?",
    options: [
      { text: "No", score: 0 },
      { text: "Un poco", score: 1 },
      { text: "Bastante", score: 2 },
      { text: "Mucho", score: 3 }
    ]
  },
  {
    id: 3,
    text: "¿Cómo describirías el nivel de deseo sexual en la relación?",
    options: [
      { text: "Alto", score: 0 },
      { text: "Estable", score: 1 },
      { text: "Ha disminuido", score: 2 },
      { text: "Casi inexistente", score: 3 }
    ]
  },
  {
    id: 4,
    text: "¿Sientes distancia emocional con tu pareja?",
    options: [
      { text: "No", score: 0 },
      { text: "A veces", score: 1 },
      { text: "Frecuentemente", score: 2 },
      { text: "Constantemente", score: 3 }
    ]
  },
  {
    id: 5,
    text: "¿Han hablado abiertamente sobre lo que sienten?",
    options: [
      { text: "Sí", score: 0 },
      { text: "Algunas veces", score: 1 },
      { text: "Muy poco", score: 2 },
      { text: "Casi nunca", score: 3 }
    ]
  },
  {
    id: 6,
    text: "¿Sientes que tu pareja te escucha realmente?",
    options: [
      { text: "Sí", score: 0 },
      { text: "A veces", score: 1 },
      { text: "Poco", score: 2 },
      { text: "No", score: 3 }
    ]
  },
  {
    id: 7,
    text: "¿Han pensado en separarse?",
    options: [
      { text: "No", score: 0 },
      { text: "Alguna vez", score: 1 },
      { text: "Varias veces", score: 2 },
      { text: "Constantemente", score: 3 }
    ]
  },
  {
    id: 8,
    text: "¿Sientes que la intimidad sexual ha cambiado negativamente?",
    options: [
      { text: "No", score: 0 },
      { text: "Un poco", score: 1 },
      { text: "Bastante", score: 2 },
      { text: "Mucho", score: 3 }
    ]
  },
  {
    id: 9,
    text: "¿Sientes que la relación te genera más estrés que bienestar?",
    options: [
      { text: "No", score: 0 },
      { text: "A veces", score: 1 },
      { text: "Frecuentemente", score: 2 },
      { text: "Casi siempre", score: 3 }
    ]
  },
  {
    id: 10,
    text: "Si tuvieras la oportunidad de mejorar la relación, ¿lo intentarías?",
    options: [
      { text: "Sí", score: 0 },
      { text: "Probablemente", score: 1 },
      { text: "No estoy seguro", score: 2 },
      { text: "No", score: 3 }
    ]
  }
];

export default function RelationshipTest() {
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
  const maxScore = questions.length * 3;

  const getResult = () => {
    if (totalScore <= 10) {
      return {
        title: "Resultado Bajo",
        description: "La relación presenta tensiones normales que pueden mejorar con comunicación y trabajo en equipo.",
        color: "text-green-600",
        bg: "bg-green-50"
      };
    } else if (totalScore <= 20) {
      return {
        title: "Resultado Medio",
        description: "Existen señales de desgaste en la relación que podrían beneficiarse de orientación profesional.",
        color: "text-orange-600",
        bg: "bg-orange-50"
      };
    } else {
      return {
        title: "Resultado Alto",
        description: "La relación parece atravesar una crisis significativa. Buscar acompañamiento terapéutico puede ayudarte a comprender mejor lo que está ocurriendo.",
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
        title="Test de Relación de Pareja | Vanesa Matiz" 
        description="¿Tu relación está pasando por una crisis? Realiza este test gratuito de 10 preguntas y descubre en qué momento se encuentra tu relación."
        keywords="test crisis pareja, evaluación relación, problemas de pareja test, Vanesa Matiz test"
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
                <ClipboardCheck className="mx-auto text-brand-wine mb-4" size={48} />
                <h1 className="text-3xl font-bold mb-2">Test gratuito: ¿Tu relación está pasando por una crisis?</h1>
                <p className="text-gray-500">Responde estas preguntas y descubre en qué momento se encuentra tu relación.</p>
              </div>

              {/* Progress Bar */}
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
                <ClipboardCheck className={result.color} size={48} />
              </div>
              <h2 className={cn("text-3xl font-bold mb-4", result.color)}>{result.title}</h2>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed">
                {result.description}
              </p>

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

              <div className="mt-8 pt-8 border-t border-gray-100">
                <p className="text-sm text-gray-400">
                  Este test es una herramienta de orientación y no sustituye un diagnóstico clínico profesional.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
