'use client';

import { useRouter } from "next/navigation";

const FinalCallToAction = () => {
    const router = useRouter();
  
    return (
      <section className="bg-[#243346] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            No estás solo, tu próxima oportunidad te espera
          </h2>
          <button
            onClick={() => router.push("/register")}
            className="px-6 py-3 bg-[#FF5722] text-white rounded-lg shadow-md hover:bg-[#e64a19] transition"
          >
            Regístrate ahora
          </button>
        </div>
      </section>
    );
  };
  
  export default FinalCallToAction;
  