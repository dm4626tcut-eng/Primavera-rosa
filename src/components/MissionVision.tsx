import { motion } from "motion/react";
import { Sparkles, Heart } from "lucide-react";

export default function MissionVision() {
  const cards = [
    {
      title: "Misión",
      icon: <Sparkles className="w-12 h-12 text-brand-pink" />,
      desc: "Llevar la alegría de lo artesanal a cada rincón, creando personajes que conecten con las emociones y recuerdos de nuestros clientes.",
      color: "bg-brand-pink/5",
      accent: "bg-brand-pink",
    },
    {
      title: "Visión",
      icon: <Heart className="w-12 h-12 text-brand-cyan" />,
      desc: "Consolidarnos como el taller de referencia en tejidos personalizados, destacando por nuestra delicadeza y compromiso con la calidad artística.",
      color: "bg-brand-cyan/10",
      accent: "bg-brand-cyan",
    },
  ];

  return (
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`${card.color} rounded-[2.5rem] p-10 relative overflow-hidden group border border-white`}
            >
              <div className="relative z-10">
                <div className="mb-6 inline-block bg-white p-4 rounded-2xl shadow-sm">
                  {card.icon}
                </div>
                <h3 className="font-serif text-3xl font-bold text-brand-brown mb-4">{card.title}</h3>
                <p className="text-lg text-brand-brown/80 leading-relaxed mb-6">
                  {card.desc}
                </p>
                <div className="flex space-x-2">
                  <div className={`w-3 h-3 rounded-full ${card.accent}`} />
                  <div className={`w-12 h-3 rounded-full ${card.accent} opacity-40`} />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="currentColor" className="text-black">
                  <path d="M100 0C155.228 0 200 44.7715 200 100C200 155.228 155.228 200 100 200C44.7715 200 0 155.228 0 100C0 44.7715 44.7715 0 100 0ZM100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180Z" />
                  <circle cx="100" cy="100" r="40" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
