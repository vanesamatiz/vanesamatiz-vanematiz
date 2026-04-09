import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ClipboardCheck, Users, Flower2, ShieldCheck, ArrowRight, Heart } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { cn } from '@/lib/utils';

const tests = [
  {
    title: "Test de Relación",
    subtitle: "¿Tu relación está pasando por una crisis?",
    desc: "Descubre en qué momento se encuentra tu relación y recibe orientación inicial.",
    href: "/test/relacion",
    icon: <Users className="text-brand-wine" size={32} />,
    color: "bg-brand-pink-light"
  },
  {
    title: "Bienestar Íntimo Femenino",
    subtitle: "¿Cómo está tu bienestar íntimo y sexual?",
    desc: "Reflexiona sobre tu relación con el placer, tu cuerpo y tu vida íntima.",
    href: "/test/femenino",
    icon: <Flower2 className="text-brand-wine" size={32} />,
    color: "bg-pink-50"
  },
  {
    title: "Bienestar Sexual Masculino",
    subtitle: "¿Cómo está tu bienestar sexual?",
    desc: "Analiza el impacto del estrés, el deseo y la presión por el rendimiento.",
    href: "/test/masculino",
    icon: <ShieldCheck className="text-brand-wine" size={32} />,
    color: "bg-blue-50"
  },
  {
    title: "Lenguajes del Amor",
    subtitle: "¿Cómo expresas y recibes afecto?",
    desc: "Descubre cuál de los 5 lenguajes del amor predomina en ti y mejora tu conexión emocional.",
    href: "/test-lenguajes-amor",
    icon: <Heart className="text-brand-wine" size={32} />,
    color: "bg-red-50"
  }
];

export default function TestsLanding() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Tests de Autoconocimiento y Bienestar | Vanesa Matiz" 
        description="Realiza nuestros tests gratuitos de autoconocimiento para evaluar tu relación de pareja y tu bienestar sexual. Herramientas de reflexión profesional."
        keywords="test de pareja, test sexualidad, autoconocimiento, bienestar emocional, Vanesa Matiz tests"
      />

      <section className="bg-brand-wine text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ClipboardCheck className="mx-auto mb-6 opacity-50" size={48} />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Tests de Autoconocimiento</h1>
            <p className="text-xl text-brand-pink/80 max-w-2xl mx-auto">
              Herramientas de reflexión diseñadas para ayudarte a identificar áreas de mejora en tu vida íntima y relacional.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tests.map((test, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link 
                  to={test.href}
                  className="block h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-6", test.color)}>
                    {test.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-brand-wine transition-colors">{test.title}</h3>
                  <p className="text-brand-wine text-sm font-semibold mb-4">{test.subtitle}</p>
                  <p className="text-gray-500 text-sm mb-8 leading-relaxed">{test.desc}</p>
                  <div className="flex items-center gap-2 text-brand-wine font-bold text-sm">
                    Empezar test gratuito <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container-custom text-center">
          <p className="text-gray-400 text-sm italic">
            * Estos tests son herramientas de reflexión y no sustituyen una evaluación clínica profesional. 
            Tus respuestas son 100% anónimas y confidenciales.
          </p>
        </div>
      </section>
    </div>
  );
}
