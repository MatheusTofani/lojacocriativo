import { Montserrat } from "next/font/google";
import "./globals.css";



const getMontserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Co-Criativo | Loja Colaborativa",
  description:
    "A Co-Criativo é uma loja colaborativa que reúne marcas autorais e criadores independentes. Moda, arte, design e decoração com propósito, autenticidade e produção local.",
  openGraph: {
    title: "Co-Criativo | Loja Colaborativa",
    description:
      "A Co-Criativo é uma loja colaborativa que reúne marcas autorais e criadores independentes. Moda, arte, design e decoração com propósito, autenticidade e produção local.",
    url: "https://lojacocriativo.com.br",
    siteName: "Co-Criativo",
    images: [
      {
        url: "https://lojacocriativo.com.br/logos/logoSimbolo.png", 
        height: 630,
        alt: "Co-Criativo Loja Colaborativa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Co-Criativo | Loja Colaborativa",
    description:
      "A Co-Criativo é uma loja colaborativa que reúne marcas autorais e criadores independentes. Moda, arte, design e decoração com propósito, autenticidade e produção local.",
    images: ["https://lojacocriativo.com.br/logos/logoSimbolo.png"], 
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={` ${getMontserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
