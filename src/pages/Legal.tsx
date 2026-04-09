import React from 'react';
import { motion } from 'motion/react';
import { SEO } from '@/components/SEO';
import { ShieldCheck, Lock, FileText, Scale } from 'lucide-react';
import { EMAIL } from '@/constants';

export default function Legal() {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <SEO 
        title="Políticas de Privacidad y Términos y Condiciones | Vanesa Matiz" 
        description="Información legal sobre el tratamiento de datos personales, confidencialidad y términos de servicio de Vanesa Matiz."
        keywords="política de privacidad psicóloga, términos y condiciones terapia, tratamiento de datos personales"
      />

      {/* Header */}
      <section className="bg-brand-wine text-white py-20">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <ShieldCheck className="mx-auto mb-6 opacity-50" size={48} />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Información Legal</h1>
            <p className="text-xl text-brand-pink/80 max-w-2xl mx-auto">
              Tu privacidad y seguridad son fundamentales en este proceso terapéutico.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl border border-brand-pink/10 space-y-16">
            
            {/* Privacy Policy */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-brand-wine mb-8">
                <Lock size={32} />
                <h2 className="text-3xl font-bold">Política de Privacidad</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                De acuerdo con la Ley 1581 de 2012 de Protección de Datos Personales en Colombia, informamos que los datos suministrados a través de este sitio web y durante el proceso terapéutico serán tratados con absoluta confidencialidad.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-wine">1. Finalidad del tratamiento</h3>
                <p className="text-gray-600">
                  Los datos personales recolectados (nombre, correo electrónico, teléfono, etc.) tienen como única finalidad la gestión de citas, el seguimiento clínico y la comunicación directa con el paciente.
                </p>
                
                <h3 className="text-xl font-bold text-brand-wine">2. Confidencialidad Clínica</h3>
                <p className="text-gray-600">
                  Toda la información compartida en sesión está protegida por el secreto profesional. Solo podrá ser revelada en situaciones excepcionales donde exista riesgo para la vida del paciente o de terceros, según lo estipula el código ético del psicólogo.
                </p>

                <h3 className="text-xl font-bold text-brand-wine">3. Derechos del titular</h3>
                <p className="text-gray-600">
                  Como titular de sus datos, usted tiene derecho a conocer, actualizar, rectificar o solicitar la eliminación de su información de nuestras bases de datos en cualquier momento escribiendo a <span className="font-bold text-brand-wine">{EMAIL}</span>.
                </p>
              </div>
            </div>

            <hr className="border-brand-pink/10" />

            {/* Terms and Conditions */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-brand-wine mb-8">
                <Scale size={32} />
                <h2 className="text-3xl font-bold">Términos y Condiciones</h2>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Al utilizar este sitio web y agendar una sesión, usted acepta los siguientes términos de servicio:
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-brand-wine">1. Agendamiento y Cancelaciones</h3>
                <p className="text-gray-600">
                  Toda cita debe ser agendada a través de los canales oficiales. Las cancelaciones o reprogramaciones deben realizarse con un mínimo de 24 horas de anticipación. De lo contrario, se podrá realizar un cobro administrativo por el tiempo reservado.
                </p>
                
                <h3 className="text-xl font-bold text-brand-wine">2. Pagos y Reembolsos</h3>
                <p className="text-gray-600">
                  El pago de la sesión debe confirmarse antes de iniciar el encuentro. No se realizan reembolsos por inasistencia sin previo aviso. En caso de fallas técnicas por parte de la profesional en sesiones online, la cita será reprogramada sin costo adicional.
                </p>

                <h3 className="text-xl font-bold text-brand-wine">3. Naturaleza del Servicio</h3>
                <p className="text-gray-600">
                  La terapia es un proceso colaborativo. Los resultados dependen del compromiso y trabajo conjunto entre el paciente y la profesional. Este sitio web proporciona información educativa que no sustituye el diagnóstico clínico personalizado.
                </p>

                <h3 className="text-xl font-bold text-brand-wine">4. Propiedad Intelectual</h3>
                <p className="text-gray-600">
                  Todo el contenido de este sitio (textos, imágenes, tests, ebooks) es propiedad intelectual de Vanesa Matiz y está protegido por las leyes de derechos de autor. Su reproducción total o parcial está prohibida sin autorización previa.
                </p>
              </div>
            </div>

            {/* Footer Legal */}
            <div className="pt-12 border-t border-brand-pink/10 text-center">
              <p className="text-sm text-gray-400 italic">
                Última actualización: Abril 2026. Vanesa Matiz - Psicóloga y Sexóloga Clínica.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
