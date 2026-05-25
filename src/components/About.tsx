import { useState } from "react";
import { motion } from "motion/react";
import amigurumiCollage from "../assets/images/amigurumi_collage_grid_1779496913862.png";

export default function About() {
  const candidateUrls = [
    new URL("../assets/images/collage.png", import.meta.url).href,
    new URL("../assets/images/collage.jpg", import.meta.url).href,
    new URL("../assets/images/collage.jpeg", import.meta.url).href,
    new URL("../assets/images/quienes_somos.png", import.meta.url).href,
    new URL("../assets/images/quienes_somos.jpg", import.meta.url).href,
    new URL("../assets/images/quienes_somos.jpeg", import.meta.url).href,
    "/collage.png",
    "/collage.jpg",
    "/quienes_somos.png",
    "/quienes_somos.jpg",
    amigurumiCollage
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageError = () => {
    if (currentImageIndex < candidateUrls.length - 1) {
      setCurrentImageIndex((prev) => prev + 1);
    }
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Creator Image Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0 w-full lg:w-1/2"
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-pink rounded-[2rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform blur-xl" />
              <div className="relative bg-brand-bg rounded-[2rem] overflow-hidden shadow-2xl p-4">
                <img
                  src={candidateUrls[currentImageIndex]}
                  onError={handleImageError}
                  alt="Colección de Amigurumis Primavera Rosa"
                  className="w-full h-auto rounded-[1.5rem] object-cover aspect-square"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-10 right-10 bg-white px-6 py-3 rounded-full shadow-lg">
                  <span className="font-serif italic text-lg text-brand-brown">Tejiendo hilos</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-grow space-y-8"
          >
            <div className="space-y-4">
              <span className="text-brand-pink font-bold tracking-widest uppercase text-sm">Quiénes Somos</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown leading-tight">
                El arte detrás de <span className="text-brand-pink">Primavera rosa</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-lg text-brand-brown/80 leading-relaxed">
              <p>
                Bienvenidos a <span className="font-bold text-brand-pink">Primavera rosa Artesanías</span>. Mi camino en el mundo del tejido comenzó como una forma de dar vida a los personajes que amamos, transformando simples hilos en compañeros inseparables.
              </p>
              <p>
                Cada amigurumi que sale de nuestro taller lleva consigo horas de dedicación, cuidado en los detalles y sobre todo, una esencia artesanal que los hace únicos. Nos especializamos en capturar la personalidad de tus personajes favoritos de cine y series.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-brand-pink rounded-full" />
                <span className="font-serif text-2xl italic text-brand-brown">Primavera rosa</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
