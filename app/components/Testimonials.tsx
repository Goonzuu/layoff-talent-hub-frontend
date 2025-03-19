import Image from "next/image";
import WorkHappy2 from "@/assets/workHappy2.jpg";
import WorkHappy from "@/assets/workHappy.jpg";
import WorkHappy3 from "@/assets/workHappy3.jpg";

const testimonials = [
    {
        name: "María Gómez",
        role: "Frontend Developer",
        text: "Gracias a Layoff Talent Hub conseguí una oportunidad en una startup increíble en menos de dos semanas.",
        image: WorkHappy2,
    },
    {
        name: "Carlos Rodríguez",
        role: "Data Analyst",
        text: "Después de un layoff, fue difícil encontrar trabajo, pero esta plataforma me conectó con empresas que valoraban mi experiencia.",
        image: WorkHappy,
    },
    {
        name: "Alejandro Galarz",
        role: "Backend developer",
        text: "Poder registrarme y recibir oportunidades sin enviar cientos de CVs fue una gran diferencia. ¡Muy recomendable!",
        image: WorkHappy3,
    },
];

const Testimonials = () => {
    return (
        <section className="py-16 bg-gray-100">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Historias de Éxito 🌟
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
                    >
                        <div className="relative w-20 h-20 mb-4">
                            <Image
                                src={testimonial.image}
                                alt={testimonial.name}
                                fill
                                className="rounded-full border-2 border-green-500 object-cover"
                            />
                        </div>
                        <p className="text-gray-700 italic">"{testimonial.text}"</p>
                        <h4 className="text-lg font-semibold text-green-700 mt-4">
                            {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
