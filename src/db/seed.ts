// src/db/seed.ts
import "dotenv/config";
import { db } from "./index";
import { articles } from "./schema";

async function seed() {
    await db.insert(articles).values([
        { title: "Premier article", content: "Contenu du premier article." },
        { title: "Deuxième article", content: "Contenu du deuxième article." },
        { title: "Troisième article", content: "Contenu du troisième article." },
    ]);
    console.log("Articles insérés !");
}

seed().catch((err) => {
    console.error(err);
});
