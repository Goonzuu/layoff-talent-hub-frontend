"use client";
import { useRouter } from "next/navigation";

const CallToAction = () => {
  const router = useRouter();

  return (
    <section className="py-12 bg-green-600 text-white text-center">
      <h3 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h3>
      <p className="text-lg mb-6">
        Regístrate ahora y descubre cómo Layoff Talent Hub puede ayudarte.
      </p>
      <button
        onClick={() => router.push("/register")}
        className="px-6 py-3 bg-white text-green-600 font-bold rounded-lg shadow-lg hover:bg-gray-200 transition-all"
      >
        Registrarse
      </button>
    </section>
  );
};

export default CallToAction;

  