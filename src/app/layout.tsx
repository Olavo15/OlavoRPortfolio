import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ weight: '700', subsets: ['latin'] });

export const metadata = {
  title: 'O.Regis - Portfolio',
  description: 'Full-Stack Developer with Security Specialization',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
