// app/contact/page.tsx
"use client";

import { useTransition, FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";
import { submitContactForm } from "./contactAction";

export default function ContactPage() {
    const [isPending, startTransition] = useTransition();

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        // Affiche le toast de chargement
        const loadingToastId = toast.loading("Envoi du formulaire...");

        // Appel de la server action via startTransition
        startTransition(async () => {
            const res = await submitContactForm(formData);
            toast.dismiss(loadingToastId);
            if (res === true) {
                toast.success("Formulaire envoyé avec succès !");
            } else {
                // res est un tableau d'erreurs
                toast.error("Erreur : " + res.join(", "));
            }
        });
    }

    return (
        <div className="p-8">
            <Toaster />
            <h1 className="text-3xl font-bold mb-4">Contact</h1>
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto space-y-4 bg-white p-6 rounded shadow"
            >
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-black">
                        Nom
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-black">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        rows={4}
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
                    disabled={isPending}
                >
                    {isPending ? "Envoi en cours..." : "Envoyer"}
                </button>
            </form>
        </div>
    );
}
