// app/blog/page.tsx
import { db } from "@/db";
import { articles } from "@/db/schema";

export const revalidate = 3600;

export default async function BlogPage() {
    const allArticles = await db.select().from(articles);

    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold mb-4">Articles</h1>
            <ul className="list-disc ml-8">
                {allArticles.map((article) => (
                    <li key={article.id} className="mb-2">
                        <a href={`/blog/${article.id}`} className="text-blue-600 hover:underline">
                            {article.title}
                        </a>
                    </li>
                ))}
            </ul>
        </main>
    );
}
