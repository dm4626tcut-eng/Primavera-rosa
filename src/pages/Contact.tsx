import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Instagram, Clock, MessageSquare, Mail } from "lucide-react";
import instagramQr from "../assets/images/instagram_qr_primaverarosa83_1779495845883.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    producto: "",
    mensaje: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setFormData({ nombre: "", correo: "", telefono: "", producto: "", mensaje: "" });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Ocurrió un error inesperado.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("No se pudo conectar con el servidor.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24 bg-brand-bg/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-pink font-bold tracking-widest uppercase text-sm">Hablemos</span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-brand-brown mt-2 mb-4">Haz tu <span className="text-brand-pink">Pedido</span></h1>
          <p className="text-brand-brown/70 text-lg max-w-2xl mx-auto">
            ¿Tienes un personaje especial en mente? Cuéntanos tu idea o síguenos para ver de cerca todo nuestro arte tejido.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Columna Izquierda: Formulario de Pedido (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-brand-pink/10"
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-12"
                >
                  <CheckCircle2 className="w-20 h-20 text-green-500 mx-auto mb-6" />
                  <h2 className="text-3xl font-bold text-brand-brown mb-4">¡Mensaje Recibido!</h2>
                  <p className="text-lg text-brand-brown/70 mb-8">
                    Gracias por contactar a Primavera rosa. Revisaremos tu solicitud y te responderemos muy pronto.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="bg-brand-pink text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-brand-brown ml-2">Nombre Completo</label>
                      <input
                        required
                        type="text"
                        value={formData.nombre}
                        onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-pink transition-all outline-none"
                        placeholder="Ej. Juan Pérez"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-brand-brown ml-2">Correo Electrónico</label>
                      <input
                        required
                        type="email"
                        value={formData.correo}
                        onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-pink transition-all outline-none"
                        placeholder="ejemplo@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-brand-brown ml-2">Teléfono</label>
                      <input
                        type="tel"
                        value={formData.telefono}
                        onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-pink transition-all outline-none"
                        placeholder="Ej. 300 000 0000"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-brand-brown ml-2">Producto de Interés</label>
                      <input
                        type="text"
                        value={formData.producto}
                        onChange={(e) => setFormData({ ...formData, producto: e.target.value })}
                        className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-pink transition-all outline-none"
                        placeholder="Ej. Baby Yoda, Pokémon..."
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-sm font-bold text-brand-brown ml-2">Tu Mensaje</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.mensaje}
                      onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                      className="w-full px-6 py-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-brand-pink transition-all outline-none resize-none"
                      placeholder="Cuéntanos los detalles de tu personaje deseado..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center space-x-2 text-red-500 bg-red-50 p-4 rounded-xl">
                      <AlertCircle className="w-5 h-5" />
                      <span className="text-sm font-medium">{errorMessage}</span>
                    </div>
                  )}

                  <button
                    disabled={status === "loading"}
                    type="submit"
                    className="w-full bg-brand-pink text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-pink/90 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-brand-pink/20 cursor-pointer"
                  >
                    {status === "loading" ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Enviar Pedido Primavera</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Columna Derecha: Canales e Instagram QR (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Tarjeta de Perfil de Instagram */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-brand-pink/10 flex flex-col items-center text-center">
              <span className="text-brand-pink text-[11px] font-bold uppercase tracking-widest bg-brand-pink/10 px-3 py-1 rounded-full mb-4">
                Comunidad en Instagram
              </span>
              <h3 className="font-serif text-2xl font-bold text-brand-brown mb-2">
                @primaverarosa83
              </h3>
              <p className="text-brand-brown/70 text-sm mb-6 max-w-xs leading-relaxed">
                ¡Escanea el código QR desde tu celular o haz clic abajo para explorar nuestras últimas creaciones en hilos y crochet!
              </p>

              {/* Contenedor del Código QR QR de Instagram */}
              <div className="relative w-full max-w-[260px] aspect-square rounded-3xl overflow-hidden shadow-md border border-brand-pink/15 mb-6 group bg-gradient-to-tr from-brand-pink/5 to-brand-cyan/5 flex items-center justify-center p-3">
                <img
                  src={instagramQr}
                  alt="Código QR de Instagram @PRIMAVERAROSA83"
                  className="w-full h-full object-contain rounded-2xl transition-all duration-500 group-hover:scale-105 select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              <a
                href="https://www.instagram.com/primaverarosa83/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 hover:opacity-95 text-white font-bold py-4 px-6 rounded-2xl shadow-md transition-all text-center flex items-center justify-center space-x-2.5 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
              >
                <Instagram className="w-5 h-5 text-white" />
                <span>Seguir en Instagram</span>
              </a>
            </div>

            {/* Canales y Horarios de Atención */}
            <div className="bg-white rounded-[2.5rem] p-8 shadow-xl border border-brand-pink/10 space-y-6">
              <h3 className="font-serif text-2xl font-bold text-brand-brown border-b border-brand-pink/10 pb-4">
                Atención Directa
              </h3>

              <div className="space-y-6">
                {/* Canal 1: WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="bg-green-50 p-3.5 rounded-2xl text-green-500 flex-shrink-0">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.557-5.343 11.897-11.953 11.897-2.006-.002-3.978-.507-5.742-1.466L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.852.002-2.632-1.023-5.105-2.887-6.97-1.864-1.865-4.343-2.89-6.978-2.892-5.441 0-9.865 4.421-9.869 9.852-.001 1.748.461 3.454 1.337 4.97L1.87 21.082l4.777-1.252a9.78 9.78 0 00.001.002z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown text-sm">WhatsApp de Contacto</h4>
                    <p className="text-brand-brown/70 text-xs mt-0.5 leading-relaxed">Cotiza tu amigurumi favorito de inmediato.</p>
                    <a
                      href="https://wa.me/3043596225"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-pink font-bold hover:underline text-sm inline-block mt-1.5"
                    >
                      +57 304 359 6225
                    </a>
                  </div>
                </div>

                {/* Canal: Correo Electrónico */}
                <div className="flex items-start space-x-4">
                  <div className="bg-cyan-50 p-3.5 rounded-2xl text-brand-cyan flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-pink" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown text-sm">Correo Electrónico</h4>
                    <p className="text-brand-brown/70 text-xs mt-0.5 leading-relaxed">Escríbenos para recibir atención personalizada.</p>
                    <a
                      href="mailto:primaverarosart@gmail.com"
                      className="text-brand-pink font-bold hover:underline text-sm inline-block mt-1.5 animate-pulse-subtle"
                    >
                      primaverarosart@gmail.com
                    </a>
                  </div>
                </div>

                {/* Canal 2: Horarios */}
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-pink/10 p-3.5 rounded-2xl text-brand-pink flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-brown text-sm">Horarios de Atención</h4>
                    <p className="text-brand-brown/70 text-sm mt-0.5 font-medium">Lunes a Sábado</p>
                    <p className="text-brand-brown/50 text-xs">9:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
