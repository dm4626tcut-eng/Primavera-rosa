import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/contacto", (req, res) => {
    const { nombre, correo, telefono, producto, mensaje } = req.body;
    console.log("Nuevo contacto recibido:", { nombre, correo, telefono, producto, mensaje });
    
    // Validación básica en backend
    if (!nombre || !correo || !mensaje) {
      return res.status(400).json({ error: "Faltan campos obligatorios" });
    }

    res.json({ success: true, message: "¡Mensaje enviado correctamente! Nos pondremos en contacto pronto." });
  });

  app.post("/api/asistente", (req, res) => {
    const { message } = req.body;
    const lowerMessage = message.toLowerCase();
    
    let response = "¡Hola! Soy tu asistente de Primavera rosa. ";
    
    if (lowerMessage.includes("disponibilidad") || lowerMessage.includes("stock")) {
      response += "La mayoría de nuestros personajes se hacen por encargo para asegurar la mejor calidad. ¡Pregúntanos por tu favorito!";
    } else if (lowerMessage.includes("personalización") || lowerMessage.includes("personalizado")) {
      response += "¡Sí! Podemos tejer cualquier personaje de cine, series o incluso fotos reales. Cuéntanos qué tienes en mente.";
    } else if (lowerMessage.includes("precio") || lowerMessage.includes("cuánto cuesta")) {
      response += "Los precios varían según el tamaño y la complejidad, generalmente entre $40.000 y $120.000 COP.";
    } else if (lowerMessage.includes("entrega") || lowerMessage.includes("tiempo")) {
      response += "El tiempo estimado de entrega es de 5 a 10 días hábiles dependiendo de la complejidad del personaje.";
    } else if (lowerMessage.includes("whatsapp")) {
      response += "Puedes hablarnos directamente al 3043596225 para una atención más rápida.";
    } else if (lowerMessage.includes("personajes") || lowerMessage.includes("crochet")) {
      response += "Hacemos personajes de Star Wars, Marvel, Pokémon, Disney y mucho más.";
    } else if (lowerMessage.includes("recomend") || lowerMessage.includes("qué me sugieres")) {
      response += "Te recomiendo nuestros amigurumis de Pokémon o el Gato con Botas, ¡son los favoritos!";
    } else {
      response += "No estoy seguro de entenderte del todo, pero puedes probar preguntando sobre precios, personalización o escribirnos al WhatsApp.";
    }

    res.json({ response });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
