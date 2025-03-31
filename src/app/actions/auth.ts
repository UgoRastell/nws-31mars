// src/app/actions/auth.ts
import { users } from "@/db/schema";
import { db } from "@/db";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";

export type AuthActionResponse = {
    errors?: {
        username?: string[];
        password?: string[];
    };
};

export async function signup(
    _state: AuthActionResponse,
    formData: FormData
): Promise<AuthActionResponse> {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
        return {
            errors: {
                username: !username ? ["Le nom d'utilisateur est requis."] : undefined,
                password: !password ? ["Le mot de passe est requis."] : undefined,
            },
        };
    }

    // Hasher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    const inserted = await db.insert(users).values({
        username,
        password: hashedPassword,
    }).returning();

    const newUser = inserted[0];
    if (!newUser) {
        return {
            errors: {
                username: ["Erreur lors de la création du compte."],
            },
        };
    }

    // TODO: Créer la session (exemple : générer un JWT et le stocker dans un cookie)
    redirect("/admin");

    // Retour forcé pour satisfaire le type (code jamais atteint)
    return {} as AuthActionResponse;
}

export async function login(
    _state: AuthActionResponse,
    formData: FormData
): Promise<AuthActionResponse> {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    if (!username || !password) {
        return {
            errors: {
                username: !username ? ["Le nom d'utilisateur est requis."] : undefined,
                password: !password ? ["Le mot de passe est requis."] : undefined,
            },
        };
    }

    const user = await db.select().from(users)
        .where(eq(users.username, username))
        .then(data => data[0]);

    if (!user) {
        return {
            errors: {
                username: ["Utilisateur non trouvé."],
            },
        };
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        return {
            errors: {
                password: ["Mot de passe invalide."],
            },
        };
    }

    // TODO: Créer la session

    redirect("/admin");
    return {} as AuthActionResponse;
}
