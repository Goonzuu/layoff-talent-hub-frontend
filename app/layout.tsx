import ClientProvider from "@/components/ClientProvider";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <ClientProvider>
            <main>{children}</main>
        </ClientProvider>
      </body>
    </html>
  );
}

