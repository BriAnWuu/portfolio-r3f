import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const ProjectTable = sqliteTable("project", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    title: text("title", { length: 255 }).notNull(),
    description: text("description", { length: 1023 }).notNull(),
    imageUrl: text("image_url", { length: 1023 }).notNull(),
    createdAt: text("created_at")
        .default(sql`(CURRENT_TIMESTAMP)`)
        .notNull(),
});

export const ExperienceTalbe = sqliteTable("experience", {
    id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
    role: text("role", { length: 255 }).notNull(),
    company: text("company", { length: 255 }).notNull(),
    location: text("location", { length: 255 }).notNull(),
    industry: text("industry", { length: 255 }).notNull(),
    startDate: integer("start_date", { mode: "timestamp" }).notNull(),
    endDate: integer("end_date", { mode: "timestamp" }).notNull(),
    createdAt: text("created_at")
        .default(sql`(CURRENT_TIMESTAMP)`)
        .notNull(),
});

export type InsertProject = typeof ProjectTable.$inferInsert;
export type SelectProject = typeof ProjectTable.$inferSelect;

export type InsertExperience = typeof ExperienceTalbe.$inferInsert;
export type SelectExperience = typeof ExperienceTalbe.$inferSelect;
