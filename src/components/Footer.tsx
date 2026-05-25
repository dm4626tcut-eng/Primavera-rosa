import { Instagram, Facebook, Mail, Phone, MapPin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-brown text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-4">Primavera rosa</h3>
            <p className="text-white/80 leading-relaxed">
              Artesanías tejidas con el alma. Damos vida a tus personajes
              favoritos con la calidez del trabajo hecho a mano.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-bold text-xl mb-4 border-b border-brand-pink pb-2 w-fit">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-cyan" />
                <span>+57 304 359 6225</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-cyan" />
                <span>primaverarosart@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-brand-cyan" />
                <span>Fusagasugá, Cundinamarca</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-xl mb-4 border-b border-brand-pink pb-2 w-fit">Síguenos</h4>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/primaverarosa83/" target="_blank" rel="noopener noreferrer" className="bg-brand-pink p-3 rounded-full hover:scale-110 transition-transform">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="bg-brand-pink p-3 rounded-full hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="bg-brand-pink p-3 rounded-full hover:scale-110 transition-transform">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.81-.6-4.03-1.37-.01 2.53-.01 5.07-.02 7.6-.03 1.49-.26 3-.82 4.41-.56 1.41-1.39 2.69-2.52 3.73-1.13 1.04-2.43 1.86-3.83 2.43-1.4.57-2.86.86-4.36.9-1.97.03-3.91-.35-5.7-1.17-1.79-.81-3.31-2.02-4.52-3.48-1.21-1.46-2.04-3.13-2.46-4.99-.42-1.85-.35-3.81.21-5.62.56-1.81 1.54-3.47 2.81-4.88 1.27-1.41 2.82-2.5 4.54-3.23 1.72-.73 3.58-1.07 5.44-1.02a8.07 8.07 0 0 1 4.58 1.56V4.03a3.96 3.96 0 0 0-3.32-1.12c-1.32.12-2.51.78-3.35 1.83-.84 1.05-1.26 2.37-1.21 3.7.05 1.33.61 2.59 1.58 3.51.97.92 2.27 1.4 3.6 1.35.32-.01.64-.04.95-.1v3.91c-.3.05-.6.07-.9.08-1.03.04-2.05-.15-3-.56-.95-.41-1.81-1.03-2.52-1.83-.71-.8-1.24-1.74-1.54-2.75-.3-1.01-.39-2.07-.26-3.12.13-1.05.47-2.06 1.01-2.97.54-.91 1.23-1.69 2.05-2.29.82-.6 1.76-1.02 2.75-1.24.99-.22 2.03-.26 3.06-.11z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Primavera rosa Artesanías. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
