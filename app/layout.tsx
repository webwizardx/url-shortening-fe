import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppings = Poppins({ subsets: ['latin'], weight: ['500', '700'] });

export const metadata: Metadata = {
  title: 'wzurl',
  description: 'wzurl | URL shortener',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={poppings.className}>{children}</body>
    </html>
  );
}
