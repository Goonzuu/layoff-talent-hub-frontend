"use client";

import { useRouter } from "next/navigation";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import useAuth from "@/hooks/useAuth";

const LoginForm = () => {
  const router = useRouter();
  const { login, isLoading, isError } = useAuth();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Formato de correo inválido").required("El correo es obligatorio"),
    password: Yup.string().min(6, "Mínimo 6 caracteres").required("La contraseña es obligatoria"),
  });

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      await login(values);
      router.push("/dashboard");
    } catch (err) {
      console.error("Error de inicio de sesión:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-green-700 text-center mb-6">Iniciar Sesión</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <div className="mb-4">
                <label className="block text-gray-700">Correo electrónico</label>
                <Field type="email" name="email" className="w-full px-4 py-2 border rounded-md" />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Contraseña</label>
                <Field type="password" name="password" className="w-full px-4 py-2 border rounded-md" />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              </div>
              {isError && <p className="text-red-500 text-center mb-4">Credenciales incorrectas</p>}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
              >
                {isLoading ? "Cargando..." : "Iniciar Sesión"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;
