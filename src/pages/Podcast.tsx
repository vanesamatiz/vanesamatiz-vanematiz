import React from 'react';
import { motion } from 'motion/react';
import { Play, Mic2, Headphones, Instagram, Youtube, ExternalLink } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { SOCIAL_LINKS } from '@/constants';

export default function Podcast() {
  return (
    <div className="pt-20">
      <SEO 
        title="Podcast Íntimamente | Sexualidad y Relaciones | Vanesa Matiz" 
        description="Escucha el podcast Íntimamente con Lissy y Vanesa Matiz. Conversaciones honestas sobre sexualidad, relaciones, maternidad y bienestar íntimo."
        keywords="podcast sexualidad, podcast relaciones pareja, bienestar íntimo podcast, Vanesa Matiz podcast, Íntimamente podcast"
      />

      {/* Hero */}
      <section className="bg-brand-pink-light py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-brand-wine font-bold uppercase tracking-widest text-sm mb-4 block">Podcast Oficial</span>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Íntimamente</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Un espacio para hablar de lo que nadie habla. Sexualidad, relaciones, maternidad y bienestar íntimo desde una perspectiva profesional y cercana.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={SOCIAL_LINKS.podcast_spotify} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary flex items-center gap-2"
                >
                  <Headphones size={20} /> Escuchar en Spotify
                </a>
                <a 
                  href={SOCIAL_LINKS.podcast_youtube} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-secondary flex items-center gap-2"
                >
                  <Youtube size={20} /> Ver en YouTube
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <img 
                src="https://picsum.photos/seed/podcast-cover/1000/1000" 
                alt="Podcast Cover" 
                className="rounded-[2rem] shadow-2xl w-full aspect-square object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-wine rounded-full flex items-center justify-center text-white">
                    <Mic2 size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-bold uppercase">Anfitrionas</p>
                    <p className="font-bold">Lissy & Vanesa Matiz</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Episodes */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12">Episodios Destacados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "El deseo sexual en la pareja estable", duration: "45 min", date: "Marzo 2024" },
              { title: "Mitos sobre la sexualidad femenina", duration: "38 min", date: "Febrero 2024" },
              { title: "Comunicación asertiva en la cama", duration: "42 min", date: "Enero 2024" },
              { title: "Maternidad y sexualidad: ¿Es posible?", duration: "50 min", date: "Diciembre 2023" }
            ].map((ep, i) => (
              <div key={i} className="flex gap-6 p-6 rounded-2xl border border-gray-100 hover:border-brand-pink transition-all group">
                <div className="w-24 h-24 bg-brand-pink-light rounded-xl flex items-center justify-center text-brand-wine group-hover:bg-brand-wine group-hover:text-white transition-colors shrink-0">
                  <Play size={32} />
                </div>
                <div>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                    <span>{ep.date}</span>
                    <span>•</span>
                    <span>{ep.duration}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-wine transition-colors">{ep.title}</h3>
                  <a 
                    href={SOCIAL_LINKS.podcast_spotify} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-brand-wine text-sm font-semibold flex items-center gap-1"
                  >
                    Escuchar ahora <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Contenido en Redes</h2>
            <p className="text-gray-600">Tips diarios, reels y shorts sobre bienestar íntimo.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <a 
                key={i} 
                href="https://www.instagram.com/vanesamatiz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="aspect-[9/16] bg-gray-200 rounded-2xl overflow-hidden relative group"
              >
                <img 
                  src={`https://picsum.photos/seed/reel-${i}/540/960`} 
                  alt="Social Content" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Instagram className="text-white" size={32} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
