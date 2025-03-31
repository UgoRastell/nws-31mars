// app/contact/contactAction.ts
"use server";

import { z } from "zod";

const ContactFormSchema = z.object({
    name: z.string().min(2, "Le nom doit comporter au moins 2 caractères"),
    email: z.string().email("L'email doit être valide"),
    message: z.string().min(10, "Le message doit comporter au moins 10 caractères"),
});

export async function submitContactForm(data: FormData) {
    // Récupération et conversion des données
    const name = data.get("name")?.toString() || "";
    const email = data.get("email")?.toString() || "";
    const message = data.get("message")?.toString() || "";

    // Validation avec Zod
    const result = ContactFormSchema.safeParse({ name, email, message });
    if (!result.success) {
        // Renvoie un tableau d'erreurs
        const errors = result.error.errors.map((e) => e.message);
        return errors;
    }
    // Simulation d’un délai de 2 secondes
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return true;
}
