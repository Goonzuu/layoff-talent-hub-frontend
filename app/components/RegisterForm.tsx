"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterForm = () => {
    const router = useRouter();
    const [formStatus, setFormStatus] = useState("");

    const initialValues = {
        fullName: "",
        email: "",
        password: "",
        role: "worker",
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required("El nombre es obligatorio"),
        email: Yup.string()
            .email("Formato de correo inválido")
            .required("El correo es obligatorio"),
        password: Yup.string()
            .min(6, "La contraseña debe tener al menos 6 caracteres")
            .required("La contraseña es obligatoria"),
        role: Yup.string().oneOf(["worker", "employer"], "Selecciona un rol válido"),
    });

    const handleSubmit = (values: typeof initialValues) => {

        setTimeout(() => {
            setFormStatus("Registro exitoso");
            router.push("/dashboard");
        }, 1000);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-300">
            <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-green-700 text-center mb-6">Registrarse</h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-1">Nombre completo</label>
                                <Field
                                    type="text"
                                    name="fullName"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                                />
                                <ErrorMessage
                                    name="fullName"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-1">Correo electrónico</label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                                />
                                <ErrorMessage
                                    name="email"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 font-semibold mb-1">Contraseña</label>
                                <Field
                                    type="password"
                                    name="password"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                                />
                                <ErrorMessage
                                    name="password"
                                    component="div"
                                    className="text-red-500 text-sm mt-1"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="block text-gray-700 font-semibold mb-1">Rol</label>
                                <Field
                                    as="select"
                                    name="role"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                                >
                                    <option value="worker">Trabajador</option>
                                    <option value="employer">Empleador</option>
                                </Field>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full px-4 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:outline-none transition-all"
                            >
                                {isSubmitting ? "Registrando..." : "Registrarse"}
                            </button>

                            {formStatus && (
                                <p className="mt-4 text-green-600 text-center">{formStatus}</p>
                            )}
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default RegisterForm;

