// src/app/login/page.tsx
'use client';

import { useActionState } from 'react';
import { login, AuthActionResponse } from '@/app/actions/auth';

export default function LoginPage() {
    const [state, action, pending] = useActionState<AuthActionResponse, FormData>(login, {});

    return (
        <form action={action} className="p-8">
            <h1 className="text-2xl mb-4">Se connecter</h1>
            <div>
                <label htmlFor="username">Nom d’utilisateur</label>
                <input id="username" name="username" placeholder="Nom d’utilisateur" />
            </div>
            <div>
                <label htmlFor="password">Mot de passe</label>
                <input id="password" name="password" type="password" placeholder="Mot de passe" />
            </div>
            {state?.errors && (
                <p className="text-red-500">{JSON.stringify(state.errors)}</p>
            )}
            <button disabled={pending} type="submit">
                Se connecter
            </button>
        </form>
    );
}
