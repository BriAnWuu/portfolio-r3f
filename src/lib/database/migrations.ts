import { Kysely } from "kysely";

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema
        .createTable("project")
        .ifNotExists()
        .addColumn("id", "integer", (col) => col.primaryKey())
        .addColumn("title", "varchar", (col) => col.notNull())
        .addColumn("description", "varchar")
        .addColumn("image_url", "varchar", (col) => col.notNull())
        .execute();

    await db.schema
        .createTable("experience")
        .ifNotExists()
        .addColumn("id", "integer", (col) => col.primaryKey())
        .addColumn("role", "varchar", (col) => col.notNull())
        .addColumn("company", "varchar", (col) => col.notNull())
        .addColumn("location", "varchar", (col) => col.notNull())
        .addColumn("industry", "varchar", (col) => col.notNull())
        .addColumn("start_date", "date", (col) => col.notNull())
        .addColumn("end_date", "date", (col) => col.notNull())
        .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable("project").execute();
    await db.schema.dropTable("experience").execute();
}
