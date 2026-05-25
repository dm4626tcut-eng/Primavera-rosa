import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import defaultBg from "../assets/images/primavera_rosa_home_bg_1779738260716.png";

export default function Hero() {
  const [heroBg, setHeroBg] = useState(defaultBg);

  useEffect(() => {
    const customBg = localStorage.getItem("user_img_hero_bg");
    if (customBg) {
      setHeroBg(customBg);
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      
      {/* Hero Image */}
      <img
        src={heroBg}
        alt="Primavera Rosa Crochet Background"
        className="absolute inset-0 w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg">
            Primavera <span className="text-brand-pink">rosa</span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-10 max-w-2xl mx-auto drop-shadow-md">
            Artesanías tejidas con amor y dedicación. 
            Personajes que cuentan historias en cada detalle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/galeria"
              className="bg-brand-pink text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-pink/80 transition-colors shadow-lg"
            >
              Ver Catálogo
            </Link>
            <Link
              to="/contacto"
              className="bg-brand-cyan text-brand-brown px-8 py-4 rounded-full text-lg font-bold hover:bg-brand-cyan/80 transition-colors shadow-lg"
            >
              Personalizados
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
