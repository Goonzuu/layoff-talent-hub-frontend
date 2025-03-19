export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center p-12">
      <h1 className="text-5xl font-bold text-green-600">
        Encuentra tu próxima oportunidad 💼
      </h1>
      <p className="text-lg text-gray-700 mt-4">
        Conectamos talento afectado por layoffs con startups y empresas que buscan crecer 🚀.
      </p>
      <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700">
        Únete ahora
      </button>
    </section>
  );
}
