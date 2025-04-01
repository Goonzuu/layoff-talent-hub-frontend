"use client";
import Image from "next/image";

const HowItWorks = () => {

  const features = [
    { icon: "/assets/icons/clock-icon.svg", title: "Conexión rápida", text: "Evita el proceso de aplicación manual." },
    { icon: "/assets/icons/share-icon.svg", title: "Conexiones directas", text: "Conecta empresas en busca de talento." },
    { icon: "/assets/icons/check-icon.svg", title: "Perfil verificado", text: "Garantizamos que fuiste parte de un layoff." },
  ];

  return (
    <section className="py-20 bg-[#243346] text-white">
      <h2 className="text-3xl font-bold text-center mb-12">¿Cómo funciona?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="text-center space-y-4 bg-[#1a2635] p-6 rounded-xl shadow-md">
              <Image
                src={item.icon}
                alt={item.title}
                width={28}
                height={28}
                className="mx-auto invert brightness-0"
              />
            <h4 className="text-xl font-semibold">{item.title}</h4>
            <p className="text-gray-300">{item.text}</p>
          </div>
        ))}
      </div>
    </section>

  );
};

export default HowItWorks;
