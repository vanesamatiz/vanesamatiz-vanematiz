import React from 'react';
import { motion } from 'motion/react';
import { Award, Book, Heart, Users, CheckCircle2 } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { IMAGES } from '@/constants';

export default function About() {
  return (
    <div className="pt-20">
      <SEO 
        title="Sobre Vanesa Matiz | Psicóloga y Sexóloga Clínica" 
        description="Conoce la trayectoria de Vanesa Matiz, psicóloga de pareja y sexóloga clínica con más de 15 años de experiencia en bienestar íntimo y relacional."
        keywords="Vanesa Matiz, psicóloga de pareja, sexóloga clínica, trayectoria profesional, bienestar relacional"
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <img 
                src={IMAGES.profile1} 
                alt="Vanesa Matiz" 
                className="rounded-[2.5rem] shadow-2xl w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-brand-wine font-bold uppercase tracking-widest text-sm mb-4 block">Trayectoria Profesional</span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Vanesa Matiz</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Psicóloga de pareja y sexóloga clínica con más de 15 años trabajando en bienestar íntimo, sexualidad y relaciones de pareja.
              </p>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Mi misión es acompañar a personas y parejas a descubrir una forma más consciente, placentera y saludable de vincularse. Creo firmemente que la educación sexual y el apoyo terapéutico son pilares fundamentales para una vida plena.
                </p>
                <p>
                  A lo largo de mi carrera, he combinado la práctica clínica con la investigación y la creación de contenido educativo, buscando siempre acercar la sexología profesional a todas las personas.
                </p>
                <p className="font-medium text-brand-wine">
                  Actualmente soy miembro de la junta directiva de ACSEX (Asociación de Sexólogos de Colombia) y miembro activo de COLPSIC (Colegio Colombiano de Psicólogos).
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding bg-brand-pink-light/30">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Formación y Especialidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Award />, title: "Psicóloga", desc: "Formación de base en psicología clínica (COLPSIC)." },
              { icon: <Book />, title: "Máster en Sexología", desc: "Especialista en educación sexual y clínica (ACSEX)." },
              { icon: <Heart />, title: "Terapia de Pareja", desc: "Especialista en vínculos y resolución de conflictos." },
              { icon: <Users />, title: "Junta Directiva ACSEX", desc: "Liderazgo en la Asociación de Sexólogos de Colombia." },
              { icon: <CheckCircle2 />, title: "Investigación Científica (ACSEX y COLPSIC)", desc: "Enfoque en respuesta sexual femenina." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-brand-pink/10">
                <div className="text-brand-wine mb-4">{item.icon}</div>
                <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Mi Enfoque Terapéutico</h2>
            <div className="space-y-8 text-left">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-brand-wine text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Empatía y No Juicio</h4>
                  <p className="text-gray-600">Un espacio seguro donde puedes expresarte con total libertad, sabiendo que serás escuchado sin prejuicios.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-brand-wine text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Base Científica</h4>
                  <p className="text-gray-600">Todas mis intervenciones están respaldadas por la evidencia científica en psicología y sexología clínica.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 bg-brand-wine text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Orientación a Resultados</h4>
                  <p className="text-gray-600">Trabajamos con objetivos claros para que puedas notar cambios reales en tu bienestar y tus relaciones.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Galería</h2>
            <p className="text-gray-600">Momentos de mi práctica profesional y eventos.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              IMAGES.bio,
              IMAGES.session2,
              IMAGES.misc1,
              IMAGES.misc2
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-2xl overflow-hidden shadow-md"
              >
                <img 
                  src={img} 
                  alt={`Vanesa Matiz Gallery ${i}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
