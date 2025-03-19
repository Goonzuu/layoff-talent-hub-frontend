const HowItWorks = () => {
    return (
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          ¿Cómo funciona?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {[
            { icon: "📝", title: "Regístrate", text: "Únete con tu perfil y valida tu experiencia laboral." },
            { icon: "🔍", title: "Conéctate", text: "Recibe oportunidades y conecta con empresas que buscan talento." },
            { icon: "🚀", title: "Trabaja", text: "Comienza nuevos proyectos sin enviar miles de CVs." }
          ].map((item, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-200 rounded-full mx-auto flex items-center justify-center text-2xl">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-700">{item.title}</h4>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  