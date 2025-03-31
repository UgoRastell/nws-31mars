// app/switch-games/GamesList.tsx
"use client";

import { use } from "react";

interface Game {
    id: number | string;
    name: string;
}

export default function GamesList({
    gamesPromise,
}: {
    gamesPromise: Promise<Game[]>;
}) {
    // Le hook 'use' attend que la promesse se résolve
    const games = use(gamesPromise);

    return (
        <ul className="list-disc ml-8">
            {games.map((game) => (
                <li key={game.id} className="mb-2">{game.name}</li>
            ))}
        </ul>
    );
}
