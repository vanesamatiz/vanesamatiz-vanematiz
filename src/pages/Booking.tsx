import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Globe, CreditCard, CheckCircle2, ExternalLink, DollarSign, ClipboardCheck, ArrowRight, FileText } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { BOOKING_URL, PAYMENT_LINKS } from '@/constants';

export default function Booking() {
  return (
    <div className="pt-20">
      <SEO 
        title="Agenda tu Sesión de Terapia Online | Vanesa Matiz" 
        description="Reserva tu sesión de terapia individual o de pareja con Vanesa Matiz. Agenda online fácil y segura para comenzar tu proceso de transformación."
        keywords="agendar terapia online, cita psicóloga, terapia de pareja bogotá, consulta sexología, Vanesa Matiz agenda"
      />

      <section className="section-padding bg-brand-pink-light/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Info Column */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h1 className="text-4xl font-bold mb-6">Agenda tu Sesión</h1>
                <p className="text-gray-600 leading-relaxed">
                  Elige el tipo de sesión que necesitas y selecciona el horario que mejor se adapte a ti. 
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="p-2 bg-brand-pink/20 rounded-lg text-brand-wine">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Duración</p>
                    <p className="font-bold">55 Minutos</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="p-2 bg-brand-pink/20 rounded-lg text-brand-wine">
                    <Globe size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Modalidad</p>
                    <p className="font-bold">Online / Presencial</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm">
                  <div className="p-2 bg-brand-pink/20 rounded-lg text-brand-wine">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase">Inversión</p>
                    <p className="font-bold">250.000 COP / 72 USD</p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-brand-wine text-white rounded-3xl">
                <h4 className="font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20} /> Importante
                </h4>
                <ul className="text-sm space-y-3 text-brand-pink/80">
                  <li>• El pago se realiza de forma anticipada.</li>
                  <li>• Recibirás un correo con el link de la sesión.</li>
                  <li>• Reagendamiento con 8h de antelación.</li>
                  <li>• Es obligatorio completar el <Link to="/consentimiento" className="underline font-bold">consentimiento informado</Link> antes de la sesión.</li>
                  <li>• Para Plan Premium, completar el <Link to="/acuerdo-plan-premium-pareja" className="underline font-bold">acuerdo de condiciones</Link>.</li>
                  <li>• Para Plan Intermedio, completar el <Link to="/acuerdo-plan-intermedio-pareja" className="underline font-bold">acuerdo de condiciones</Link>.</li>
                  <li>• Para Plan Básico, completar el <Link to="/acuerdo-plan-basico-pareja" className="underline font-bold">acuerdo de condiciones</Link>.</li>
                </ul>
              </div>
            </div>

            {/* Booking Widget Column */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden min-h-[400px] flex flex-col items-center justify-center p-12 text-center border border-brand-pink/20">
                <Calendar size={64} className="text-brand-pink mb-6" />
                <h2 className="text-2xl font-bold mb-4">1. Elige tu Horario</h2>
                <p className="text-gray-500 mb-8 max-w-md">
                  Haz clic en el botón de abajo para ver los horarios disponibles y agendar tu sesión directamente en mi calendario de Google.
                </p>
                <div className="w-full max-w-sm">
                  <a 
                    href={BOOKING_URL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full btn-primary py-4 flex items-center justify-center gap-2"
                  >
                    Agendar en Google Calendar <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-12 border border-brand-pink/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-brand-pink-light rounded-2xl text-brand-wine">
                    <DollarSign size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">2. Realiza el Pago</h2>
                    <p className="text-gray-500">Selecciona tu método de pago preferido para confirmar la sesión.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a 
                    href={PAYMENT_LINKS.wompi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-8 rounded-2xl border-2 border-brand-pink/20 hover:border-brand-wine transition-all group bg-brand-pink-light/10"
                  >
                    <img 
                      src="https://picsum.photos/seed/wompi/200/80" 
                      alt="Wompi" 
                      className="h-12 object-contain mb-4 grayscale group-hover:grayscale-0 transition-all"
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-bold text-brand-wine">Pagar con Wompi (COP)</span>
                    <span className="text-xs text-gray-400 mt-2">Tarjetas, PSE, Nequi</span>
                  </a>

                  <a 
                    href={PAYMENT_LINKS.paypal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-8 rounded-2xl border-2 border-brand-pink/20 hover:border-brand-wine transition-all group bg-brand-pink-light/10"
                  >
                    <img 
                      src="https://picsum.photos/seed/paypal/200/80" 
                      alt="PayPal" 
                      className="h-12 object-contain mb-4 grayscale group-hover:grayscale-0 transition-all"
                      referrerPolicy="no-referrer"
                    />
                    <span className="font-bold text-brand-wine">Pagar con PayPal (USD)</span>
                    <span className="text-xs text-gray-400 mt-2">Tarjetas Internacionales</span>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-3xl shadow-xl p-12 border border-brand-pink/20">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-brand-pink-light rounded-2xl text-brand-wine">
                    <ClipboardCheck size={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">3. Consentimiento Informado</h2>
                    <p className="text-gray-500">Es un paso obligatorio antes de iniciar tu proceso terapéutico.</p>
                  </div>
                </div>

                <div className="bg-brand-pink-light/20 p-6 rounded-2xl border border-brand-pink/20 mb-8">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Para garantizar la transparencia y confidencialidad de nuestro trabajo, es necesario que diligencies el formulario de consentimiento informado.
                  </p>
                </div>

                <Link 
                  to="/consentimiento"
                  className="btn-secondary w-full flex items-center justify-center gap-2 py-4"
                >
                  Completar Consentimiento <ArrowRight size={18} />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-brand-pink-light/10 rounded-3xl p-6 border border-brand-pink/20 text-center">
                  <FileText className="mx-auto mb-4 text-brand-wine" size={28} />
                  <h3 className="font-bold mb-2 text-sm">Plan Premium</h3>
                  <Link 
                    to="/acuerdo-plan-premium-pareja"
                    className="text-brand-wine font-bold hover:underline flex items-center justify-center gap-1 text-xs"
                  >
                    Firmar <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="bg-brand-pink-light/10 rounded-3xl p-6 border border-brand-pink/20 text-center">
                  <FileText className="mx-auto mb-4 text-brand-wine" size={28} />
                  <h3 className="font-bold mb-2 text-sm">Plan Intermedio</h3>
                  <Link 
                    to="/acuerdo-plan-intermedio-pareja"
                    className="text-brand-wine font-bold hover:underline flex items-center justify-center gap-1 text-xs"
                  >
                    Firmar <ArrowRight size={14} />
                  </Link>
                </div>
                <div className="bg-brand-pink-light/10 rounded-3xl p-6 border border-brand-pink/20 text-center">
                  <FileText className="mx-auto mb-4 text-brand-wine" size={28} />
                  <h3 className="font-bold mb-2 text-sm">Plan Básico</h3>
                  <Link 
                    to="/acuerdo-plan-basico-pareja"
                    className="text-brand-wine font-bold hover:underline flex items-center justify-center gap-1 text-xs"
                  >
                    Firmar <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
