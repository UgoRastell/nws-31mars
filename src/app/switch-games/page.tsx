// app/switch-games/page.tsx

import { Suspense } from "react";
import GamesList from "./GamesList"; // Import direct, GamesList est déjà un composant client

// Définition du type
interface Game {
    id: number | string;
    name: string;
    // Autres propriétés si nécessaire…
}

// Fonction asynchrone pour récupérer les données
async function getGames(): Promise<Game[]> {
    const res = await fetch("https://api.sampleapis.com/switch/games");
    const games: Game[] = await res.json();
    return games;
}

// Composant serveur qui enveloppe la liste dans une Suspense
export default function SwitchGamesPage() {
    const gamesPromise = getGames();

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Switch Games (avec Suspense)</h1>
            <Suspense fallback={<div className="text-center">Chargement des jeux...</div>}>
                <GamesList gamesPromise={gamesPromise} />
            </Suspense>
        </div>
    );
}
