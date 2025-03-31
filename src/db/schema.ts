// src/db/schema.ts
import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const articles = pgTable("articles", {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    content: text("content").notNull(),
});
