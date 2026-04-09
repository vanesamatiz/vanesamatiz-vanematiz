import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, 
  Copy, 
  CreditCard, 
  Globe, 
  MessageCircle, 
  Wallet, 
  ExternalLink,
  Info,
  Check
} from 'lucide-react';
import { SEO } from '@/components/SEO';
import { cn } from '@/lib/utils';
import { WHATSAPP_URL } from '@/constants';

type PaymentLocation = 'colombia' | 'international';

export default function PaymentMethods() {
  const [location, setLocation] = React.useState<PaymentLocation | null>(null);
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const whatsappMessage = "Hola, ya realicé mi pago y quiero enviar el comprobante para confirmar mi sesión o programa.";
  const whatsappConfirmUrl = `https://wa.me/573102013765?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="pt-20 min-h-screen bg-white">
      <SEO 
        title="Formas de Pago | Vanesa Matiz" 
        description="Selecciona tu ubicación y elige el método de pago que prefieras para tu sesión, programa o servicio con Vanesa Matiz."
        keywords="formas de pago, pagar terapia, transferencia bancaria, paypal, wompi, psicóloga pagos"
      />

      {/* Header */}
      <section className="bg-brand-wine text-white py-16 md:py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-brand-pink rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-pink rounded-full blur-3xl" />
        </div>
        <div className="container-custom text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Formas de pago
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-brand-pink/80 max-w-3xl mx-auto"
          >
            Selecciona la opción que corresponda según tu ubicación y elige el método de pago que prefieras para tu sesión, programa o servicio.
          </motion.p>
        </div>
      </section>

      {/* Pricing Highlight */}
      <section className="py-12 -mt-12 relative z-20">
        <div className="container-custom">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto bg-white rounded-[2rem] p-8 shadow-2xl border border-brand-pink/20 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-brand-pink-light rounded-2xl flex items-center justify-center text-brand-wine">
                <Info size={24} />
              </div>
              <div className="text-left">
                <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400">Valor de la sesión</h3>
                <p className="text-gray-600 text-sm">Individual o de pareja</p>
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-3xl font-bold text-brand-wine">250.000 COP</span>
              <span className="text-lg font-medium text-brand-pink">72 USD (Internacional)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Selector */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <button 
              onClick={() => setLocation('colombia')}
              className={cn(
                "p-8 rounded-[2.5rem] border-2 transition-all flex flex-col items-center text-center gap-4 group",
                location === 'colombia' 
                  ? "border-brand-wine bg-brand-wine text-white shadow-xl scale-105" 
                  : "border-brand-pink/20 bg-brand-pink-light/30 text-brand-wine hover:border-brand-wine/50"
              )}
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center transition-colors",
                location === 'colombia' ? "bg-white/20" : "bg-white"
              )}>
                <CheckCircle2 size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Pago desde Colombia</h3>
                <p className={cn(
                  "text-sm",
                  location === 'colombia' ? "text-brand-pink" : "text-gray-500"
                )}>Si pagas desde una cuenta colombiana</p>
              </div>
            </button>

            <button 
              onClick={() => setLocation('international')}
              className={cn(
                "p-8 rounded-[2.5rem] border-2 transition-all flex flex-col items-center text-center gap-4 group",
                location === 'international' 
                  ? "border-brand-wine bg-brand-wine text-white shadow-xl scale-105" 
                  : "border-brand-pink/20 bg-brand-pink-light/30 text-brand-wine hover:border-brand-wine/50"
              )}
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center transition-colors",
                location === 'international' ? "bg-white/20" : "bg-white"
              )}>
                <Globe size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Pago internacional</h3>
                <p className={cn(
                  "text-sm",
                  location === 'international' ? "text-brand-pink" : "text-gray-500"
                )}>Si pagas desde fuera de Colombia</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Payment Details */}
      <AnimatePresence mode="wait">
        {location === 'colombia' && (
          <motion.section 
            key="colombia"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="section-padding bg-gray-50"
          >
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Pagos desde Colombia</h2>
                <p className="text-gray-600">Si realizas tu pago desde una cuenta o medio de pago colombiano, puedes usar cualquiera de las siguientes opciones.</p>
              </div>

              <div className="max-w-5xl mx-auto space-y-16">
                {/* Transferencia Bancaria */}
                <div>
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <Wallet className="text-brand-wine" /> Transferencia bancaria
                  </h3>
                  <p className="text-gray-600 mb-6">Puedes realizar transferencia a cualquiera de las siguientes cuentas.</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { bank: "Bancolombia", type: "Ahorros", number: "46679862120", id: "bancolombia" },
                      { bank: "Davivienda", type: "Ahorros", number: "0550488433652515", id: "davivienda" },
                      { bank: "Llave", type: "Llave", number: "@MATIZ700", id: "llave" }
                    ].map((account) => (
                      <div key={account.id} className="bg-white p-6 rounded-3xl border border-brand-pink/10 shadow-sm hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="font-bold text-brand-wine">{account.bank}</h4>
                          <span className="text-[10px] uppercase tracking-widest font-bold text-brand-pink">{account.type}</span>
                        </div>
                        <p className="text-lg font-mono font-bold text-gray-800 mb-6 break-all">{account.number}</p>
                        <button 
                          onClick={() => copyToClipboard(account.number, account.id)}
                          className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-brand-pink-light text-brand-wine text-sm font-bold hover:bg-brand-pink transition-colors"
                        >
                          {copiedId === account.id ? (
                            <><Check size={16} /> Copiado</>
                          ) : (
                            <><Copy size={16} /> Copiar datos</>
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tarjeta */}
                <div>
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <CreditCard className="text-brand-wine" /> Pago con tarjeta de crédito o débito
                  </h3>
                  <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-brand-pink/10 shadow-sm text-center">
                    <p className="text-gray-600 mb-8">Si prefieres, puedes pagar en línea de forma segura con tarjeta.</p>
                    <a 
                      href="https://checkout.nequi.wompi.co/l/Jjba9D" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-3 px-12 py-5 text-lg"
                    >
                      Pagar con tarjeta <ExternalLink size={20} />
                    </a>
                    <p className="mt-6 text-xs text-gray-400 flex items-center justify-center gap-2">
                      <CheckCircle2 size={14} className="text-green-500" /> Pago seguro a través de Wompi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {location === 'international' && (
          <motion.section 
            key="international"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="section-padding bg-gray-50"
          >
            <div className="container-custom">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Pagos internacionales</h2>
                <p className="text-gray-600">Si realizas tu pago desde fuera de Colombia, puedes utilizar las siguientes opciones.</p>
              </div>

              <div className="max-w-5xl mx-auto space-y-16">
                {/* Transferencia Internacional */}
                <div>
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <Globe className="text-brand-wine" /> Transferencia internacional
                  </h3>
                  <p className="text-gray-600 mb-6">Utiliza los siguientes datos para realizar tu transferencia.</p>
                  
                  <div className="bg-white p-8 rounded-[2.5rem] border border-brand-pink/10 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest font-bold text-brand-pink mb-1">Nombre</p>
                          <p className="font-bold text-gray-800">Cindy Vanessa Matiz Sanchez</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest font-bold text-brand-pink mb-1">Documento</p>
                          <p className="font-bold text-gray-800">CC 1.117.500.700</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest font-bold text-brand-pink mb-1">Banco</p>
                          <p className="font-bold text-gray-800">Bancolombia</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-widest font-bold text-brand-pink mb-1">Ciudad / País</p>
                          <p className="font-bold text-gray-800">Medellín, Colombia</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest font-bold text-brand-pink mb-1">Tipo de Cuenta</p>
                          <p className="font-bold text-gray-800">Ahorros</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-widest font-bold text-brand-pink mb-1">Número de Cuenta</p>
                          <p className="font-bold text-gray-800 font-mono">46679862120</p>
                        </div>
                      </div>
                    </div>
                    <button 
                      onClick={() => copyToClipboard("Cindy Vanessa Matiz Sanchez, CC 1.117.500.700, Bancolombia Ahorros 46679862120, Medellín, Colombia", "intl")}
                      className="mt-8 w-full md:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-brand-pink-light text-brand-wine text-sm font-bold hover:bg-brand-pink transition-colors"
                    >
                      {copiedId === 'intl' ? (
                        <><Check size={16} /> Copiado</>
                      ) : (
                        <><Copy size={16} /> Copiar datos</>
                      )}
                    </button>
                  </div>
                </div>

                {/* PayPal */}
                <div>
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                    <CreditCard className="text-brand-wine" /> Pago con Paypal
                  </h3>
                  <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-brand-pink/10 shadow-sm text-center">
                    <p className="text-gray-600 mb-8">También puedes realizar tu pago de forma segura a través de Paypal.</p>
                    <a 
                      href="https://www.paypal.com/ncp/payment/YYJ32K8LU6M6Y" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-3 px-12 py-5 text-lg bg-[#0070ba] hover:bg-[#003087]"
                    >
                      Pagar con Paypal <ExternalLink size={20} />
                    </a>
                    <p className="mt-6 text-xs text-gray-400 flex items-center justify-center gap-2">
                      <CheckCircle2 size={14} className="text-green-500" /> Pago seguro y verificado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Confirmation Section */}
      <section className="section-padding bg-brand-wine text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-pink rounded-full blur-[100px] opacity-10" />
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Después de realizar tu pago</h2>
          <p className="text-brand-pink/80 mb-10 max-w-2xl mx-auto text-lg">
            Una vez completes tu pago, por favor envía el comprobante por WhatsApp para confirmar tu sesión, programa o servicio.
          </p>
          <a 
            href={whatsappConfirmUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-3 px-12 py-5 text-lg"
          >
            <MessageCircle size={24} />
            Enviar comprobante por WhatsApp
          </a>
        </div>
      </section>

      {/* Help Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-brand-pink/10 text-center">
            <h3 className="text-2xl font-bold mb-4">¿Tienes dudas con tu pago?</h3>
            <p className="text-gray-600 mb-8">
              Si necesitas apoyo para elegir el método de pago o confirmar tu transacción, puedes escribir directamente por WhatsApp.
            </p>
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand-wine font-bold hover:underline"
            >
              <MessageCircle size={20} /> Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
