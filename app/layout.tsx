import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ClientProvider from "@/components/ClientProvider";
import "./globals.css";

export const metadata = {
  title: "Layoff Talent Hub",
  description: "Conectamos talento afectado por layoffs con nuevas oportunidades.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <ClientProvider>
          <Navbar />
            <main className="pt-20">{children}</main>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}

