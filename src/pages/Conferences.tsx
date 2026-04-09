import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Building2, Users, ArrowRight, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { WHATSAPP_URL } from '@/constants';

export default function Conferences() {
  return (
    <div className="pt-20">
      <SEO 
        title="Conferencias y Proyectos de Educación Sexual | Vanesa Matiz" 
        description="Conferencias, talleres y proyectos de educación sexual para empresas, universidades e instituciones. Bienestar relacional y salud mental."
        keywords="conferencias educación sexual, talleres bienestar relacional, educación sexual empresas, proyectos educación sexual universidades, Vanesa Matiz conferencias"
      />

      <section className="bg-brand-wine text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Conferencias y Proyectos</h1>
          <p className="text-xl text-brand-pink/80 max-w-3xl mx-auto">
            Educación sexual y bienestar relacional para instituciones, empresas y eventos académicos.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Talleres y Charlas</h2>
              <p className="text-gray-600 leading-relaxed">
                Ofrezco espacios de aprendizaje dinámicos y profesionales adaptados a las necesidades de cada grupo. Mi objetivo es desmitificar la sexualidad y brindar herramientas prácticas para el bienestar.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Building2 />, title: "Empresas", desc: "Bienestar y clima laboral." },
                  { icon: <GraduationCap />, title: "Universidades", desc: "Formación académica." },
                  { icon: <Users />, title: "Instituciones", desc: "Proyectos sociales." },
                  { icon: <Briefcase />, title: "Eventos", desc: "Charlas magistrales." }
                ].map((item, i) => (
                  <div key={i} className="p-4 bg-brand-pink-light/30 rounded-2xl">
                    <div className="text-brand-wine mb-2">{item.icon}</div>
                    <h4 className="font-bold text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gray-50 p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Temas Principales</h3>
              <ul className="space-y-4">
                {[
                  "Sexualidad consciente y placentera",
                  "Bienestar íntimo y salud mental",
                  "Educación sexual integral",
                  "Relaciones de pareja saludables",
                  "Comunicación asertiva y vínculos"
                ].map((tema, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-wine rounded-full" />
                    <span className="font-medium">{tema}</span>
                  </li>
                ))}
              </ul>
              <button className="btn-primary w-full mt-10">Solicitar Propuesta</button>
              <div className="mt-4 text-center">
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-bold text-gray-400 hover:text-[#25D366] transition-colors"
                >
                  <MessageCircle size={16} />
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Research Section */}
          <div className="bg-brand-pink-light/50 p-12 rounded-3xl">
            <div className="max-w-3xl">
              <span className="text-brand-wine font-bold uppercase tracking-widest text-xs mb-4 block">Investigación Académica</span>
              <h2 className="text-3xl font-bold mb-6">Respuesta sexual en mujeres post-cirugía bariátrica</h2>
              <p className="text-gray-600 mb-8">
                Desarrollo investigación continua sobre el impacto de los cambios corporales significativos en la vivencia de la sexualidad y el deseo en mujeres. Este trabajo aporta una base científica sólida a mi práctica clínica.
              </p>
              <button className="text-brand-wine font-bold flex items-center gap-2">
                Ver publicaciones académicas <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
