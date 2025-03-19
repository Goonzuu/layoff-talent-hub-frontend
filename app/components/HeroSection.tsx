import Image from "next/image";
import HeroImage from "@/assets/hero.png";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-12 bg-green-100 rounded-xl max-w-6xl mx-auto mt-12 shadow-lg">
      <div className="space-y-6">
        <h1 className="text-5xl font-bold text-green-700">
          Encuentra tu próxima oportunidad 💼
        </h1>
        <p className="text-lg text-gray-800">
          Conectamos talento afectado por layoffs con startups y empresas que buscan crecer 🚀.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition-all">
          Únete ahora
        </button>
      </div>
      <Image
        src={HeroImage}
        alt="Ilustración de talento y empleo"
        width={400}
        height={400}
        className="rounded-xl shadow-md"
      />
    </section>
  );
};

export default HeroSection;
