import Header from "shared/components/Header";
import "./globals.css";
import Head from "./head";
import Footer from "shared/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body className="min-h-screen">
      <Header />

        {children}
        <Footer/>
      </body>
    </html>
  );
}
