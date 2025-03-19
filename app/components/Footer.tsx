import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-lg font-semibold">Layoff Talent Hub © {new Date().getFullYear()}</p>
        <div className="mt-4 flex justify-center space-x-6">
          <Link href="/privacy" className="text-gray-400 hover:text-white">
            Política de Privacidad
          </Link>
          <Link href="/terms" className="text-gray-400 hover:text-white">
            Términos y Condiciones
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  