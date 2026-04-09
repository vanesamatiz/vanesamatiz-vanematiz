import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '@/components/SEO';
import { 
  Plus, 
  Minus, 
  MessageCircle, 
  Clock, 
  Globe, 
  ShieldCheck, 
  CreditCard,
  Users,
  Calendar
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { WHATSAPP_URL, BOOKING_URL } from '@/constants';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
  icon: React.ReactNode;
  key?: React.Key;
}

const FAQItem = ({ question, answer, icon }: FAQItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-brand-pink/20 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between gap-4 text-left group"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-brand-pink-light flex items-center justify-center text-brand-wine shrink-0 group-hover:bg-brand-wine group-hover:text-white transition-colors">
            {icon}
          </div>
          <span className="text-lg font-bold text-brand-wine">{question}</span>
        </div>
        <div className="shrink-0">
          {isOpen ? <Minus className="text-brand-wine" /> : <Plus className="text-brand-wine" />}
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="pb-6 pl-14 text-gray-600 leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
};

export default function FAQ() {
  const faqs = [
    {
      icon: <Calendar size={20} />,
      question: "¿Cómo es la primera sesión?",
      answer: "La primera sesión es un espacio de conocimiento mutuo. Hablaremos sobre el motivo de tu consulta, tus expectativas y estableceremos los objetivos del proceso terapéutico. Es un espacio seguro, sin juicios, donde podrás expresarte con total libertad."
    },
    {
      icon: <Globe size={20} />,
      question: "¿La atención es presencial u online?",
      answer: "Mi atención es 100% virtual. Las sesiones se realizan a través de plataformas seguras de videollamada, lo que te permite llevar a cabo tu proceso desde la comodidad de tu lugar seguro, sin importar en qué parte del mundo te encuentres. La efectividad de la terapia online es equivalente a la presencial."
    },
    {
      icon: <Clock size={20} />,
      question: "¿Cuál es la duración de las sesiones?",
      answer: "Las sesiones individuales y de pareja tienen una duración aproximada de 55 minutos. Es el tiempo ideal para profundizar en los temas sin generar agotamiento emocional excesivo."
    },
    {
      icon: <Users size={20} />,
      question: "¿Atiendes parejas o solo individuos?",
      answer: "Atiendo a ambos. Mi especialidad es la terapia de pareja y la sexología clínica, por lo que trabajo con individuos que buscan mejorar su bienestar íntimo y con parejas que atraviesan crisis o desean fortalecer su vínculo."
    },
    {
      icon: <ShieldCheck size={20} />,
      question: "¿Es confidencial la información compartida?",
      answer: "Absolutamente. Como psicóloga clínica, me rijo por el código ético profesional que garantiza la total confidencialidad de todo lo tratado en sesión. Tu privacidad es mi prioridad."
    },
    {
      icon: <CreditCard size={20} />,
      question: "¿Cómo puedo realizar el pago?",
      answer: "Para pacientes en Colombia, aceptamos pagos a través de Wompi (tarjetas, PSE, Nequi). Para pacientes internacionales, el pago se realiza vía PayPal. El pago debe confirmarse antes de iniciar la sesión."
    },
    {
      icon: <MessageCircle size={20} />,
      question: "¿Qué pasa si necesito cancelar o reprogramar?",
      answer: "Entiendo que pueden surgir imprevistos. Te pido que cualquier cambio o cancelación se realice con al menos 24 horas de anticipación para poder asignar ese espacio a otra persona. Cancelaciones con menos de 24 horas pueden tener un cargo administrativo."
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Preguntas Frecuentes | Vanesa Matiz" 
        description="Resuelve tus dudas sobre las sesiones de terapia de pareja y sexología clínica con Vanesa Matiz. Información sobre pagos, duración y modalidad."
        keywords="preguntas frecuentes terapia, dudas psicóloga, terapia online colombia, costo terapia pareja"
      />

      {/* Header */}
      <section className="bg-brand-wine text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink rounded-full blur-3xl opacity-10 -mr-32 -mt-32" />
        <div className="container-custom text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Preguntas Frecuentes
          </motion.h1>
          <p className="text-xl text-brand-pink/80 max-w-2xl mx-auto">
            Todo lo que necesitas saber antes de iniciar tu proceso de transformación.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-brand-pink/10">
            {faqs.map((faq, i) => (
              <FAQItem 
                key={i} 
                question={faq.question} 
                answer={faq.answer} 
                icon={faq.icon} 
              />
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-16 bg-brand-pink-light/30 rounded-[2.5rem] p-8 md:p-12 text-center border border-brand-pink/20">
            <h3 className="text-2xl font-bold text-brand-wine mb-4">¿Aún tienes dudas?</h3>
            <p className="text-gray-600 mb-8">
              Si no encontraste la respuesta que buscabas, no dudes en escribirme directamente.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:shadow-lg transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp Directo
              </a>
              <a 
                href={BOOKING_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Agendar ahora
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
