import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ClipboardCheck, ArrowRight, Sparkles } from 'lucide-react';

export function TestCTA() {
  return (
    <section className="section-padding bg-brand-wine text-white overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink rounded-full blur-[120px] opacity-20 -mr-32 -mt-32" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-pink rounded-full blur-[120px] opacity-20 -ml-32 -mb-32" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-[2.5rem] p-8 md:p-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex p-4 bg-brand-pink/20 rounded-full mb-6 text-brand-pink">
              <ClipboardCheck size={40} />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Tests Gratuitos de Autoconocimiento</h2>
            <p className="text-xl text-brand-pink/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Descubre el estado de tu relación o tu bienestar íntimo con nuestras herramientas interactivas diseñadas por profesionales.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/test" className="btn-secondary px-12 py-4 text-lg flex items-center justify-center gap-2 group">
                Ver todos los Tests <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center justify-center gap-2 text-sm text-brand-pink/60">
                <Sparkles size={16} />
                <span>100% Confidencial y Gratuito</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
