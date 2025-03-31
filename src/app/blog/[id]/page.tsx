// app/blog/[id]/page.tsx
import { db } from "@/db";
import { articles } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export const revalidate = 60;


export default async function ArticlePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const article = await db
        .select()
        .from(articles)
        .where(eq(articles.id, Number(id)))
        .then((res) => res[0]);

    if (!article) {
        notFound();
    }

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
            <p>{article.content}</p>
        </main>
    );
}
