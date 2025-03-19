import Image from "next/image";

const companies = [
  { name: "Startup Alpha", logo: "/assets/appLogo.jpg" },
  { name: "Tech Solutions", logo: "/assets/appLogo.jpg" },
  { name: "InnovateX", logo: "/assets/appLogo.jpg" },
  { name: "NextGen Devs", logo: "/assets/appLogo.jpg" },
];

const Companies = () => {
  return (
    <section className="py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Empresas que confían en nosotros 🤝
      </h2>
      <div className="flex flex-wrap justify-center gap-12">
        {companies.map((company, index) => (
          <div key={index} className="relative w-36 h-16">
            <Image
              src={company.logo}
              alt={company.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
