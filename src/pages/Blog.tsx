import React from 'react';
import { motion } from 'motion/react';
import { Search, ArrowRight, Clock, Tag, Calendar, User, MessageCircle } from 'lucide-react';
import { SEO } from '@/components/SEO';
import { Link, useParams } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { WHATSAPP_URL } from '@/constants';

export const blogPosts = [
  {
    slug: "por-que-se-pierde-el-deseo-sexual-en-la-pareja",
    title: "Por qué se pierde el deseo sexual en la pareja",
    excerpt: "La pérdida del deseo sexual es una de las consultas más frecuentes en sexología clínica. Descubre las causas y cómo recuperarlo.",
    category: "Sexualidad",
    date: "15 Mar, 2024",
    readTime: "12 min",
    img: "https://picsum.photos/seed/blog-1/800/500",
    content: `
      <h2>La complejidad del deseo sexual</h2>
      <p>El deseo sexual no es un interruptor que se enciende y se apaga; es más bien como una llama que requiere oxígeno y combustible para mantenerse viva. En las relaciones de larga duración, es común que esta llama disminuya, pero ¿por qué sucede?</p>
      
      <h3>1. La rutina y la predictibilidad</h3>
      <p>El cerebro humano se siente atraído por la novedad. Cuando todo en la relación se vuelve predecible, el deseo tiende a bajar. La seguridad es buena para el vínculo, pero a veces es la enemiga de la pasión.</p>

      <h3>2. Factores psicológicos individuales</h3>
      <p>El estrés, la ansiedad, la depresión o una baja autoestima sexual pueden anular el deseo. Si no te sientes bien contigo mismo, es difícil conectar con el placer.</p>

      <h3>3. Conflictos no resueltos</h3>
      <p>Es difícil sentir deseo por alguien con quien estás enojado o con quien sientes una desconexión emocional profunda. El resentimiento es el mayor inhibidor del deseo.</p>

      <h2>¿Cómo recuperar la chispa?</h2>
      <p>Recuperar el deseo requiere intención. No llegará por arte de magia. Es necesario trabajar en la comunicación, introducir novedades y, sobre todo, priorizar el espacio de la pareja.</p>

      <div class="bg-brand-pink-light p-6 rounded-2xl my-8">
        <h4 class="font-bold mb-2">Conclusión</h4>
        <p>Si sientes que el deseo se ha esfumado, no significa que la relación haya terminado. Es una señal de que necesitan nuevas herramientas.</p>
      </div>
    `
  },
  {
    slug: "como-saber-si-tu-relacion-esta-en-crisis",
    title: "Cómo saber si tu relación está en crisis",
    excerpt: "Identificar las señales a tiempo puede marcar la diferencia entre una ruptura y una transformación positiva.",
    category: "Relaciones",
    date: "10 Mar, 2024",
    readTime: "10 min",
    img: "https://picsum.photos/seed/blog-2/800/500",
    content: "..."
  },
  {
    slug: "como-reconstruir-la-confianza-despues-de-una-infidelidad",
    title: "Cómo reconstruir la confianza después de una infidelidad",
    excerpt: "Sanar la herida de una traición es un proceso complejo que requiere compromiso, honestidad y tiempo.",
    category: "Relaciones",
    date: "05 Mar, 2024",
    readTime: "15 min",
    img: "https://picsum.photos/seed/blog-3/800/500",
    content: "..."
  },
  {
    slug: "ansiedad-por-rendimiento-sexual-que-es-y-como-superarla",
    title: "Ansiedad por rendimiento sexual: qué es y cómo superarla",
    excerpt: "La presión por 'cumplir' puede generar un bloqueo que impide el disfrute. Aprende a manejar la ansiedad en la intimidad.",
    category: "Bienestar",
    date: "01 Mar, 2024",
    readTime: "11 min",
    img: "https://picsum.photos/seed/blog-4/800/500",
    content: "..."
  },
  {
    slug: "por-que-las-parejas-dejan-de-tener-relaciones-sexuales",
    title: "Por qué las parejas dejan de tener relaciones sexuales",
    excerpt: "El fenómeno de las 'parejas blancas' o sin sexo es más común de lo que pensamos. Analizamos las razones detrás de esto.",
    category: "Sexualidad",
    date: "25 Feb, 2024",
    readTime: "13 min",
    img: "https://picsum.photos/seed/blog-5/800/500",
    content: "..."
  },
  {
    slug: "eyaculacion-precoz-causas-psicologicas-y-tratamiento",
    title: "Eyaculación precoz: causas psicológicas y tratamiento",
    excerpt: "Entender el componente emocional es clave para superar esta disfunción y mejorar la calidad de los encuentros.",
    category: "Bienestar",
    date: "20 Feb, 2024",
    readTime: "12 min",
    img: "https://picsum.photos/seed/blog-6/800/500",
    content: "..."
  },
  {
    slug: "como-mejorar-la-comunicacion-en-pareja",
    title: "Cómo mejorar la comunicación en pareja",
    excerpt: "No se trata de hablar más, sino de hablar mejor. Técnicas de comunicación asertiva para fortalecer el vínculo.",
    category: "Relaciones",
    date: "15 Feb, 2024",
    readTime: "14 min",
    img: "https://picsum.photos/seed/blog-7/800/500",
    content: "..."
  },
  {
    slug: "sexualidad-despues-de-la-cirugia-bariatrica",
    title: "Sexualidad después de la cirugía bariátrica",
    excerpt: "Los cambios corporales impactan la autoimagen y la respuesta sexual. Un análisis desde la investigación clínica.",
    category: "Investigación",
    date: "10 Feb, 2024",
    readTime: "15 min",
    img: "https://picsum.photos/seed/blog-8/800/500",
    content: "..."
  },
  {
    slug: "senales-de-que-una-relacion-ya no-es-saludable",
    title: "Señales de que una relación ya no es saludable",
    excerpt: "Aprende a identificar banderas rojas y comportamientos tóxicos que afectan tu salud mental.",
    category: "Relaciones",
    date: "05 Feb, 2024",
    readTime: "11 min",
    img: "https://picsum.photos/seed/blog-9/800/500",
    content: "..."
  },
  {
    slug: "cuando-es-recomendable-acudir-a-terapia-de-pareja",
    title: "Cuándo es recomendable acudir a terapia de pareja",
    excerpt: "No esperes a que la relación esté rota. La terapia preventiva es una de las mejores inversiones en tu felicidad.",
    category: "Terapia",
    date: "01 Feb, 2024",
    readTime: "10 min",
    img: "https://picsum.photos/seed/blog-10/800/500",
    content: "..."
  }
];

export function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <div className="pt-40 text-center">Post no encontrado</div>;

  return (
    <div className="pt-20">
      <SEO title={post.title} description={post.excerpt} />
      <article className="container-custom py-16 max-w-4xl">
        <Link to="/blog" className="text-brand-wine font-bold flex items-center gap-2 mb-8 hover:gap-3 transition-all">
          <ArrowRight className="rotate-180" size={20} /> Volver al blog
        </Link>
        
        <header className="mb-12">
          <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
            <span className="bg-brand-pink-light text-brand-wine px-3 py-1 rounded-full font-bold uppercase text-xs">{post.category}</span>
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{post.title}</h1>
          <div className="flex items-center gap-3">
            <img src="https://picsum.photos/seed/vanesa/100/100" className="w-10 h-10 rounded-full" alt="Vanesa Matiz" />
            <div>
              <p className="text-sm font-bold">Vanesa Matiz</p>
              <p className="text-xs text-gray-400">Psicóloga & Sexóloga</p>
            </div>
          </div>
        </header>

        <div className="aspect-video rounded-3xl overflow-hidden mb-12">
          <img src={post.img} className="w-full h-full object-cover" alt={post.title} referrerPolicy="no-referrer" />
        </div>

        <div 
          className="prose prose-lg max-w-none prose-headings:text-brand-wine prose-p:text-gray-600 prose-strong:text-brand-wine"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div className="mt-16 p-10 bg-brand-wine text-white rounded-3xl text-center">
          <h3 className="text-2xl font-bold mb-4">¿Te sientes identificado con este artículo?</h3>
          <p className="text-brand-pink/80 mb-8 max-w-xl mx-auto">
            No tienes que pasar por esto solo. Una sesión de terapia puede darte la claridad y las herramientas que necesitas hoy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/agendar" className="btn-secondary px-12">
              Agenda tu sesión
            </Link>
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-bold"
            >
              <MessageCircle size={18} />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function Blog() {
  return (
    <div className="pt-20">
      <SEO 
        title="Blog de Bienestar Íntimo" 
        description="Artículos sobre sexualidad, relaciones de pareja y bienestar emocional escritos por la psicóloga Vanesa Matiz."
      />

      <section className="bg-brand-pink-light py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog & Artículos</h1>
            <p className="text-xl text-gray-600 mb-8">Espacio educativo sobre sexualidad, relaciones y salud mental.</p>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input type="text" placeholder="Buscar temas..." className="w-full pl-12 pr-4 py-4 rounded-2xl border-none shadow-sm focus:ring-2 focus:ring-brand-wine" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {blogPosts.map((post, i) => (
                <motion.article key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group">
                  <Link to={`/blog/${post.slug}`} className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <div className="md:col-span-2 aspect-[4/3] overflow-hidden rounded-2xl">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                    </div>
                    <div className="md:col-span-3 flex flex-col justify-center">
                      <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                        <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                        <span className="flex items-center gap-1 uppercase font-bold text-brand-wine"><Tag size={14} /> {post.category}</span>
                      </div>
                      <h2 className="text-2xl font-bold mb-4 group-hover:text-brand-wine transition-colors">{post.title}</h2>
                      <p className="text-gray-600 mb-6 line-clamp-2">{post.excerpt}</p>
                      <span className="text-brand-wine font-bold flex items-center gap-2">Leer artículo <ArrowRight size={18} /></span>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
            <aside className="space-y-12">
              <div className="bg-brand-pink-light/30 p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-6">Categorías</h3>
                <ul className="space-y-4">
                  {["Sexualidad", "Terapia de Pareja", "Bienestar Emocional", "Educación Sexual"].map((cat, i) => (
                    <li key={i} className="flex justify-between items-center text-gray-600 hover:text-brand-wine transition-colors cursor-pointer">
                      <span>{cat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
