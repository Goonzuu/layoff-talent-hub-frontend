"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Íconos para el menú

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-green-700 font-bold text-xl">
          Layoff Talent Hub
        </Link>

        {/* Menú de navegación en pantallas grandes */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-green-600">
            Inicio
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-green-600">
            Sobre Nosotros
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-green-600">
            Contacto
          </Link>
        </nav>

        {/* Botón de menú en móviles */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú desplegable en móviles */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md absolute w-full left-0 top-16">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-gray-700 hover:text-green-600">
              Inicio
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600">
              Sobre Nosotros
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600">
              Contacto
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;

  