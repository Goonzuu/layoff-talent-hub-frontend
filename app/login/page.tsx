import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <section className="max-w-4xl mx-auto py-16 text-center">
      <h1 className="text-4xl font-bold text-green-700 mb-6">Login</h1>
      <LoginForm />
    </section>
  );
}
