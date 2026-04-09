import React from 'react';
import { motion } from 'motion/react';
import { Youtube, FileText, Download, PlayCircle, BookOpen } from 'lucide-react';
import { SEO } from '@/components/SEO';

export default function Resources() {
  return (
    <div className="pt-20">
      <SEO 
        title="Recursos Gratuitos para tu Bienestar | Vanesa Matiz" 
        description="Descarga meditaciones guiadas, guías de bienestar y recursos educativos gratuitos diseñados por Vanesa Matiz para tu crecimiento personal."
        keywords="recursos gratuitos psicología, meditaciones guiadas, guías bienestar, educación sexual gratis, Vanesa Matiz recursos"
      />

      <section className="bg-brand-wine text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Recursos Gratuitos</h1>
          <p className="text-xl text-brand-pink/80 max-w-3xl mx-auto">
            Herramientas diseñadas para acompañarte en tu proceso de autoconocimiento y bienestar.
          </p>
        </div>
      </section>

      {/* Meditations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-brand-pink/20 rounded-xl text-brand-wine">
              <Youtube size={32} />
            </div>
            <h2 className="text-3xl font-bold">Meditaciones Guiadas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Conexión con el cuerpo", type: "Meditación", duration: "15 min" },
              { title: "Liberación de tensiones íntimas", type: "Visualización", duration: "12 min" },
              { title: "Autoestima y placer", type: "Meditación", duration: "20 min" }
            ].map((item, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden group">
                <div className="aspect-video bg-gray-200 relative">
                  <img 
                    src={`https://picsum.photos/seed/meditation-${i}/600/400`} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="text-white opacity-80 group-hover:scale-110 transition-transform" size={64} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold text-brand-wine uppercase">{item.type}</span>
                    <span className="text-xs text-gray-400">{item.duration}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-4">{item.title}</h3>
                  <a href="#" className="text-brand-wine font-medium text-sm flex items-center gap-2">
                    Ver en YouTube <Download size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Material */}
      <section className="section-padding bg-brand-pink-light/30">
        <div className="container-custom">
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-brand-wine/10 rounded-xl text-brand-wine">
              <FileText size={32} />
            </div>
            <h2 className="text-3xl font-bold">Material Educativo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Guía de comunicación en pareja", desc: "Herramientas prácticas para hablar de lo difícil.", format: "PDF" },
              { title: "Checklist de bienestar íntimo", desc: "Evalúa tu relación con tu sexualidad.", format: "PDF" },
              { title: "E-book: Mitos de la sexualidad", desc: "Desmontando creencias que limitan tu placer.", format: "PDF" },
              { title: "Diario de gratitud sexual", desc: "Un ejercicio para reconectar con lo positivo.", format: "PDF" }
            ].map((doc, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm flex items-start gap-6 border border-brand-pink/20">
                <div className="p-4 bg-brand-pink-light rounded-xl text-brand-wine">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{doc.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{doc.desc}</p>
                  <button className="flex items-center gap-2 text-brand-wine font-bold text-sm hover:underline">
                    Descargar {doc.format} <Download size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
