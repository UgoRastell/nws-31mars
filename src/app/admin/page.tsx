// src/app/admin/page.tsx
import { verifySession } from "@/app/lib/session";
import { redirect } from "next/navigation";

export default async function AdminPage() {
    const session = await verifySession();
    if (!session?.userId) {
        redirect("/login");
    }

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold">Panneau Admin</h1>
            <p>Bienvenue, utilisateur authentifié !</p>
        </main>
    );
}
