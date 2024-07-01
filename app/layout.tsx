import Header from "shared/components/Header";
import "./globals.css";
import Head from "./head";
import Footer from "shared/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const locale = await getLocale();
  console.log(locale)
    const messages = await getMessages(locale as any);
  
  return (
    <html lang={locale}>
            <NextIntlClientProvider locale={locale} messages={messages}>

      <Head />
      <body className="min-h-screen">

      <Header />

        {children}
        <Footer/>


      </body>
      </NextIntlClientProvider>

    </html>
  );
}
