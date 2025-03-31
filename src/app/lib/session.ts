// src/app/lib/session.ts
import { cookies } from "next/headers";


export async function verifySession() {
    const sessionCookie = (await cookies()).get("session")?.value;
    if (sessionCookie) {

        return { userId: 1 };
    }
    return null;
}
