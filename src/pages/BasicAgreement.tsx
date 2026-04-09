import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '@/components/SEO';
import { BOOKING_URL } from '@/constants';
import { ArrowRight, FileText, ExternalLink } from 'lucide-react';

export default function BasicAgreement() {
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfhwPPqBhMt9vOPIBRDrXbVH7VTkCnHl0kYw043m3OmOOykRw/viewform?embedded=true";

  return (
    <div className="pt-24 pb-20 bg-brand-pink-light/30 min-h-screen">
      <SEO 
        title="Acuerdo de condiciones – Plan Básico | Vanesa Matiz" 
        description="Acuerdo de condiciones para el Plan Básico de Terapia de Pareja con Vanesa Matiz."
      />

      <div className="container-custom max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-brand-pink/20"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-brand-wine text-white rounded-2xl flex items-center justify-center shrink-0">
              <FileText size={28} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-brand-wine leading-tight">
              Acuerdo de condiciones – Plan Básico de Terapia de Pareja
            </h1>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed mb-10">
            <p>
              Gracias por confiar en este proceso de acompañamiento para su relación.
            </p>
            <p>
              El Plan Básico de Terapia de Pareja está diseñado para comenzar a trabajar aspectos importantes de la relación como la comunicación, la comprensión mutua y las dinámicas relacionales.
            </p>
            <p>
              Antes de iniciar el proceso terapéutico, es importante que ambos miembros de la pareja conozcan y acepten las condiciones del acompañamiento.
            </p>
            <p className="font-medium text-brand-wine">
              Por esta razón, les pedimos completar el siguiente acuerdo.
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
                title="Google Form Acuerdo Plan Básico"
                className="absolute inset-0"
              >
                Cargando…
              </iframe>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSfhwPPqBhMt9vOPIBRDrXbVH7VTkCnHl0kYw043m3OmOOykRw/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2"
              >
                Firmar acuerdo del Plan Básico
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div className="border-t border-brand-pink/20 pt-10 text-center">
            <p className="text-sm text-gray-500 mb-8 max-w-lg mx-auto">
              Este acuerdo permite establecer claridad sobre el funcionamiento del proceso terapéutico, los compromisos de ambas partes y las condiciones del plan.
              Les recomendamos que ambos miembros de la pareja lean y completen el formulario antes de iniciar las sesiones.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/agendar"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Ya adquirimos el plan
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
