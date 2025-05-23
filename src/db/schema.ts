import { pgTable, integer, text, varchar } from "drizzle-orm/pg-core";

export const articles = pgTable("articles", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    title: varchar("title", { length: 255 }).notNull(),
    content: text("content").notNull(),
});

export const users = pgTable("users", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    username: varchar("username", { length: 255 }).notNull().unique(),
    password: text("password").notNull(),
  });
