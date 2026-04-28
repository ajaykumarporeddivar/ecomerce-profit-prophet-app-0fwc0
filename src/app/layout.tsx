import { Inter } from 'next/font/google';

export const metadata = {
  title: 'Ecomerce Profit Prophet',
  description: 'Ecomerce Profit Prophet is a micro-SaaS product designed to help e-commerce store owners predict and optimize their profits.',
  keywords: 'ecommerce, profit, optimization',
};

export default function RootLayout({ children }) {
  const inter = Inter();

  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>
        <div className="fixed top-0 left-0 right-0 bg-accent-500 text-white text-center p-2">
          ⚡ Demo Mode — Ecomerce Profit Prophet built by NEXUS OS
        </div>
        {children}
      </body>
    </html>
  );
}