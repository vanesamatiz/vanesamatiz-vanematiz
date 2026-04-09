import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SEO } from '@/components/SEO';
import { 
  MessageSquare, 
  Clock, 
  HandHelping, 
  Gift, 
  Heart, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw,
  Instagram,
  Youtube,
  Linkedin,
  CheckCircle2
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { SOCIAL_LINKS } from '@/constants';

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    type: 'words' | 'time' | 'service' | 'gifts' | 'physical';
    letter: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "Cuando quiero sentirme amado o valorado prefiero que mi pareja:",
    options: [
      { letter: 'A', text: "Me diga palabras de reconocimiento o cariño", type: 'words' },
      { letter: 'B', text: "Pase tiempo conmigo sin distracciones", type: 'time' },
      { letter: 'C', text: "Haga algo para ayudarme o facilitar mi vida", type: 'service' },
      { letter: 'D', text: "Me sorprenda con un detalle o regalo", type: 'gifts' },
      { letter: 'E', text: "Me abrace o tenga contacto físico conmigo", type: 'physical' },
    ]
  },
  {
    id: 2,
    text: "Me siento más amado cuando mi pareja:",
    options: [
      { letter: 'A', text: "Me expresa lo que valora de mí", type: 'words' },
      { letter: 'B', text: "Dedica tiempo exclusivamente para nosotros", type: 'time' },
      { letter: 'C', text: "Hace algo por mí sin que se lo pida", type: 'service' },
      { letter: 'D', text: "Me trae un pequeño detalle", type: 'gifts' },
      { letter: 'E', text: "Me toma de la mano o me abraza", type: 'physical' },
    ]
  },
  {
    id: 3,
    text: "Cuando estoy pasando por un momento difícil me ayuda más que mi pareja:",
    options: [
      { letter: 'A', text: "Me diga palabras de apoyo", type: 'words' },
      { letter: 'B', text: "Se siente conmigo a conversar", type: 'time' },
      { letter: 'C', text: "Me ayude con alguna tarea", type: 'service' },
      { letter: 'D', text: "Me dé un detalle que me anime", type: 'gifts' },
      { letter: 'E', text: "Me abrace", type: 'physical' },
    ]
  },
  {
    id: 4,
    text: "Me siento más conectado con mi pareja cuando:",
    options: [
      { letter: 'A', text: "Me expresa lo que siente por mí", type: 'words' },
      { letter: 'B', text: "Pasamos tiempo de calidad juntos", type: 'time' },
      { letter: 'C', text: "Hace cosas para apoyarme", type: 'service' },
      { letter: 'D', text: "Me sorprende con detalles", type: 'gifts' },
      { letter: 'E', text: "Tenemos contacto físico cercano", type: 'physical' },
    ]
  },
  {
    id: 5,
    text: "Para mí es importante que mi pareja:",
    options: [
      { letter: 'A', text: "Reconozca mis esfuerzos", type: 'words' },
      { letter: 'B', text: "Dedique tiempo para compartir", type: 'time' },
      { letter: 'C', text: "Me ayude cuando lo necesito", type: 'service' },
      { letter: 'D', text: "Me sorprenda con regalos", type: 'gifts' },
      { letter: 'E', text: "Me abrace o tenga gestos físicos de cariño", type: 'physical' },
    ]
  },
  {
    id: 6,
    text: "Cuando mi pareja me demuestra amor me siento más feliz si:",
    options: [
      { letter: 'A', text: "Me dice lo importante que soy", type: 'words' },
      { letter: 'B', text: "Pasamos tiempo juntos", type: 'time' },
      { letter: 'C', text: "Hace algo especial por mí", type: 'service' },
      { letter: 'D', text: "Me da un regalo o detalle", type: 'gifts' },
      { letter: 'E', text: "Me toca o me abraza", type: 'physical' },
    ]
  },
  {
    id: 7,
    text: "Cuando recuerdo momentos felices en la relación normalmente están relacionados con:",
    options: [
      { letter: 'A', text: "Palabras bonitas que me dijo", type: 'words' },
      { letter: 'B', text: "Momentos compartidos", type: 'time' },
      { letter: 'C', text: "Acciones que hizo por mí", type: 'service' },
      { letter: 'D', text: "Detalles que me regaló", type: 'gifts' },
      { letter: 'E', text: "Gestos de contacto físico", type: 'physical' },
    ]
  },
  {
    id: 8,
    text: "Me siento especialmente amado cuando mi pareja:",
    options: [
      { letter: 'A', text: "Expresa verbalmente su cariño", type: 'words' },
      { letter: 'B', text: "Pasa tiempo conmigo", type: 'time' },
      { letter: 'C', text: "Me ayuda con algo importante", type: 'service' },
      { letter: 'D', text: "Me da un detalle significativo", type: 'gifts' },
      { letter: 'E', text: "Me abraza", type: 'physical' },
    ]
  },
  {
    id: 9,
    text: "Cuando quiero demostrar amor a mi pareja normalmente:",
    options: [
      { letter: 'A', text: "Le digo cosas bonitas", type: 'words' },
      { letter: 'B', text: "Quiero pasar tiempo juntos", type: 'time' },
      { letter: 'C', text: "Hago algo para ayudarle", type: 'service' },
      { letter: 'D', text: "Le doy un regalo", type: 'gifts' },
      { letter: 'E', text: "Busco contacto físico", type: 'physical' },
    ]
  },
  {
    id: 10,
    text: "Para mí el amor se siente más real cuando:",
    options: [
      { letter: 'A', text: "Lo escucho en palabras", type: 'words' },
      { letter: 'B', text: "Lo comparto en momentos", type: 'time' },
      { letter: 'C', text: "Lo veo en acciones", type: 'service' },
      { letter: 'D', text: "Lo recibo en detalles", type: 'gifts' },
      { letter: 'E', text: "Lo siento en el contacto físico", type: 'physical' },
    ]
  },
  {
    id: 11,
    text: "Valoro mucho cuando mi pareja:",
    options: [
      { letter: 'A', text: "Me deja notas de amor", type: 'words' },
      { letter: 'B', text: "Planea un viaje o salida solo para los dos", type: 'time' },
      { letter: 'C', text: "Me prepara la comida o me ayuda con la casa", type: 'service' },
      { letter: 'D', text: "Me compra algo que sabe que me gusta", type: 'gifts' },
      { letter: 'E', text: "Me da un masaje o me acaricia el cabello", type: 'physical' },
    ]
  },
  {
    id: 12,
    text: "Me siento más apreciado cuando:",
    options: [
      { letter: 'A', text: "Mi pareja me felicita por mis logros", type: 'words' },
      { letter: 'B', text: "Me escucha con atención sin mirar el celular", type: 'time' },
      { letter: 'C', text: "Se encarga de algo que me estresa", type: 'service' },
      { letter: 'D', text: "Me da un detalle sin que sea una fecha especial", type: 'gifts' },
      { letter: 'E', text: "Me abraza por la espalda mientras estoy ocupado", type: 'physical' },
    ]
  },
  {
    id: 13,
    text: "Lo que más me hace falta cuando mi pareja está lejos es:",
    options: [
      { letter: 'A', text: "Escuchar su voz diciéndome que me extraña", type: 'words' },
      { letter: 'B', text: "Compartir nuestro tiempo y actividades diarias", type: 'time' },
      { letter: 'C', text: "Que esté aquí para apoyarme con las cosas del día a día", type: 'service' },
      { letter: 'D', text: "Que me envíe un detalle o regalo por correo", type: 'gifts' },
      { letter: 'E', text: "Su cercanía física y sus abrazos", type: 'physical' },
    ]
  },
  {
    id: 14,
    text: "Siento que mi pareja me conoce bien cuando:",
    options: [
      { letter: 'A', text: "Sabe exactamente qué palabras decir para animarme", type: 'words' },
      { letter: 'B', text: "Sabe qué actividades disfruto hacer a su lado", type: 'time' },
      { letter: 'C', text: "Sabe qué tareas me cuestan más y me ayuda con ellas", type: 'service' },
      { letter: 'D', text: "Sabe qué tipo de detalles me sorprenden gratamente", type: 'gifts' },
      { letter: 'E', text: "Sabe cómo tocarme para que me sienta relajado", type: 'physical' },
    ]
  },
  {
    id: 15,
    text: "Un aniversario ideal para mí incluiría:",
    options: [
      { letter: 'A', text: "Una carta escrita a mano expresando sus sentimientos", type: 'words' },
      { letter: 'B', text: "Un día entero dedicado solo a nosotros dos", type: 'time' },
      { letter: 'C', text: "Que mi pareja se encargue de toda la organización y logística", type: 'service' },
      { letter: 'D', text: "Un regalo significativo y bien pensado", type: 'gifts' },
      { letter: 'E', text: "Mucho tiempo de mimos y cercanía física", type: 'physical' },
    ]
  },
  {
    id: 16,
    text: "En el día a día, lo que más me llena es:",
    options: [
      { letter: 'A', text: "Un mensaje de texto cariñoso a mitad del día", type: 'words' },
      { letter: 'B', text: "Una caminata juntos al final de la tarde", type: 'time' },
      { letter: 'C', text: "Que mi pareja lave los platos o haga las compras", type: 'service' },
      { letter: 'D', text: "Que me traiga mi postre favorito de camino a casa", type: 'gifts' },
      { letter: 'E', text: "Un beso largo al saludarnos o despedirnos", type: 'physical' },
    ]
  },
  {
    id: 17,
    text: "Me siento seguro en mi relación cuando:",
    options: [
      { letter: 'A', text: "Mi pareja me reafirma constantemente su compromiso verbalmente", type: 'words' },
      { letter: 'B', text: "Prioriza nuestro tiempo juntos sobre otras actividades", type: 'time' },
      { letter: 'C', text: "Demuestra su compromiso a través de sus acciones y apoyo", type: 'service' },
      { letter: 'D', text: "Se esfuerza por tener detalles que demuestran que piensa en mí", type: 'gifts' },
      { letter: 'E', text: "Hay una conexión física constante y afectuosa", type: 'physical' },
    ]
  },
  {
    id: 18,
    text: "Si mi pareja quiere pedirme perdón, prefiero que:",
    options: [
      { letter: 'A', text: "Me pida disculpas sinceras con palabras claras", type: 'words' },
      { letter: 'B', text: "Dedique tiempo para hablar y estar conmigo", type: 'time' },
      { letter: 'C', text: "Haga algo para compensar el error con una acción útil", type: 'service' },
      { letter: 'D', text: "Me traiga un detalle como símbolo de reconciliación", type: 'gifts' },
      { letter: 'E', text: "Me abrace fuertemente y me haga sentir su presencia", type: 'physical' },
    ]
  },
  {
    id: 19,
    text: "Lo que más me duele es que mi pareja:",
    options: [
      { letter: 'A', text: "Me critique duramente o use palabras hirientes", type: 'words' },
      { letter: 'B', text: "Cancele nuestros planes o no me preste atención", type: 'time' },
      { letter: 'C', text: "Ignore mis peticiones de ayuda o apoyo", type: 'service' },
      { letter: 'D', text: "Se olvide de fechas importantes o no tenga detalles", type: 'gifts' },
      { letter: 'E', text: "Se muestre distante físicamente o evite el contacto", type: 'physical' },
    ]
  },
  {
    id: 20,
    text: "En resumen, me siento más pleno cuando:",
    options: [
      { letter: 'A', text: "La comunicación verbal es positiva y afectuosa", type: 'words' },
      { letter: 'B', text: "La conexión se basa en el tiempo compartido", type: 'time' },
      { letter: 'C', text: "El apoyo mutuo se ve en las acciones diarias", type: 'service' },
      { letter: 'D', text: "Los detalles mantienen viva la chispa", type: 'gifts' },
      { letter: 'E', text: "El contacto físico es una prioridad", type: 'physical' },
    ]
  }
];

const languageExplanations = {
  words: {
    title: "Palabras de afirmación",
    icon: <MessageSquare className="text-brand-wine" size={24} />,
    description: "Las personas cuyo lenguaje principal son las palabras de afirmación se sienten amadas cuando reciben reconocimiento verbal, elogios, palabras de apoyo o expresiones de cariño. Frases como “te admiro”, “me siento orgulloso de ti” o “me gusta compartir mi vida contigo” pueden tener un impacto profundo en su bienestar emocional. Para estas personas, las palabras tienen el poder de fortalecer la conexión afectiva y generar seguridad en la relación."
  },
  time: {
    title: "Tiempo de calidad",
    icon: <Clock className="text-brand-wine" size={24} />,
    description: "Para quienes tienen este lenguaje predominante, lo más importante es compartir momentos significativos con su pareja. No se trata solo de estar juntos físicamente, sino de tener presencia emocional, atención y conexión. Conversaciones profundas, actividades compartidas o momentos sin distracciones pueden fortalecer el vínculo y generar sensación de cercanía."
  },
  service: {
    title: "Actos de servicio",
    icon: <HandHelping className="text-brand-wine" size={24} />,
    description: "Las personas con este lenguaje del amor se sienten valoradas cuando su pareja realiza acciones que facilitan su vida o muestran cuidado. Pequeños gestos como ayudar con una tarea, apoyar en responsabilidades o hacer algo que el otro necesita pueden ser interpretados como una expresión profunda de amor y compromiso."
  },
  gifts: {
    title: "Regalos",
    icon: <Gift className="text-brand-wine" size={24} />,
    description: "Para algunas personas, recibir un regalo o un detalle simbólico tiene un significado emocional importante. No se trata necesariamente del valor material del objeto, sino de la intención y del gesto de haber pensado en la otra persona."
  },
  physical: {
    title: "Contacto físico",
    icon: <Heart className="text-brand-wine" size={24} />,
    description: "El contacto físico es una forma directa de expresar afecto para muchas personas. Abrazos, caricias, tomarse de la mano o gestos de cercanía corporal pueden transmitir seguridad emocional, conexión y amor."
  }
};

export default function LoveLanguagesTest() {
  const [currentStep, setCurrentStep] = useState<'intro' | 'test' | 'results'>('intro');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [results, setResults] = useState<Record<string, number>>({});

  const handleAnswer = (type: string) => {
    const newAnswers = { ...answers, [currentQuestionIndex]: type };
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      calculateResults(newAnswers);
    }
  };

  const calculateResults = (finalAnswers: Record<number, string>) => {
    const counts: Record<string, number> = {
      words: 0,
      time: 0,
      service: 0,
      gifts: 0,
      physical: 0
    };

    Object.values(finalAnswers).forEach(type => {
      counts[type]++;
    });

    const percentages: Record<string, number> = {};
    Object.keys(counts).forEach(key => {
      percentages[key] = Math.round((counts[key] / questions.length) * 100);
    });

    setResults(percentages);
    setCurrentStep('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetTest = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setCurrentStep('intro');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="pt-20 min-h-screen bg-brand-pink-light/20">
      <SEO 
        title="Test de los 5 Lenguajes del Amor | Descubre cómo expresas y recibes amor" 
        description="Realiza el test de los 5 lenguajes del amor y descubre cómo expresas y recibes el amor en tu relación."
        keywords="test lenguajes del amor, lenguajes del amor test, test de los cinco lenguajes del amor, lenguajes del amor pareja"
      />

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          
          <AnimatePresence mode="wait">
            {currentStep === 'intro' && (
              <motion.div 
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-brand-pink/20"
              >
                <div className="text-center mb-10">
                  <h1 className="text-3xl md:text-5xl font-bold text-brand-wine mb-6 leading-tight">
                    Test: ¿Cuál es tu lenguaje del amor?
                  </h1>
                  <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Cada persona expresa y recibe amor de maneras diferentes. Comprender el lenguaje del amor propio y el de la pareja puede ayudar a mejorar la comunicación, la conexión emocional y la intimidad en la relación.
                  </p>
                  <div className="inline-block px-4 py-2 bg-brand-pink-light rounded-full text-brand-wine text-sm font-medium mb-8">
                    Inspirado en el modelo de Gary Chapman
                  </div>
                </div>

                <div className="space-y-6 text-gray-600 leading-relaxed mb-12">
                  <p>
                    Muchas veces sentimos que damos amor a nuestra pareja, pero la otra persona no lo percibe de la misma manera.
                  </p>
                  <p>
                    Esto ocurre porque cada persona tiene formas distintas de experimentar el afecto. Algunas valoran más las palabras, otras el tiempo compartido, otras los gestos o el contacto físico.
                  </p>
                  <p>
                    Reconocer estos lenguajes puede ayudar a construir relaciones más conscientes y fortalecer la conexión emocional en la pareja.
                  </p>
                </div>

                <div className="flex justify-center">
                  <button 
                    onClick={() => setCurrentStep('test')}
                    className="btn-primary group flex items-center gap-2 px-10 py-4 text-lg"
                  >
                    Empezar el Test
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )}

            {currentStep === 'test' && (
              <motion.div 
                key="test"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-brand-pink/20"
              >
                {/* Progress Bar */}
                <div className="mb-10">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-bold text-brand-wine">Pregunta {currentQuestionIndex + 1} de {questions.length}</span>
                    <span className="text-sm text-gray-400">{Math.round(progress)}% completado</span>
                  </div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-brand-wine"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-wine mb-8 leading-tight">
                    {questions[currentQuestionIndex].text}
                  </h2>
                  <div className="space-y-4">
                    {questions[currentQuestionIndex].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(option.type)}
                        className="w-full text-left p-6 rounded-2xl border-2 border-brand-pink/10 hover:border-brand-wine hover:bg-brand-pink-light/10 transition-all group flex items-start gap-4"
                      >
                        <span className="w-8 h-8 rounded-full bg-brand-pink-light text-brand-wine flex items-center justify-center font-bold shrink-0 group-hover:bg-brand-wine group-hover:text-white transition-colors">
                          {option.letter}
                        </span>
                        <span className="text-lg text-gray-700">{option.text}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => currentQuestionIndex > 0 && setCurrentQuestionIndex(prev => prev - 1)}
                    disabled={currentQuestionIndex === 0}
                    className="flex items-center gap-2 text-gray-400 hover:text-brand-wine disabled:opacity-0 transition-colors"
                  >
                    <ChevronLeft size={20} />
                    Anterior
                  </button>
                  <span className="text-xs text-gray-400 uppercase tracking-widest font-bold">Responde con sinceridad</span>
                </div>
              </motion.div>
            )}

            {currentStep === 'results' && (
              <motion.div 
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-brand-pink/20 text-center">
                  <div className="w-20 h-20 bg-brand-wine text-white rounded-3xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-wine mb-4">Tus Resultados</h2>
                  <p className="text-gray-600 mb-12 max-w-xl mx-auto">
                    Aquí tienes el desglose de tus lenguajes del amor según tus respuestas. El porcentaje más alto indica tu lenguaje predominante.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {(Object.entries(results) as [string, number][])
                      .sort((a, b) => b[1] - a[1])
                      .map(([key, value]) => (
                      <div key={key} className="bg-brand-pink-light/10 p-6 rounded-3xl border border-brand-pink/20">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            {languageExplanations[key as keyof typeof languageExplanations].icon}
                            <span className="font-bold text-brand-wine">
                              {languageExplanations[key as keyof typeof languageExplanations].title}
                            </span>
                          </div>
                          <span className="text-2xl font-bold text-brand-wine">{value}%</span>
                        </div>
                        <div className="w-full h-3 bg-white rounded-full overflow-hidden border border-brand-pink/10">
                          <motion.div 
                            className="h-full bg-brand-wine"
                            initial={{ width: 0 }}
                            animate={{ width: `${value}%` }}
                            transition={{ delay: 0.5, duration: 1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <button 
                    onClick={resetTest}
                    className="flex items-center gap-2 text-brand-wine font-bold hover:underline mx-auto"
                  >
                    <RotateCcw size={18} />
                    Repetir el Test
                  </button>
                </div>

                {/* Explanations */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-brand-pink/20">
                  <h3 className="text-2xl font-bold text-brand-wine mb-10 text-center">Entendiendo los Lenguajes</h3>
                  <div className="grid grid-cols-1 gap-10">
                    {Object.entries(languageExplanations).map(([key, info]) => (
                      <div key={key} className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="w-14 h-14 bg-brand-pink-light rounded-2xl flex items-center justify-center shrink-0">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-brand-wine mb-3">{info.title}</h4>
                          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-brand-wine text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-6">Comprender el lenguaje del amor puede transformar la relación</h3>
                  <p className="text-brand-pink/80 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Conocer el propio lenguaje del amor y el de la pareja puede ayudar a mejorar la comunicación emocional y fortalecer el vínculo afectivo.
                  </p>
                  <p className="text-sm text-brand-pink/60 italic">
                    Si deseas profundizar más en este tema, puedes continuar explorándolo a través del libro “Los cinco lenguajes del amor” de Gary Chapman.
                  </p>
                </div>

                {/* Social Media */}
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-brand-pink/20 text-center">
                  <h3 className="text-xl font-bold text-brand-wine mb-6">Continúa aprendiendo con Vanesa Matiz</h3>
                  <p className="text-gray-600 mb-8">Sígueme en redes sociales para contenido diario sobre relaciones, sexualidad y bienestar íntimo.</p>
                  <div className="flex justify-center gap-6">
                    <a 
                      href={SOCIAL_LINKS.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-brand-pink-light text-brand-wine rounded-xl flex items-center justify-center hover:bg-brand-wine hover:text-white transition-all"
                    >
                      <Instagram size={24} />
                    </a>
                    <a 
                      href={SOCIAL_LINKS.youtube} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-brand-pink-light text-brand-wine rounded-xl flex items-center justify-center hover:bg-brand-wine hover:text-white transition-all"
                    >
                      <Youtube size={24} />
                    </a>
                    <a 
                      href={SOCIAL_LINKS.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-brand-pink-light text-brand-wine rounded-xl flex items-center justify-center hover:bg-brand-wine hover:text-white transition-all"
                    >
                      <Linkedin size={24} />
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
}
