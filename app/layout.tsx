import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Univesp Quiz Master',
  description: 'Teste seus conhecimentos com questões da UNIVESP 2025!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable}`}>
      <body className="font-sans bg-[#f8fafc] text-[#1e293b]">
        {children}
      </body>
    </html>
  );
}
