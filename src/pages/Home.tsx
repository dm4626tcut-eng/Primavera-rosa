import React, { useState } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import MissionVision from "../components/MissionVision";
import { motion } from "motion/react";
import { Scissors, Sparkles, Heart } from "lucide-react";
import gatoConBotas from "../assets/images/gato_con_botas_handcrafted_1779321779134.png";
import mafaldaAmigurumi from "../assets/images/mafalda_amigurumi_1779728375554.png";
import harryPotterAmigurumi from "../assets/images/harry_potter_amigurumi_1779729982826.png";
import booAmigurumi from "../assets/images/boo_amigurumi_1779739447283.png";
import snoopyAmigurumi from "../assets/images/snoopy_aviator_amigurumi_1779740340089.png";
import grinchOrnamentAmigurumi from "../assets/images/grinch_ornament_1779740770083.png";

export default function Home() {
  const [images] = useState({
    snoopy: localStorage.getItem("user_img_snoopy") || snoopyAmigurumi,
    gato: localStorage.getItem("user_img_gato") || gatoConBotas,
    grinchOrn: localStorage.getItem("user_img_grinch_orn") || grinchOrnamentAmigurumi,
    harryPotter: localStorage.getItem("user_img_harry_potter") || harryPotterAmigurumi,
    mafalda: localStorage.getItem("user_img_mafalda") || mafaldaAmigurumi,
    boo: localStorage.getItem("user_img_boo") || booAmigurumi,
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      
      {/* Short Banner */}
      <section className="bg-brand-pink py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around items-center gap-8 text-white">
          <div className="flex items-center space-x-3">
            <Scissors className="w-8 h-8" />
            <span className="text-xl font-bold">100% Hecho a Mano</span>
          </div>
          <div className="flex items-center space-x-3">
            <Sparkles className="w-8 h-8" />
            <span className="text-xl font-bold">Detalles Únicos</span>
          </div>
          <div className="flex items-center space-x-3">
            <Heart className="w-8 h-8" />
            <span className="text-xl font-bold">Inspiración rosa</span>
          </div>
        </div>
      </section>

      <About />
      <MissionVision />

      {/* Featured Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-brown mb-12">
            Nuestros <span className="text-brand-pink">Favoritos</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {[
              { id: "snoopy", name: "Snoopy", desc: "El tierno perrito aventurero caracterizado con su gorrito turquesa de aviador, gafas y bufanda.", customImage: images.snoopy },
              { id: "gato", name: "Gato con botas", desc: "El felino más valiente e icónico con su elegante pluma, mirada tierna y botas tejidas.", customImage: images.gato },
              { id: "grinch", name: "El Grinch", desc: "El entrañable duendecillo verde limón en formato de colección, tejiéndose risas con su bufanda.", customImage: images.grinchOrn },
              { id: "harry_potter", name: "Harry Potter", desc: "El joven mago más famoso con su icónica bufanda de Gryffindor, lentes y cicatriz.", customImage: images.harryPotter },
              { id: "mafalda", name: "Mafalda", desc: "La niña más reflexiva recreada a mano de forma exquisita en hilos con su vestido color carmesí.", customImage: images.mafalda },
              { id: "boo", name: "Boo", desc: "La pequeña y dulce niña de Monsters Inc. con su adorable disfraz de monstruo de textura acolchada.", customImage: images.boo },
            ].map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -10 }}
                className="bg-brand-bg rounded-3xl overflow-hidden shadow-lg border border-brand-pink/10 flex flex-col justify-between h-full"
                id={`favorito-${product.id}`}
              >
                <div>
                  <img
                    src={product.customImage}
                    alt={product.name}
                    className="w-full h-72 object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                  <div className="p-5">
                    <h3 className="font-serif text-xl font-bold text-brand-brown mb-2">{product.name}</h3>
                    <p className="text-xs text-brand-brown/70 leading-relaxed mb-4">{product.desc}</p>
                  </div>
                </div>
                <div className="p-5 pt-0">
                  <button 
                    onClick={() => window.open(`https://wa.me/3043596225?text=${encodeURIComponent(`¡Hola! Estoy muy interesado en el amigurumi de ${product.name} que vi en la sección de favoritos de la web, ¿me podría dar más detalles?`)}`, '_blank')} 
                    className="w-full bg-brand-pink hover:bg-brand-pink/90 text-white py-2.5 rounded-full font-bold text-xs hover:scale-105 active:scale-95 transition-transform duration-300 cursor-pointer shadow-xs"
                    id={`btn-favorito-${product.id}`}
                  >
                    Consultar disponibilidad
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
