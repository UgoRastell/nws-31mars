import Image from 'next/image';
import myImage from '../../public/hollow.jpg';

export default function HomePage() {
  return (
    <div className="text-center p-8">
      <h1 className="text-3xl font-bold mb-4">Bienvenue sur notre site</h1>
      <p className="mb-8">Ceci est le contenu de notre page d&apos;accueil.</p>
      <Image
        src={myImage}
        alt="Une description de l'image"
        width={600}
        height={400}
        priority
        placeholder="blur"
        className="mx-auto rounded shadow-lg"
      />
    </div>
  );
}
