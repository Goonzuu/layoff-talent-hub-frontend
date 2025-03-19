const Navbar = () => {
    return (
      <header className="p-4 bg-white shadow-md">
        <nav className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">Layoff Talent Hub</h1>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-green-600">
              Inicio
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              Sobre Nosotros
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              Contacto
            </a>
          </div>
        </nav>
      </header>
    );
  };
  
  export default Navbar;
  