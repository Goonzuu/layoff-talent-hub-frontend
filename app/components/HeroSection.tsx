"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HeroSection = () => {
    const router = useRouter();

    return (
        <section className="bg-[#243346] text-white px-6 py-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                <div className="space-y-6 max-w-xl">
                    <h1 className="text-5xl font-bold leading-tight">
                        Conecta tu talento con oportunidades
                    </h1>
                    <p className="text-lg text-gray-300">
                        Transforma el despido en una nueva oportunidad
                    </p>
                    <button
                        onClick={() => router.push("/register")}
                        className="px-6 py-3 bg-[#FF5722] text-white rounded-lg shadow hover:bg-[#e64a19] transition"
                    >
                        Explora oportunidades
                    </button>
                </div>

                <Image
                    src="/assets/images/allHands-image.jpg"
                    alt="Colaboración en equipo"
                    width={420}
                    height={320}
                    className="rounded-xl shadow-lg"
                />
            </div>
        </section>
    );
};

export default HeroSection;


