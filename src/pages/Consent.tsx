import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '@/components/SEO';
import { BOOKING_URL } from '@/constants';
import { ArrowRight, ClipboardCheck, ExternalLink } from 'lucide-react';

export default function Consent() {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeEMtN2lQz11iTS09bkS0NwuolY5b7v2uPrBWIRHSHFly9NbA/viewform?embedded=true";

  return (
    <div className="pt-24 pb-20 bg-brand-pink-light/30 min-h-screen">
      <SEO 
        title="Consentimiento Informado | Vanesa Matiz" 
        description="Consentimiento informado para atención psicológica y sexológica con Vanesa Matiz."
      />

      <div className="container-custom max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-brand-pink/20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-wine text-white rounded-2xl flex items-center justify-center shrink-0">
              <ClipboardCheck size={28} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-brand-wine leading-tight">
              Consentimiento informado para atención psicológica y sexológica
            </h1>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
            <p>
              Antes de iniciar un proceso de acompañamiento psicológico y sexológico, es importante conocer algunos aspectos relacionados con el funcionamiento de las sesiones, la confidencialidad, los acuerdos del proceso y las condiciones de atención.
            </p>
            <p className="font-medium text-brand-wine">
              Por esta razón, antes de la primera sesión, todas las personas deben completar el siguiente consentimiento informado.
            </p>
          </div>

          {/* Form Section */}
          <div className="mb-12">
            <div className="relative w-full aspect-[4/5] md:aspect-[4/3] rounded-2xl overflow-hidden border border-brand-pink/30 bg-gray-50 mb-6">
              <iframe
                src={formUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Google Form Consentimiento"
                className="absolute inset-0"
              >
                Cargando…
              </iframe>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSeEMtN2lQz11iTS09bkS0NwuolY5b7v2uPrBWIRHSHFly9NbA/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                Completar consentimiento informado
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div className="border-t border-brand-pink/20 pt-10 text-center">
            <p className="text-sm text-gray-500 mb-8 max-w-lg mx-auto">
              Completar este consentimiento es un paso previo para iniciar el proceso de atención. 
              Si ya agendaste tu sesión, por favor diligéncialo antes del encuentro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Ya agendé mi sesión
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
