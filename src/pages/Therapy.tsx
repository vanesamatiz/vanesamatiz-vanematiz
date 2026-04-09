import React from 'react';
import { CheckCircle2, ArrowRight, Calendar, Info, Users, Flower2, ShieldCheck, MessageCircle, FileText } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { WHATSAPP_URL } from '@/constants';

const programs = [
  {
    title: "Programa de 9 Sesiones",
    duration: "9 semanas",
    focus: "Evaluación y ajuste",
    features: [
      "Evaluación inicial profunda",
      "Identificación de patrones",
      "Herramientas de comunicación básica",
      "Seguimiento semanal"
    ]
  },
  {
    title: "Programa de 12 Sesiones",
    duration: "12 semanas",
    focus: "Transformación relacional",
    features: [
      "Todo lo del programa de 9 sesiones",
      "Resolución de conflictos profundos",
      "Reconexión íntima y sexual",
      "Actividades terapéuticas guiadas",
      "Recursos exclusivos"
    ],
    popular: true
  },
  {
    title: "Programa de 15 Sesiones",
    duration: "15 semanas",
    focus: "Reconstrucción integral",
    features: [
      "Todo lo del programa de 12 sesiones",
      "Acompañamiento en crisis severas",
      "Plan de mantenimiento a largo plazo",
      "Sesiones de refuerzo",
      "Soporte prioritario"
    ]
  }
];

export default function Therapy() {
  return (
    <div className="pt-20">
      <SEO 
        title="Terapia de Pareja y Sexología Clínica | Vanesa Matiz" 
        description="Terapia de pareja, terapia individual y programas estructurados de 9, 12 y 15 sesiones para transformar tu relación y bienestar íntimo con Vanesa Matiz."
        keywords="terapia de pareja, sexología clínica, programas de terapia, bienestar íntimo, Vanesa Matiz terapia"
      />

      {/* Header */}
      <section className="bg-brand-wine text-white py-20">
        <div className="container-custom text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Terapia y Programas
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-pink/80 max-w-3xl mx-auto"
          >
            Procesos terapéuticos diseñados para abordar las raíces de los conflictos y potenciar el bienestar íntimo.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div className="bg-brand-pink-light/50 p-10 rounded-3xl">
              <h2 className="text-3xl font-bold mb-6">Terapia de Pareja</h2>
              <p className="text-gray-600 mb-8">
                Un espacio seguro para explorar las dinámicas de la relación, mejorar la comunicación y resolver conflictos que impiden el crecimiento mutuo.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Crisis de pareja e infidelidad",
                  "Problemas de comunicación",
                  "Distanciamiento emocional",
                  "Dificultades en la convivencia",
                  "Dudas sobre el futuro de la relación"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-wine mt-1 shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/agendar" className="btn-primary inline-block">Agendar Sesión de Pareja</Link>
            </div>

            <div className="bg-gray-50 p-10 rounded-3xl">
              <h2 className="text-3xl font-bold mb-6">Terapia Individual</h2>
              <p className="text-gray-600 mb-8">
                Enfocada en el autoconocimiento, la sanación personal y el fortalecimiento de la relación con uno mismo y con el propio cuerpo.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Autoestima y bienestar sexual",
                  "Duelo amoroso y rupturas",
                  "Ansiedad por rendimiento sexual",
                  "Dificultades para el orgasmo",
                  "Reconexión con el deseo"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-wine mt-1 shrink-0" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/agendar" className="btn-primary inline-block">Agendar Sesión Individual</Link>
            </div>
          </div>

            <div className="bg-brand-wine/5 p-8 rounded-2xl flex flex-col md:flex-row items-center gap-6 border border-brand-wine/10">
            <div className="bg-brand-wine text-white p-4 rounded-full">
              <Info size={32} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Información de las Sesiones</h3>
              <p className="text-gray-600">
                Cada sesión tiene una duración aproximada de <strong>55 minutos</strong>. El tiempo puede variar según las necesidades del proceso terapéutico.
              </p>
            </div>
            <div className="md:ml-auto text-right">
              <p className="text-2xl font-bold text-brand-wine">250.000 COP / 72 USD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Programas Terapéuticos Estructurados</h2>
            <p className="text-gray-600">
              Procesos transformadores con un acompañamiento continuo y herramientas exclusivas para parejas que buscan un cambio profundo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative bg-white rounded-3xl p-8 shadow-sm border transition-all hover:shadow-xl",
                  program.popular ? "border-brand-wine ring-4 ring-brand-wine/5 scale-105 z-10" : "border-gray-100"
                )}
              >
                {program.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-wine text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                    Más Recomendado
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                <p className="text-brand-wine font-semibold mb-6">{program.focus}</p>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-8">
                  <Calendar size={16} />
                  <span>Duración aprox: {program.duration}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {program.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="text-brand-pink shrink-0" size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              <Link 
                to="/agendar" 
                className={cn(
                  "w-full block text-center py-4 rounded-xl font-bold transition-all",
                  program.popular ? "bg-brand-wine text-white hover:bg-opacity-90" : "bg-brand-pink text-brand-wine hover:bg-opacity-80"
                )}
              >
                Solicitar Información
              </Link>
              <div className="mt-4">
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-xs font-bold text-gray-400 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle size={14} />
                  Preguntar por WhatsApp
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 max-w-2xl mx-auto text-center bg-white p-8 rounded-3xl border border-brand-pink/10 shadow-sm">
          <p className="text-gray-600 mb-6 font-medium">Si tienes preguntas antes de agendar tu sesión, puedes escribir directamente por WhatsApp.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-3 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
            >
              <MessageCircle size={24} />
              Consultar por WhatsApp
            </a>
              <Link 
                to="/acuerdo-plan-premium-pareja"
                className="text-sm text-brand-wine font-bold hover:underline flex items-center gap-1"
              >
                <FileText size={16} />
                Acuerdo Plan Premium
              </Link>
              <Link 
                to="/acuerdo-plan-intermedio-pareja"
                className="text-sm text-brand-wine font-bold hover:underline flex items-center gap-1"
              >
                <FileText size={16} />
                Acuerdo Plan Intermedio
              </Link>
              <Link 
                to="/acuerdo-plan-basico-pareja"
                className="text-sm text-brand-wine font-bold hover:underline flex items-center gap-1"
              >
                <FileText size={16} />
                Acuerdo Plan Básico
              </Link>
          </div>
        </div>
      </div>
    </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes (FAQ)</h2>
            <p className="text-gray-600">Resuelve tus dudas sobre el proceso terapéutico, pagos y agendamiento.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "¿Cuánto dura cada sesión?",
                a: "Cada sesión tiene una duración aproximada de 55 minutos. Sin embargo, el tiempo puede variar según las necesidades del proceso terapéutico. En algunos casos, cuando la Dra. lo considera necesario para el avance del proceso, las sesiones pueden extenderse o realizarse en un formato más largo, dependiendo del caso específico."
              },
              {
                q: "¿Atiendes parejas del mismo sexo?",
                a: "Sí. Se atienden parejas heterosexuales y parejas conformadas por mujeres. El espacio terapéutico es respetuoso, confidencial y libre de juicios, orientado al bienestar emocional, relacional y sexual de quienes consultan."
              },
              {
                q: "¿Cómo es el proceso de pago?",
                a: "El pago es anticipado. Cuando agendas tu sesión, debes realizar el pago correspondiente para confirmar y reservar tu espacio en la agenda. Los pagos pueden realizarse mediante transferencia bancaria, Llave, Tarjeta de crédito (con recargo del 7%) o PayPal para pagos internacionales."
              },
              {
                q: "¿Qué pasa si necesito cancelar o cambiar la cita?",
                a: "Puedes reagendar tu sesión siempre que informes con al menos 8 horas de anticipación. Cuando no se informa con el tiempo mínimo requerido, la sesión se da por tomada, debido a que ese espacio fue bloqueado en agenda para tu atención."
              },
              {
                q: "¿Cuántas sesiones necesito?",
                a: "El número de sesiones varía según cada caso. Se sugiere iniciar con paquetes de al menos 9 sesiones, que suelen ser el tiempo mínimo para comenzar a observar una transformación significativa y sostenida en el proceso."
              },
              {
                q: "¿Qué ocurre en la primera sesión?",
                a: "La primera sesión es principalmente diagnóstica. Permite evaluar la situación, comprender qué está ocurriendo en tu vida emocional, relacional o sexual, identificar necesidades y objetivos, y establecer el plan de trabajo más adecuado."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                <h4 className="text-lg font-bold mb-4 text-brand-wine">{faq.q}</h4>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿No sabes si necesitas terapia? Section */}
      <section className="section-padding bg-brand-pink-light/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">¿No sabes si necesitas terapia?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Utiliza nuestras herramientas de reflexión para identificar en qué áreas de tu vida íntima o relacional podrías beneficiarte de un acompañamiento profesional.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Test de crisis de pareja",
                href: "/test/relacion",
                icon: <Users className="text-brand-wine" size={24} />,
                color: "bg-white"
              },
              {
                title: "Bienestar íntimo femenino",
                href: "/test/femenino",
                icon: <Flower2 className="text-brand-wine" size={24} />,
                color: "bg-white"
              },
              {
                title: "Bienestar sexual masculino",
                href: "/test/masculino",
                icon: <ShieldCheck className="text-brand-wine" size={24} />,
                color: "bg-white"
              }
            ].map((test, i) => (
              <Link 
                key={i}
                to={test.href}
                className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-brand-pink/10 hover:border-brand-wine transition-all group"
              >
                <div className={cn("p-3 rounded-xl", test.color)}>
                  {test.icon}
                </div>
                <span className="font-bold text-gray-800 group-hover:text-brand-wine transition-colors">{test.title}</span>
                <ArrowRight size={18} className="ml-auto text-gray-300 group-hover:text-brand-wine group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Nuestro Equipo Profesional</h2>
            <p className="text-gray-600">Contamos con especialistas de alto nivel para ampliar nuestra disponibilidad de atención.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Vanesa Matiz", role: "Psicóloga y Sexóloga Clínica", img: "https://picsum.photos/seed/vanesa/400/400" },
              { name: "Xiomara Hernández", role: "Sexóloga Clínica", img: "https://picsum.photos/seed/xiomara/400/400" },
              { name: "Hernando Restrepo", role: "Sexólogo Clínico", img: "https://picsum.photos/seed/hernando/400/400" }
            ].map((member, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6 inline-block">
                  <div className="absolute inset-0 bg-brand-pink rounded-full scale-105 opacity-0 group-hover:opacity-20 transition-opacity" />
                  <img src={member.img} alt={member.name} className="w-48 h-48 rounded-full object-cover shadow-lg relative z-10" referrerPolicy="no-referrer" />
                </div>
                <h4 className="text-xl font-bold">{member.name}</h4>
                <p className="text-brand-wine text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
