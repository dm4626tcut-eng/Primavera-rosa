/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Assistant from "./components/Assistant";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-brand-bg">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Assistant />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

