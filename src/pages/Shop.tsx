import React from 'react';
import { motion } from 'motion/react';
import { ShoppingBag, Star, ArrowRight, Heart, MessageCircle, BookOpen, ExternalLink } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { WHATSAPP_URL, EBOOKS, PHYSICAL_PRODUCTS } from '@/constants';

export default function Shop() {
  return (
    <div className="pt-20">
      <SEO 
        title="Tienda de Bienestar Íntimo y Guías Digitales | Vanesa Matiz" 
        description="Productos seleccionados para tu bienestar íntimo y guías digitales (E-books) para transformar tu relación y potenciar tu placer."
        keywords="tienda bienestar íntimo, guías digitales sexualidad, e-books relaciones pareja, productos salud íntima, Vanesa Matiz tienda"
      />

      <section className="bg-brand-pink-light py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Tienda de Bienestar</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Una selección exclusiva de productos físicos y guías digitales diseñados para potenciar tu placer y salud íntima.
          </p>
        </div>
      </section>

      {/* E-books Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-brand-pink-light rounded-2xl text-brand-wine">
              <BookOpen size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">E-books y Guías Digitales</h2>
              <p className="text-gray-500">Recursos descargables para trabajar en tu bienestar desde casa.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EBOOKS.map((ebook, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-pink-light/30 p-8 rounded-3xl border border-brand-pink/20 flex flex-col h-full group hover:shadow-xl transition-all"
              >
                <div className="mb-6 aspect-[3/4] bg-white rounded-2xl shadow-inner overflow-hidden relative">
                   <img 
                    src={`https://picsum.photos/seed/ebook-${i}/750/1000`} 
                    alt={ebook.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-wine/20 to-transparent" />
                </div>
                <h3 className="text-xl font-bold mb-4 flex-grow">{ebook.title}</h3>
                <a 
                  href={ebook.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full btn-primary flex items-center justify-center gap-2 py-3"
                >
                  Comprar en Hotmart <ExternalLink size={18} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Physical Products Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-brand-wine rounded-2xl text-white">
              <ShoppingBag size={32} />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Productos de Bienestar Íntimo</h2>
              <p className="text-gray-500">Selección de productos físicos para tu cuidado y placer.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PHYSICAL_PRODUCTS.map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-gray-100 group"
              >
                <div className="relative aspect-square overflow-hidden rounded-2xl mb-4 bg-gray-50">
                  <img 
                    src={`https://picsum.photos/seed/prod-${i}/800/800`} 
                    alt={product} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="font-bold text-gray-800 mb-4 h-12 flex items-center">{product}</h3>
                <a 
                  href={WHATSAPP_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full py-2 px-4 rounded-xl border border-brand-wine text-brand-wine font-bold text-sm hover:bg-brand-wine hover:text-white transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle size={16} /> Consultar disponibilidad
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <h4 className="font-bold text-lg mb-2">Envío Discreto</h4>
              <p className="text-sm text-gray-500">Empaques sin logos ni menciones al contenido para tu total privacidad.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Calidad Médica</h4>
              <p className="text-sm text-gray-500">Productos seleccionados bajo criterios de salud y seguridad íntima.</p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2">Asesoría Profesional</h4>
              <p className="text-sm text-gray-500 mb-4">Si tienes dudas sobre qué producto elegir, estamos para ayudarte.</p>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-bold text-[#25D366] hover:underline"
              >
                <MessageCircle size={16} />
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
