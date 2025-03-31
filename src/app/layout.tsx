import './globals.css';
import Link from 'next/link';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-black">
        <nav className="bg-white shadow p-4">
          <ul className="flex gap-4">
            <li className='text-black'><Link href="/">Accueil</Link></li>
            <li className='text-black'><Link href="/about">À propos</Link></li>
            <li className='text-black'><Link href="/contact">Contact</Link></li>
            <li className='text-black'><Link href="/switch-games">Switch Game</Link></li>
            <li className='text-black'><Link href="/blog">Blogs</Link></li>
          </ul>
        </nav>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
